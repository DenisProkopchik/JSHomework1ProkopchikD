/*1 Создать массив «Список покупок». Каждый элемент массиваявляется объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.*/

let shoppingList = [
  { name: 'bread', quantity: 1, bought: true },
  { name: 'apple', quantity: 5, bought: false },
  { name: 'meat', quantity: 1, bought: true },
  { name: 'potatoes', quantity: 3, bought: false },
  { name: 'milk', quantity: 2, bought: true }
];

/*1.1 Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные*/

shoppingList.sort((a, b) => (a.bought < b.bought) ? -1 : 1);

console.log(shoppingList);

/*1.2 Добавление покупки в список. Учтите, что при добавлении      
покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
а не добавлять новую. */

let newName = prompt('add name of new product');
let productFind = shoppingList.find(product => product.name === newName);
let ind = shoppingList.includes(productFind);
ind === true ? (productFind && ++productFind.quantity) : shoppingList.push({ name: newName, quantity: 1, bought: false });

console.log(shoppingList);

/*1.3. Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.*/

let nameBought = prompt('mark the bought product');
shoppingList.map(product => product.name === nameBought ? product.bought = true : product.bought);

console.log(shoppingList);

/*2. Создать массив, описывающий чек в магазине. Каждый эле-
мент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.*/

let shoppingList = [
  { name: 'bread', quantity: 1, priceInRubles: 1 },
  { name: 'apple', quantity: 4, priceInRubles: 3 },
  { name: 'meat', quantity: 1, priceInRubles: 8 },
  { name: 'potatoes', quantity: 3, priceInRubles: 1.2 },
  { name: 'milk', quantity: 2, priceInRubles: 1 }
];

/*2.1. Распечатка чека на экран.*/

function printChek(array) {
  let chek = '';
  let sum = shoppingList.reduce((sumPrice, priceProduct) => sumPrice + priceProduct.priceInRubles * priceProduct.quantity, 0);

  shoppingList.forEach(product => (chek += `<li> товар - ${product.name}, количество - ${product.quantity}, цена за еденицу товара- ${product.priceInRubles}, цена за все количество ${(product.priceInRubles * product.quantity).toFixed(2)} </li>`));
  document.write(`<ol> Чек:${chek}</ol> <p>Итого к оплате: ${sum} рублей</p>`);
};
printChek(shoppingList);

/*2.2. Подсчет общей суммы покупки.*/

let sum = shoppingList.reduce((sumPrice, priceProduct) => sumPrice + priceProduct.priceInRubles * priceProduct.quantity, 0);

console.log(`Сумма всех покупок составляет ${sum} рублей`);

/*2.3. Получение самой дорогой покупки в чеке.*/

shoppingList.sort((a, b) => a.priceInRubles * a.quantity > b.quantity * b.priceInRubles ? -1 : 1);
let bigPrice = 0;
shoppingList.find(product => bigPrice = product.name, 0);
//Самая дорогая покупка в данном варианте цена за еденицу * на количество
console.log(`Самая дорогая покупка, с учетом цены и количества, в чеке это ${bigPrice}`);

/*2.4. Подсчет средней стоимости одного товара в чеке.*/

let middlePrice = shoppingList.reduce((sumPrice, product) => (sumPrice + product.priceInRubles), 0) / shoppingList.length;

console.log(`средняя цена за товар ${middlePrice.toFixed(2)} рублей`);

/*3. Создать массив css-стилей (цвет, размер шрифта, выравнива-
ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
ект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и
текст, и выводит этот текст с помощью document.write() в тегах
<p></p>, добавив в открывающий тег атрибут style со всеми сти-
лями, перечисленными в массиве.*/

let styles = [
  { name: 'color', value: '#FF4571' },
  { name: 'font-size', value: '30px' },
  { name: 'text-align', value: 'center' },
  { name: 'text-decoration', value: 'underline' },
  { name: 'background-color', value: 'black' },
  { name: 'text-transform', value: 'uppercase' }
];

let text = prompt('Введите текст');

function addStyles(array, addText) {
  let sumStyles = '';
  styles.forEach(style => sumStyles += `${style.name}:${style.value};`);
  document.write(`<p style=${sumStyles}> ${addText} </p>`);
}
addStyles(styles, text);

/*4. Создать массив аудиторий академии. Объект-аудитория со-
стоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена.
Написать несколько функций для работы с ним.*/

let classrooms = [
  { name: 'D.b Classroom', sitPlaces: 10, faculty: 'Design' },
  { name: 'D.a Classroom', sitPlaces: 12, faculty: 'Design' },
  { name: 'J.b Classroom', sitPlaces: 14, faculty: 'Java' },
  { name: 'J.a Classroom', sitPlaces: 16, faculty: 'Java' },
  { name: 'F.b Classroom', sitPlaces: 18, faculty: 'Front-end' },
  { name: 'F.a Classroom', sitPlaces: 19, faculty: 'Front-end' }
];

/*4.1. Вывод на экран всех аудиторий.*/

let fun = '';

classrooms.forEach(room => fun += (`<li>${room.name}, количества посадочных мест - ${room.sitPlaces}, факультет - ${room.faculty}.</li>`));
document.write(`<ul>Список аудиторий: ${fun}</ul>`);

/*4.2. Вывод на экран аудиторий для указанного факультета.*/

let findFaculty = prompt("Write the faculty's name");
let findRooms = '';

classrooms.filter(room => room.faculty === findFaculty ? findRooms += (`<li>${room.name}, количества посадочных мест - ${room.sitPlaces}.</li>`) : null);

document.write(`<ol>Аудитории для факультета ${findFaculty}: ${findRooms}</ol>`);

/*4.3. Вывод на экран только тех аудиторий, которые подходят для
переданной группы. Объект-группа состоит из названия,
количества студентов и названия факультета.*/

let groups = [
  { name: "Ds-2019.1", students: 10, faculty: 'Design' },
  { name: "Ds-2019.2", students: 11, faculty: 'Design' },
  { name: "Jv-2019.1", students: 12, faculty: 'Java' },
  { name: "Jv-2019.2", students: 15, faculty: 'Java' },
  { name: "FE-2019.1", students: 16, faculty: 'Front-end' },
  { name: "FE-2019.2", students: 19, faculty: 'Front-end' }
];

let groupName = "FE-2019.2";
let roomResult = '';
let group = '';

groups.find(groupObject => groupObject.name === groupName ? group = ({ name: groupObject.name, students: groupObject.students, faculty: groupObject.faculty }) : null);
classrooms.filter(room => (room.faculty === group.faculty && room.sitPlaces >= group.students) ? roomResult += (`<li>${room.name}.</li>`) : null);
document.write(`<ol>Аудитории для этой группы: ${roomResult}</ol>`);

/*4.4. Функция сортировки аудиторий по количеству мест.*/

//От большего к меньшему
console.log(classrooms.sort((a, b) => a.sitPlaces > b.sitPlaces ? -1 : 1));

/*4.5. Функция сортировки аудиторий по названию (по алфа-
виту).*/

console.log(classrooms.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
