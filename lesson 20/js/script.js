// 1. Презентация. Функции.

// 2. Упражнение. Функция logGreeting().

function logGreeting() {
    console.log(`${name} is a JS developer `);
}
let name = "Roman";
logGreeting();

// 3.  Упражнение. Функция с параметром.
function showMessage(name) {
    console.log(`${name} is active now`);
}

showMessage('Roman');
showMessage('Valera');
showMessage('Victoria');

// 4. Упражнение. Функция для определения наибольшего.
function numberMax(a, b, c) {
    max = a, b, c;

    if (a > max) {
        max = a;
    }
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }

    return max;
}

const a = 2;
const b = 300;
const c = 2222;

console.log(numberMax(a, b, c));

// 5. Упражнение. Наименьшее число.
function min(a, b) {
    return (a < b) ? a : b;
}
console.log(min(7, 15));

// 6. Задача. Баланс.

// 7. Задача. Функция calc.

// 8. Задача. Функция isLucky.

// 9. Задача. Вывод числа словами.
