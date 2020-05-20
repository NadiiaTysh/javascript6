/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

const checkSpam = (source, example) => {

    let sourceLow = source.toLowerCase();
    let exampleLow = example.toLowerCase();

    if ((typeof source && typeof example) ==='string' && sourceLow.includes(exampleLow)) {
        console.log(true);
    } else {
        console.log(false);
    }        
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
