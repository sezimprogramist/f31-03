function getDayOfWeekName(dayNumber)
 { switch (dayNumber){ 
    case 1:
        return "понедельник"; 
    case 2: 
        return "вторник";
    case 3:
        return "среда";
    case 4: 
        return "четверг";
    case 5:
        return "пятница"; 
    case 6: 
        return "суббота"; 
    case 7:
        return "воскресенье";
    default: return "Неверный порядковый номер дня недели"; 
} } 
         
const dayNumber = 6; 
const dayOfWeekName = getDayOfWeekName(dayNumber);
 console.log(dayOfWeekName);