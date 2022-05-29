"use strict"

//интерфейс преобразования ФИО

let fio = prompt('Введите ФИО', ['ФИО']);

function getCancel () {
    if (fio === null) {
        fio = "Фамилия Имя Отчество";
    }
}
getCancel();


let str = fio.split(' ').join(' ');
let replaceStr = str.replace(/ +/g, ' ');
let cleanStr = replaceStr.trim(replaceStr);
let cleanArr = cleanStr.split(' ');

function getLastName () {
    let lastName = cleanArr[0];
    if (!lastName || lastName === 'ФИО') {
        lastName = 'Фамилия';
    }
    document.getElementById("lastname").setAttribute("value", lastName[0].toUpperCase() + lastName.slice(1).toLowerCase());
}
getLastName ();

function getName () {
    let name = cleanArr[1];
    if (!name) {
        name = 'Имя';
    }
    document.getElementById("name").setAttribute("value", name[0].toUpperCase() + name.slice(1).toLowerCase());
}
getName ();

function getAddName () {
    let addName = cleanArr[2];
    if (!addName) {
        addName = 'Отчество';
    }
    document.getElementById("addname").setAttribute("value", addName[0].toUpperCase() + addName.slice(1).toLowerCase());
}
getAddName ();

//интерфейс для анонимных комментариев со спамфильтром

let words = [];

function checkSpam() {
    let text = document.getElementById('comment').value;
    let nospam = text.replace(/viagra/gi, '***').replace(/XXX/gi, '***');
    let newElement = document.createElement('div');
    newElement.innerHTML = nospam;
    document.querySelector('.comments').insertAdjacentElement("beforeend", newElement);
}


document.querySelector('.btn').addEventListener ('click', function() {
    checkSpam();
    document.getElementById('comment').value = "";
});

document.querySelector('.btn2').addEventListener ('click', function() {
    document.getElementById('comment').value = "";
});

document.querySelector('.btn3').addEventListener ('click', function() {
    document.querySelector('.comments').innerHTML="";
});

//функция formatDate(date), форматирующая date


function formatDate(date) {
  let ms = new Date() - date;

  if (ms < 1000) {
    return 'прямо сейчас';
  }

  let sec = Math.floor(ms / 1000);

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(ms / 60000);
  if (min < 60) {
    return min + ' мин. назад';
  }

  let changeDate = date;
  changeDate = [
    '0' + changeDate.getDate(),
    '0' + (changeDate.getMonth() + 1),
    '' + changeDate.getFullYear(),
    '0' + changeDate.getHours(),
    '0' + changeDate.getMinutes()
  ].map(part => part.slice(-2));

  return changeDate.slice(0, 3).join('.') + ' ' + changeDate.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 1))); 
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));

//генератор 10 случайных чисел

let result = [];

function getRandom(min, max, count) {
    while (result.length < count) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        if (result.indexOf(number) === -1) {
            result.push(number);
        }
    }
    document.querySelector('.result').innerHTML = 'Сгенерировали: ' + result;

}

function getMax () {
    let max = result[0];
    result.forEach(function (elem, index) {

    if(index > 0 ){
        if(max < elem){
            max = elem;
        }
    }
    });
    document.querySelector('.max').innerHTML = 'Максимальное: ' + max;
}

function getMin () {
    let min = result[0];
    result.forEach(function (elem, index) {
        if(index > 0 ){
            if(min > elem){
                min = elem;
            }
        }
    });
    document.querySelector('.min').innerHTML = 'Минимальное: ' + min;
}

let average;

function getAverage () {
    let average = result.reduce((a,b)=>a+b) / result.length;
    document.querySelector('.average').innerHTML = 'Среднее арифметическое: ' + average;
}

function getSum () {
    let sum = result.reduce((a,b)=>a+b);
    document.querySelector('.sum').innerHTML = 'Сумма: ' + sum;
}


function getMult () {
    let mult = result.reduce((a,b)=>a*b);
    document.querySelector('.multiply').innerHTML = 'Произведение: ' + mult;
}

document.querySelector('.random').addEventListener ('click', function() {
    getRandom(-10,10,10);
    getMax();
    getMin();
    getAverage();
    getSum();
    getMult();
});

