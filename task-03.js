'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

const password = prompt ('Введите пароль:');

let message;

if (password === null) {
    message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === true) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);