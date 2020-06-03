/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];

// Решение

const inspect = function(param) {
    if (!Array.isArray(param)) {
        throw new Error('Argument is not an Array');
    }
    const callback1 = function(value) {
        const srtingArray = [];

        if ((typeof value) === 'string'){
            srtingArray.push(value);

            return srtingArray;
        }
    }
    const filteredArray = param.filter(callback1);

    const callback2 = function(value) {
        if (!value) {

            return [];
        }
        const stringLengthArray = value.length;

        return stringLengthArray;
    }

    let mappedArray = filteredArray.map(callback2);

    return mappedArray;
}

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

exports.inspect = inspect;
