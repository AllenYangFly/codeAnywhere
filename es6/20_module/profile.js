var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

// 可以使用as重命名
export default function sum(a,b) {
    return (a+b);
}

export {firstName as fname, lastName as lname, year};
