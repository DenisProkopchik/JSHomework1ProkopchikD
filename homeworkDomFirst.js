/*Задание 1 
		Создать html-страницу для ввода имени пользователя.
Необходимо проверять каждый символ, который вводит поль-
зователь. Если он ввел цифру, то не отображать ее в input.*/

function checkName(name, letters = /[a-zа-я\s]/i) {
  name.value = name.value.split('').reduce((sum, let) => {
    if (letters.test(let)) {
      sum += let
    } return sum;
  }, '');
} //Вызов функции происходит в атрибуте onkeyup у инпута с id = "inputName" 

/*Задание 2
	Создать html-страницу с кнопкой Открыть и модальным
	окном. На модальном окне должен быть текст и кнопка Закрыть.
	Изначально модальное окно не отображается. При клике на
	кнопку Открыть появляется модальное окно, на кнопку Закрыть –
	исчезает.*/

modalOpenButton.onclick = () => {
  wrap.getElementsByClassName("modalWindowBox")[0].style.display = "flex";
  document.querySelector('body').style.overflow = 'hidden';
}
modalClosedButton.onclick = () => {
  wrap.getElementsByClassName("modalWindowBox")[0].style.display = "none";
  document.querySelector('body').style.overflow = 'visible';
}


/*Задание 3
		Создать html-страницу с футбольным полем, которое зани-
		мает всю ширину и высоту экрана, и мячом размером 100 на 100
		пикселей.
		Сделать так, чтобы при клике мышкой по полю, мяч плавно
		перемещался на место клика. Учтите: необходимо, чтобы центр
		мяча останавливался именно там, где был совершен клик мышкой.
		Также предусмотрите, чтобы мяч не выходил за границы поля.*/

let ball = document.getElementById('ball');
let posX = 0;
let posY = 0;


function positionBall() {
  posX = Math.floor(footBallPlay.getBoundingClientRect().width / 2 - ball.getBoundingClientRect().width / 2);
  posY = Math.floor(footBallPlay.getBoundingClientRect().height / 2 - ball.getBoundingClientRect().height / 2);
  ball.style.top = `${posY}px`;
  ball.style.left = `${posX}px`;

}

buttonTurnOnFootball.onclick = () => {
  document.querySelector('body').style.overflow = 'hidden';
  footBallPlay.classList.add('turnDisplay');
  positionBall();
  coordinatBall.setAttribute('value', '');
}
buttonTurnOffFootball.onclick = () => {
  document.querySelector('body').style.overflow = 'visible';
  footBallPlay.classList.remove('turnDisplay');
  ball.style.transition = `all 0s`;
}

footBallPlay.onclick = function (event) {

  if (footBallPlay.classList.contains("turnDisplay")) {

    //Первый вариант через transition
    let xBall = Math.floor(event.clientX - ball.getBoundingClientRect().width / 2 - ball.getBoundingClientRect().width * 0.1);
    let yBall = Math.floor(event.clientY - ball.getBoundingClientRect().height / 2);
    ball.style.top = `${yBall}px`;
    ball.style.left = `${xBall}px`;
    ball.style.transition = `all 1s`;
    coordinatBall.value = `${xBall}px:${yBall}px`;

    //Второй вариант через setInterval
		/*function anim () {
			let xBall = Math.floor(event.clientX - ball.getBoundingClientRect().width / 2 - ball.getBoundingClientRect().width * 0.1);
			let yBall = Math.floor(event.clientY - ball.getBoundingClientRect().height / 2);
				
			
			if (xBall === posX && yBall === posY) {
				clearInterval(int);
			} else {
				posY = Math.floor(posY);
				posX = Math.floor(posX);
				xBall > posX ? posX+=1 : xBall < posX ? posX-=1 : null;
				yBall > posY ? posY+=1 : yBall < posY ? posY-=1 : null;
				ball.style.top = `${posY}px`;
				ball.style.left = `${posX}px`; 
			}
		}
		let int = setInterval(anim, 10);*/
  }
}

/*Задание 4
		Создать html-страницу со светофором и кнопкой, которая
		переключает светофор на следующий цвет.*/

let light = '';
let lastLight = '';

trafficLighButton.onclick = function () {
  if (light === 'red') {
    light = 'yellow';
    lastLight = 'red';
    circleRed.style.backgroundColor = '#999';
    circleYellow.style.backgroundColor = 'yellow';
  } else if (light === 'yellow' && lastLight === 'red') {
    light = 'green';
    circleYellow.style.backgroundColor = '#999';
    circleGreen.style.backgroundColor = 'green';
  } else if (light === 'green') {
    light = 'yellow';
    lastLight = 'green';
    circleYellow.style.backgroundColor = 'yellow';
    circleGreen.style.backgroundColor = '#999';
  } else if (light === 'yellow' && lastLight === 'green') {
    light = 'red';
    circleRed.style.backgroundColor = 'red';
    circleYellow.style.backgroundColor = '#999';
  } else {
    light = 'red';
    circleRed.style.backgroundColor = 'red';
  }
}

/*Задание 5
		Создать html-страницу со списком книг.
		При щелчке на книгу, цвет фона должен меняться на оранжевый.
		Учтите, что при повторном щелчке на другую книгу, предыдущей –
		необходимо возвращать прежний цвет.*/

let bookArr = document.querySelectorAll('.listItem');

function click() {
  let arr = document.querySelectorAll('.itemOrange').length;
  arr > 0 ? document.getElementsByClassName('itemOrange')[0].classList.remove('itemOrange') : null;
  this.classList.add('itemOrange');
}

function click2() { //выключает выделение кликом правой кнопкой мыши по item
  listBook.oncontextmenu = () => false;
  this.classList.remove('itemOrange');
}

bookArr.forEach(item => {
  item.addEventListener('click', click);
  item.addEventListener('contextmenu', click2);
});

/*Задание 6
		Создать html-страницу с несколькими кнопками.
		При наведении на кнопку, должна появляться подсказка с тек-
		стом. По умолчанию – подсказка появляется сверху от кнопки. Но
		если она не помещается сверху от кнопки, тогда отображается снизу.*/

let arrButton = document.querySelectorAll('.buttonTilte');

arrButton.forEach((item, index) => {
  item.onmouseover = function () {
    let elem = document.createElement('span');
    document.getElementById(`${this.id}`).append(elem);
    document.querySelector('span').setAttribute('id', `title${this.id}`);
    let titleShow = document.getElementById(`title${this.id}`);
    titleShow.style.position = "absolute";
    titleShow.style.border = "1px solid #000";
    titleShow.style.borderRadius = "5px";
    titleShow.style.backgroundColor = "#df3567";
    item.getBoundingClientRect().top < 30 ? titleShow.style.top = "20px" : titleShow.style.bottom = "20px";
    titleShow.style.left = "0px";
    titleShow.innerHTML = `Подсказка ${index + 1}`;

  }
  item.onmouseout = function () {
    document.getElementById(`title${this.id}`).remove();
  }
})