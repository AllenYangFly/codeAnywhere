# AJAX

即”Asynchronous Javascript And XML”(异步JavaScript和XML),通常我们在进行网页数据的更新的时候，必须要进行网页的刷新，非常影响使用者的体验，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

##  1.创建Ajax对象

```
try{
    // 标准浏览器
    xhr = new XMLHttpRequest();
}catch () {
    // IE浏览器
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}
```

## 2.规定请求的类型、URL 以及是否异步处理请求

```
// 处理get请求地址
if( method == 'get' && data ){
    url += '?' + data;
}

open(method,url,bool);
```
method代表发送请求的类型，在Ajax中请求类型分为’GET’,’POST’两种:

url参数代表服务器上文件的地址

bool参数为’true’或者’false’:

* ‘true’代表异步
* ‘false’代表同步

## 3.发送请求

```
if( method == 'get'){
    xhr.send();
}else{
    //为了统一数据的编码，请加上HTTP头。
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xhr.send(data);
}
```

## 4.响应

onreadystatechange 每当readyState状态值改变的时候，就会触发这个事件。当触发事件的时候，使用readyState和status判断请求是否正常:

readyState : 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化:

* 0: 请求未初始化
* 1: 服务器连接已建立
* 2: 请求已接收
* 3: 请求处理中
* 4: 请求已完成，且响应已就绪

status  : HTTP服务器状态代码,这里列出了两个常见的:

* 200: “OK”
* 404: 未找到页面

```
xhr.onreadystatechange = function () {
    if( xhr.readyState == 4){

        if( xhr.status == 200){
            success && success(xhr.responseText);
        }else{  
            alert('Error:' + xhr.status);
        }
    }
}
```

