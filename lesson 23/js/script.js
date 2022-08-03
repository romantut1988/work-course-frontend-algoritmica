// 1. Презентация. Объекты.

// 2. Упражнение. Свойство объекта.
const user = {
    name: 'Eric Cartman',
    gender: 'male',
    birthday: '07.08.2002'
};
console.log(user.birthday);

// 3. Упражнение. Добавление и удаление.
const user = {
    firstName: 'John',
    lastName: 'Smith',
    birthDate: '1960-05-14',
    department: 'management',
    isActive: true,
}

// user.age = 32
// delete user.birthDate;
// console.log(user);
// 4. Упражнение. Методы объекта.

// 5. Задача 1. Копия товара.

// 6. Задача. Калькулятор.
let calculator = {
    sum: function() {
      return this.a + this.b;
    },
  
    mul: function() {
      return this.a * this.b;
    },
  
    readValues: function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  }
  
  calculator.readValues();
  alert(calculator.sum());
  alert(calculator.mul());
  
// 7. Задача. Клиент с кредитной картой.
