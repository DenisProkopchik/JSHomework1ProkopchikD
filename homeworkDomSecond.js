'use strict';
/*Задание 1
		Создать html-страницу с трекбаром.
		Предоставить пользователю возможность изменять положение
		синего указателя.*/

let bar = document.getElementsByClassName('trek--bar')[0];
let pointer = document.getElementsByClassName('trek--pointer')[0];
let result = document.getElementsByClassName('trek--result')[0];

let barClientCoords = bar.getBoundingClientRect();

pointer.onmousedown = function (event) {
  pointer.ondragstart = function () {
    return false;
  };

  let pointerClientCoords = pointer.getBoundingClientRect();
  let right = bar.offsetWidth - pointer.offsetWidth;
  let shiftX = event.pageX - pointerClientCoords.left + pageXOffset;
  document.onmousemove = function (event) {
    let newLeft = event.pageX - barClientCoords.left + pageXOffset - shiftX;
    newLeft < 0 ? newLeft = 0 : newLeft > right ? newLeft = right : null;
    pointer.style.left = `${newLeft}px`;
    result.innerHTML = `${Math.round(newLeft / right * 100)}%`;
  }

  document.onmouseup = function () {
    document.onmousemove = document.onmouseup = null;
  }
  return false;
}

/*Задание 2
		Создать html-страницу с галереей.
		В один момент времени на экране отображается одно изо-
		бражение и две кнопки: Назад и Вперед. При нажатии на кнопки
		изображения должны переключатся в указанном порядке. Когда
		следующего/предыдущего изображения нет, то соответствующую
		кнопку необходимо блокировать. Изображения хранить в заранее
		подготовленном массиве. */

let arrSlide = [...document.querySelectorAll('.slide--img--box')];
let arrowRight = document.getElementById("arrowRight");
let arrowLeft = document.getElementById("arrowLeft");
let index = 0;

function checkIndex(ind) {
  ind < 0 ? ind = 0 : ind > arrSlide.length ? ind = arrSlide.length - 1 : null;
}

function clickRight() {
  let lastElem = index;
  checkIndex(index);
  if (index >= 0 && index < arrSlide.length) {
    arrowLeft.style.display = 'block';
    ++index;
    arrSlide[index].style.opacity = '1';
    arrSlide[index].style.left = '0px';
    let move = arrSlide[index].getBoundingClientRect().width;
    arrSlide[lastElem].style.left = `-${move}px`;
    arrSlide[lastElem].style.opacity = '0';
  }
  if (index === (arrSlide.length - 1)) {
    arrowRight.style.display = 'none';
    arrowLeft.style.display = 'block';
  }
}

arrowRight.addEventListener('click', clickRight);

function clickLeft() {
  let lastElem = index;
  checkIndex(index);
  if (index >= 0 && index < arrSlide.length) {
    arrowRight.style.display = 'block';
    --index;
    arrSlide[index].style.opacity = '1';
    arrSlide[index].style.left = `0px`;
    let move = arrSlide[index].getBoundingClientRect().width;
    arrSlide[lastElem].style.left = `${move}px`;
    arrSlide[lastElem].style.opacity = '0';
  }
  if (index === 0) {
    arrowRight.style.display = 'block';
    arrowLeft.style.display = 'none';
  }
}

arrowLeft.addEventListener('click', clickLeft);

/*Задание 3 Создать html-страницу с блоками информации, которые открываются по щелчку на заголовок. В один момент времени может	быть развернут только один блок информации.*/

let arrTitle = [...document.querySelectorAll('.title--name')];
let arrText = [...document.querySelectorAll('.info--block--text')];
let arrHide = [...document.querySelectorAll('.title--hide')];

arrTitle.forEach((item, index) => item.onclick = function () {
  arrText.forEach(itemStyle => {
    itemStyle.style.display = 'none';
    itemStyle.style.height = '0';
  })
  arrHide.forEach(itemStyle => {
    itemStyle.style.display = 'none';
  })
  arrHide[index].style.display = 'block';
  arrText[index].style.display = 'block';
  arrText[index].style.height = 'auto';
});

arrHide.forEach((item, index) => item.onclick = function () {
  item.style.display = 'none';
  arrText[index].style.display = 'none';
  arrText[index].style.height = '0';
});

/*Задание 4
Создать html-страницу с новостями.
Необходимо отлавливать, когда скролл доходит до конца страницы, и догружать еще новости в список. Новости для подгрузки хранить в заранее подготовленном массиве.
Облегченный вариант: вместо отлова, когда скролл дойдет до конца страницы, используйте кнопку в конце списка новостей.*/

let arrNewsBlock = [...document.querySelectorAll('.news--block')];
let indexNews = 0;

window.addEventListener('scroll', function () {
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  let differentY = scrollHeight - pageYOffset - document.documentElement.clientHeight;
  if (differentY < 50) {
    let showNewsBlock = arrNewsBlock.slice(indexNews, indexNews + 2);
    showNewsBlock.forEach(item => item.style.display = "block");
    indexNews += 2;
  }
});

/*Задание 5
Создать html-страницу, на которой пользователь может ввести номер месяца, год, и получить календарь на указанный месяц.
Календарь можно генерировать с помощью таблицы. Начальный день недели всегда должен быть понедельник.*/

let month = document.getElementsByClassName('calendar--imput')[0];
let year = document.getElementsByClassName('calendar--imput')[1];
let buttonCalendar = document.getElementsByClassName('calendar--date__button')[0];
let arrDaysOfTheWeek = ['Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

buttonCalendar.addEventListener('click', function (event) {
  let checkClass = document.getElementsByClassName('calendar--wrapper')[0].classList.contains('checkTable');

  if (month.value < 1 || month.value > 12 || year.value < 1) {
    alert('Введите корректные данные');
  } else {
    checkClass ? document.getElementsByClassName('calendar--table')[0].remove() : null;
    document.getElementsByClassName('calendar--wrapper')[0].classList.add('checkTable');
    Date.prototype.daysInMonth = function () {
      return 33 - new Date(year.value, month.value - 1, 33).getDate();
    };

    let firstDayOnTheWeek = new Date(year.value, month.value - 1, 1).getDay();
    let sumDays = new Date().daysInMonth();
    let tableWrapper = document.getElementsByClassName('calendar--table--wrapper')[0];
    tableWrapper.insertAdjacentHTML('beforeend', '<table class="calendar--table"></table>');
    let table = document.getElementsByClassName('calendar--table')[0];
    table.style.width = '100%';
    table.style.border = '1px solid #000';

    for (let i = 1; i <= 8; i++) {
      table.insertAdjacentHTML('beforeend',
        `<tr class="calendar--table--rows" id="calendar--table--row${i}">
					<td class="row${i}--columns" id="row${i}Column1"></td>
					<td class="row${i}--columns" id="row${i}Column2"></td>
					<td class="row${i}--columns" id="row${i}Column3"></td>
					<td class="row${i}--columns" id="row${i}Column4"></td>
					<td class="row${i}--columns" id="row${i}Column5"></td>
					<td class="row${i}--columns" id="row${i}Column6"></td>
					<td class="row${i}--columns" id="row${i}Column7"></td>
				</tr>`);
    }

    let row1 = [...document.querySelectorAll('.row1--columns')];
    row1.forEach((item, index) => {
      item.innerHTML = arrDaysOfTheWeek[index];
      item.style.border = '1px solid #000';
      item.style.fontWeight = '600';
      item.style.textAlign = 'center';
    });

    let bigArrColumns = [];

    for (let i = 2; i <= 8; i++) {
      [...document.querySelectorAll(`.row${i}--columns`)].forEach(item => bigArrColumns.push(item));
    }
    let firstBlock = 0;
    let lastBlock = 0;
    for (let i = 1; i <= sumDays; i++) {
      let start = firstDayOnTheWeek + i + 5;
      i === 1 ? firstBlock = start : i === sumDays ? lastBlock = start : null;
      bigArrColumns[start].innerHTML = i;
    }

    firstBlock > 6 ? document.getElementById('calendar--table--row2').remove() : null;
    lastBlock < 35 ? document.getElementById(`calendar--table--row7`).remove() : null;
    lastBlock < 42 ? document.getElementById(`calendar--table--row8`).remove() : null;

    bigArrColumns.forEach(item => {
      item.style.border = '1px solid #000';
      item.style.textAlign = 'center';
    });
  }
  event.preventDefault();
});
