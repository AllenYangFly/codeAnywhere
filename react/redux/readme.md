## redux是管理数据的容器

### store就是保存数据的地方
    使用createStore创建store
    import createStore from 'redux';
    const store = createStore(fn);

### state是store某个时间点的数据,state改变view就改变，state相等view就相等
    想要得到state就是用getState方法
    import createStore from 'redux';
    const store  = createStore(fn);

    const state = store.getState();

### action变化，改变view,从而改变state
    Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。
    const action = {
        type:"ADD_TODO",
        payload: 'Learn Redux'
    };

### store.的函数
#### store.dispatch()是view发出action唯一的方法
    import createStore from 'redux';
    const store = createStor(fn);

    store.dispatch({
        type: "ADD_TODO",
        payload: 'Learn Redux'
    });
    
    store.subscribe(fn)监视方法,一旦store的state发生变化，就执行fn
    store.subscribe()返回一个函数，执行这个函数解除绑定
    
    let unsubscribe = store.subscribe(() =>  //绑定函数
      console.log(store.getState())
    );
    unsubscribe();  // 解除绑定


### reducer函数，接收action和现有的state,返回一个新state
    const reducer = function (state, action) {
      // ...
      return new_state;
    };

    const reducer = (state=defaultState, action)=>{
        switch(action.type){
            case 'ADD':
                return state+action.payload;
            default:
                return state;
        }
    }

    const state = reducer(1,{type:'ADD',payload:2})

### 将reducer当做参数传入store构造函数

    const store = createStore(reducer); 
    以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。

