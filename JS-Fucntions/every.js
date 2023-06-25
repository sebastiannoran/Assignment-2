let nums = [1, 30, 39, 29, 10, 13];

const threshhold = (element) => element < 40;
const even = (element) => element % 2 === 0;

console.log(nums.every(threshhold));

let customeEvery = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true
        } else {
            return false;
        }
    }
}

console.log(customeEvery(nums, threshhold));
console.log(customeEvery(nums, even));
