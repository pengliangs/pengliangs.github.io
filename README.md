中文文档：http://jekyllcn.com 或 https://www.jekyll.com.cn/
英文文档：https://jekyllrb.com/

> ### 什么是Jekyll？
&emsp; Jekyll 是一个简单的博客形态的静态站点生产机器。它有一个模版目录，其中包含原始文本格式的文档，通过一个转换器（如 Markdown）和我们的 Liquid 渲染器转化成一个完整的可发布的静态网站，你可以发布在任何你喜爱的服务器上。Jekyll 也可以运行在 GitHub Page 上，也就是说，你可以使用 GitHub 的服务来搭建你的项目页面、博客或者网站，而且是完全免费的。

> ### 为什么学习使用Jekyll？
&emsp; 这段时间准备自己搭建应该自己的博客，在之前就一直想搭建域名，服务器都准备好了但是一想到后期维护各方面就一直没有动手，今天无意中发现 “静态网址生成技术” 一下被吸引了；很多大牛都是通过这种方式来搭建自己的博客，简单易维护，主要还是免费哈哈哈哈；

&emsp; 一开始我是使用 “为知笔记” 做记录的在使用过程中丢失了好几篇笔记去官网找客服电话没找到就放弃了然后转到了 “码云”，码云可以说是中国的GitHub 也支持[Jekyll、Hugo、Hexo 生成自己的静态网页](https://gitee.com/help/articles/4136#article-header0) ，我这里使用的是[GitHub Pages](https://pages.github.com/) 对我的blog进行托管(由于GitHub是国外的网络可能会不是很稳定)；

&emsp; Pages主要用于托管静态网页，对开源项目进行描述；

> ### 快速上手
#### 1.准备环境

* linux
* git
我这里的是centos7

#### 2.创建项目
*  在GitHub上创建一个空项目：jetyll-demo
* 在创建好的项目中启动 GitHub Pages
* 然后将本地仓库和远程仓库连接(可以直接克隆 或 者将本地的推送上去)

#### 3.创建设置文件

在项目根目录下创建应该_config.yml文件
```
jetyll-demo
├── _config.yml
```
#### 4.创建模板文件

在跟目录下创建一个 _layouts 存放模板文件，在 _layouts下创建一个default.html 作为博客默认模板
```
jetyll-demo
├── _config.yml
├── _layouts
|   ├── default.html
```
#### 5.创建文章
在跟目录下创建一个 _posts 用于存放文章。该目录下的文件必须以约定的格式命名: YEAR-MONTH-DAY-title.MARKUP，数据和标记语言都是根据文件名来确定的。

```
jetyll-demo
├── _config.yml
├── _layouts
|   ├── default.html
── _posts
|   ├── 2007-10-29-hello-word.md
```
在_posts 下创建了我的第一篇blog文章

```
---
layout:default
title:hello,jekyll
---

<h2>{{ page.title }}</h2>
<p>my first blog</p>
# makdown

```

#### Jekyll 的 YUML头

&emsp;任何只要包含 YAML 头信息的文件在 Jekyll 中都能被当做一个特殊的文件来处理。头信息必须在文件的开始部分，并且需要按照 YAML 的格式写在两行三虚线之间。下面是一个基本的例子：
```
---
layout:default
title:hello,jekyll
---
```

&emsp;在这两行的三虚线之间，你可以设置预定义的变量（下面这个例子可以作为参考），甚至创建一个你自己定义的变量。这样在接下来的文件和任意模板中或者在包含这些页面或博客的模板中都可以通过使用 Liquid 标签来访问这些变量。

#### 6.创建首页
在个目录创建一个index.html

```
jetyll-demo
├── _config.yml
├── _layouts
|   ├── default.html
├── _posts
|   ├── 2007-10-29-hello-word.md
├── index.html
```
**index.html 内容**
```
---
layou: default
title: pengliang's blog
---

<h2> {{page.title}}</h2>
<p> pengliang  index.html </p>
<ul>
 {% for post in site.posts %}
    <li>
        {{ post.date | date_to_string}}
        <a href="{{ site.baseur }}{{post.url}}">
          {{ post.title}}
        </a>
    </li>
 {% endfor %}
</ul>

```
还是一样先声明YML头，然后获取title信息和博客列表

#### 7.发布内容
* 将当前写好的推送到GitHub
* 启动 pages (选择当前仓库 settings -> 找到GitHub Pages)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122233435107.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)

选择对应的分支保存，顶部会出现提示信息 GitHub Pages source saved.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181123004950902.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181123005117287.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)

红色标记位置就是映射出去的地址，我们通过这个地址就可以访问到当前跟项目下的index.html

**7.1设置域名**

pengliangs.github.io 是 GitHub提供的如果想设置自己接的域名，在Custom domain进行设置然后将域名解析到 pengliangs.github.io 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181123005356516.png)

<font color=#ed4014> 注意:  在Jekyll 中引用变量时两个大括号左右必须要有一个空格</font>

### 8.查看初步效果

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181123110127501.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)


> ### Jekyll 安装
#### **1.事先准备**

安装 Jekyll 相当简单，但是你得先做好一些准备工作。开始前你需要确保你在系统里已经有如下配置。

* Ruby（including development headers, Jekyll 2 需要 v1.9.3 及以上版本，Jekyll 3 需要 v2 及以上版本）
* RubyGems
* Linux, Un ix, or Mac OS X
* NodeJS, 或其他 JavaScript 运行环境（Jekyll 2 或更早版本需要 CoffeeScript 支持）。
* Python 2.7（Jekyll 2 或更早版本）

#### 2.安装Ruby

参考博客：https://segmentfault.com/a/1190000012468796

Jekyll是基于Ruby的，所以搭建Jekyll之前必须确保Ruby正常安装 

*  **Ruby与RubyGems的关系**

&emsp;Ruby是一种脚本语言，ruby的其中一个“程序”叫RubyGems，简称 gem(ruby 1.9.2及其以上就已经默认安装了ruby gem的，所以无需再次手动安装)；
&emsp;另外还有一个ruby bunder(rails框架中用来管理项目 的gem的，叫bundle)，在windows中搭建jekyll，需要安装完ruby后用gem 安装下bunder


* **Jekyll与python的关系**

Jekyll3.0之前，有一个语法高亮插件"Pygments"，这玩意是基于python的，所以才会有各种教程里面都说搭建Jekyll之前需要python环境

但是,请注意 jekyll3.0以后，语法高亮插件已经默认改成了 “rouge‘ 而它是基于ruby的，也就是说 现在搭建Jekyll,我们完全不必要再安装python 这样可以减少很大一部分工作量

**2.1安装 [ruby install](https://github.com/postmodern/ruby-install)**

我是使用 ruby install 工具来安装ruby 它会下载ruby需要的依赖及源码包进行编译安装，可以指定版本默认安装最新稳定版

**官网安装步骤:**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181123115256172.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181123115010720.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)

**2.2 安装Ruby**

可以指定版本不写的话默认安装最新的稳定版本

![在这里插入图片描述](https://img-blog.csdnimg.cn/201811231152192.png)
这个过程会稍微慢一些，会安装ruby的依赖包及源码的编译
![在这里插入图片描述](https://img-blog.csdnimg.cn/2018112311545419.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)

**错误1：** 

<font color=red>!!! Compiling ruby 2.5.3 failed! !!! Compiling ruby 2.5.3 failed!</font>

&emsp;安装过程中出现编译失败，首先想到的是gcc版本过低么然后去官网查看安装2.5.3的安装要求没有找到，打算升级gcc做尝试前两天刚升级公司服务器的gcc需要几个小时就放弃了，尝试将版本降低 success

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181123145635258.png)

* **替换ruby镜像**
ruby镜像默认是国外的需要翻墙

```
#添加新的镜像移除默认镜像
$ gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
#查看当前镜像列表
$ gem sources -l
#清空源缓存
$ gem sources -c
#更新源缓存
$ gem sources -u
```

### 3.安装Jekyll

```
$ gem install jekyll
```

**错误2：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181123153918260.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)

&emsp;这个错误我查了好久资料都没有解决，都说缺少 ruby-devel 实际上是g++没有安装这是个比较低价的错误
切记安装前先检查gcc 和g++是否安装，在centos 7中g++ 叫 gcc-g++

```
$ gcc -v
$ g++ -v
```
```
# yum install gcc
# yum install gcc-g++
```
想升级请参考  [Centos7升级gcc学习笔记](https://www.cnblogs.com/highway-9/p/5628852.html)

**3.1 验证jekyll是否安装成功**

验证jekyll是否安装成功，查看当前jekyll版本 可以通过 -h / --help查看帮助

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181124220908266.png)

**3.2 创建一个jekyll模板**
使用 new 命令创建一个模板
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181124221508760.png)

**错误3：**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181125140222776.png)
进入创建好的my-blog运行jekyll命令异常，导致错误原因是没有安装 bundler，Jekyll中的主题是通过bundler进行管理的

```
# gem install bundler
```
将原有my-blog删除，重新生成 jekyll new my-blog 问题解决

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181125140745185.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)

可以通过 jekyll serve启动一个服务对当前站点进行预览；

**3.3 安装Jekyll总结：**

* 检查gcc、g++是否已安装
* 安装ruby
* 通过gem 安装 Jekyll和bundler



### 4.定制样式

**4.1 查看默认主题存放位置**

&emsp;使用Jekyll new 创建的博客默认使用的是minima主题，可以通过**bundle show**命令查看模板名称及位置

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181126145406664.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)

输入主题名称获取主题路径
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181126145600614.png)



**4.2下载切换主题**

&emsp;切换默认主题，社区提供了很多主题样式可以通过bundle安装使用，在 [RubyGems - Ruby China](https://gems.ruby-china.com/) 中可以搜索 jekyll-theme 关键字获取模板
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181126144322587.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)

1.修改 Gemfile 文件中的 gem "minnima" 为要下载的主题名称

![在这里插入图片描述](https://img-blog.csdnimg.cn/2018112614451484.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)

2.修改 _config.yml

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181126144707958.png)

3.执行

```
# bundle install
```


### 5.托管到GitHub Pages
&emsp;直接使用Jekyll new生成应该blog目录是不完整的默认使用的是主题而主题存放在不同的目录下边，直接推送到GitHub仓库开启Pages是肯定没有样式的，我们可以把主题下面的文件copy到当前的blog中组成一个完整的Jekyll项目然后推送上去

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181126100004861.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQzNDc3,size_16,color_FFFFFF,t_70)

**5.1路径问题**
在本地启动 Jekyll serve 预览没有问题但是发布到gh-pages上后样式图片等 404 找不到 尴尬说好的组合成一个完整的jekyll项目就好了的，导致原因是gh-pages的跟目录是以 /project-name 生成的

解决办法：使用绝对路径
1.使用 site.github.url 
2.直接将仓库名称修改为gh-pages 站点名称如: pengliangs.github.io (这种方式就相当与将工程名称省略放在主页了一样)

点击进入我的 [blog站点](https://github.com/pengliangs/pengliangs.github.io)

