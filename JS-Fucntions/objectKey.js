let arr = {
    a: "0",
    b: "1",
    c: "2"
};

console.log(Object.keys(arr));

let customObjectKeys = function(obj) {
    let result = [];
  
    for (let key in obj) { //JS for loop syntax, improved!
      if (obj.hasOwnProperty(key)) {
        result.push(key);
      }
    }
  
    return result;
};

console.log(customObjectKeys(arr));