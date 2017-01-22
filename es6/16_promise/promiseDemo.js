//  一个函数作为参数，函数的参数为resolve, reject两个
var prm = new Promise(function(resolve, reject) {
    if(1) {
        resolve("成功");
    }else {
        reject("失败");
    }
});


// 实例化的promise函数，可以通过实例.then调用，有两个参数传递两个函数，第二个可选
prm.then(function(value) {
    console.log(value);
},function(err) {
    console.log(err);
});


var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

var getJson = function(url) {
    var promise = new Promise(function(resolve, reject) {
        var client = new XMLHttpRequest();
        client.open("get", url);
        client.onreadystatechange = handle;
        client.responseType = 'json';
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handle() {
            if(this.readyState !== 4) {
                return;
            }
            if(this.state === 200) {
                resolve(this.response);
            }else {
                reject(new Error(this.statusText));
            }
        }
    });
    return promise;
};


getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});