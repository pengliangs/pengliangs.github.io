---
layout: post
title:  "centos7安装node"
date:   2018-12-10
articleType: 0
author: "彭亮"
categories: "node"
tags: "centos node"
---

安装版本：10.13.0

### 1.源码安装必要编译软件
gcc gcc-c++

```
# gcc -v
# g++ -v
```
node10.13.0 要求 gcc版本号大于4.9.4否则编译过程中可能会出现 **C++ Compiler too old, need g++ 4.9.4 or clang**，如果版本过低请参考 [Centos7升级gcc学习笔记](https://www.cnblogs.com/highway-9/p/5628852.html)

<!--more-->

### 2.下载node包
```
# cd /usr/local/src
# wget https://npm.taobao.org/mirrors/node/v10.13.0/node-v10.13.0.tar.gz
```

### 3.解压
```
# tar zxvf node-v10.13.0.tar.gz
# cd node-v10.13.0
```

### 4.开始编译安装

```
# ./configure
# make
# make install
```
make时间会比较长一点半个小时左右，只能耐心等待了

### 5.验证是否安装成功
![在这里插入图片描述]({{ site.path.images }}/post/code1_centos_node_20181119142508413.png)