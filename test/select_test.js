const windSQL = require('../build/main');
const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    user            : 'root',
    password        : 'root',
    database        : 'test',
    dateStrings     : true
});
windSQL.initSSQL({
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
    let res = await windSQL.selectById(107, 'ims_node_raise_order');
    let res2 = await windSQL.query('select * from ims_node_raise_order where id = ?', [108]);
    console.log(res, res2);
})()
console.log(windSQL);
