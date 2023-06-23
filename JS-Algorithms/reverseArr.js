// Arrays have a reverse method that changes the array by 
// inverting the order in which its elements appear. For this exercise,
//  write two functions, reverseArray and reverseArrayInPlace. The first, 
//  reverseArray, takes an array as argument and produces a new array that 
//  has the same elements in the inverse order. 

let reverseArray = function (arr) {
    let output = [];
    for (let i = arr.length-1; i >= 0; i--){
        output.push(arr[i]);
    }
    return output;
}

console.log(reverseArray(["A", "B", "C"]));

//  The second, reverseArrayInPlace,
//  does what the reverse method does: it modifies the array given as argument
//  by reversing its elements. Neither may use the standard reverse method.
//  do not create additinal array to store inverse items

let reverseArrayInPlace = function (arr) {
    // let output = [] --> WRONG, do not create an addtinal array to store items
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        // swap method in c++ takes three steps, temp = arr[i], 
        // arr[i] = desired element
        // desired element = temp
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i]; // grab tail element of list
        arr[arr.length - 1 - i] = temp;
    }
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue)

