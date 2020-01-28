'use strict';

const credits = 23580;

const pricePerDroid = 3000;

const buyDroids = prompt ('Какое количество дроидов Вы хотите купить?');

const totalPrice = pricePerDroid * buyDroids;

const balanceCredits = credits - (pricePerDroid * buyDroids);

let message;

if (buyDroids === null) {
    message = 'Отменено пользователем!';
    console.log(message);

} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
    console.log(message);

} else if(Number.isInteger (Number (buyDroids))) {
        console.log(`Вы купили ${buyDroids} дроидов, на счету осталось ${balanceCredits} кредитов`);
}