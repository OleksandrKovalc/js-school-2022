let countryUser = prompt('You country:','');

if(countryUser === null){
    alert(`отмена ввода пользователем`);
}

countryUser = countryUser.toLowerCase();

let myDeliveryCost;

switch(countryUser){
    case 'китай':
    myDeliveryCost =  100;
    break;

    case 'чили':
    myDeliveryCost =  250;
    break;

    case 'австралия':
    myDeliveryCost =  170;
    break;

    case 'индия':
    myDeliveryCost =  80;
    break;

    case 'ямайка':
    myDeliveryCost =  120;
    break;

    default: alert('В вашей стране доставка не доступна');
}

console.log(`Доставка в ${countryUser} будет стоить ${myDeliveryCost} кредитов `);


