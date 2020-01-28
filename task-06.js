'use strict';

let input;

let total = 0;

do  {input = prompt ('Введите любое число');

    if (input !== null) {
       total = total + +input;
    }

} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);