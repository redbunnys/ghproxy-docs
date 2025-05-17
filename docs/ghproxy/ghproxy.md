---
sidebar_position: 1
---

# GHProxy

![GitHub Release](https://img.shields.io/github/v/release/WJQSERVER-STUDIO/ghproxy?display_name=tag&style=flat)
![pull](https://img.shields.io/docker/pulls/wjqserver/ghproxy.svg)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/wjqserver/ghproxy/latest)
![GitHub go.mod Go version](https://img.shields.io/github/go-mod/go-version/WJQSERVER-STUDIO/ghproxy)
[![Go Report Card](https://goreportcard.com/badge/github.com/WJQSERVER-STUDIO/ghproxy)](https://goreportcard.com/report/github.com/WJQSERVER-STUDIO/ghproxy)


支持 Git clone、raw、releases的 Github 加速项目, 支持自托管的同时带来卓越的性能与极低的资源占用(Golang和HertZ带来的优势), 同时支持多种额外功能

## 项目说明

### 项目特点

- ⚡ **基于 Go 语言实现，跨平台的同时提供高并发性能**
- 🌐 **使用字节旗下的 [HertZ](https://github.com/cloudwego/hertz) 作为 Web 框架**
- 📡 **使用 [Touka-HTTPC](https://github.com/satomitouka/touka-httpc) 作为 HTTP 客户端**
- 📥 **支持 Git clone、raw、releases 等文件拉取**
- 🎨 **支持多个前端主题**
- 🚫 **支持自定义黑名单/白名单**
- 🗄️ **支持 Git Clone 缓存（配合 [Smart-Git](https://github.com/WJQSERVER-STUDIO/smart-git)）**
- 🐳 **支持 Docker 部署**
- 🐳 **支持自托管**
- ⚡ **支持速率限制**
- 🔒 **支持用户鉴权**
- 🐚 **支持 shell 脚本多层嵌套加速**





### 项目相关

[DEMO](https://ghproxy.1888866.xyz)

[TG讨论群组](https://t.me/ghproxy_go)

[相关文章](https://blog.wjqserver.com/categories/my-program/)

[项目文档](https://github.com/WJQSERVER-STUDIO/ghproxy/blob/main/docs/menu.md)

### 使用示例

参看使用[使用示例](./proxy.md)

## 部署说明

参看[部署教程](./install.md)


## 配置说明

参看[项目文档](https://github.com/WJQSERVER-STUDIO/ghproxy/blob/main/docs/config.md)

### 前端页面

参看[配置说明](./config.md)

## 项目简史

**本项目是[WJQSERVER-STUDIO/ghproxy-go](https://github.com/WJQSERVER-STUDIO/ghproxy-go)的重构版本,实现了原项目原定功能的同时,进一步优化了性能**
关于此项目的详细开发过程,请参看Commit记录与[CHANGELOG.md](https://github.com/WJQSERVER-STUDIO/ghproxy/blob/main/CHANGELOG.md)

- v3.0.0 迁移到HertZ框架, 进一步提升效率
- v2.4.1 对路径匹配进行优化
- v2.0.0 对`proxy`核心模块进行了重构,大幅优化内存占用
- v1.0.0 迁移至本仓库,并再次重构内容实现
- v0.2.0 重构项目实现

## LICENSE

本项目使用WJQserver Studio License 2.0 [WJQserver Studio License 2.0](https://wjqserver-studio.github.io/LICENSE/LICENSE.html)

在v2.3.0之前, 本项目使用WJQserver Studio License 1.2

在v1.0.0版本之前,本项目继承于[WJQSERVER-STUDIO/ghproxy-go](https://github.com/WJQSERVER-STUDIO/ghproxy-go)的APACHE2.0 LICENSE VERSION

## 赞助

如果您觉得本项目对您有帮助,欢迎赞助支持,您的赞助将用于Demo服务器开支及开发者时间成本支出,感谢您的支持!

为爱发电,开源不易

爱发电: https://afdian.com/a/wjqserver

USDT(TRC20): `TNfSYG6F2vkiibd6J6mhhHNWDgWgNdF5hN`

### 捐赠列表

| 赞助人    |金额|
|--------|------|
| starry | 8 USDT (TRC20)   |

