//Задача 1

let age = +prompt('Введите свой возраст');

if (0 >= age && age < 12) {
  alert('Вы ребенок');
} else if (age < 18) {
  alert('Вы подросток');
} else if (age < 60) {
  alert('Вы взрослый');
} else if (age >= 60 && age < 120) {
  alert('Вы пенсионер');
} else {
  alert('Какой необычный возраст');
}

//Задача 2
let number = +prompt('Введите число от 0 до 9');

switch (number) {
  case 0:
    alert(')');
    break;
  case 1:
    alert('!');
    break;
  case 2:
    alert('@');
    break;
  case 3:
    alert('#');
    break;
  case 4:
    alert('$');
    break;
  case 5:
    alert('%');
    break;
  case 6:
    alert('^');
    break;
  case 7:
    alert('&');
    break;
  case 8:
    alert('*');
    break;
  case 9:
    alert('(');
    break;
  default:
    alert('Надо ввести положительное число от 0 до 9');

}

//Задача 3

let numMain = +prompt('Введите трехзначное число');
let num1 = Math.floor(numMain / 100);
let numDoble = numMain - num1 * 100;
let num2 = Math.floor(numDoble / 10);
let num3 = numDoble % 10;

if (numMain >= 100 && numMain < 1000) {
  num1 = String(num1);
  num2 = String(num2);
  num3 = String(num3);
  alert(num3 + num2 + num1 + ' ваше число');
} else {
  alert('Вы ввели неправильное число!!!');
}

//Задача 4

let year = +prompt('Введите год');

(year % 4 === 0 && year % 100 !== 0) ? alert(year + ' год - високосный') : alert(year + ' год - Не високосный');

//Задача 5


//Задача 6

let dollar = +prompt('Введите количество USD');
let currency = prompt('Введите валюту для конвертации');
let euro = 0.88 * dollar;
let uan = 26.38 * dollar;
let azn = 1.7 * dollar;

switch (currency) {
  case 'euro':
    alert('У вас ' + euro + ' евро');
    break;
  case 'uan':
    alert('У вас ' + uan + ' украинской гривны');
    break;
  case 'azn':
    alert('У вас ' + azn + ' азербайджанского маната');
    break;
}

//Задача7

let sum = +prompt('Введите сумму покупок');
let discount

if (sum >= 200 && sum < 300) {
  discount = sum * 0.03
  alert('Ваша скидка составит' + ' ' + Math.floor(discount) + ' (3% от суммы)');
} else if (sum >= 300 && sum < 500) {
  discount = sum * 0.05
  alert('Ваша скидка составит' + ' ' + Math.floor(discount) + ' (5% от суммы)');
} else if (sum >= 500) {
  discount = sum * 0.07
  alert('Ваша скидка составит' + ' ' + Math.floor(discount) + ' (7% от суммы)');
} else if (sum >= 0 && sum < 200) {
  alert('У вас не будет скидки');
} else {
  alert('Сумма не может быть отрицательной))');
}

//Задача 8

let squarePerimeter = +prompt('Введите периметр квадрата');
let circumFerence = +prompt('Введите длину окружности');

if (squarePerimeter <= 0 || circumFerence <= 0) {
  alert('Вы ввели НЕположительные значения');
} else {

  let squareSide = squarePerimeter / 4;
  let circumDiameter = circumFerence / Math.PI;

  (squareSide >= circumDiameter) ? alert('Ваша окружность вместиться в квадрат') : alert('Ваша окружность НЕ вместиться в квадрат');
}

//Задача 9
let points = 0;
let question1 = prompt('Кто из этих писателей написал "Войну и мир": Пушкин, Толстой, Чехов?');

(question1 === 'Толстой') ? (alert('Верно, вы получаете 2 балла!!!'), (points += 2)) : alert('Не верно, вы не получаете баллов.');

let question2 = prompt('Назовите столицу Беларуси: Минск, Москва, Берлин.');

(question2 === 'Минск') ? (alert('Верно, вы получаете 2 балла!!!'), (points += 2)) : alert('Не верно, вы не получаете баллов.');

let question3 = +prompt('Назовите сколько метров в одном километре: 10, 100, 1000.');

(question3 === 1000) ? (alert('Верно, вы получаете 2 балла!!!'), (points += 2)) : alert('Не верно, вы не получаете баллов.');

alert('Вы получаете ' + points + ' баллов');