// Given an array nums, write a function to move 
// all 0's to the end of it while maintaining the 
// relative order of the non-zero elements.
// inplace, but not stable. 

let nums = [0,1,0,3,12];

let moveZeros = function (arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            j++;
        }
    }
    return arr;
}

console.log(moveZeros(nums));