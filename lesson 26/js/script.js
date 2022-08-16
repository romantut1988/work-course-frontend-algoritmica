// 1. Презентация. Элементы ввода информации. 

// 2. Упражнение 1. Создание формы.

// 3. Упражнение 2. Получение значений.
let name = document.querySelector('.name-input');
let comment = document.querySelector('.comment-input');
let send = document.querySelector('button');
function printValue() {
    console.log(name.value)
    console.log(comment.value)
}
send.addEventListener('click', printValue)
// 4. Задача. Конвертер валют.


