// 1. Презентация.  Введение в JavaScript.

// 2. Упражнение 1. Консоль.  

console.log('My name is Roman');



// 3. Упражнение 2. Переменная. 

const name = "Roman"
console.log(name);


// 4. Упражнение. Название переменной.  



/** 5. Упражнение. Сложение.  
 * Выведите в консоль общую стоимость всех книг на складе.
 * В переменной bookPrice хранится цена книги в книжном магазине,
 * а в переменной bookAmount — количество книг на складе.
 * Выведите в консоль общую стоимость всех книг на складе.
*/
let bookPrice = 750;
let bookAmount = 14;
console.log(bookPrice * bookAmount);



// 6. Упражнение. Операции над числом.  

let num = 57;
console.log(num ** 5 % 3);


// 7. Задача. Перевод в систему единиц. 

const kmhSpeed = 75;
const msSpeed = (75 * 1000) / 3600;
console.log(msSpeed);

// 8. Количество дней.  
prompt("Какой у вас возраст?");
let n1 = prompt("Enter number 1:", 1);
let o1 = prompt("Enter operator 1:", '+');
let n2 = prompt("Enter number 2:", 1);
let o2 = prompt("Enter operator 2:", '+');
let n3 = prompt("Enter number 3:", 1);
n1 = +n1;
o1 = o1;
n2 = +n2;
o2 = o2;
n3 = +n3;
let answer = 0;
if (o1 == "*" || o1 == "/") {
    if (o2 == "*" || o2 == "/") {
        if (o1 == "*") {
            answer += n1 * n2;
        }
        if (o1 == "/") {
            answer += n1 / n2;
        }
        if (o2 == "*") {
            answer *= n3;
        }
        if (o2 == "/") {
            answer /= n3;
        }
    }
    else if (o2 == "+" || o2 == "-") {
        if (o1 == "*") {
            answer += n1 * n2;
        }
        if (o1 == "/") {
            answer += n1 / n2;
        }
        if (o2 == "+") {
            answer += n3;
        }
        if (o2 == "-") {
            answer += n3;
        }
    }
}

if (o1 == "+" || o1 == "-") {
    if (o2 == "*" || o2 == "/") {
        if (o2 == "*") {
            answer += n2 * n3;
        }
        if (o2 == "/") {
            answer += n2 / n3;
        }
        if (o1 == "+") {
            answer += n1;
        }
        if (o1 == "-") {
            answer += n1;
        }
    }
    else if (o2 == "+" || o2 == "-") {
        if (o1 == "+") {
            answer += n1 + n2;
        }
        if (o1 == "-") {
            answer += n1 - n2;
        }
        if (o2 == "+") {
            answer += n3;
        }
        if (o2 == "-") {
            answer -= n3;
        }
    }
}
alert(n1 + ' ' + o1 + ' ' + n2 + ' ' + o2 + ' ' + n3 + ' = ' + answer);