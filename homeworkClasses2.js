/*Задание 1
Реализовать класс, описывающий простой маркер. В классе
должны быть следующие компоненты:
■ поле, которое хранит цвет маркера;
■ поле, которое хранит количество чернил в маркере (в процентах);
■ метод для печати (метод принимает строку и выводит
текст соответствующим цветом; текст выводится до тех
пор, пока в маркере есть чернила; один не пробельный
символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер,
унаследовав его от простого маркера и добавив метод для заправки
маркера.
Продемонстрировать работу написанных методов.*/

class Marker {
  constructor(options) {
    this.color = options.color,
      this.percent = options.percent
  }

  print() {
    if (this.percent <= 0) {
      let question = confirm('Требуется заправка. Хотите зарядить маркер?');
      question ? this.refillMarker = 100 : null;
    }
    if (this.percent > 0) {
      let text = prompt('type text');
      let spaces = text.split('').reduce((sum, item) => {
        if (item === " ") {
          sum++;
        } return sum;
      }, 0);
      let textPrint = text.slice(0, ((this.percent + spaces / 2) / 0.5));
      document.write(`<div style="color: ${this.color}">${textPrint}</div>`);
      this.percent = this.percent - (textPrint.length - spaces) / 2;
      if (this.percent <= 0) {
        alert(`В маркере ${this.percent = 0}% чернил`);
      } else {
        alert(`В маркере ${this.percent}% чернил`);
      }
    }
  }
}

class Refill extends Marker {
  constructor(options) {
    super(options);
  }

  set refillMarker(value) {
    this.percent = value;
  }
}

let markerRed = new Refill({
  color: "red",
  percent: 2
})

markerRed.print();
markerRed.print();
markerRed.print();
markerRed.print();

/*Задание 2
Реализуйте класс ExtendedDate, унаследовав его от стандарт-
ного класса Date и добавив следующие возможности:
■■ метод для вывода даты (числа и месяца) текстом;
■■ метод для проверки – это прошедшая дата или будущая
(если прошедшая, то метод возвращает false; если буду-
щая или текущая, то true);
■■ метод для проверки – високосный год или нет;
■■ метод, возвращающий следующую дату.
Создайте объект класса ExtendedDate и выведите на экран
результаты работы новых методов.*/

class Dates {
  constructor(options) {
    this.day = options.day,
      this.month = options.month,
      this.year = options.year
  }
}

class ExtendedDate extends Dates {
  constructor(options) {
    super(options);
  }

  dayAndMonthWords() {
    let arrWordDays = ['первое', 'второе', 'третье', 'четвертое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое', 'десятое', 'одиннадцатое', 'двенадцатое', 'тринадцатое', 'четырнадцатое', 'пятнадцатое', 'шестнадцатое', 'семнадцатое', 'восемнадцатое', 'девятнадцатое', 'двадцатое', 'двадцать первое', 'двадцать второе', 'двадцать третье', 'двадцать четвертое', 'двадцать пятое', 'двадцать шестое', 'двадцать седьмое', 'двадцать восьмое', 'двадцать девятое', 'тридцатое', 'тридцать первое'];
    let arrWordMonths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let dayWord = arrWordDays[(this.day - 1)];
    let monthWord = arrWordMonths[(this.month - 1)];
    document.write(`${dayWord} ${monthWord} ${this.year} года`);
  }

  get beforeOrAfter() {
    let now = new Date();
    let dat = new Date(`${this.year}-${this.month}-${this.day}`);
    let result = undefined;
    now > dat ? result = false : now < dat ? result = true : result = 'Now';
    return result;
  }
  checkYear() {
    this.year % 4 === 0 || this.year % 100 === 0 || this.year % 400 === 0 ? alert('Високосный') : alert('НЕвисокосный');
  }

  nextDate() {
    this.month = Number(this.month);
    this.day = Number(this.day);
    let checkResult = undefined;
    this.year % 4 === 0 || this.year % 100 === 0 || this.year % 400 === 0 ? checkResult = true : checkResult = false;
    ++this.day;
    if (checkResult === true && this.month === 2 && this.day > 29) {
      this.day = this.day - 29;
      ++this.month;
    }
    if (checkResult === false && this.month === 2 && this.day > 28) {
      this.day = this.day - 28;
      ++this.month;
    }
    if ((this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) && this.day > 30) {
      this.day = this.day - 30;
      ++this.month;
    }
    if ((this.month === 1 || this.month === 3 || this.month === 5 || this.month === 7 || this.month === 8 || this.month === 10) && this.day > 31) {
      this.day = this.day - 31;
      ++this.month;
    }
    if (this.month === 12 && this.day > 31) {
      this.day = this.day - 31;
      this.month = this.month - 11;
      ++this.year;
    }

    String(this.day).length < 2 ? this.day = "0" + this.day : this.day;
    String(this.month).length < 2 ? this.month = "0" + this.month : this.month;
    document.write(`<p>Next date will be ${this.day} ${this.month} ${this.year}</p>`);
  }
}

let anyDate = new ExtendedDate({
  day: 29,
  month: 2,
  year: 2020
})

alert(anyDate.beforeOrAfter);
anyDate.checkYear();
anyDate.dayAndMonthWords();
anyDate.nextDate();

/*Задание 3
Реализовать класс Employee, описывающий работника, и со-
здать массив работников банка.
Реализовать класс EmpTable для генерации html кода таблицы
со списком работников банка. Массив работников необходимо
передавать через конструктор, а получать html код с помощью
метода getHtml().
Создать объект класса EmpTable и вывести на экран результат
работы метода getHtml().*/

class Employee {
  constructor(options) {
    this.name = options.name,
      this.age = options.age,
      this.gender = options.gender
  }
}

class EmpTable {
  constructor(array) {
    this.array = array
  }

  getHtml() {
    let newArray = this.array.reduce((sum, item) => sum + `<div class ="row"><div class="columns">${item.name}</div><div class="columns">${item.age}</div><div class="columns">${item.gender}</div></div>`, '<div class ="row"><div class="columns title">Работники</div><div class="columns title">Возраст</div><div class="columns title"  id="title--right">Пол</div></div>');

    document.write(`<div class="table">${newArray}</div>`);
    document.getElementsByClassName("table")[0].style.border = "2px solid #000";
    document.getElementsByClassName("table")[0].style.borderBottom = "None";
    document.querySelectorAll(".row").forEach(item => item.style.borderBottom = "2px solid #000");
  }
}

let worker1 = new Employee({
  name: 'Иван',
  age: 24,
  gender: 'М'
})

let worker2 = new Employee({
  name: 'Николай',
  age: 50,
  gender: 'М'
})

let worker3 = new Employee({
  name: 'Виктория',
  age: 20,
  gender: 'Ж'
})

let worker4 = new Employee({
  name: 'Екатерина',
  age: 26,
  gender: 'Ж'
})

let arrayWorkers = new EmpTable([worker1, worker2, worker3]);

arrayWorkers.getHtml();

/*Задание 4
Реализовать класс StyledEmpTable, который наследуется от
класса EmpTable. Добавить метод getStyles(), который возвращает
строку со стилями для таблицы в тегах style. Переопределить
метод getHtml(), который добавляет стили к тому, что возвращает
метод getHtml() из родительского класса.
Создать объект класса StyledEmpTable и вывести на экран
результат работы метода getHtml().
*/

class StyledEmpTable extends EmpTable {
  constructor(array) {
    super(array);
  }

  get getStyles() {
    return `
			<style>
			#title--right{
				border-right: 3px solid red !important;
			}
			.title{
				font-weight: 700;
			}
			.table{
				width: 300px;
				border: 3px solid red !important;
				border-bottom: none !important;
				background-color: yellow !important;
				border-right: none !important;
			}
			.row{
				display: flex;
				border-bottom: 3px solid red !important;
			}
			.columns{
				width: 100px;
				border-right: 3px solid red !important;
			}
			</style>`;

  }

  getHtml() {
    super.getHtml();
    document.write(this.getStyles);
  }
}

let arrayWorkers2 = new StyledEmpTable([worker1, worker2, worker3, worker4]);

arrayWorkers2.getHtml();