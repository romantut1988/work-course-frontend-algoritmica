// 1. Презентация. Элементы на веб-странице.

// 2. Упражнение 1. Вывод элемента.
const element = document.querySelector("li");
console.log(element);

// 3. Упражнение 2. Изменение списка.
const element = document.querySelector('h1');
element.remove("h1");

const li = document.querySelector("li")
li.append('TITAN RTX')


// 4. Упражнение 3. Изменение элементов.
const element = document.querySelector('h1');
element.innerHTML = 'GeForce 20 Series';

const colorElement = document.querySelector('.primary');
colorElement.style.color = '#ababab';

// 5. Задача. Список учеников
let list = document.querySelector('ul');// список учеников 

let element1 = document.createElement('li'); // элемент списка
element1.innerHTML = 'Валера Миськевич';
list.append(element1);

let element2 = document.createElement('li');
element2.innerHTML = 'Вика Капустина';
list.prepend(element2);


let element3 = document.createElement('li');
element3.innerHTML = 'Попов Даниил';
list.append(element3);

let element4 = document.createElement('li');
element4.innerHTML = 'Рашевский Алексей';
list.append(element4);


list.style.color = 'blue';

let student = prompt('Введите имя ученика');
let element5 = document.createElement('li');
element5.innerHTML = student;
list.append(element5);
element5.style.color = 'red';

// 6. Задача. Генерация разметки.
