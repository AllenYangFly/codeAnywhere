// add的测试
var add = require("./add.js");
var should = require('should');

// 测试脚本里面应该包括一个或多个describe块，每个describe块应该包括一个或多个it块
describe('加法函数测试', function() {
    it('1加1应该等于', function() {
        
    });
});

// 一、describe块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。
// it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。

// 二、Mocha在describe块之中，提供测试用例的四个钩子：before()、after()、beforeEach()和afterEach()
describe('hooks', function() {

  before(function() {
    // 在本区块的所有测试用例之前执行
  });

  after(function() {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
  });

  afterEach(function() {
    // 在本区块的每个测试用例之后执行
  });

  // test cases
});


// 三、only
descritbe("only测试",function() {
    it.only('1 加 1 应该等于 2', function() {
        
    });
});

// 四、mocha init dir 
// 浏览器查看 