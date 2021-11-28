
const utils = require("./utils.js")
let m1 = [
    [1,2],
    [3,4],
    [5,6]
]

let m2 = [
    [1,2,3],
    [4,5,6]
]

let m3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//console.log(utils.matrixProduct(m1,m3));
//console.log(utils.sumOfMatrices(m3,m2));
console.log(utils.sumofEachRow(m3));