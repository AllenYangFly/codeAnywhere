let node = {
    type: 'Identifier',
    name: 'foo',
    loc: {
        price: 10
    }
}

// 对象解构
// let {type, name} = node;

// 对象嵌套解构
let {type, name, loc:{ price }} = node

console.log(type);
console.log(price);



// 数组解构
let [fristColor, ...secondColor] = ['red', 'bule', 'white'];
console.log(fristColor);
console.log(secondColor);

// get & set
var test = {
    get age () {
        return age+'*';
    },
    set age (value) {
        age = value+1;
    }
}

test.age = 1;
console.log(test.age);


// static
