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
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); 

const salaryState = (daysInMonth - dayNumber > 20) ? this.salary = 'good salary' : this.salary = 'bad salary';

Object.defineProperty (person, 'salary', {
    get() {
        return salaryState;
    }
});

console.log(person.salary);

person.salary; // good salary

exports.person = person;