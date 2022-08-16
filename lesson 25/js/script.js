// 1. Презентация. Обработка событий. 

// 2. Упражнение 1. Добавление обработчика событий.
// const elements = document.querySelectorAll('button');
// function changeColor() {
//     this.style.color = 'grey'
// }
// elements.forEach((element) => {  
//   element.addEventListener('click', changeColor);
// });

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        button.style.color = 'grey';
    })
})
// 3. Упражнение 2. Удаление обработчика событий.
const elements = document.querySelectorAll('button');
function changeText() {
    this.classList.add("active");
    event.target.removeEventListener('click', changeText);
}
elements.forEach((element) => {
    element.addEventListener('click', changeText);
});

// 4. Упражнение 3. Добавление событий клавиатуры.
document.addEventListener('keyup', event => {
    if (event.code === 'Enter') console.log('enter');
});

// 5. Задача 1. Карточка товара с доп. информацией.
let show = document.querySelector('.show');
let hiddenList = document.querySelectorAll('.hidden')
let ddd = document.querySelector('.wrapper');
let hide = document.querySelector('.hide');
let container = document.querySelector('.container')
function showDetails(event) {
    container.classList.remove('container')
    container.classList.add('container2')
    hiddenList.forEach((element) => {
        element.classList.remove('hidden');
    });
    this.classList.add('hidden')
    event.target.removeEventListener('click', showDetails);
}
show.addEventListener('click', showDetails)
function hideDetails(event) {
    container.classList.remove('container2')
    container.classList.add('container')
    ddd.classList.add('hidden')
    show.classList.remove('hidden');
    event.target.removeEventListener('click', hideDetails);
}
hide.addEventListener('click', hideDetails)
//  6. Задача 2. Регулятор громкости.

