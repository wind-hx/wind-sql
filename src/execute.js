import parser from './parser';
import colors from 'colors-console';
import { objToLine, listToHump, dateFormat } from './utils';

function after(target) {
    target = target || {};
    if (!global.config.mysql) {
        throw Error('not found mysql client')
    }
    if (global.config.executeUseUnderScoreCase) {
        return objToLine(target);
    }
    return target;
}

function before(result) {
    return result;
}

function sqlHook(sql) {
    showLog(sql);
    return sql;
}

function showLog(sql) {
    if (global.config.showLog) {
        let date = new Date();
        console.log(`${colors('cyan', dateFormat(date, 'yyyy-MM-dd HH:mm:ss'))} ${sql}`);
    }
}

async function execute(sql, type) {
    return new Promise((resolve, reject) => {
        global.config.mysql.query(sql, [], function (error, results, fields) {
            if (error) throw error;
            if ('select' === type) {
                if (global.config.resultUseCamelCase) {
                    resolve(listToHump(results));
                } else {
                    resolve(results);
                }
            } else {
                resolve(results);
            }
        });
    });
}

export async function insert(target, table) {
    let executeObj = after(target);
    let sql = parser.insert(executeObj, table);
    let executeSQL = sqlHook(sql);
    let result = await execute(executeSQL, 'insert');
    before(result);
    return result;
}

export async function updateById(target, table) {
    let executeObj = after(target);
    let sql = parser.updateById(executeObj, table);
    let executeSQL = sqlHook(sql);
    let result = await execute(executeSQL, 'update');
    before(result);
    return result;
}

export async function deleteById(id, table) {
    after();
    let sql = parser.deleteById(id, table);
    let executeSQL = sqlHook(sql);
    let result = await execute(executeSQL, 'delete');
    before(result);
    return result;
}

export async function selectById(id, table) {
    after();
    let sql = parser.selectById(id, table);
    let executeSQL = sqlHook(sql);
    let result = await execute(executeSQL, 'select');
    before(result);
    return result;
}

export async function selectAll(table) {
    after();
    let sql = parser.selectAll(table);
    let executeSQL = sqlHook(sql);
    let result = await execute(executeSQL, 'select');
    before(result);
    return result;
}