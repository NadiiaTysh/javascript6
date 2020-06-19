/**
 * Задача 1.
 *
 * Создайте функцию createNumberGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100 (включительно).
 *
 * Условия:
 * - Числа не должны повторяться;
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились.
 *
 * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
 */

// Решение

const createNumberGenerator = () => {
    const array = [];
    const arrayUnique = [];

    return () => {
        /* Знечение i выбрано 300, чтобы за это количество цыклов вывести уникальные значения и не было undefined
           в случае повторений. Если указать меньше, может понадобится больше чем 100 итераций чтоб наполнить массив до 100 эллементов*/ 
        for (let i = 0; i < 300; i++) {
            let numbers = Math.ceil(Math.random()*100);

            array.push(numbers);
            for (num of array) {
                if (!(arrayUnique.includes(num))) {
                    arrayUnique.push(num);
                    
                    return num;
                } else if (arrayUnique.length === 100) {
                    throw new Error('There are no more numbers available.');
                }
            }
        }
    }
};

const TOTAL_ITERATIONS = 105;
let invocations = 0;
const generateNumber = createNumberGenerator();

try {
    for (invocations; invocations < TOTAL_ITERATIONS; invocations++) {
        console.log(`Iteration: ${invocations}. Number: ${generateNumber()}`);
    }
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
    console.log(`Function generated an error on ${invocations} invocation.`);
}

// Когда все числа выведутся:
// Error: There are no more numbers available.
// Function generated an error on 100 invocation.

exports.createNumberGenerator = createNumberGenerator;
