## 什么是跨域?

出于安全考虑，浏览器采用了同源策略，即域名，协议，端口都相同的才是同源。

* 域名 baidu.com
* 协议 http,ftp
* 端口 :8080

## jsonp的原理

jsonp借助script标签不受同源策略的影响的特性来实现。


    <script>
        function getWeather( data ) {
            console.log( data );
        }
    </script>
    <script src="http://x.y.com/xx.js"></script>

xx.js

    getWeather({
        "城市" : "北京",
        "天气" : "大雾"        
    });


## 实现方式

前端写callback处理函数，后台返回传参的函数调用。
