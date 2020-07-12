/*1. Написать функцию, которая принимает строку и выводит
статистику о ней: количество букв, количество цифр и
количество других знаков.*/

let str1 = prompt('Введите строку');

function sumLetAndNum(str, numbers = /[0-9]/, letters = /[a-zа-я]/i){
	let sumNum = 0;
	let sumLet = 0;
	let sumSign = 0;

	str1.split('').forEach(a => numbers.test(a) === true ? ++sumNum : letters.test(a) === true ? ++sumLet:  ++sumSign);
	return `Количество цифр - ${sumNum}, количество букв - ${sumLet}, количество знаков - ${sumSign}.`;
}
console.log(sumLetAndNum(str1));

/*3. Написать функцию, которая заменяет в полученной строке
большие буквы на маленькие, маленькие – на большие, а
цифры – на знак нижнего подчеркивания.*/

let str3 = prompt('Введите строку');

function changeLetAndNum (str) {
	const upperLetters = /[A-ZА-Я]/;
	const lowerLetters = /[a-zа-я]/;

 return str.replace(/[0-9]/g, '_').replace(/[a-zа-я]/gi, a => upperLetters.test(a) === true ? a.toLowerCase(): lowerLetters.test(a) === true ? a.toUpperCase() : null);
}

console.log(changeLetAndNum(str3));

/*4. Написать функцию, которая преобразует названия css-
стилей с дефисом в название в СamelСase стиле: font-size
в fontSize, background-color в backgroundColor, textalign
в textAlign.*/

let style = 'text-decoration';

function styleCamelCase (stylesName) {
	return stylesName.split('-').slice(0, 1) + String(stylesName.split('-').slice(1)).charAt(0).toUpperCase() + String(stylesName.split('-').slice(1)).slice(1);
}

console.log(styleCamelCase (style));

/*5. Написать функцию, которая принимает словосочетание
и превращает его в аббревиатуру.
Например: cascading style sheets в CSS, объектно-
ориентированное программирование в ООП.*/

let phrase = prompt('Введите фразу для получения аббревиатуры');

function abbreviation (str) {
	return str.split(' ').reduce((result, word) => result + word.charAt(0).toUpperCase(), '');
}

console.log(abbreviation(phrase));

/*6. Написать функцию, которая принимает любое коли-
чество строк, объединяет их в одну длинную строку и
возвращает ее.*/

let strArray = [
	{value: 'функция,'},
	{value: ' которая принимает'},
	{value: ' любое количество строк,'},
	{value: ' объединяет их'},
	{value: ' в '},
	{value: 'строку'}
];

function strConcat (str) {
	return str.reduce((sum, obj) => sum + obj.value, '');
}

console.log(strConcat(strArray));

/*7. Написать функцию – калькулятор. Функция принимает
строку с примером, определяет, какое действие необходимо
выполнить (+ - * /), переводит операнды в числа, решает
пример и возвращает результат.*/

let num7 = prompt('Введите ваш пример');

function mathematic (str) {
	return eval(str);
}

console.log(mathematic(num7));

/*8. Написать функцию, которая получает url и выводит под-
робную информацию о нем.
Например: url “https://itstep.org/ua/about”, информация
“протокол: https, домен: itstep.org, путь: /ua/about”.*/

let url = new URL('https://itstep.org/ua/about');

function infoAboutUrl (u) {
	return `Url - ${u.href}\n Информация:\n протокол - ${u.protocol}\n домен - ${u.host}\n путь - ${u.pathname + u.search + u.hash}`;
}
console.log(infoAboutUrl(url));