// We highly suggest utilizing Mozilla Developer Network (MDN) Web Docs to understand 
//how each method works and what arguments they take. Also look into Array.prototype.pop(), 
//Array.prototype.shift(), and other methods for your own enrichment.

//Without using the native “Array.prototype.forEach” method of JavaScript, 
//compose a function titled “myEach” that will take in an array of elements 
//and executes any callback function (provided by you) on each of those elements.
//THIS isn't just a simple output fuction, the for each fuction targerts the array

    /*
     *forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */

const jobTitles = ["Engineer", "Product Manager", "Director", "Nurse"];

jobTitles.forEach(element => console.log(element));

// let myCallBack = function (arr) {
//     for (i = 0; i < arr.length; i++) {
//         console.log(secondTitles.push(arr[i]))
//     }
// }
// //takes in an array and the callback fucntion
// let myEach = function (arr, myCallBack) {
//     return myCallBack(arr);
//  }

// myEach(jobTitles);

const print = (element) => console.log(element);

let customForEach = function (arr, cb) {
    for (i = 0; i < arr.length; i++) {
            secondTitles.push(arr[i]);
    }
    return secondTitles
}

let myEach = function (arr) {
        console.log(myCallBack(arr));
 }

myEach(jobTitles);




