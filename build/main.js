require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["initSSQL"] = initSSQL;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__execute__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return __WEBPACK_IMPORTED_MODULE_0__execute__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "updateById", function() { return __WEBPACK_IMPORTED_MODULE_0__execute__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deleteById", function() { return __WEBPACK_IMPORTED_MODULE_0__execute__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectById", function() { return __WEBPACK_IMPORTED_MODULE_0__execute__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_0__execute__["c"]; });



function initSSQL(options) {
    if (!options.mysql) {
        throw Error('mysql not null.');
    }
    global.config = Object.assign(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */], options);
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return selectById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectAll; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_colors_console__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_colors_console___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_colors_console__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(8);


var execute = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(sql, type) {
        return __WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                            global.config.mysql.query(sql, [], function (error, results, fields) {
                                if (error) throw error;
                                if ('select' === type) {
                                    if (global.config.resultUseCamelCase) {
                                        resolve(Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* listToHump */])(results));
                                    } else {
                                        resolve(results);
                                    }
                                } else {
                                    resolve(results);
                                }
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function execute(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





function after(target) {
    target = target || {};
    if (!global.config.mysql) {
        throw Error('not found mysql client');
    }
    if (global.config.executeUseUnderScoreCase) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* objToLine */])(target);
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
        var date = new Date();
        console.log(__WEBPACK_IMPORTED_MODULE_2_colors_console___default()('cyan', Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* dateFormat */])(date, 'yyyy-MM-dd HH:mm:ss')) + ' ' + sql);
    }
}

var insert = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(target, table) {
        var executeObj, sql, executeSQL, result;
        return __WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        executeObj = after(target);
                        sql = __WEBPACK_IMPORTED_MODULE_1__parser___default.a.insert(executeObj, table);
                        executeSQL = sqlHook(sql);
                        _context2.next = 5;
                        return execute(executeSQL, 'insert');

                    case 5:
                        result = _context2.sent;

                        before(result);
                        return _context2.abrupt('return', result);

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function insert(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var updateById = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(target, table) {
        var executeObj, sql, executeSQL, result;
        return __WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        executeObj = after(target);
                        sql = __WEBPACK_IMPORTED_MODULE_1__parser___default.a.updateById(executeObj, table);
                        executeSQL = sqlHook(sql);
                        _context3.next = 5;
                        return execute(executeSQL, 'update');

                    case 5:
                        result = _context3.sent;

                        before(result);
                        return _context3.abrupt('return', result);

                    case 8:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function updateById(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var deleteById = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee4(id, table) {
        var sql, executeSQL, result;
        return __WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        after();
                        sql = __WEBPACK_IMPORTED_MODULE_1__parser___default.a.deleteById(id, table);
                        executeSQL = sqlHook(sql);
                        _context4.next = 5;
                        return execute(executeSQL, 'delete');

                    case 5:
                        result = _context4.sent;

                        before(result);
                        return _context4.abrupt('return', result);

                    case 8:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function deleteById(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var selectById = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee5(id, table) {
        var sql, executeSQL, result;
        return __WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        after();
                        sql = __WEBPACK_IMPORTED_MODULE_1__parser___default.a.selectById(id, table);
                        executeSQL = sqlHook(sql);
                        _context5.next = 5;
                        return execute(executeSQL, 'select');

                    case 5:
                        result = _context5.sent;

                        before(result);
                        return _context5.abrupt('return', result);

                    case 8:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function selectById(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var selectAll = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee6(table) {
        var sql, executeSQL, result;
        return __WEBPACK_IMPORTED_MODULE_0__Volumes_wind_ssd_project_node_project_wind_sql_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        after();
                        sql = __WEBPACK_IMPORTED_MODULE_1__parser___default.a.selectAll(table);
                        executeSQL = sqlHook(sql);
                        _context6.next = 5;
                        return execute(executeSQL, 'select');

                    case 5:
                        result = _context6.sent;

                        before(result);
                        return _context6.abrupt('return', result);

                    case 8:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function selectAll(_x11) {
        return _ref6.apply(this, arguments);
    };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(6),
    Parser = _require.Parser;

var opt = {
    database: 'MySQL' // MySQL is the default database
};

function initUpdateColumns(obj) {
    var columns = [];
    for (var key in obj) {
        if (typeof obj[key] === 'string') {
            columns.push({
                column: key,
                value: {
                    type: 'string',
                    value: obj[key]
                },
                table: null
            });
        } else if (typeof obj[key] === 'number') {
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
    var parser = new Parser();
    var ast = [{
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
    var sql = parser.sqlify(ast, opt);
    return sql;
}

exports.insert = function (target, table) {
    var obj = Object.assign({}, target);
    delete obj.id;
    var columns = [];
    var values = [];
    for (var key in obj) {
        columns.push(key);
        if (typeof obj[key] === 'string') {
            values.push({
                type: 'string',
                value: obj[key]
            });
        } else if (typeof obj[key] === 'number') {
            values.push({
                type: 'number',
                value: obj[key]
            });
        }
    }
    var parser = new Parser();
    var ast = [{
        type: 'insert',
        table: [{
            db: null,
            table: table,
            as: null
        }],
        columns: columns,
        values: [{
            type: 'expr_list',
            value: values
        }],
        partition: null
    }];
    var sql = parser.sqlify(ast, opt);
    return sql;
};

exports.updateByColumns = function (target, table, where) {};

exports.updateById = function (target, table) {
    var obj = Object.assign({}, target);
    delete obj.id;
    var columns = initUpdateColumns(obj);
    var parser = new Parser();
    var ast = [{
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
                column: 'id'
            },
            right: {
                type: 'number',
                value: target.id
            }
        }
    }];
    var sql = parser.sqlify(ast, opt);
    return sql;
};

exports.deleteById = function (id, table) {
    var parser = new Parser();
    var ast = [{
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
                column: 'id'
            },
            right: {
                type: 'number',
                value: id
            }
        }
    }];
    var sql = parser.sqlify(ast, opt);
    return sql;
};

exports.selectById = function (id, table) {
    return select(table, {
        type: 'binary_expr',
        operator: '=',
        left: {
            type: 'column_ref',
            table: null,
            column: 'id'
        },
        right: {
            type: 'number',
            value: id
        }
    });
};

exports.selectAll = function (table) {
    return select(table, null);
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("node-sql-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("colors-console");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toHump */
/* unused harmony export toLine */
/* unused harmony export objToHump */
/* harmony export (immutable) */ __webpack_exports__["c"] = objToLine;
/* harmony export (immutable) */ __webpack_exports__["b"] = listToHump;
/* harmony export (immutable) */ __webpack_exports__["a"] = dateFormat;
function toHump(name) {
    return name.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase();
    });
}

function toLine(name) {
    return name.replace(/([A-Z])/g, "_$1").toLowerCase();
}

function objToHump(obj) {
    var newObj = {};
    for (var key in obj) {
        newObj[toHump(key)] = obj[key];
    }
    return newObj;
}

function objToLine(obj) {
    var newObj = {};
    for (var key in obj) {
        newObj[toLine(key)] = obj[key];
    }
    return newObj;
}

function listToHump(list) {
    var newList = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            newList.push(objToHump(item));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return newList;
}

function dateFormat(date, fmt) {
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'S+': date.getMilliseconds()
    };
    //因为date.getFullYear()出来的结果是number类型的,所以为了让结果变成字符串型，下面有两种方法：
    if (/(y+)/.test(fmt)) {
        //第一种：利用字符串连接符“+”给date.getFullYear()+''，加一个空字符串便可以将number类型转换成字符串。
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            //第二种：使用String()类型进行强制数据类型转换String(date.getFullYear())，这种更容易理解。
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length));
        }
    }
    return fmt;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    showLog: true,
    mysql: null,
    resultUseCamelCase: false,
    executeUseUnderScoreCase: true

});

/***/ })
/******/ ]);
//# sourceMappingURL=main.map