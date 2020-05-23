/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

// Решение

const today = new Date();
const dayNumber = today.getDate();

Object.defineProperties(person, {
    rate: {
        value: 0,
        writable: true
    },
    salary: {
        get() {
            const rateByDate = (this.rate === 0) ? 0 : this.rate * dayNumber;
            return rateByDate;
        }
    }
});

person.rate = 30;
console.log(person.salary);

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

exports.person = person;
