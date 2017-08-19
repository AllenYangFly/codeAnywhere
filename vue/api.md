## 框架有什么？
对象，方法，属性，没了

## 基本template语法
{{}}
：
@
v-model
v-html

.prevent 阻止默认行为
.stop 阻止事件冒泡
.capture 
.self 阻止所有点击
.once 该事件只会触发一次

v-if、v-else v-if是惰性的，所以只有只有值为真的时候才会渲染组件
v-show  v-show知识简单的css切换，v-if会适时的销毁组件内部绑定的方法和子组件，
v-show比v-if初始化性能消耗更大，而v-if在切换状态的时候比v-show性能消耗大。所以初始化就确定的组件用v-if，需要频繁变更状态的组件用v-show
v-for

{{ message | formatMessage }}


## 组件包结构及通信
props down, event up。

Vue.use()
Vue.component(component.name, component)  全局注册一个组件
props


## 生命周期
beforeCreate
created
---$el为虚拟dom节点
beforeMount
---插入dom树
mounted
---真实dom节点
beforeUpdate
updated
boforeDestroy
destroyed


## 方法与属性
:class   :class="{active: isActive}"
:style   :style="{color: activeColor, fontSize: '13px'}"
vue增强了功能，可以传入对象

model: {}
model初始化

compoents: {}
compoents属性，局部注册一个组件，仅能在本组件中使用

data() {}
data函数，js中用this.data获取，模板中用data获取

filters : {}
与'|'过滤器配套使用，key为过滤方法，参数为要过滤的列表

computed: {}
计算属性，减少template内的冗余，并且是基于他的依赖进行缓存的，只有依赖发生改变的时候才会求值。

watch: {}
观察属性，key为

methods: {}
方法属性，key为方法



$event
真实dom事件，在@click="mothod($event)"中调用

$emit
$on












