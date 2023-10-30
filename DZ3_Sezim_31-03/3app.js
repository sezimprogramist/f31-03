//1 часть
var arr = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
console.log(arr.filter(num => ['2','5'].includes(num.toString()[0])));


//2 часть
var input =  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br'];
 
var mapped = input.reduce((acc, item) => { 
  if (acc.hasOwnProperty(item)){
    acc[item]++
  } else{
    acc[item] = 1
  }
  
  return acc
}, {});
 
// получится объект, у которого ключ - элемент исходного массива, а значение - количество повторений
console.log(mapped)

//доп задание
var numbers = [9, 6, 4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); // [1, 2, 3, 4, 5]
 

