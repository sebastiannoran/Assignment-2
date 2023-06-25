nums = [1,2,3,4,1,3,4]

// let value = nums.indexOf(1);

// console.log(value);

let customFirstIndex = function (arr, target) {
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        return i;
        }
   }
   return -1;
}

console.log(customFirstIndex(nums, 1));
