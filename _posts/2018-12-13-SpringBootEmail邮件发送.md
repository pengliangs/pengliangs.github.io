---
layout: post
title:  "spring boot email 邮件发送"
date:   2018-12-03
articleType: 0
author: "彭亮"
categories: "SpringBoot"
tags: "SpringBoot"
---
<!--more-->
说起发送邮件我们经常听到SMTP、POP3、IMAP协议 他们在邮件发送过程中都做了些什么了，下面简单的介绍一下

**SMTP：** 简单邮件传输协议 (Simple Mail Transfer Protocol, SMTP) 是在Internet传输email的事实标准。负责底层的邮件系统将邮件从一台机器传至另一台机器 也就是邮件的发送。

**POP3：** 全名为“Post Office Protocol - Version 3”，即“邮局协议版本3”。是TCP/IP协议族中的一员，由RFC1939 定义。本协议主要用于支持使用客户端远程管理在服务器上的电子邮件。提供了SSL加密的POP3协议被称为POP3S。
smtp发送邮件到服务器，电子邮件客户端调用邮件客户机程序以连接服务器，并下载所有未阅读的电子邮件。

**IMAP：** 跟POP一样主要负责下载查看邮件等，IMAP协议克服了POP协议的一些缺点，优于pop协议

SMTP是 “推” 的操作，POP3/IMAP 是 “拉” 的操作
<!--more-->

* 参考博客：

https://blog.csdn.net/u012702547/article/details/79494474 

https://baijiahao.baidu.com/s?id=1590529429501808795&wfr=spider&for=pc

* demo地址：

https://github.com/pengliangs/my-spring-demo/tree/master/spring-boot-email

启动项目访问：http://localhost:8080 查看当前的小demo

![在这里插入图片描述]({{ site.path.images }}/post/spring_boot_email_20181213_demo.png)

# 使用Spring Boot发送邮件

这里使用的是qq邮箱进行作为邮箱服务器

### 使用QQ邮箱准备工作

1.进入qq邮箱进入邮箱设置

![在这里插入图片描述]({{ site.path.images }}/post/spring_boot_email_20181213_step1.png)

2.点击账户选项卡

![在这里插入图片描述]({{ site.path.images }}/post/spring_boot_email_20181213_step2.png)

3.找到POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务 开启 POP3/SMTP服务

![在这里插入图片描述]({{ site.path.images }}/post/spring_boot_email_20181213_step3.png)


https://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=1001256

### 开始发送邮件

**1、添加依赖**

这里使用的版本是2.x

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>
```

**2、添加配置参数**
```yaml
spring:
  mail:
    host: smtp.qq.com #邮箱服务地址
    username: xxxx@qq.com #发送人
    password: wrbsddwshxwf #qq邮箱密码是发送方的授权码
    properties:
      # 启动SSL时的配置
      mail.smtp.socketFactory.class: javax.net.ssl.SSLSocketFactory
      mail.smtp.socketFactory.fallback: false
      mail.smtp.socketFactory.port: 465
```
**3、开始编码**

* 发送一个简单的文本邮件

```java
@Test
public void sendSimpleEmailTest() {
    SimpleMailMessage msg = new SimpleMailMessage();
    //发送人
    msg.setFrom("1427985322@qq.com");
    //收件人
    msg.setTo("2874267468@qq.com");
    //主题
    msg.setSubject("测试邮件发送,sendSimpleEmailTest");
    //主题内容
    msg.setText("https://pengliangs.github.io");
    javaMailSender.send(msg);
}
```
* 发送一个带有html格式邮件

```java
@Test
public void sendHtmlEmailTest() throws MessagingException {
    MimeMessage message = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);
    helper.setFrom("1427985322@qq.com");
    helper.setTo("2440329859@qq.com");
    helper.setSubject("测试邮件发送,sendHtmlEmailTest");
    helper.setText("<div style='width:500px;height:500px;text-align: center;'>" +
            "<h1>我的个人博客</h1>" +
            "<p>https://pengliangs.github.io</p>" +
            "</div>", true);
    javaMailSender.send(message);
}
```

* 发送一个带有附件邮件

```java
@Test
public void sendAnnexEmailTest() throws MessagingException {
    MimeMessage message = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);
    helper.setFrom("1427985322@qq.com");
    helper.setTo("2440329859@qq.com");
    helper.setSubject("测试带附件的邮件");
    helper.setText("带附件的邮件内容");

    FileSystemResource file = new FileSystemResource(new File("src/main/resources/static/img/gg.jpg"));
    //加入邮件
    helper.addAttachment("图片.jpg", file);
    javaMailSender.send(message);
}
```

* 发送一个模板邮件

```java
 @Test
public void sendTemplateMailTest() throws MessagingException, IOException, TemplateException {
    MimeMessage message = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);
    helper.setFrom("1427985322@qq.com");
    helper.setTo("2440329859@qq.com");
    helper.setSubject("测试模板邮件");

    Map<String, Object> model = new HashMap<>();
    model.put("title", "来自远方的信件");
    model.put("content","这是我的博客：https://pengliangs.github.io");
    Template template = freeMarkerConfigurer.getConfiguration().getTemplate("email-template.html");
    String html = FreeMarkerTemplateUtils.processTemplateIntoString(template, model);
    helper.setText(html, true);
    javaMailSender.send(message);
}
```
