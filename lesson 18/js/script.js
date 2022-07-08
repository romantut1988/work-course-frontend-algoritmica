// 1. Презентация. Условия.

// 2. Упражнение. Операторы сравнения.
let value = 10;
console.log(value != 5);
console.log(value > 5);
console.log(value >= 10);
console.log(value == 10);
console.log(value <= 11);
console.log(value <= 10);
console.log(value === 10);

let value = 20;
console.log(value > 21);
console.log(value >= 21);
console.log(value <= 19);
console.log(value !== 20);
console.log(value == 12);

// 3. Упражнение. Проверка возраста.
const answer = prompt('Какой твой возраст?', '');
if (answer < 18) {
    alert("Access denied");
} else {
    alert("Access granted");
}

// 4. Упражнение. Замена if...else на switch.
let id = prompt('введите id товара:');
if (id === '1') {
    alert('В наличии 10 шт.');
}
else if (id === '2') {
    alert('В наличии 256 шт.');
}
else if (id === '3') {
    alert('В наличии 53 шт.');
}
else if (id === '4') {
    alert('В наличии 3 шт.');
}
else {
    alert('Нет в наличии');
}

switch (id) {
    case '1':
        alert('В наличии 10 шт.');
        break;
    case '2':
        alert('В наличии 256 шт.');
        break;
    case '3':
        alert('В наличии 53 шт.');
        break;
    case '4':
        alert('В наличии 3 шт.');
        break;
    default:
        alert('Нет в наличии');
        break;
}

// 5. Упражнение. Пол пользователя.

// 6. Задача 1. Найти среднее число.

// 7. Задача. Вывод месяца.

// 8. Задача 2. Подсчёт количества символов.
