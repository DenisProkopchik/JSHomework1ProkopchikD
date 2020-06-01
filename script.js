// 1 Задача
let userName = prompt("Введите имя");

alert("Привет, " + userName + "!");

// 2 Задача

const yearNow = 2020; // Текущий год
let yearBorn;

yearBorn = +prompt("Введите год рождения");

alert("Вам " + (yearNow - yearBorn) + " лет!");

// 3 Задача

let sideBox = +prompt("Введите сторону квадрата");

alert("Периметр квадрата равен " + sideBox * 4);

// 4 Задача

let radius = +prompt("Введите радиус окружности");

alert("Площадь окружности равна " + Math.PI * Math.pow(radius, 2));

// 5 Задача

let distance = +prompt("Введите расстояние между городами в км");
let time = +prompt("Введите время в часах");

alert("Ваша скорость будет равна " + distance / time + " км/ч");

// 6 Задача
const euro = 1.11; // Курс евро к доллару
let dollar; //Количество долларов

dollar = +prompt("Введите сумму");

alert(dollar * euro + " Euro");

// 7 Задача
let gigaBite;
let megaBite;
const fileSize = 820;

gigaBite = +prompt("Введите размер флешки в ГБ");
megaBite = 1024 * gigaBite;

alert("У вас поместится " + Math.floor(megaBite / fileSize) + " файлов");

// 8 Задача
let sumMoney = +prompt("Введите количество денег в кошелке");
let priceOfChocolate = +prompt("Введите стоимость шоколадки");
let AllChocolates = Math.floor(sumMoney / priceOfChocolate);

alert("Вы купите " + AllChocolates + " шоколадок, ваша сдача составит " + (sumMoney - AllChocolates * priceOfChocolate)
);
