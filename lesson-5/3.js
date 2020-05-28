/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

const f = function(a, b, c) {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error('All arguments must be numbers');
        }
    }
    if (c === 0) {
        throw new Error('Last argument cannot be 0');
    }
    result = (a - b) / c;

    return result;
};

console.log(f(9, 3, 2)); // 3

exports.f = f;
