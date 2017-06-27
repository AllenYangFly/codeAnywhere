{

    let a = 2;
    let b = 3;

    console.log(a);
}

/**
 * error 报错，块级作用域
 */
// console.log(b);


{
    const PI = 3.14;

    /**
     * error const生命的变量为常量，不能更改.
     */
    // PI = 5;

    console.log(PI);
}



/**
 * 不存在变量提升，必须先声明再使用
 * 暂时性死区，外层生命一个变量，内层let或者const声明同名变量，先调用，由于不能变量提升导致的
 */