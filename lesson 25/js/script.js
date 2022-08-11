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

//  6. Задача 2. Регулятор громкости.

