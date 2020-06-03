/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

const createArray = function(content, quantity) {
    if (!(typeof content === 'number'
    || typeof content === 'string'
    || (content instanceof Object)
    || Array.isArray(content))) {
        throw new Error('First argument is not a number or string or object or array')
    }
    if (typeof quantity !== 'number') {
        throw new Error('Second argument is not a number')        
    }    
    const array = [];

    for (let i = 1; i <= quantity; i++) {
        array.push(content);
    }
    
    return array;
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
