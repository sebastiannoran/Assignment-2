// Write a function arrayToList that builds up a 
// list structure like the one shown when given [1, 2, 3] 
// as argument. Also write a listToArray function that 
// produces an array from a list. Then add a helper function 
// prepend, which takes an element and a list and creates a 
// new list that adds the element to the front of the input 
// list, and nth, which takes a list and a number and 
// returns the element at the given position in the list 
// (with zero referring to the first element) or undefined 
// when there is no such element.

// array to list function

let arrayToList = function (arr) {
    let list = null;;
    for (let i = arr.length-1; i>=0; i--) { // iterate over the array backwards
        list = {value: arr[i], rest: list}; // use a local binding to hold the part of the list that was built so far and use an assignment
    }
    return list;
}
console.log(arrayToList([10, 20]));

let listToArray = function (list) {
    let arr = []; // empty array;
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

console.log(listToArray(arrayToList([10, 20, 30])));

let prepend = function (element, list) {
    return {value: element, rest: list};
}

console.log(prepend(10, prepend(20, null)));

let nth = function (list, n) {
    if (!list) {
        return null;
    } else if (n === 0) {
        return list.value;
    } else {
        return nth (list.rest, n -1);
    }
}
console.log(nth(arrayToList([10, 20, 30]), 1));
