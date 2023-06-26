// Write a function deepEqual that takes two values 
// and returns true only if they are the same value 
// or are objects with the same properties, where 
// the values of the properties are equal when compared 
// with a recursive call to deepEqual.

// function will return a boolean value to indicate the above
// use the hints to guide the answer

let deepEqual = function (obj1, obj2) {
if (typeof(obj1) === typeof(obj2)) {
    return true;
} else {
    return false;
}
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// this should return true

console.log(deepEqual(obj, {here: 1, object: 2}));
// should return false
// @ 8:55pm, function does not work