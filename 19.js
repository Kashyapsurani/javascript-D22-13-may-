var arr = [1, 3, 5, 7]

var v = arr.some((val) => {
    val %2 != 0
})

console.log(v);