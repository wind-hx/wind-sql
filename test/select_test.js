const ssql = require('../build/main');
const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit : 10,
    host            : '47.102.101.22',
    user            : 'root',
    password        : '745764370HExu..',
    database        : 'patch',
    dateStrings     : true
});
ssql.initSSQL({
    mysql: pool,
    resultUseCamelCase: true,
});

let obj = {
    id: 122,
    name: 'wind',
    studentSex: 1,
    age: 21,
    phone: '18291841334',
    mail: '745764370@qq.com'
};
// console.log('execute: ', execute);
// ssql.insert(obj, 'student');
// ssql.updateById(obj, 'student');
// ssql.deleteById(1, 'student');

(async function() {
    let res = await ssql.selectById(1, 'topic');
    console.log(res);
})()
console.log(ssql);
