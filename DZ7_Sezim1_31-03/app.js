const answerButtons= document.querySelectorAll('.toggle')
const answerContainers = document.querySelectorAll('.answer')

const answers =[
    'фейерверк',
    'Метро',
    'Огонь',
    'Зaяц',
    'Слон',
    'Самовар',
]


function showAnswer(button, index){
    button.addEventListener('click', ()=>{
        const answerBlock =  answerContainers[index];
        const answerText = answers[index];

        if(answerBlock.style.display === 'none'|| answerBlock.style.display ===''){
            answerBlock.innerHTML = `<p class= "answer">${answerText}</p>`;
            answerBlock.style.display ='block';
            button.textContent ='Скрыть ответ'
        }else{
            answerBlock.innerHTML= '';
            answerBlock.style.display ='none'
            button.textContent='Показать ответ'
        }
    })
}
for(let i=0; 1< answerButtons.length; i++){
    showAnswer(answerButtons[i],i)
}
