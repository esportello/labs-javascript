#!/bin/bash

# Define the path to the SSH keys
KEY_PATH='/vagrant/files'

# Copying SSH keys
sudo cp $KEY_PATH/k8s /root/.ssh/id_rsa
sudo cp $KEY_PATH/k8s.pub /root/.ssh/id_rsa.pub
sudo cp $KEY_PATH/k8s.pub /root/.ssh/authorized_keys
sudo chmod 400 /root/.ssh/id_rsa*
sudo cat /root/.ssh/id_rsa.pub >> /home/vagrant/.ssh/authorized_keys

# Setting hosts
HOSTS=$(head -n7 /etc/hosts)
echo -e "$HOSTS" > /etc/hosts
echo '192.168.56.110 k8s-control-plane' >> /etc/hosts
echo '192.168.56.120 k8s-node-01' >> /etc/hosts
echo '192.168.56.130 k8s-node-02' >> /etc/hosts
