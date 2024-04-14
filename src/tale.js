//Задание 1
const kolobok = (person) => {
    switch (person) {
        case "дедушка":
            console.log('Я от дедушки ушёл');
            break;
        case "заяц":
            console.log('Я продолжил свое путешествие');
            break;  
        case "лиса":
            console.log('Меня съели');
            break;
        default:
            console.log('Нет таких персонажей');     
    }
}

//Задание 2
const newYear = (personname) => {
        console.log(`${personname}! ${personname}! ${personname}!`);
}