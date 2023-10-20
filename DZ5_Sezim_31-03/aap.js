document.addEventListener('click', function (e) {
    if (e.target.classList.contains("increase")) {
      ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("decrease")) {
      --e.target.parentElement.querySelector("input").value;
    }
  })

var library = [
    {book: 'Гордость и предубеждение'},
    {book: 'на маяк'},
    {book: 'Мидлмарч'},
    {book: 'Унесенные ветром'},
    {book: 'Сто лет одиночества'},
    {book: 'Возлюбленная'},
    {book: 'Государь'},
  ]
//filter на букву у 
var result2 = library.filter((i)=> i.book.toLowerCase().includes('у'))
console.log(result2)

//map
var gost= result2.map(item => {
    item.role = 'книга с буквой «у»';
    return item;
});
console.log(gost)
