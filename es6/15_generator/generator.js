// Generator函数是ES6提供的一种异步编程解决方案

// Generator函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；
// 二是，函数体内部使用yield语句，定义不同的内部状态（yield语句在英语里的意思就是“产出”）。


// 1.定义Generator函数
{
    function* helloGenerator() {
        yield 'hello';
        yield 'word';
        return 'world';
    }
    var hl = helloGenerator();
    // 调用generator函数不会执行，而是会返回一个遍历器对象
    // yield相当于暂停，return相当于结束
    // 使用next()方法，可以让他恢复继续执行
    console.log(hl.next());
    console.log(hl.next());
    console.log(hl.next());
}


// 2.yield语句
// （1）遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
// （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。
// （3）如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
// （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

{

}



// 3.for...of语句
// 必须具有Iterator接口才能使用

{

}



// 4.Generator.prototype.throw()
// 可以在函数体外抛出错误，然后在Generator函数体内捕获。
{
    console.log('-------------------');
    var g = function* () {
        try{
            console.log('正常执行');
            yield;
        }catch(e) {
            console.log('内部捕获' + e);
        }
    };

    var i = g();
    i.next();

    try{
        i.throw('a');
        i.throw('b');
    }catch(e) {
        console.log('外部捕获' + e);
    }

    // 1.执行generator函数，执行try语句
    // 2.第一次调用throw()抛出异常，在generator函数内部捕获,执行catch代码块
    // 3.第二次调用throw()抛出异常，由generator函数的捕获已经执行了,所以不会再进行捕获，所以在外部代码块捕获
}




// 5.Generator.prototype.return()
// 可以结束Generator函数
{
    console.log('-------------');
    function* g() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        return 5;
    }

    var i = g();
    console.log(i.next());
    console.log(i.next());
    console.log(i.return('a'));
    console.log(i.next());
}



// 6.yield* 语句
// 如果在Generater函数内部，调用另一个Generator函数，默认情况下是没有效果的。
// 借助yield*语句可以达到效果

{
    console.log('-----------');
    function* sup() {
        yield 'a';
        yield 'b';
    }

    function* sub() {
        yield 1;
        yield* sup();
        yield 2;
    }
    
    var g = sub();
    for( let i of g) {
        console.log(i)
    }
}


// 7. this
// generator函数执行返回的是该函数的遍历器
{
    console.log('-------------');
    // this指向，遍历器实例不能访问
    {
        function* a() {
            this.name = 'allen'
        }
        let f = a();
        f.next();
        console.log(f.name);    
    }

    //  解决的方案
    {
        function* a() {
            this.name = 'allen';
        }
        
        let f = a.call(a.prototype);
        f.next();
        console.log(f.name);

    }


    // new 
    {
        function* a() {
            this.name = 'allen';
        }

        function F() {
            return a.call(a.prototype);
        }

        var f = new F();

        f.next();
        console.log(f.name);
    }

}


// 8.状态机,状态锁
{
    console.log('-------');
    // 1.es5
    {
        var ticking = true;
        function clock() {
            if( ticking ) {
                console.log(true);
            }else {
                console.log(false); 
            }
            ticking = !ticking;
        }

        clock();
        clock();
    }

    // 2.generator
    {
        function* clock() {
            while(true) {
                console.log(true);
                yield;
                console.log(false);
                yield;
            }
        }
        var i = clock();
        i.next();
        i.next();
    }

}


// 