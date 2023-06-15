// Without using the native “Array.prototype.map” method of JavaScript, 
// compose a function titled “myMap” that will take in an array of elements 
// and executes a callback function (provided by you) on each of those elements.

//map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls 
     * the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. 
     * If thisArg is omitted, undefined is used as the this value.
     */

let jobTitles = ["Engineer", "Product Manager", "Director", "Nurse"];

let adjustedTitles = jobTitles.map(function(element) 

}

