let rooster = [
    {name: 'james', team: 'knicks'},
    {name: 'bob', team: 'yankees'},
    {name: 'tom', team: 'knicks'},
    {name: 'melfi', team: 'knicks'}
];

const newArr = rooster.filter((person, index, array) => {return person.team === 'knicks' });

console.log(newArr);

let customFilter = function (arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

