// 1. Презентация. Коллекции элементов.

// 2. Упражнение 1. Вывод коллекции элементов.
const elements = document.querySelectorAll('.primary');
elements.forEach((elements) => {
    console.log(elements);
});

// 3. Упражнение 2. Изменение классов.
const activeUl = document.querySelector('ul');
activeUl.classList.add('item');
console.log(activeUl);

const activeLi = document.querySelector('li');
activeLi.classList.add('secondary');
console.log(activeLi);

// 4. Задача. Назначение стилей.

// 5. Задача. Таблица криптовалют. 