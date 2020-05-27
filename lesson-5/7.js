/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 * 
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// Решение

const getDivisors = function(x) {
    if (typeof x !== 'number') {
        throw new Error('Argument is not a number');
    }
    if (x < 1) {
        throw new Error('Argument is less than 1');
    }
    let divisorsArray = [];
    for (i = 1; i <= x; i++) {
        if (x % i === 0) {
            divisorsArray.push(i);
        }
    }
    console.log(divisorsArray);
    
    return divisorsArray;
};

getDivisors(12); // [1, 2, 3, 4, 6, 12]

exports.getDivisors = getDivisors;