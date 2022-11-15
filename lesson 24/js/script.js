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
const elements = document.querySelectorAll('tr');
elements.forEach((element) => {
    if (+element.lastChild.innerText > 0) {
        element.lastChild.classList.add('increase');
    }
    else {
        element.lastChild.classList.add('decrease');
    }
});

// 5. Задача. Таблица криптовалют. 
const data = [
    { "name": "Биткоин", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Эфириум", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Рипл", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Лайткоин", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Эфириум Классик", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

const body = document.body;
const table = document.createElement('table');
const th = document.createElement('thead');
const tb = document.createElement('tbody');
th.innerHTML = '<tr><th>Name</th></tr>';
table.append(th);
table.append(tb);
data.forEach((element) => {
    const tr = document.createElement('tr');
    for (key in element) {
        let td = document.createElement('td');
        td.innerHTML = element[key];
        tr.append(td);
        tb.append(tr);
    }

});
body.append(table);