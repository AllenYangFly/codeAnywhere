'use strict';
//记忆 将原来的charCode 换成CodePoint

// unicode表示字符串

var _templateObject = _taggedTemplateLiteral(["标签模板"], ["标签模板"]),
    _templateObject2 = _taggedTemplateLiteral(["allen/a"], ["allen/a"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var str = "₻7"; //由于所表示的超过超过0*FFFF的值，所以打印并不能得到想要的结果


var str2 = "𠮷"; //使用 {} 之后，明确所要表示的字符,正常打印

// Javascript，以UTF-16的格式存储字符，占两个字符,对于那些unicode码大于0xFFFF的字符，会用4个字符存储
// 对于那些需要用四个字节处理的字符，charAt,charCodeAt,length属性都会出错

// str.length  2
// str.charCodeAt(0)  // 返回字符串中第i个字符的unicode码
// str.charAt(0)      // 返回字符创第i个字符

console.log(str2.codePointAt(0).toString(16));

// codePointAt 方法是检测一个字符是检测一个字符是两个字节还是四个字节的最简单的方法


function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit(str2)); // true
console.log(is32Bit(str)); // false


// 从Unicode返回字符串
// ES5 fromeCharCode不能正确返回占四个字节的字符
// Es6 的fromCodePoint可以正常返回
console.log(String.fromCodePoint(0x20BB7));

// 2.字符串遍历
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = "allen"[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _str = _step.value;

    console.log(_str);
  }

  // 3.at()  charAt不能识别编码大于0xFFFF的字符
  // console.log('allen'.at(0));
  // 暂时没有被推广


  // 4.normalize()  字符串标准化
  // NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。
  // NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。
  // NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize方法不能识别中文。）
  // NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

"allen".normalize();

// 5.indexOf  
// 扩充  includes()、startsWith、endsWidth

// includes  包含
// startsWith 以该str开始，返回true
// endsWidth  以str结尾，返回true
console.log("allen".includes("llen"));
console.log("allen".startsWith("all"));
console.log("allen".endsWith("len"));

// 6.repeat()方法   返回重复的字符串
console.log("allen".repeat(2));

// 7.padStart() padEnd() 补齐字符串
// console.log(str.padStart(length,str));
// 还没有实现，ES7规范
// console.log("allen".padStart(10,'aa'));


// 7.模板

// 普通字符串拼接
var num = 1;
var str = '<div>' + num + '</div>';

// 使用es6模板
var str1 = "<div>" + num + "</div>";

// 所有的字符串用"`"包裹,变量使用${}包裹
console.log(str1);

// 8.标签模板
// 紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串

console.log(_templateObject);

// 9.String.raw()  原生方法
console.log(String.raw(_templateObject2));
// 返回一个斜杠都被转义的字符串