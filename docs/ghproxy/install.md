---
sidebar_position: 2
---

# 部署教程

## 二进制部署

## 配合Smart-Git

后续更新

## 无Smart-Git

**! 注意：** 
一键脚本依赖于`systemd`

一键部署脚本:
```bash
wget -O install.sh https://raw.githubusercontent.com/WJQSERVER-STUDIO/ghproxy/main/deploy/install.sh && chmod +x install.sh &&./install.sh
```

## Docker-Cli部署

终端直接输入

1. 创建`data`文件路径
```bash
mkdir -p /data/ghproxy/log
mkdri -p /data/ghproxy/config
```
2. 终端输入
```bash
docker run -p 7210:8080 -v ./ghproxy/log/run:/data/ghproxy/log -v ./ghproxy/log/caddy:/data/caddy/log -v ./ghproxy/config:/data/ghproxy/config  --restart always wjqserver/ghproxy
```
>直接Cli部署是无`Smart-Git`,如果需要请参考下面教程

## 使用Docker-Compose进行部署

> 使用Docker-Compose编排进行部署, 首先您需要确认您已安装Docker组件, 若未安装请参看,[点击进入Docker官网](https://docs.docker.com/get-started/get-docker/)

### 1. 查看Docker环境
```bash
docker -v
```

### 2. 创建文件
此段以此文件夹进行演示

```bash
mkdir -p /root/data/docker_data/ghproxy
cd /root/data/docker_data/ghproxy
```

## 配合Smart-Git

### 1. 创建`docker-compose.yml`文件

```bash
touch docker-compose.yml
```

### 2.修改`docker-compose.yml`文件

```bash
version: '3.9'
services:

    ghproxy:
        image: 'wjqserver/ghproxy:latest'
        restart: always
        volumes:
            - './ghproxy/log:/data/ghproxy/log'
            - './ghproxy/config:/data/ghproxy/config'
        ports:
            - '7210:8080' # : 前的端口您可自行修改

            
    smart-git:
        image: 'wjqserver/smart-git:latest'
        restart: always
        volumes:
            - './smart-git/log:/data/smart-git/log'
            - './smart-git/config:/data/smart-git/config'
            - './smart-git/repos:/data/smart-git/repos'
            - './smart-git/db:/data/smart-git/db'
```

### 3.修改`/root/data/docker_data/ghproxy/ghproxy/config/config.toml`文件以启用Smart-Git连接器


修改配置文件中的`[gitclone]`模块的配置

- mode设置为"cache"
- smartGitAddr设置为"http://smart-git:8080"
- ForceH2C按照需求配置


```bash
[gitclone]
mode = "cache" # bypass / cache 运行模式, cache模式依赖smart-git
smartGitAddr = "http://smart-git:8080" # smart-git组件地址
ForceH2C = false # 强制使用H2C连接(可配置为true)
```

### 4. 修改`/root/data/docker_data/ghproxy/smart-git/config/config.toml`(可选)

可根据需求修改`[cache]`配置块内的配置

```bash
[server]
host = "0.0.0.0" # 监听地址
port = 8080  # 监听端口
baseDir = "/data/smart-git/repos" # 缓存文件夹

[log]
logfilepath = "/data/smart-git/log/smart-git.log"  # 日志存储位置
maxlogsize = 5 # MB
level = "info" # dump, debug, info, warn, error, none

[Database]
path = "/data/smart-git/db/smart-git.db" # 数据库存储位置

[cache]
expire = "1h" # 缓存过期时间
expireEx = "10m" # 过期延长时间(当hash检查后发现未过期, 增加的时间)
```

### 5. 启动容器

```bash
docker compose up -d
```

启动成功后, 反代`:7210`即可

## 无Smart-Git


### 1. 创建`docker-compose.yml`文件

```bash
touch docker-compose.yml
```

### 2. 修改`docker-compose.yml`文件

```bash
version: '3.9'
services:

    ghproxy:
        image: 'wjqserver/ghproxy:latest'
        restart: always
        volumes:
            - './ghproxy/log:/data/ghproxy/log'
            - './ghproxy/config:/data/ghproxy/config'
        ports:
            - '7210:8080' # : 前的端口您可自行修改

```
### 3. 启动容器

```bash
docker compose up -d
```

启动成功后, 反代`:7210`即可



## 修改前端主题


目前拥有主题
- bootstrap
- nebula
- mino
- design
- classic
- metro

修改`config.toml`配置文件,找到 `[pages]`模块配置

```bash
[pages]
theme = "nebula"  #此处修改主题文件的名称
```