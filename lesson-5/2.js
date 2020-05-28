/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

const f = function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error('All arguments must be numbers');
        }
        sum = sum + arguments[i];
    }

    return sum;
};

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;