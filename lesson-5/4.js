/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение

const f = function(x) {
    if (typeof x !== 'number') {
        throw new Error('Argument is not a number');
    }
    if (x < 1 || x > 7) {
        throw new Error('Argument is out of range');
    }
    let dayOfWeek;

    switch (x) {
        case 1: dayOfWeek = 'Воскресенье';
        break;
        case 2: dayOfWeek = 'Понедельник';
        break;
        case 3: dayOfWeek = 'Вторник';
        break;
        case 4: dayOfWeek = 'Среда';
        break;
        case 5: dayOfWeek = 'Четверг';
        break;
        case 6: dayOfWeek = 'Пятница';
        break;
        case 7: dayOfWeek = 'Суббота';
        break;
    }
    console.log(dayOfWeek);
    
    return dayOfWeek;
};

f(1); // Воскресенье
f(4); // Среда

exports.f = f;
