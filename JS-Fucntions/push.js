// The push() method adds the specified elements to the end of an 
// array and returns the new length of the array.

let jobTitles = ["Engineer", "Product Manager", "Director", "Nurse"];

//let count = jobTitles.push("Plumber")

// console.log(count);
// console.log(jobTitles)

// time
// allow function to accept any number of parameters

let customPush = function (arr, ...args) {
    let length = arr.length;

    for (let i = 0; i < args.length; i++) {
        arr[length] = args[i];
        length++;
    }
    return length;
}

customPush(jobTitles, "plumber", "electrician");

console.log(jobTitles);
console.log(jobTitles.length);
