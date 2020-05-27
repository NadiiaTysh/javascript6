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
    let arrayInArgument = arguments[0];
    
    if (!Array.isArray(arrayInArgument)) {
        throw new Error('Argument is not an array');
    }
    if (arrayInArgument.length === 0) {
        throw new Error('Array is empty');
    }
    
    if (arrayInArgument.length === 1) {
        console.log(arrayInArgument[0]);
    } else {
        let element = arrayInArgument.splice(0, 1);

        console.log(element[0]);
        f(arrayInArgument);
    }

    return undefined;
};

f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;
