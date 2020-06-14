/**
 * Задача 3.
 *
 * Улучшите имплементацию функции calculate() и назовите её calculateAdvanced().
 * Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.
 *
 * После отлова ошибки перейдите к выполнению следующего коллбека.
 *
 * Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами: `value` и `errors`:
 * - свойство `value` содержит результат вычисления всех функций из цепочки;
 * - свойство `errors` содержит массив с объектами, где каждый объект должен обладать следующими свойствами:
 *     - index — индекс коллбека, на котором ошибка была возбуждена;
 *     - name — имя ошибки;
 *     - message — сообщение ошибки.
 *
 * Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.
 *
 * Поэтому, для продолжения цепочки выполнения
 * необходимо брать результат последней успешно выполненной функции-коллбека.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией (в этой задаче, этой ошибкой нужно именно сломать скрипт, отлавливать её не нужно).
 */

// Решение

const calculateAdvanced = (...cb) => {
    const obj = {};
    const errors = [];
    const errorData = {};
    const errorsObj = [];
    let value = 0;
     
    for (let i = 0; i < cb.length; i++) {
        if (typeof cb[i] !== 'function') {
            throw new Error ('One of parameters is not a function')
        }
        try {
            value = cb[i](value);
            if (!value) {
                throw new Error ('One of functions does not have an output value')
            }
        } catch (error) {
            errorData.index = i;
            errorData.name = error.name;
            if (error.name === 'Error') {
                errorData.message = `callback at index ${i} did not return any value.`
            } else if (error.name === 'ReferenceError' || 'RangeError') {
                errorData.message = error.message;
            }
            // Поиск предыдущей функции, где есть return
            if (!value && i > 0) {
                for (let j = i; j > 0; j--) {
                    value = cb[j](value);
                }
            }
            //Конвертирование в строку, чтоб результат не был перезаписан
            errors.push(JSON.stringify(errorData));          
        }
    }
    // Преобразование назад в обьект
    for (let elem of errors) {
        const elemObj = JSON.parse(elem);
        errorsObj.push(elemObj);
    }
    obj.value = value;
    obj.errors = errorsObj;

    return obj;
};

const result = calculateAdvanced(
    () => {},
    () => {
        return 7;
    },
    () => {},
    prevResult => {
        return prevResult + 4;
    },
    () => {
        throw new RangeError('Range is too big.');
    },
    prevResult => {
        return prevResult + 1;
    },
    () => {
        throw new ReferenceError('ID is not defined.');
    },
    prevResult => {
        return prevResult * 5;
    },
);

console.log(result);

// Функция вернёт:
// { value: 60,
//     errors:
//      [ { index: 0,
//          name: 'Error',
//          message: 'callback at index 0 did not return any value.' },
//        { index: 2,
//          name: 'Error',
//          message: 'callback at index 2 did not return any value.' },
//        { index: 4, name: 'RangeError', message: 'Range is too big.' },
//        { index: 6,
//          name: 'ReferenceError',
//          message: 'ID is not defined.' } ] }

exports.calculateAdvanced = calculateAdvanced;
