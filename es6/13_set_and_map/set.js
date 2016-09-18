// Set类似于数组，但是没有重复值

// 1.创建Set类型,Set构造函数接受一个数组或者类数组对象
{
    let s = new Set();
    console.log();

    let s2 = new Set([1,1,2,3,4]);
    // 重复的数组项不会出现在Set类型中
    console.log(s2);
}



// 2.size与Set数据项个数
{
    let s = new Set([1,2,3]);
    console.log(s.size);
    s.add(4);
    s.add(5);
    console.log(s.size);
}



// 3.方法  
// add(value)：添加某个值，返回Set结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值
{
    var s = new Set([1,2,3]);
    console.log(s.add(4));
    console.log(s.delete(3));
    console.log(s.has(3));
    s.clear();
    console.log(s);
}



// 4.Set2Array
{
    var s = new Set([1,2,3,4]);
    var arr = Array.from(s);
    console.log(arr);
    console.log(Object.prototype.toString.call(arr));
}



// 5.遍历
// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员
{

}



// 6.WeakSet
// WeakSet结构与Set类似，也是不重复的值的集合。但是，它与Set有两个区别
// 1)WeakSet的成员只能是对象，而不能是其他类型的值
// 2)WeakSet是不可遍历的
//   WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不
//   再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中
//   这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。

// WeakSet.prototype.add(value)：向WeakSet实例添加一个新成员。
// WeakSet.prototype.delete(value)：清除WeakSet实例的指定成员。
// WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在WeakSet实例之中。
{
    let wSet = new WeakSet();
    wSet.add();
    wSet.add([2]);
    console.log(wSet.has([1]));
    console.log(Array.from(wSet));
}



// 7.

