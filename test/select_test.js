const ssql = require('../build/main');
const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    user            : 'root',
    password        : 'root',
    database        : 'test',
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
    phone: '111111111',
    mail: '111111111@qq.com'
};

(async function() {
    let res = await ssql.selectById(1, 'topic');
    console.log(res);
})()
console.log(ssql);
