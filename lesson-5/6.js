/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

const isEven = function(x) {
    if (typeof x !== 'number') {
        throw new Error('Argument is not a number');
    }
    let result;

    if (x % 2 === 0) {
        result = true;
    } else {
        result = false;
    }
    console.log(result);
    
    return result;
};

isEven(3); // false
isEven(4); // true

exports.isEven = isEven;
