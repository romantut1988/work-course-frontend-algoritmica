// 1. Презентация. Объекты.

// 2. Упражнение. Свойство объекта.
const user = {
  name: 'Eric Cartman',
  gender: 'male',
  birthday: '07.08.2002'
}
console.log(user.birthday);

// 3. Упражнение. Добавление и удаление.
const user = {
  firstName: 'John',
  lastName: 'Smith',
  birthDate: '1960-05-14',
  department: 'management',
  isActive: true,
}

user.age = 32
delete user.birthDate;
console.log(user);

// 4. Упражнение. Методы объекта.
const user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 37,
  department: 'management',

  setAge(n) {
    this.age += n;
    return this.age;
  },

  getYearsBeforeRetirement() {
    return 60 - this.age;
  }
}
console.log(user.setAge(3));
console.log(user.getYearsBeforeRetirement());

// 5. Задача 1. Копия товара.
const stockItem = {
  id: '23232',
  place: '234',
  weight: '22кг'
}
const storeItem = { ...stockItem };
delete storeItem.place;
storeItem.price = '2000р';
console.log(storeItem);

// 6. Задача. Калькулятор.
// let calc = {
//     multiplication (num1, num2) {
//         variable = num1*num2
//         console.log(num1, '*', num2, '=', variable);
//     },

//     subtraction (num3, num4) {
//         variable = num3-num4
//         console.log(num3, '-', num4, '=', variable);
//     },

//     division (num5, num6) {
//         variable = num5/num6
//         console.log(num5, '/', num6, '=', variable);
//     },

//     addition (num7, num8) {
//         variable = num7+num8
//         console.log(num7, '+', num8, '=', variable);
//     },

// }

// user_num1 = +prompt('Введите первое число');
// user_num2 = +prompt('Введите второе число');

// calc.multiplication(user_num1, user_num2);
// calc.subtraction(user_num1, user_num2);
// calc.division(user_num1, user_num2);
// calc.addition(user_num1, user_num2);



let calc = {
  storage: 0,
  addition() {
    let num1 = prompt('Введите число');
    let num2 = prompt('Введите число');
    console.log(+num1 + Number(num2));
    calc.storage = Number(num1) + Number(num2);

  },
  substraction() {
    let num1 = prompt('Введите число');
    let num2 = prompt('Введите число');
    console.log(+num1 - Number(num2));
    calc.storage = Number(num1) - Number(num2);
  },
  division() {
    let num1 = prompt('Введите число');
    let num2 = prompt('Введите число');
    console.log(+num1 / Number(num2));
    calc.storage = Number(num1) / Number(num2);
  },
  multiplication() {
    let num1 = prompt('Введите число');
    let num2 = prompt('Введите число');
    console.log(+num1 * Number(num2));
    calc.storage = Number(num1) * Number(num2);
  },
  additionStorage() {
    let num1 = prompt('Введите число');
    console.log(+num1 + calc.storage);
    calc.storage = Number(num1) + calc.storage;
  },
  substractionStorage() {
    let num1 = prompt('Введите число');
    console.log(+num1 - calc.storage);
    calc.storage = Number(num1) - calc.storage;
  },
  divisionStorage() {
    let num1 = prompt('Введите число');
    console.log(+num1 / calc.storage);
    calc.storage = Number(num1) / calc.storage;
  },
  multiplicationStorage() {
    let num1 = prompt('Введите число');
    console.log(+num1 * calc.storage);
    calc.storage = Number(num1) * calc.storage;
  },
}
calc.addition();
calc.divisionStorage()

// 7. Задача. Клиент с кредитной картой.
let client = {
  fullName: 'В. К. Миськевич',
  creditLimit: 10000,
  balance: 100,
  precentOfMinPayment: 10,
  getBalance() {
    console.log(`Ваш баланс: ${client.balance}`)
  }
}
client.getBalance()