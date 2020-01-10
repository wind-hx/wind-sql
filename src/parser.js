const { Parser } = require('node-sql-parser');
const opt = {
    database: 'MySQL' // MySQL is the default database
}

function initUpdateColumns(obj) {
    let columns = [];
    for (let key in obj) {
        if (typeof(obj[key]) === 'string') {
            columns.push({
                column: key,
                value: {
                    type: 'string',
                    value: obj[key]
                },
                table: null
            });
        } else if (typeof(obj[key]) === 'number') {
            columns.push({
                column: key,
                value: {
                    type: 'number',
                    value: obj[key]
                },
                table: null
            });
        }
    }
    return columns;
}

function select(table, where) {
    const parser = new Parser();
    let ast = [{
        type: 'select',
        options: null,
        distinct: null,
        columns: '*',
        from: [{
            db: null,
            table: table,
            as: null
        }],
        where: where,
        groupby: null,
        having: null,
        orderby: null,
        limit: null
    }];
    const sql = parser.sqlify(ast, opt);
    return sql;
}

exports.insert = function(target, table) {
    let obj = { ... target };
    delete obj.id;
    let columns = [];
    let values = [];
    for (let key in obj) {
        columns.push(key);
        if (typeof(obj[key]) === 'string') {
            values.push({
                type: 'string',
                value: obj[key]
            });
        } else if (typeof(obj[key]) === 'number') {
            values.push({
                type: 'number',
                value: obj[key]
            });
        }
    }
    const parser = new Parser();
    let ast = [{
        type: 'insert',
        table: [{
            db: null,
            table: table,
            as: null
        }],
        columns: columns,
        values: [{
            type: 'expr_list',
            value: values,
        }],
        partition: null
    }];
    const sql = parser.sqlify(ast, opt);
    return sql;
}

exports.updateByColumns = function(target, table, where) {
    
}

exports.updateById = function(target, table) {
    let obj = { ... target };
    delete obj.id;
    let columns = initUpdateColumns(obj);
    const parser = new Parser();
    let ast = [{
        type: 'update',
        table: [{
            db: null,
            table: table,
            as: null
        }],
        set: columns,
        where: {
            type: 'binary_expr',
            operator: '=',
            left: {
                type: 'column_ref',
                table: null,
                column: 'id',
            },
            right: {
                type: 'number',
                value: target.id,
            }
        }
    }];
    const sql = parser.sqlify(ast, opt);
    return sql;
}

exports.deleteById = function(id, table) {
    const parser = new Parser();
    let ast = [{
        type: 'delete',
        options: null,
        distinct: null,
        from: [{
            db: null,
            table: table,
            as: null
        }],
        where: {
            type: 'binary_expr',
            operator: '=',
            left: {
                type: 'column_ref',
                table: null,
                column: 'id',
            },
            right: {
                type: 'number',
                value: id,
            }
        },
    }];
    const sql = parser.sqlify(ast, opt);
    return sql;
}

exports.selectById = function(id, table) {
    return select(table, {
        type: 'binary_expr',
        operator: '=',
        left: {
            type: 'column_ref',
            table: null,
            column: 'id',
        },
        right: {
            type: 'number',
            value: id,
        }
    });
}

exports.selectAll = function(table) {
    return select(table, null);
}