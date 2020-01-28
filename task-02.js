'use strict';

const total = 100;

const ordered = 50;

const result = ordered < total;

if(result) {
    console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
    console.log("На складе недостаточно товаров!");
}