/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

const upperCaseFirst = initialString => {

    if (typeof initialString === 'string') {
        let fisrtLetter = initialString.slice(0, 1).toUpperCase();
        let nextLetters = initialString.slice(1);
        let upperCased = `${fisrtLetter}${nextLetters}`;
        console.log(upperCased);

        return upperCased;

    } else {
        console.log('Entered value is not a string');        
    }

}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
