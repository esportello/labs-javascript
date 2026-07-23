#!/bin/bash

## Valores que chegarão da AWS Secrets Manager - minu-kubescalers-secrets

k8sClusters="minu-dev2;minu-caixa-dev;minu-hmg;minu-caixa-hmg;minu-dev-sandbox"
AClusters="xewards-dev;caixa-dev;xewards-hmg;caixa-hmg;sirius"
APublicK="xuxu-dev;beleza-dev;morfetico-hmg;laaaahele-hmg;caixinhadefosforo"
APrivateK="123;456;789;000;999"
AProjectK="xablau;trem;veio;soumacoisinha;ehrapidinho"

## Transformando os dados em arrays substituindo ";" por "espaço"

k8sClusters=( ${k8sClusters//;/ } ) 
AClusters=( ${AClusters//;/ } ) 
APublicK=( ${APublicK//;/ } ) 
APrivateK=( ${APrivateK//;/ } ) 
AProjectK=( ${AProjectK//;/ } ) 

## Variáveis Genéricas

index=-1
msg=""

## Definição de qual cluster (ambiente) será o escopo da execução das atividades

currentK8sCluster=$(kubectl config current-context | sed 's/.*\///g')

## Definindo os valores das variáveis de ambiente dos clusters K8s e Atlas (Mongo)

for i in "${!k8sClusters[@]}"; do
    if [[ "${k8sClusters[$i]}" == "$currentK8sCluster" ]]; then
    index="$i"
    fi
done

if [[ "$index" -eq -1 ]]; then
  msg="Erro: Cluster Kubernetes indefinido"
  echo $msg
  exit 1
fi

echo "Valores das variáveis:"
echo "Cluster Kubernetes onde sera executado o scale (DOWN/UP) dos PODs ==> ${k8sClusters[$index]}"
echo "Cluster MongoDB (Atlas) onde sera executado o scale (DOWN/UP) dos bancos ==> ${AClusters[$index]}"
echo "Valor da chave Mongo ATLAS PUBLIC KEY ==> ${APublicK[$index]}"
echo "Valor da chave Mongo ATLAS PRIVATE KEY ==> ${APrivateK[$index]}"
echo "Valor da chave Mongo PROJECT ==> ${AProjectK[$index]}"
