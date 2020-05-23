/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

// Решение

const today = new Date();
const dayNumber = today.getDate();
const monthNumber = today.getMonth();

switch (monthNumber) {
    case 0: daysInMonth = 31;
    break;
    case 1: daysInMonth = 28;
    break;
    case 2: daysInMonth = 31;
    break;
    case 3: daysInMonth = 30;
    break;
    case 4: daysInMonth = 31;
    break;
    case 5: daysInMonth = 30;
    break;
    case 6: daysInMonth = 31;
    break;
    case 7: daysInMonth = 31;
    break;
    case 8: daysInMonth = 30;
    break;
    case 9: daysInMonth = 31;
    break;
    case 10: daysInMonth = 30;
    break;
    case 11: daysInMonth = 31;
    break;
}

const salaryState = (daysInMonth - dayNumber > 20) ? this.salary = 'good salary' : this.salary = 'bad salary';

Object.defineProperty (person, 'salary', {
    get () {
        return salaryState;
    }
})

console.log(person.salary);

person.salary; // good salary

exports.person = person;