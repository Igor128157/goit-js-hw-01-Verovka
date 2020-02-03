'use strict';

const credits = 23580;

const pricePerDroid = 3000;

const buyDroids = prompt ('Какое количество дроидов Вы хотите купить?');

let totalPrice;
let balanceCredits;

if (buyDroids === null) {
  console.log('Отменено пользователем!');
} else   {
  totalPrice = pricePerDroid * buyDroids;
}

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (totalPrice < credits) {
  balanceCredits = credits - (pricePerDroid * buyDroids);
  console.log(`Вы купили ${buyDroids} дроидов, на счету осталось ${balanceCredits} кредитов`);
}