// 1.属性简写
{
    let age = 21;
    let person = {
        name: "allen",
        age,            // 属性简写
        get () {        // 方法简写
        }   
    }
    console.log(person);
}


// 2.使用字面量定义属性
{
    var o = {};
    o["first name"] = "allen";
    console.log(o['first name']);
}


// 3.方法的name属性
{
    let person = {
        sayName () {

        }
    }
    console.log(person.sayName.name);
}


// 4.Object.is()
// es5中比较 ==会自动转换类型，===的NaN不等于NaN、+0不等于-0
{
    console.log(Object.is(NaN,NaN));
}


// 5.Object.assign()合并对象的可枚举属性,不拷贝原型链上的属性
{
    var person = {
        name: "allen"
    }
    var person2 = {
        age: 21
    }
    var person3 = {
        skill: "program"
    }
    console.log(Object.assign(person,person2,person3));
}


// 6.属性遍历
// (1)for in
// (2)Object.keys(obj)
// (3)Object.getOwnPropertyNames(obj)
// (4)Object.getOwnPropertySymbols(obj)
// (5)Reflect.ownKeys(obj)


// 7._proto_属性与方法
// Object.setPrototypeOf()
// Object.getPrototypeOf()
// Object.create()


// 8.Object.values返回一个数组,数组项是兼职
{
    let person = {
        name: "allen",
        age: 21,
        showName: function() {
            console.log(this.name);
        }
    };

    // console.log(person.values());
}


// 9.Object.entries()返回一个数组，数组项是键值对
{
    let person = {
        name: "allen",
        age: 21,
        showName: function() {
            console.log(this.name);
        }
    };

    // console.log(Object.entries(person));
}



// 10.扩展运算符(...)
{
    let z = { a:4, b:5};
    // let y =  {...z};
    // console.log(y);   // {a:4,b:5}
}


// 11.Object.getOwnPropertyDescriptors(obj)
// 是ES5Object.getOwnpropertyDescriptor(obj,'key')方法的升级，返回该对象所有属性与属性值，但是不会返回
// 作用域链中的属性与方法

{
    var obj = {
        name: "allen",
        age: 15,
        showName: function() {
            console.log(this.name);
        }
    };
    // Object.getOwnPropertyDescriptors(obj);
}




