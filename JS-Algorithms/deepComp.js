// Write a function deepEqual that takes two values 
// and returns true only if they are the same value 
// or are objects with the same properties, where 
// the values of the properties are equal when compared 
// with a recursive call to deepEqual.

// function will return a boolean value to indicate the above

// let deepEqual = function (obj1, obj2) {
// if (typeof(obj1) === typeof(obj2)) {
//     return true;
// } else {
//     return false;
// }
// } --> not good enough, no shallow copy

let deepEqual = function (obj1, obj2) {
    if (typeof(obj1) !== typeof(obj2)) {
        return false;
    }
    if (typeof(obj1) === 'array') {
    if (obj1.length !== obj2.length) {
        return false; }
    return obj1.every((element, index) => deepEqual(element, obj2[index]));
    // use every method to iterate through elements of obj1 and check for
    // corresponding element in the index's of obj2
    // next, check of object datatypes
    } else if (typeof(obj1) === "object") {

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    // elimate based on length
    }
    return Object.keys(obj1).every((key) => deepEqual(obj1[key], obj2[key]));
    // check for corresponding elements with every and keys JS functions
}
return obj1 === obj2;
}



let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// this should return true

console.log(deepEqual(obj, {here: 1, object: 2}));
// should return false
// @ 8:55pm, function does not work

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));