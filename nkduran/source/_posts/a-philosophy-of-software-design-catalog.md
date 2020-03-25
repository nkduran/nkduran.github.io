---
title: 软件设计的哲学
date: 2020-01-21 11:26:13
tags: 
 - 软件设计
categories: 编程艺术
---

### 目录

1. [简介 Introduction](../../../../2020/02/03/a-philosophy-of-software-design-c1/index.html)

   1.1 如何使用这本书 How to use this book

2. 复杂性的特点 The Nature of Complexity

   2.1 复杂性的定义 Complexity defined

   2.2 复杂性的表现 Symptoms of complexity

   2.3 复杂性的原因 Causes of complexity

   2.4 复杂性的递增性 Complexity is incremental

   2.5 结论 Conclusion

3. 仅是能运行的代码是不够的 Working Code Isn't Enough

   3.1 战术性编程 Tactical programming

   3.2 战略性编程 Strategy programming 

   3.3 投资多少？How much to invest?

   3.4 创业和投资 Startups and investment

   3.5 结论 Conclusion

4. 模块应该是深的 Modules Should Be Deep

   4.1 模块化设计 Modular design

   4.2 接口里有什么 What’s in an interface?

   4.3 抽象 Abstractions

   4.4 深层模块 Deep Modules

   4.5 浅层模块 Shallow Modules

   4.6 Classitis

   4.7 例子：Java和Unix I/O  Example: Java and Unix I/O

   4.8 结论 Conclusion

5. 信息隐藏和泄露 Information Hiding (and Leakage)

   5.1 信息隐藏 Information hiding

   5.2 信息泄露 Information leakage

   5.3 时间分解 Temporal decomposition

   5.4 例子：HTTP服务器 Example: HTTP server

   5.5 例子：太多的类 Example: too many classes

   5.6 例子：HTTP参数处理 Example: HTTP parameter handling

   5.7 例子：HTTP响应中的缺省值 Example: defaults in HTTP response

   5.8 类中的信息隐藏 Information hiding within a class

   5.9 太过分了 Taking it too far

   5.10 结论 Conclusion

6. 通用模块更深入 General-Purpose Modules are Deeper

   6.1 让类具有一定的通用性 Make classes somewhat general-purpose

   6.2 例子：为编辑器存储文本 Example: storing text for an editor

   6.3 更通用的API A more general-purpose API

   6.4 通用性带来更好的信息隐藏 Generality leads to better information hiding

   6.5 问自己的一些问题 Questions to ask yourself

   6.6 结论 Conclusion

7. 不同的层，不同的抽象 Different Layer, Different Abstraction

   7.1 透传方法 Pass-through methods

   7.2 什么时候接口重复是可以的？ When is interface duplication OK?

   7.3 装饰器模式 Decorators

   7.4 接口 vs 实现  Interface versus implementation

   7.5 透传变量 Pass-through variables

   7.6 结论 Conclusion

<!--more-->

8. 降低复杂度 Pull Complexity Downwards

   8.1 例子：编辑器文本类 Example: editor text class

   8.2 例子：配置参数 Examples: configuration parameters

   8.3 太过分了 Taking it too far

   8.4 结论 Conclusion

9. 在一起好还是分开好？ Better Together Or Better Apart?

   9.1 如果信息是共享的就放到一起 Bring together if information is shared

   9.2 如果能够简化接口就放到一起 Bring together if it will simplify the interface

   9.3 放到一起消除重复 Bring together to eliminate duplication

   9.4 将通用代码和专用代码分开 Separate general-purpose and special-purpose code

   9.5 例子：光标插入和选取范围 Example: insertion cursor and selection

   9.6 例子：日志中的单独类 Example: separate class for log

   9.7 例子：编辑器撤销机制 Example: editor undo mechanism

   9.8 分割和连接方法 Splitting and joining methods

   9.9 结论 Conclusion

10. 定义不存在的错误 Define Errors Out Of Existence

    10.1 为什么异常增加了复杂性 Why exceptions add complexity

    10.2 太多的异常 Too many exceptions

    10.3 定义不存在的错误 Define errors out of existence

    10.4 例子：Windows中删除文件 Example: file deletion in Windows

    10.5 例子：Java库中substring方法 Example: Java substring method

    10.6 隐藏异常 Mask exceptions

    10.7 异常聚合 Exception aggregation

    10.8 只是崩溃？ Just crash?

    10.9 设计不存在的特殊情况 Design special cases out of existence

    10.10 太过分了 Taking it too far

    10.11 结论 Conclusion

11. 设计两次 Design it Twice

12. 为什么要写注释？四个借口 Why Write Comments? The Four Excuses

    12.1 好的代码是自我注释型的 Good code is self-documenting

    12.2 我没有时间写注释 I don't have time to write comments

    12.3 注释会过期还会误导别人 Comments get out of date and become misleading

    12.4 所有我看过的注释都没什么用 All the comments I have seen are worthless

    12.5 书写良好的注释带来的好处 Benefits of well-written comments

13. 注释应该描述在代码中体现不明显的内容 Comments Should Describe Things that Aren't Obvious from the Code

    13.1 选取约定 Pick conventions

    13.2 不要复述代码内容 Don't repeat the code

    13.3 低层级的注释让理解更精确 Low-level comments add precision

    13.4 高层级的注释让理解更直观 High-level comments enhance intuition

    13.5 接口文档 interface documentation

    13.6 实现注释：是什么和为什么，而不是怎么实现 Implementation comments: what and why, not how

    13.7 跨模块的设计决策 Cross-module design decisions

    13.8 结论 Conclusion

    13.9 回答13.5节中的问题 Answers to questions from Section 13.5

14. 选择命名 Choosing Names

    14.1 例子：糟糕的命名导致错误 Example: bad names cause bugs

    14.2 建立印象 Create an image

    14.3 命名应该精确 Names should be precise

    14.4 命名要一致 Use names consistently

    14.5 一个不同的意见：Go风格指南 A different opinion: Go style guide

    14.6 结论 Conclusion

15. 先写注释 Write The Comments First

    15.1 后写的注释是糟糕的注释 Delayed comments are bad comments

    15.2 先写注释 Write the comments first

    15.3 注释是设计工具 Comments are a design tool

    15.4 早写的注释更有趣 Early comments  are fun comments

    15.5 早些的注释成本高么？Are early comments expensive?

    15.6 结论 Conclusion

16. 修改已有代码 Modifying Existing Code

    16.1 保持战略 Stay strategic

    16.2 维护注释：保持注释和代码一致 Maintaining comments: keep the comments near the code

    16.3 注释属于代码，而不是提交日志 Comments belong in the code, not the commit log

    16.4 维护注释：避免重复 Maintaining comments: avoid duplication

    16.5 维护注释：检查差别 Maintaining comments: check the diffs

    16.6 更高层级的注释更容易维护 Higher-level comments are easier to maintain

17. 一致性 Consistency

    17.1 一致性的例子 Examples of consistency

    17.2 确保一致性 Ensuring consistency

    17.3 太过分了 Taking it too far

    17.4 结论 Conclusion

18. 代码应该是易理解的 Code Should be Obvious

    18.1 令代码更易理解的事物 Things that make code more obvious

    18.2 令代码更难理解的事物 Things that make code less obvious

    18.3 结论 Conclusion

19. 软件趋势

    19.1 面向对象编程和继承 Object-oriented programming and inheritance

    19.2 敏捷开发 Agile development

    19.3 单元测试 Unit test

    19.4 测试驱动开发 Test-driven development

    19.5 设计模式 Design patterns

    19.6 变量访问方法 Getters and Setters

    19.7 结论 Conclusion

20. 性能设计 Designing for Performance

    20.1 如何考虑性能 How to think about performance

    20.2 修改前评估 Measure before modifying

    20.3 围绕关键路径进行设计 Design around the critical path

    20.4 例子：RAMCloud缓存 An example: RAMCloud Buffers

    20.5 结论 Conclusion

21. 结论 Conclusion