---
sidebar_position: 3
---


# 使用示例


## GitHub的网站的代理

### 使用方法

将 GitHub 文件链接中的域名替换为本站域名即可，例如：

1. 所要代理的链接
```bash
https://raw.githubusercontent.com/username/repo/main/file.txt
```
### 如何进行代理

1. 替换Github域名进行代理
```bash
 https://example.com/raw.githubusercontent.com/username/repo/main/file.txt
```

2. 直接在源链接加入你所部署的代理网站域名
```bash
https://example.com/https://raw.githubusercontent.com/username/repo/main/file.txt
```


## Docker镜像加速

假设本项目使用`gh.example.com`作为域名

### 1. 加速器配置
在 `/etc/docker/daemon.json` 文件中， registry-mirrors 部分，请将代理地址替换为你搭建的 实际地址。

 配置 Docker 加速器

```bash
cat > /etc/docker/daemon.json <"],
  "insecure-registries": ["gh.example.com"],
}
EOF
```

 重启Docker服务
```bash
systemctl daemon-reload && systemctl restart docker
```
### 2. 拉取测试

>📢 注意事项： 请注意target配置的目标
源于 Docker Hub 镜像地址： cleverest/crproxy 与 adguard/adguardhome ，则

####  1. 直接拉取
```bash
docker pull cleverest/crproxy
docker pull adguard/adguardhome
```
#### 2. 前缀拉取 (以"gh.example.com"演示)

```bash
docker pull gh.example.com/wjqserver/ghproxy
docker pull gh.example.com/adguard/adguardhome

docker pull gh.example.com/docker.io/wjqserver/ghproxy
docker pull gh.example.com/docker.io/adguard/adguardhome

# Google
docker pull gh.example.com/gcr.io/kaniko-project/executor:debug

# GitHub
docker pull gh.example.com/ghcr.io/openfaas/queue-worker

# Kubernetes
docker pull gh.example.com/k8s.gcr.io/etcd:3.5.7-0

# 新Kubernetes
docker pull gh.example.com/registry.k8s.io/kube-apiserver:v1.30.0

# Red Hat
docker pull gh.example.com/quay.io/calico/cni

# Microsoft
docker pull gh.example.com/mcr.microsoft.com/powershell

# Elastic
docker pull gh.example.com/docker.elastic.co/elasticsearch/elasticsearch:8.1.0

# NVIDIA
docker pull gh.example.com/nvcr.io/nvidia/cuda:12.1.0-runtime-ubuntu20.04
```