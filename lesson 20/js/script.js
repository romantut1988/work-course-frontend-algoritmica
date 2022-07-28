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
function logConvertor(dolars, rubles, curency) {
    let money = Number(rubles) + Number(dolars * curency);
    console.log('Вся сумма в рублях: ' + money);
}
let usersDolars = prompt('Введите сумму в доларах:');
let curency = 2.54;
let usersRubles = prompt('Введите сумму в рублях:');
logConvertor(usersDolars, usersRubles, curency);

// 7. Задача. Функция calc.
function calc(num1, num2, operation) {

    if (operation == '+') {
        let num3 = num1 + num2;
        return num3;
    }

    if (operation == '-') {
        let num3 = num1 - num2;
        return num3;
    }

    if (operation == '*') {
        let num3 = num1 * num2;
        return num3;
    }

    if (operation == '/') {
        let num3 = num1 / num2;
        return num3;
    }

}

let user_num1 = +prompt('Введите 1 число')
let user_num2 = +prompt('Введите 2 число')
let user_operation = prompt('Введите знак')

num3 = document.createElement('p');
num3.innerHTML = "Значение:" + ' ' + calc(user_num1, user_num2, user_operation);
document.body.append(num3);


// 8. Задача. Функция isLucky.

// 9. Задача. Вывод числа словами.
