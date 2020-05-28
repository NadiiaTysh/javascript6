/**
 * Задача 8.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

const f = function() {
    if (!Array.isArray(arguments[0])) {
        throw new Error('Argument is not an array');
    }
    if (arguments[0].length === 0) {
        throw new Error('Array is empty');
    }
    
    if (arguments[0].length === 1) {
        console.log(arguments[0][0]);
    } else {
        let element = arguments[0].splice(0, 1);

        console.log(element[0]);
        f(arguments[0]);
    }

    return;
};


f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;
