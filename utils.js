function blankMatrix(matrix) {
    let newMat = [];
    for (let row = 0; row < matrix.length; row++) {
        newMat[row] = []
    }
    return newMat;
}

//1

//mat1 [a1,a2]  mat2 [b1,b2,b3]  mat1*mat2 = [(a1*b1+a2*b4), (a1*b2+a2*b5), (a1*b3+a2*b6)]
//     [a3,a4]       [b4,b5,b6]              [(a3*b1+a4*b4), (a3*b2+a4*b5), (a3*b3+a4*b6)]
//     [a5,a6]                               [(a5*b1+a6*b4), (a5*b2+a6*b5), (a5*b2+a6*b6)]


function matrixProduct(mat1, mat2) {
    if (mat1[0].length != mat2.length) {
        return 'Matrix Product does not exist.'
    }
    let newMat = blankMatrix(mat1);
    for (let i = 0; i < mat1.length; i++ ) { 
        for (let j = 0; j < mat2[0].length; j++) { 
            newMat[i][j] = 0;
            for (let k = 0; k < mat2.length; k++) { 
                newMat[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }
    return newMat
}

//2

//mat1 [a1,a2]  mat2 [b1,b2]  mat1+mat2 = [a1+b1, a2+b2]
//     [a3,a4]       [b3,b4]              [a3+b3, a4+b4]


function sumOfMatrices(mat1,mat2) {
    if ((mat1.length != mat2.length) || (mat1[0].length != mat2[0].length)) {
        return 'Matrices cannot be added'
    }
    let newMat = blankMatrix(mat1);
    for (let row = 0; row < mat1.length; row++) {
        for (let col = 0; col < mat1[0].length; col++) {
            newMat[row][col] = mat1[row][col] + mat2[row][col];
        }
    }
    return newMat
}

//3

//A [a1,a2]  result = [a1+a2, a3+a4, a5+a6]
//  [a3,a4]
//  [a5,a6]



function sumOfArray(arr) {
    let sum = 0;
    for (let i= 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum 
}

function sumofEachRow(mat) {
    let result = [];
    for (let row = 0; row < mat.length; row++) {
        result.push(sumOfArray(mat[row]))
    }
    return result
}


module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumofEachRow
}