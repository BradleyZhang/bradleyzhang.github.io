+++
draft = true
date = 2026-07-11T17:55:03+08:00
title = ""
description = ""
slug = ""
authors = []
tags = []
categories = []
externalLink = ""
series = []
toc=true
+++

目的 ：把应用逻辑和数据库逻辑解耦和

参考：[The Repository pattern in Go: a painless way to simplify your service logic | Three Dots Labs blog](https://threedots.tech/post/repository-pattern-in-go/)

> The idea of using the repository pattern is:  
> 使用仓储模式的核心思想是：

> **Let’s abstract our database implementation by defining the interaction with it through an interface.** **You need to be able to use this interface for any database implementation: that means it should be free of any implementation details of any specific database.**  
> 让我们通过定义与数据库交互的接口来抽象化数据库实现。你需要能够将这个接口用于任何数据库实现：这意味着它不应包含任何特定数据库的实现细节。

例子：

数据模型 Task ，对各种 数据库/存储方式 通用

TaskRepository interface 像是Task图书馆的管理员，定义操作，声明数据模型的方法（CRUD）

taskFileRepository 基于File（JSON）的TaskRepository的一个具体实现，实现interface要求的函数

之后若需要换到其他数据库，指需要写一个 比如 taskSQLRepository即可

参考 [Repository Design Pattern - GeeksforGeeks](https://www.geeksforgeeks.org/system-design/repository-design-pattern/)
