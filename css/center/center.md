<!-- 参考 http://www.w3cplus.com/css3/css-secrets/vertical-centering.html -->


## 居中的N种方法

### 内联元素

水平 

    text-align: center;

垂直  

    line-height: father-height;


###  块状元素

html 

    <div class="wrap">
        <div class="box"></div>
    </div>

####  1 position、margin配合 

    .box{
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        top: 50%;
        
        margin-left: -50px;    
        
        margin-top: -50px;      
    }

##### 使用clac减少代码量

    .box{
        position: absolute;
        width: 100px;
        height: 100px;
        top: calc(50% - 50px);
        left: clac(50% - 50px);
    }

#### 缺点:
    必须知道子元素的宽高

### position 单独居中

    .box {
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

    }

#### 缺点
必须设置子元素宽高,否者默认子元素撑满父级元素


## 居中的N种方法

### 内联元素

水平 

    text-align: center;

垂直

    line-height: father-height;


###  块状元素

html 

    <div class="wrap">
        <div class="box"></div>
    </div>

### 1,position,margin配合 

    .box {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -50px;     
        margin-top: -50px;     
    }

### 使用clac减少代码量

    .box{
        position: absolute;
        width: 100px;
        height: 100px;
        left:calc(50%-50px);
        top:calc(50%-50px);
    }

#### 缺点
 必须知道子元素的宽高

### margin,position配合

    .box {
        
        position: absolute;
        left: 0; 
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        
        width: 100px;
        height: 100px;
    }

####缺点 
    必须设置元素宽高，不然子元素默认占满父级元素 

### tanslate,position

CSS3的新特性可以让我们弥补必须指定子元素宽高的缺陷，我们可以实现任意高度居中

     .box{
        position:absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
     }