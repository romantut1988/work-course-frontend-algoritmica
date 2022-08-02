// 1. Презентация. Массивы.

// 2. Упражнение. Изменение значения элемента.
const names = ['Victor', 'Gwen', 'Katrin'];
console.log(names);
names.push('Classified');
names.shift();
console.log(names);

// 3. Упражнение. I know how to use cycles.
const classmates = ['Peter', 'Gwen', 'Norman'];
classmates.push('Vasia');
classmates.shift();
console.log(classmates);

// 4. Упражнение. Все отриц числа.
let i = 0;
let numbers = [2, 3, -2, 0, -1, 4354, -4567, 324235, -445678];

function callback (item) {
    let num = [];

    if (numbers[i] < 0) {
        num.push(item);
    }
    i++

    console.log(num);
}

numbers.forEach(callback);

// 5. Упражнение. Все положит числа.
let i = 0
let numbers = [2, 3, -2, 0, -1, 4354, -4567, 324235, -445678]


let callback = function (item) {
    let num = []

    if (numbers[i] >= 0) {
        num.push(item)
    }
    i++

    console.log(num)
}

numbers.forEach(callback);

// 6. Задача. Массив фильмов.
const films = ['Кошмар на улице Вязов', 'Дружить по русски', 'Всё могу'];

let film1 = prompt('Введите название первого фильма');
let film2 = prompt('Введите название второго фильма');

films.push(film1);
films.unshift(film2);

console.log(films);

films_in_page = document.createElement('li');
films_in_page.innerHTML = films[0];
document.body.append(films_in_page);

films_in_page = document.createElement('li');
films_in_page.innerHTML = films[3];
document.body.append(films_in_page);

films_in_page = document.createElement('li');
films_in_page.innerHTML = films[4];
document.body.append(films_in_page);

// 7. Задача. Функции обратного вызова.
const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

function printWithDashes (name) {
    console.log('-------------');
    console.log(name);
    console.log('-------------');
}

function printWithHearts (name) {
    console.log('<3<3<3<3 ' + name + ' <3<3<3<3');
} 

function printWithIndex (name, index) {
    console.log(index + ' - ' + name);
}

names.forEach(printWithDashes);
names.forEach(printWithHearts);
names.forEach(printWithIndex);

// 8. Kebab-case в UPPER_CASE.

