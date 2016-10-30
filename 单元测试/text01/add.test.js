var add = require("./add.js");
var should = require("should");

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
     (add(1, 1)).should.equal(2);
  });
});

