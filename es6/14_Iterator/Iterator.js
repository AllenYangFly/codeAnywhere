// 一个数据结构只要具有Symbol.iterator属性
// ES6中有类数据结构，原生具有Itertor接口。数组，类数组对象，Set与Map

// 1.数组的Iterator,通过数组实例的Symbol.iterator属性
{
    let arr = ['a', 'b', 'c'];
    let iter = arr[Symbol.iterator]();
    console.log(iter.next());
}


// 2.自定义对象,部署iterator
{
    class RangeIterator {
      constructor(start, stop) {
        this.value = start;
        this.stop = stop;
      }

      [Symbol.iterator]() { return this; }

      next() {
        var value = this.value;
        if (value < this.stop) {
          this.value++;
          return {done: false, value: value};
        } else {
          return {done: true, value: undefined};
        }
      }
    }

    function range(start, stop) {
      return new RangeIterator(start, stop);
    }

    for (var value of range(0, 3)) {
      console.log(value);
    }
}


// 3.调用Iterator接口的场合
{
    // for...of
    // Array.from()
    // Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
    // Promise.all()
    // Promise.race()
}

// 4.字符串的Iterator
{
    let str = "allen";
    let arr = [...str];
    // 调用Symbol.iterator方法返回一个遍历器对象，在这个遍历器上可以调用next方法，实现对于字符串的遍历
    let arr2 = str[Symbol.iterator]();
    console.log(arr);
    console.log(arr2.next());
}


// 5.for..of
// 一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。

// 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
// for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
// 某些情况下，for...in循环会以任意顺序遍历键名。



