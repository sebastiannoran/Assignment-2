// The some() method tests whether at least one element 
// in the array passes the test implemented by the provided 
// function. It returns true if, in the array, it finds an 
// element for which the provided function returns true; 
// otherwise it returns false. It doesn't modify the array.

const nums = [2,4,6,8,10];

const even = (element) => element % 2 === 0;
const odd = (element) => element % 2 !== 0;

console.log(nums.some(even));

//uses a callback function
// customSome(arr, even);

let customeSome = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true
        } else {
            return false;
        }
    }
}

console.log(customeSome(nums, even));
console.log(customeSome(nums, odd));
