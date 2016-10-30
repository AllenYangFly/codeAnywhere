## 定义

    在计算机编程中，单元测试（又称为模块测试, Unit Testing）是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。程序单元是应用的最小可测试部件。在过程化编程中，一个单元就是单个程序、函数、过程等；对于面向对象编程，最小单元就是方法，包括基类（超类）、抽象类、或者派生类（子类）中的方法。

一段时间以来，前端基本上没有单元测试，但是随着Node的突起，前端也开始出现JS的单元测试

## 单元测试的分类 BDD、TDD

TDD为测试驱动开发，

BDD为行为驱动开发,


## mocha框架

### 安装

``` 
    sudo npm install mocha
```

    http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html

    Mocha是一个基于node.js和浏览器的集合各种特性的Javascript测试框架，并且可以让异步测试也变的简单和有趣。Mocha的测试是连续的，在正确的测试条件中遇到未捕获的异常时，会给出灵活且准确的报告


    一、describe块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。
    it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。

    二、Mocha在describe块之中，提供测试用例的四个钩子：before()、after()、beforeEach()和afterEach()


### should.js断言库

    虽然Node也有自己的断言库，但是没有should.js的表现力


    http://shouldjs.github.io/