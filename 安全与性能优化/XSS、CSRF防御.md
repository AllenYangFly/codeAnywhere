!()[https://aidandai.coding.me/archives/xss-attack-and-defense]

## XSS攻击

xss 跨站脚本攻击(Cross Site Scripting),为了不和层叠样式表（Cascading Style Sheets,CSS）缩写混淆，所以将跨站脚本攻击缩写为xss。xss就是攻击者在web页面插入恶意的Script代码，当用户浏览该页之时，嵌入其中web里面的Script代码会被执行，从而达到恶意攻击用户的特殊目的。

### XSS防御

1. 服务器端设置HttpOnly,这样JS脚本就访问不到cookie了，而浏览器可以自由访问cookie
2. 坚决不要相信用户的任何输入，过滤掉输入中的所有特殊字符，输入数据后端做转义处理。
3. 插入到页面上的数据，统一进行编码转义 
4. HTTP Response Header 中添加参数 X-XSS-Protection，该响应头会开启浏览器的防XSS 过滤器



## CSRF 攻击

CSRF（Cross-site request forgery），中文名称：跨站请求伪造。被攻击需要满足以下条件:

* 1.登录受信任的A网站，本地生成cookie
* 2.在A网站没有退出的情况下，访问钓鱼的B网站

这个条件看似很难满足，其实我们在上网的时候，浏览器开多个窗口很容易出现这种情况。

### CSRF防御

1. 正确的使用GET、POST的cookie。查找展示类的请求用GET，修改、提交表单操作用POST。
2. 后台根据为每个用户生成一个唯一的cookie token，所有表单都包含同一个伪随机数，因为第三方网站拿不到用户的cookie，所以表单数据构建也会失败。但是有个前提就是第三方没有通过XSS漏洞拿到cookie，如果第三方拿到了，这个方法就是失效了。
3. 生成伪随机数token，将token输出到客户端。当客户端发出请求的时候，后端与生成的随机token进行比对，保证请求的来源。



* Clickjacking 
* Content Security Policy 
* HTTP Strict Transport Security



* CORS ( 默认跨域不带cookie，使用withCredentials: true开启 )