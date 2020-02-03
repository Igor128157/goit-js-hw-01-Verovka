'use strict';

const priceChina = 100;

const priceChile = 250;

const priceAustralia = 170;

const priceIndia = 80;

const priceJamaica = 120;

const promptLabel  = prompt ('Введите название страны для выбора доставки товара');

if (promptLabel === null) {
  console.log('Отменено пользователем');
} else {

 switch (promptLabel.toLowerCase()) {
    case 'китай':
        console.log(`Доставка в Китай будет стоить ${priceChina} кредитов`);
        break;
    case 'чили':
        console.log(`Доставка в Чили будет стоить ${priceChile} кредитов`);
        break;
    case 'австралия':
        console.log(`Доставка в Австралию будет стоить ${priceAustralia} кредитов`);
        break;
    case 'индия':
        console.log(`Доставка в Индию будет стоить ${priceIndia} кредитов`);
        break;
     case 'ямайка':
        console.log(`Доставка в Ямайку будет стоить ${priceJamaica} кредитов`);
        break;
    default:
     alert('В вашей стране доставка не доступна');
 }
}