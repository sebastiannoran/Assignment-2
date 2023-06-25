// The reduce function reduces an array to a single value 
// and executes a provided function for each value of an array. 

let customReduce = function (arr, cb, accumulator) {
    let result = arr[0] || accumulator;
    for (let i = 0; i < arr.length; i ++) {
        if (!accumulator && i === 0) {
        } else {
            result = cb(result, arr[i], i, arr);
        }
    }
    return result;
}