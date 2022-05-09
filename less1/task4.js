let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let numberDroid = prompt('Сколько дроидов хотите купить?');

if(numberDroid === null) {
    numberDroid = 'Отменено пользователем!';
    console.log(numberDroid);

} else{
    totalPrice = numberDroid * pricePerDroid;
    console.log(totalPrice);
}

if(credits <= totalPrice){
    сonsole.log('Недостаточно средств на счету!');
}else if (numberDroid > 0){
    let remainder = totalPrice - credits
    console.log(`'Вы купили ${numberDroid} дроидов, на счету осталось ${remainder} кредитов.'`) 
}