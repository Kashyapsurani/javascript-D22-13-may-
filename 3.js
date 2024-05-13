
let arr= ["apple", "banana", "cherry"];
let o = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
        o.push(arr[i]);
    }
}

console.log(o);
