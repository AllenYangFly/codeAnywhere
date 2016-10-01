// 1.创建类
//  p.constructor === person.prototype.constructor
{
    class person{
        constructor(name,age) {
            this.name = name;
            this.age = age;
            this.id = '20144472';
        }
        toString() {
            return this.name + ':' + this.age;
        }
    }

    let p = new person('allen',20);   
    console.log(p.toString());
    p.id = '2015';
    let p2 = new person('allen',21);
    console.log(p2.toString());
}


// 2.constructor方法
// constructor的构造方法,实例化后是在实例上的
// 其他方法是在原型链上的
// 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上

{
    // 每个类都有一个person方法
    class person {
        constructor(age,name) {
            this.age = age;
            this.name = name;
        }
        toString() {
            return '(' +this.name + ':' + this.age+')';
        }
    }

    let p = new person(21,'allen');
    console.log(p.hasOwnProperty('age'));
    console.log(p.hasOwnProperty('name'));
    console.log(p.hasOwnProperty('toString'));
}




// 3.不存在变量提升
{
    // new person;  //error
    class person{}
}


// 4.类表达式
// person才是类名，me是类的别名
{
    let person = class me{

    };
}


// 5.Class的继承
// super获取到父类构造器
{
    class sup {
        constructor(name){
            this.name = name;
        }
    }

    class sub extends sup{
        constructor (name,age){
            // this.age = agess; errors
            super(name);
            // 子类只有在super之后才能使用this关键字
            this.age = age;
        }
    }

    var s = new sub('allen',20);
    console.log(s);
}


// 6.Object.getPrototypeOf()  返回父类
// 判断是否继承   
{
    class fu {}
    class zi extends fu {}
    console.log(Object.getPrototypeOf(zi) === fu);
}


console.log('------------');
// 7.static方法
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承
{
    class person {
        static showName(name){
            return name;
        }
    }
    var p = new person();
    // console.log(p.showName('allen'));   error
    console.log(person.showName('allen'));
}


