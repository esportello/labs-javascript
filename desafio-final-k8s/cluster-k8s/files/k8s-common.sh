#!/bin/bash

# Set noninteractive mode for apt-get to avoid prompts during package installation
export DEBIAN_FRONTEND=noninteractive

# Kubernetes version
K8S_VER="1.34"

# Disable swap
sudo swapoff -a
sudo sed -i '/swap/d' /etc/fstab

# Load necessary kernel modules for Kubernetes networking
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

# Load necessary kernel modules
sudo modprobe overlay
sudo modprobe br_netfilter

# Set sysctl parameters for Kubernetes networking
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward = 1
EOF

# Apply sysctl parameters without reboot
sudo sysctl --system

# Verify that the necessary kernel modules are loaded and sysctl parameters are set
lsmod | grep br_netfilter
lsmod | grep overlay
sysctl net.bridge.bridge-nf-call-iptables net.bridge.bridge-nf-call-ip6tables net.ipv4.ip_forward

# Install containerd from source
wget -q https://github.com/containerd/containerd/releases/download/v2.3.2/containerd-2.3.2-linux-amd64.tar.gz 
sudo tar Cxzvf /usr/local containerd-2.3.2-linux-amd64.tar.gz
rm -f containerd-2.3.2-linux-amd64.tar.gz

# Create a systemd service file for containerd
wget -q https://raw.githubusercontent.com/containerd/containerd/main/containerd.service
sudo mv containerd.service /usr/lib/systemd/system/containerd.service
sudo systemctl daemon-reload
sudo systemctl enable --now containerd

# Install runc from source
wget -q https://github.com/opencontainers/runc/releases/download/v1.5.0/runc.amd64
sudo install -m 755 runc.amd64 /usr/local/sbin/runc
rm -f runc.amd64

# Install CNI plugins from source
sudo mkdir -p /opt/cni/bin
wget -q https://github.com/containernetworking/plugins/releases/download/v1.9.1/cni-plugins-linux-amd64-v1.9.1.tgz
sudo tar Cxzvf /opt/cni/bin cni-plugins-linux-amd64-v1.9.1.tgz
rm -f cni-plugins-linux-amd64-v1.9.1.tgz

# Generate default containerd config and configure SystemdCgroup
sudo mkdir -p /etc/containerd
sudo containerd config default | sudo tee /etc/containerd/config.toml > /dev/null
sudo sed -i 's/^disabled_plugins = /# disabled_plugins = /g' /etc/containerd/config.toml
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml

# Restart containerd to apply the new configuration
sudo systemctl restart containerd

# Install necessary packages for Kubernetes installation
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg jq -y

# Add Kubernetes apt repository and import the GPG key
curl -fsSL https://pkgs.k8s.io/core:/stable:/v${K8S_VER}/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
sudo chmod 644 /etc/apt/keyrings/kubernetes-apt-keyring.gpg

# Add Kubernetes apt repository
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v'${K8S_VER}'/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list
sudo chmod 644 /etc/apt/sources.list.d/kubernetes.list

# Update package index and install kubelet
sudo apt-get update
sudo apt-get install kubelet kubeadm kubectl bash-completion -y
sudo apt-mark hold kubelet kubeadm kubectl

# Enable and start the kubelet service
sudo systemctl enable --now kubelet

# Restart containerd to apply the new configuration
sudo systemctl restart containerd

# Check installed versions
kubeadm version
kubectl version --client

# Configure bash completion for kubectl and set up an alias for convenience
if [[ -d "/home/vagrant" ]]; then
  echo "source <(kubectl completion bash)" | sudo tee -a /home/vagrant/.bashrc > /dev/null
  echo "alias k=kubectl" | sudo tee -a /home/vagrant/.bashrc > /dev/null
  echo "complete -F __start_kubectl k" | sudo tee -a /home/vagrant/.bashrc > /dev/null
  sudo chown vagrant:vagrant /home/vagrant/.bashrc
fi
