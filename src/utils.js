export function toHump(name) {
    return name.replace(/\_(\w)/g, function(all, letter) {
        return letter.toUpperCase();
    });
}


export function toLine(name) {
    return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}

export function objToHump(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[toHump(key)] = obj[key];
    }
    return newObj;
}

export function objToLine(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[toLine(key)] = obj[key];
    }
    return newObj;
}

export function listToHump(list) {
    let newList = [];
    for (let item of list) {
        newList.push(objToHump(item));
    }
    return newList;
}

export function dateFormat(date, fmt) {
    let o = {
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
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
        }
    }
    return fmt;
}