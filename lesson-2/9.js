// Отсортируйте массив по убыванию.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// [6,5,4,3,2,1]

////////////////// Решение //////////////////

const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
            let swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
            isSwapped = true;
        }
    }
    if (!isSwapped) break;
}

console.log(arr);