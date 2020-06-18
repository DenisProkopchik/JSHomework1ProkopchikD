/*8. Написать функцию, которая принимает часы, минуты и
секунды и возвращает это время в секундах.*/

function time(hours, minutes, seconds) {
  return `Ваше время составляет ${hours * 3600 + minutes * 60 + seconds} секунд`;
}
console.log(time(1, 2, 1));

/*9. Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс».*/

function time(seconds) {
  let timeHours = Math.floor(seconds / 3600);
  let timeMinutes = Math.floor((seconds - timeHours * 3600) / 60);
  let timeSeconds = seconds - (timeHours * 3600 + timeMinutes * 60);
  timeHours < 10 ? timeHours = "0" + timeHours : timeHours = timeHours;
  timeMinutes < 10 ? timeMinutes = "0" + timeMinutes : timeMinutes = timeMinutes;
  timeSeconds < 10 ? timeSeconds = "0" + timeSeconds : timeSeconds = timeSeconds;
  return `Ваше время составляет ${timeHours}:${timeMinutes}:${timeSeconds}`;
}
console.log(time(5420));

/*10. Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2
даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыду-
щих 2-х заданий: сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите
обратно в «чч:мм:сс».*/

function timeDifference(firstHours, firstMinutes, firstSeconds, secondHours, secondMinutes, secondSeconds) {
  let firstTime = firstSeconds + firstMinutes * 60 + firstHours * 3600;
  let secondTime = secondSeconds + secondMinutes * 60 + secondHours * 3600;
  let timeDif = Math.abs(firstTime - secondTime);
  let differenceHours = Math.floor(timeDif / 3600);
  let differenceMinutes = Math.floor((timeDif - differenceHours * 3600) / 60);
  let differenceSeconds = timeDif - (differenceHours * 3600 + differenceMinutes * 60);
  differenceHours < 10 ? differenceHours = "0" + differenceHours : differenceHours = differenceHours;
  differenceMinutes < 10 ? differenceMinutes = "0" + differenceMinutes : differenceMinutes = differenceMinutes;
  differenceSeconds < 10 ? differenceSeconds = "0" + differenceSeconds : differenceSeconds = differenceSeconds;
  return `Разница времени составляет ${differenceHours}:${differenceMinutes}:${differenceSeconds}`;
}
console.log(timeDifference(2, 0, 0, 0, 30, 20));