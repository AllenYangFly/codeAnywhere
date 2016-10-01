"use strict";

// 二进制数组（ArrayBuffer对象、TypedArray视图和DataView视图）
// 直接操作内存，提高程序的运算效率

// 1.ArrayBuffer对象
var buf = new ArrayBuffer(32);

// 2.DataView视图，为了读写二进制数组，需要读写数组
{
    var buff = new ArrayBuffer(32);
    var dataView = new DataView(buff);
    console.log(dataView.getUint8(0));
}

// 3.TypeArray视图,是一组视图

// Int8Array：8位有符号整数，长度1个字节。
// Uint8Array：8位无符号整数，长度1个字节。
// Uint8ClampedArray：8位无符号整数，长度1个字节，溢出处理不同。
// Int16Array：16位有符号整数，长度2个字节。
// Uint16Array：16位无符号整数，长度2个字节。
// Int32Array：32位有符号整数，长度4个字节。
// Uint32Array：32位无符号整数，长度4个字节。
// Float32Array：32位浮点数，长度4个字节。
// Float64Array：64位浮点数，长度8个字节。

{
    var buff = new ArrayBuffer(12);
    var x1 = new Int32Array(buff);
    x1[0] = 2;
    var x2 = new Uint8Array(buff);
    x2[0] = 5;
    console.log(x1[0]);
}

// 4.方法

// ArrayBuffer.prototype.byteLength
{
    var buff = new ArrayBuffer(32);
    console.log(buff.byteLength);
}

// ArrayBuffer.prototype.slice
{
    var buff = new ArrayBuffer(32);
    var buff2 = buff.slice(10, 15);
    console.log(buff2.byteLength);
}

// ArrayBuffer.isView() 
{
    var buff = new ArrayBuffer(32);
    var x1 = new Uint8Array(buff);
    console.log(ArrayBuffer.isView(buff));
    console.log(ArrayBuffer.isView(x1));
}

// 5.ArrayBuffer2String
{
    // ArrayBuffer转为字符串，参数为ArrayBuffer对象
    var ab2str = function ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    };

    // 字符串转为ArrayBuffer对象，参数为字符串


    var str2ab = function str2ab(str) {
        var buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    };
}

console.log("-----------------");
// 6.TypedArray.prototype.buffer
{
    var buff = new ArrayBuffer(32);
    var x1 = new Uint16Array(buff);
    console.log(ArrayBuffer.isView(x1));
    console.log(x1.buffer);
}

// TypedArray.prototype.byteLength，
// TypedArray.prototype.byteOffset
// TypedArray.prototype.set()
// TypedArray.prototype.subarray()
// TypedArray.prototype.slice() 
// TypedArray.of()
// TypedArray.from()