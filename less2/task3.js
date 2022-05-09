
let message = prompt('Enter password:','');

// console.log(typeof message);


if(message === null){
    message = 'Отменено пользователем!';
}
else if(message === "ADMIN_PASSWORD"){
    message = 'Добро пожаловать!';
}
else{
    message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);