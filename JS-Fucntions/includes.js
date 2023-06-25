let jobTitles = ["Engineer", "Product Manager", "Director", "Nurse"];

console.log(jobTitles.includes("Director")); // case sensitive

let customIncludes = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

console.log(customIncludes(jobTitles, "Director"));