// 1. Презентация. Работа со строками.

// 2. Упражнение. Имя и фамилия.
let text = "'Вас зовут";
let firstName = 'Alan';
let lastName = 'Turing';
let fullName = text + ' ' + firstName + ' ' + lastName + '...';
console.log(fullName);

// 3. Упражнение. Шаблонная строка.
let firstName = 'Alan';
let lastName = 'Turing';
let greet = `“Рады снова видеть вас, ${firstName} ${lastName}`;
console.log(greet);

// 4. Упражнение. Количество букв.
let fullName = "Alan Turing";
console.log(fullName.length - 1);

// 5. Упражнение. Ввод имени.
let value = prompt('Привет, введи своё имя?');
console.log(`"Привет, ${value}!".`);

console.log('"Привет, ' + value + '!".')

// 6. Упражнение. Операции над числами.
let numberOne = prompt('Введите первое число:');
let numberTwo = prompt('Введите второе число:');
let plus = +numberOne + Number(numberTwo);
let minus = numberOne - numberTwo;
let division = numberOne / numberTwo;
let multiplication = numberOne * numberTwo;
console.log('Сложение: ' + plus);
console.log('Вычитание: ' + minus);
console.log('Деление: ' + division);
console.log('Умножение: ' + multiplication);

// 7. Упражнение. Операции над числами 2.
const num = String(12345 * 98765);
console.log(+num[9]); 

// 8. Программу для вывода суммы цифр.
let numbers = prompt('Введите четырехзначное число')
let text = 'Сумма цифр числа равна';
console.log(text + ' ' + numbers);

// 9. Изменение порядка.
let valueName = prompt('Привет, введи своё полное имя?');
let valueSurname = prompt('Привет, введи свою фамилию?');
console.log(`${valueSurname} ${valueName}`);

// 10. Бонус. Имя из введённой строки.

