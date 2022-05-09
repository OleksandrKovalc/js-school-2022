
let input = 0;
let total = 0;

do{
    let input = prompt('Веедите число:');
    input = Number(input);

    total =  total + input;

    if(input === 0){
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }    
    console.log(total);

}while(true)


