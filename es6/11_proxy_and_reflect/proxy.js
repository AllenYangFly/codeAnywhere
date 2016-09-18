// Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，
// 所以属于一种“元编程”（meta programming），即对编程语言进行编程。


// Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，

// 1.创建proxy对象var proxy = new Proxy(target, handler);
// target表示所要拦截的对象，handler表示拦截的参数
// 如果没有设置handler，则默认为接通对象
{
    var obj = {};
    var proxy = new Proxy(obj, {
        get: function(target, property) {
            return 35;
        }
    });
    console.log(proxy.name);
    console.log(obj.name);  // 不会触发拦截，只有proxy对象实例才会出发对象
}

console.log('-------------------');
// 2.设置object.proxy属性
{
    var obj = {
        name: "allen",
        proxy: new Proxy(this,{
            get: function(target, property) {
                return 40;
            }
        })
    }
    console.log(obj.proxy);
}

// 3.常见的拦截器
// （1）get(target, propKey, receiver)
// 拦截对象属性的读取，比如proxy.foo和proxy['foo']。
// 最后一个参数receiver是一个对象，可选，参见下面Reflect.get的部分。

// （2）set(target, propKey, value, receiver)
// 拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。

// （3）has(target, propKey)
// 拦截propKey in proxy的操作，以及对象的hasOwnProperty方法，返回一个布尔值。

// （4）deleteProperty(target, propKey)
// 拦截delete proxy[propKey]的操作，返回一个布尔值。

// （5）ownKeys(target)
// 拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。该方法返回对象所有自身的属性，而Object.keys()仅返回对象可遍历的属性。

// （6）getOwnPropertyDescriptor(target, propKey)
// 拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

// （7）defineProperty(target, propKey, propDesc)
// 拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

// （8）preventExtensions(target)
// 拦截Object.preventExtensions(proxy)，返回一个布尔值。

// （9）getPrototypeOf(target)
// 拦截Object.getPrototypeOf(proxy)，返回一个对象。

// （10）isExtensible(target)
// 拦截Object.isExtensible(proxy)，返回一个布尔值。

// （11）setPrototypeOf(target, proto)
// 拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。
// 如果目标对象是函数，那么还有两种额外操作可以拦截。

// （12）apply(target, object, args)
// 拦截Proxy实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

// （13）construct(target, args)
// 拦截Proxy实例作为构造函数调用的操作，比如new proxy(...args)。
console.log('-----------------');
{
    var obj = {};
    var proxy = new Proxy(obj, {
        set: function(target, porperty) {

            console.log('set');
        },
        get: function(target, property) {
            return 'get';
        }
    }); 
    console.log(proxy.name);
    proxy.name = 'allen';
}




// 