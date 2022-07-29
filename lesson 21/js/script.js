// 1. Презентация. Циклы.
let num = +prompt('Введите двузначное число:');
while (num < 100) {
    num += 7;
    console.log(num);
}

// 2. Упражнение. Двузначное число в трёхзначное.
let n = +prompt('Введите любое число');
let i = 0;
while (i !== n) {
    i++;
    console.log('I know how to use cycles');
}

// 3. Упражнение. I know how to use cycles.
let num = 25;
let count = 0;
while (num < 100) {
    count += num;
    num += 2;
}
console.log(count);

// 4. Упражнение. Сумма всех нечётных двузначных чисел.
let mult = 1;
for (let i = 1; i <= 10; i++) {
    mult = mult * i;
}
console.log(mult);

// 5. Упражнение. Произведение всех чисел до 10.

// 6. Задача. Найти сумму чисел кратных N.
let user = prompt('введите строку')
let i = 0;
while (i <= 9) {
    if (user.indexOf(i)) {
        alert("у вас найдено число");
        break
    } else {
        i += 1;
    }
}


let user_string = prompt('Введите строку')

if (user_string.indexOf(1) > -1) {
    alert("В строке найдено число!");
}

if (user_string.indexOf(2) > -1) {
    alert("В строке найдено число!");
}

if (user_string.indexOf(3) > -1) {
    alert("В строке найдено число!");
}

if (user_string.indexOf(4) > -1) {
    alert("В строке найдено число!");
}

if (user_string.indexOf(5) > -1) {
    alert("В строке найдено число!");
}

if (user_string.indexOf(6) > -1) {
    alert("В строке найдено число!");
}

if (user_string.indexOf(7) > -1) {
    alert("В строке найдено число!");
}

if (user_string.indexOf(8) > -1) {
    alert("В строке найдено число!");
}

if (user_string.indexOf(9) > -1) {
    alert("В строке найдено число!");
}

// 7. Содержит ли строка цифры.
let num = prompt('Enter the number:');

while (num > 0) {
    num--;
    console.log(num);
}

console.log('The cycle is over');
// 8. Вывести простые числа.
