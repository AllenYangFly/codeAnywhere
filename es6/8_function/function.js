// 1.参数默认值
{
    function add (a=1,b=2) {
        console.log(a+b);
    }
    add(4,5);    
}


// 2.函数的length属性,显示函数所需的参数个数
// 如果设置默认值，则length属性将不再计数
{
    function add (a, b) {
        return a+b;
    }
    console.log((add).length);
}


// 3.rest参数,相当于更加灵活的arguments
{
    function add(...rest) {
        let sum = 0;
        for(let i of rest) {
            sum += i;
        }
        return sum;
    }
    console.log(add(1,2,3,4,5));
}

// 4.扩展运算符


// 5.name属性
{
    function add() {

    }
    console.log(add.name);
}

// 6.箭头函数
{   
    // f1与f2等同
    var f1 = v => v;
    var f2 = function(v) {
        return v;
    };
    // 箭头函数的this不是指向调用该函数的运行环境，而是指向定义时的运行环境
    console.log(f1(3));

}

// 注意:
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。


