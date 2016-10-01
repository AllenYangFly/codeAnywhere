'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sum = sum;
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

// 可以使用as重命名
function sum(a, b) {
    return a + b;
}

exports.fname = firstName;
exports.lname = lastName;
exports.year = year;