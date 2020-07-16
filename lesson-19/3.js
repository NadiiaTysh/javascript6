/*
# Задача 3

Создайте функцию `send` которая будет оберткой для функции `get` которая поддерживает только `callback` технологию.

**Обратите внимание**:

1. Функция `send` должна возвращать промис;
2. Использование `async & await` **запрещено**.
3. Нужно использовать библиотеку для отправки запросов [fetch](https://github.com/andris9/fetch)
4. Использование посторонних библиотек кроме [библиотеки fetch](https://github.com/andris9/fetch) **запрещено**.
5. Если сервер ответил статус кодом `200` промис **должен** резолвиться с параметром, аргументом для которого будет массив который содержит список объектов-стран.
6. В том случае если сервер ответил статус кодом не `200` промис **должен** реджектится с текстом `We have error, status code: ${statusCode}`
*/

// До рефакторинга
// const get = require('fetch').fetchUrl;
// const url = 'https://lab.lectrum.io/geo/api/countries?size=2';
// get(url, (error, meta, body) => {
// 	const { data } = JSON.parse(body);
// 	console.log(data);
// });

const get = require('fetch').fetchUrl;
const url = 'https://jsonplaceholder.typicode.com/posts'; // array of titles
// const url = 'https://lab.lectrum.io/geo/api/countries?size=2'; // 404

// Решение

const send = (route) => {

    return new Promise((resolve, reject) => {
        get(route, (error, meta, body) => {
            const statusCode = meta.status;
            
            if (statusCode === 200) {
                const arrayOfObjecs = JSON.parse(body.toString());
                const arrayOfTitles = [];

                for(let element of arrayOfObjecs) {
                    arrayOfTitles.push(element.title);
                }
                resolve(arrayOfTitles);
            } else {
                reject(`We have error, status code: ${statusCode}`);
            }
        });
    })
};

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

