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


### 1. 加速器配置
在 `/etc/docker/daemon.json` 文件中， registry-mirrors 部分，请将代理地址替换为你搭建的 实际地址。

 配置 Docker 加速器

```bash
cat > /etc/docker/daemon.json <"],
  "insecure-registries": ["docker.gh-proxy.com"],
  "exec-opts": ["native.cgroupdriver=systemd"]
}
EOF
```

 重启Docker服务
```bash
systemctl daemon-reload && systemctl restart docker
```
### 2. 拉取测试

>📢 注意事项： 若配置了加速器地址，并且镜像源于 Docker Hub 时，可以无需加上域名前缀，其他镜像源站必须加上前缀。
源于 Docker Hub 镜像地址： cleverest/crproxy 与 adguard/adguardhome ，则

####  1. 直接拉取
```bash
docker pull cleverest/crproxy
docker pull adguard/adguardhome
```
#### 2. 前缀拉去

```bash
docker pull docker.gh-proxy.com/cleverest/crproxy
docker pull docker.gh-proxy.com/adguard/adguardhome

docker pull docker.gh-proxy.com/docker.io/cleverest/crproxy
docker pull docker.gh-proxy.com/docker.io/adguard/adguardhome
```

拉取 非Docker Hub 平台镜像时， 必须加域名前缀，各个知名镜像站拉取测试，如下：

```bash
# Google
docker pull docker.gh-proxy.com/gcr.io/kaniko-project/executor:debug

# GitHub
docker pull docker.gh-proxy.com/ghcr.io/openfaas/queue-worker

# Kubernetes
docker pull docker.gh-proxy.com/k8s.gcr.io/etcd:3.5.7-0

# 新Kubernetes
docker pull docker.gh-proxy.com/registry.k8s.io/kube-apiserver:v1.30.0

# Red Hat
docker pull docker.gh-proxy.com/quay.io/calico/cni

# Microsoft
docker pull docker.gh-proxy.com/mcr.microsoft.com/powershell

# Elastic
docker pull docker.gh-proxy.com/docker.elastic.co/elasticsearch/elasticsearch:8.1.0

# NVIDIA
docker pull docker.gh-proxy.com/nvcr.io/nvidia/cuda:12.1.0-runtime-ubuntu20.04
```