/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/

// Решение

const getCustomers = (people, places) => {

    return new Promise((resolve, reject) => {
        const verifiedPeople = people.filter(person => person.verified === true);
        const newArray = [];
    
        for (let customer of verifiedPeople) {
            const country = places.find(obj => {
                if (obj.id === customer.id) {
                    
                    return obj;
                }
            });
            if (country) {
                const verifiedObj = Object.assign({}, customer, country);

                newArray.push(verifiedObj);
                resolve(newArray);
            } else {
                reject (`We don't have information about country for this customer: ${customer.name}`)
            }
        }
    })
};

// Пример использования

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
