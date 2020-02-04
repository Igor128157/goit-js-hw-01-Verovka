'use strict';

const credits = 23580;

const pricePerDroid = 3000;

let buyDroids = prompt ('Какое количество дроидов Вы хотите купить?');

let totalPrice;

if (buyDroids === null) {
  console.log('Отменено пользователем!');
} else   {
  totalPrice = pricePerDroid * buyDroids;

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else  {
  credits - totalPrice;
  console.log(`Вы купили ${buyDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
}
}