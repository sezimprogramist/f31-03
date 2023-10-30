const arr = [
    ['name', 'john'],
    ['lastname', 'Black'],
    ['age', 23],
];
const obj = Object.fromEntries(arr);
console.log(obj); 
  
function arithmetic(array) {
    let arr = [];
    let sum = 0;
    for(i = 0; i < array.length; i++) {
      sum += array[i];
    } 
    let avg = sum / array.length;
    return Number.isInteger(avg) ? avg : avg.toFixed(1);
}
console.log( arithmetic([1,2,3,4,5,6,7])); 


function average() {
    var sum = 0;

    for (var i = 0; i < arguments[i]; i++ ) sum += arguments[i];

    return sum == 0 ? sum : sum / arguments.length;
}
alert( average( 1, 2, 3, 4, 5, 6, 7, 8, 9) );

