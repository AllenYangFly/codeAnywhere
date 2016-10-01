// 对象其实就是键与键值的集合，但是对象的键必须是字符串的形式
// map的引入解决了这个痛点

// 1.创建Map
{
    let m = new Map();
    var o = {name: 'allen'};
    m.set(o,'content');
    console.log(m.get(o));
    console.log(m.has(o));
    console.log(m.size);
    console.log(m.delete(o));
    console.log(m.has(o));

}


console.log('-----------------');
// 2.属性:size
//   方法:get(),set(),has(),delete(),clear()



// 3.keys(),values(),entries(),forEach()
//  keys()    键
//  values()  键值
//  entries() 键值对
//  forEach() 遍历每个项

{
    let m = new Map();
    m.set('name','allen');
    m.set('age',20);
    console.log(m);
}


console.log('----------------');
// 4.转化

// 1).Map转数组
{
    let m = new Map().set(true,7).set(false,5);
    console.log([...m] instanceof Array);
}

// 2).数组转Map
{
    new Map([[true, 7], [{foo: 3}, ['abc']]])
}


// 3).Map转为对象
{
    function map2Object(map) {
        let obj = new Object.create(null);
        for(let [k,v] of map) {
            obj[k] = v;
        }
        return obj;
    }
}

// 4).对象转Map
{
    function object2Map(obj) {
        let map = new Map();
        for(var k of Object.keys(obj)) {
            map.set(k,obj[k]);
        }
        return map;
    }
}


// 5).Map转json  map->obj->json
{
    function map2json(map) {
        return JSON.Stringify([...map]);
    }
}



// 5.WeakMap
// 1).WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），
// 2).不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。

{
    
}