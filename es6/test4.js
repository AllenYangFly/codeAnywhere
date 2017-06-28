/**
 * 对象的扩展
 */

let nickName = 'nick-Name';

var person = {
    name: 'allen',
    // 计算属性名
    ['the-' + nickName]: 'allenyang',
    // 方法简写
    sayName() {
        console.log(this.allen);
    }
}


console.log(person['the-nick-Name']);

// Object.is()
console.log(Object.is(NaN, NaN));


// Object.assgin()
let receiver = {};

Object.assign(receiver, {
    type: 'man',
    name: 'allen'
}, {
    type: 'woman'
})

console.log(receiver);


// 