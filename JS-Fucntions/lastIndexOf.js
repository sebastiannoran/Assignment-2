nums = [1,2,3,4,3,4,5,4,5]

//let value = nums.lastIndexOf(4)

//console.log(value);

let customIndex = function (arr, target) {
    let fromIndex = arr.length - 1;
    for (let i = fromIndex; i >= 0; i--) { // iterate backwards
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(customIndex(nums, 4));