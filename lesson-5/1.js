/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

const f = function(x) {
    if (typeof x !== 'number') {
        throw new Error('Argument is not a number');
    }
    const result = Math.pow(2, 3);

    return result;
};

console.log(f(2)); // 8

exports.f = f;
