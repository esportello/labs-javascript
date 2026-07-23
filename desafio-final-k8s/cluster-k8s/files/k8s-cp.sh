#!/bin/bash

######## IMPORTANT ########
# Only run this script on the master node of the Kubernetes cluster
###################################################################

# Initialize the Kubernetes master node
sudo kubeadm init --apiserver-advertise-address=192.168.56.110 --pod-network-cidr=192.168.0.0/16

# Configure kubectl for the vagrant user
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

# Calico docs
# https://docs.tigera.io/calico/latest/getting-started/kubernetes/community-tested

# This script is used to install Calico CNI plugin on a Kubernetes cluster.
kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.32.0/manifests/calico.yaml

