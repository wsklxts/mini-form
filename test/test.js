function deepCopy(obj) {

    var newObj, type = Object.prototype.toString.call(obj).slice(8, -1);

    if (type === 'Object') {
        newObj = {};
    } else if (type === 'Array') {
        newObj = [];
    } else {
        return obj;
    }

    for (var key in obj) {
        newObj[key] = deepCopy(obj[key]);
    }

    return newObj;
}

var  arr= [234,2,4323,{a:"aa",b:[1,23,4,{"c":"cc"}]},34,534]

var o = deepCopy(arr)
var oo = JSON.parse(JSON.stringify(arr))
console.log(o);
console.log(oo);
