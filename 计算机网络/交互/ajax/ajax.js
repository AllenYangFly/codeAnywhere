function ajax(method, url, data, success) {

    // 创建空指针
    var xhr = null;

    // 初始化xhr
    try {
        xhr = new XMLHttpRequest();
    }catch {    
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }       

    // 规定请求类型，请求参数以及是否异步

    if( method == "get" && data) {
        url += "?" + data;
    } 

    xhr.open(method, url, true);


    // 发送请求
    if( method == 'get') { 
        xhr.send();
    }
    else {
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }

    // 响应
    xhr.onreadystatechange = function() {
        if( xhr.readyState == 4 ) {
            if( xhr.status == 200) {
                success && success(xhr.responseText);
            }
            else {
                console.log("Error:" + xhr.status);
            }
        }
    };

}



function ajax(method, url, data, success) {
    var xhr = null;

    try {
        xhr = new XMLHttpRequest();
    }catch {
        xhr = new ActiveXObject('Microsoft.HTTP'); 
    }

    if( method == 'get' && data ) {
        url += '?' + data;
    }

    xhr.open( method, url, true);

    if( method == 'get' ) {
        xhr.send();
    }else {
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechange = function() {
        if( xhr.readystate == 4) {
            if( xhr.status == 200 ) {
                success && success(xhr.responseText);
            }else {
                console.log("Error:" + xhr.status)
            }
        }
    };
} 