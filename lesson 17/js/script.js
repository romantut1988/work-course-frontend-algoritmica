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
;

const colorElment = document.querySelector('.primary:last-child');
colorElment.style.color = '#ababab';

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
const list = document.querySelector('ul');
let s1 = document.createElement('li');
s1.innerHTML = "Albert Einstein. Theoretical physicist, widely acknowledged to be one of the greatest physicists of all time.";
s1.style.color = 'red';
s1.style.fontStyle = 'italic';
s1.style.margin = '10px';
s1.style.listStyle = 'none';
list.append(s1);
let s2 = document.createElement('li');
s2.innerHTML = "Thomas Edison. American inventor and businessman.";
s2.style.color = 'red';
s2.style.fontStyle = 'italic';
s2.style.margin = '10px';
s2.style.listStyle = 'none';
list.append(s2);
let s3 = document.createElement('li');
s3.innerHTML = "Nikola Tesla. Serbian-American inventor, electrical engineer, mechanical engineer, and futurist.";
s3.style.color = 'red';
s3.style.fontStyle = 'italic';
s3.style.margin = '10px';
s3.style.listStyle = 'none';
list.append(s3);

const body = document.querySelector('body');
let form = document.createElement('form');
body.append(form);

let in1 = document.createElement('input');
in1.value = "Name";
form.append(in1);

let in2 = document.createElement('input');
in2.value = "Surname";
form.append(in2);

let press = document.createElement('button');
press.innerText = "Submit";
form.append(press);