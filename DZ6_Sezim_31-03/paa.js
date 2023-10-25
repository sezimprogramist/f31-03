function applyOperation(array, operation) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(operation(myArray[i]));
    }
    return result;
}
function multiplyByTwo(x) {
    return x * 2;
}

let myArray = [1, 2, 3, 4];
let result = applyOperation(myArray, multiplyByTwo);
console.log(result); 
