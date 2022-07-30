// 1. Презентация. Массивы.

// 2. Упражнение. Изменение значения элемента.
const names = ['Victor', 'Gwen', 'Katrin'];
console.log(names[1]);
names[1] = 'Classified';
console.log(names);

// 3. Упражнение. I know how to use cycles.
const classmates = ['Peter', 'Gwen', 'Norman'];
classmates.push('Vasia');
classmates.shift();
console.log(classmates);

// 4. Упражнение. Все отриц числа.
function oddNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item % 2)
            console.log(item);
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
oddNumbers(numbers);

// 5. Упражнение. Все положит числа.

// 6. Задача. Массив фильмов.

// 7. Задача. Функции обратного вызова.

// 8. Kebab-case в UPPER_CASE.

