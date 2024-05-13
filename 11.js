var arr = [1, 2, 3];
var a = "";

arr.forEach((val, index) => {
    a += val;
    if (index < arr.length - 1) {
        a += ", ";
    }
});

console.log(a);
