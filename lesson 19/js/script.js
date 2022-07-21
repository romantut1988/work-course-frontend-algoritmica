// 1. Практическое задание Анкета.
// let nameUser = prompt("name?"),
// let firstName = prompt("firstName?"),
// age = +prompt('age?', 18);
// city = promte("city");
// mail = prompt("mail")
// console.log(nameUser);
// console.log(firstName);
// console.log(age);
// console.log(mail);


let elementName = document.querySelector('.name');
let name = prompt('Введите свое имя:');
elementName.innerText = 'Имя: ' + name;


elementSurname = document.querySelector('.surname');
let surname = prompt('Введите свою фамилию:');
elementSurname.innerText = 'Фамилия: ' + surname;


elementAge = document.querySelector('.age');
let age = prompt('Введите свой возраст:');
elementAge.innerText = 'Возраст: ' + age;


elementCity = document.querySelector('.city');
let city = prompt('Введите свой город:');
elementCity.innerText = 'Город: ' + city;

elementLink = document.querySelector('.link');
let link = prompt('Вставьте ссылку на свою соцсеть:');
elementLink.href = link;

