window.onload = function() {
    // saveSessionStorage("inp");
    var indexedDB = window.indexedDB || window.webkitIndexedDB || wndow.mozIndexedDB || window.msIndexedDB; 
    connectDateBase();
};

function saveSessionStorage(id) {
    var target = document.getElementById(id);
    // target.style.background = "red";
    var str = target.value;
    sessionStorage.setItem("message",str);
    // alert(sessionStorage.message);
}

function loadSessionStorage(id) {
    var target = document.getElementById(id);
    var msg = sessionStorage.getItem("message");
    alert(msg);
}


function connectDateBase() {
    var dbName = "allenDB";
    var dbVersion = 20144472;
    var idb;
    var dbConnect = indexedDB.open(dbName, dbVersion); 

    dbConnect.onsuccess = function(e) {
        idb = e.target.result;
        alert("indexedDB 连接成功");
    };

    dbConnect.onerror = function() {
        alert("数据库连接失败");
    } 
}

// function connectDateBase() {
//     var dbName = "allenyangDB";
//     var dbVersion = 201475;
//     var idb;
//     var dbConnct = indexedDB.open(dbName, dbVersion);

//     dbConnect.onsuccess = function(e) {
//         idb = e.target.result;
//         alert("indexedDB 连接成功");
//     }



//     dbConnect.onerror = function() {
//         alert("indexedDB 连解失败");
//     };

//     return idb;
// }