let arr = {
    index0: "0",
    index1: "1",
    index2: "2"
};

console.log(Object.values(arr));

let customObjValue = function (arr) {
    let result = [];
    let keys = Object.keys(arr);
    for (let i = 0; i < keys.length; i++){
        let key = keys[i];
        result.push(arr[key]);
    }
    return result;
}

console.log(customObjValue(arr));