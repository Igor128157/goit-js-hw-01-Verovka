'use strict';

const priceChina = 100;

const priceChile = 250;

const priceAustralia = 170;

const priceIndia = 80;

const priceJamaica = 120;

const promptLabel  = prompt ('Введите название страны для выбора доставки товара');

let message;

if (promptLabel === null) {
  message = 'Отменено пользователем';
} else {

 switch (promptLabel.toLowerCase()) {
    case 'китай':
        message = `Доставка в Китай будет стоить ${priceChina} кредитов`;
        break;
    case 'чили':
        message = `Доставка в Чили будет стоить ${priceChile} кредитов`;
        break;
    case 'австралия':
        message = `Доставка в Австралию будет стоить ${priceAustralia} кредитов`;
        break;
    case 'индия':
        message = `Доставка в Индию будет стоить ${priceIndia} кредитов`;
        break;
     case 'ямайка':
        message = `Доставка в Ямайку будет стоить ${priceJamaica} кредитов`;
        break;
    default:
     message = 'В вашей стране доставка не доступна';
 }
}

alert(message);