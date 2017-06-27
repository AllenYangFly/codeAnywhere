/**
 * 解构：从数组或者对象中进行赋值
 * 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
 */


/**
 * 数组的解构赋值
 */

{
    let arr = [a, b, c] = [1, 2, 3];
    console.log(arr);

    /**
     * 默认值不可使用？
     */
    let arr2 = [a, b = 'b'] = ['a'];
    console.log(arr2);
}



/**
 * 对象的解构
 */
{
    let obj1 = {foo, bar} = {foo:'a', bar:'b'}
    console.log(obj1);

    /**
     * 对象的默认值，情况同上
     */
    let obj2 = {
        foo,
        bar=123
    } = {
        foo: 'a'
    }

    console.log(obj2)
}



/**
 * 字符串的解构
 */
{
    let str = [a, b, c, d] = 'abcd';
    console.log(str); 
}