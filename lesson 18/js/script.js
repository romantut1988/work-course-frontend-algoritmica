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
let month = prompt("Введите номер месяца");
if (month === '1') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц - январь";
    document.body.append(p);

    console.log('Январь');
}
else if (month === '2') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - февраль";
    document.body.append(p);

    console.log('Февраль');
}
else if (month === '3') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - март";
    document.body.append(p);

    console.log('Март');
}
else if (month === '4') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - апрель";
    document.body.append(p);

    console.log('Апрель');
}
else if (month === '5') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - май";
    document.body.append(p);
    console.log('Май');
}
else if (month === '6') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - июнь";
    document.body.append(p);
    console.log('Июнь');
}
else if (month === '7') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - июль";
    document.body.append(p);
    console.log('Июль');
}
else if (month === '8') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - август";
    document.body.append(p);
    console.log('Август');
}
else if (month === '9') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - сентябрь";
    document.body.append(p);
    console.log('Сентябрь');
}
else if (month === '10') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - октябрь";
    document.body.append(p);
    console.log('Октябрь');
}
else if (month === '11') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - ноябрь";
    document.body.append(p);
    console.log('Ноябрь');
}
else if (month === '12') {
    let p = document.createElement('p');
    p.className = "text";
    p.innerHTML = "месяц  - декабрь";
    document.body.append(p);
    console.log('Декабрь');
}
else {
    console.log('Введено некорректное число');
}

// 8. Задача 2. Подсчёт количества символов.
