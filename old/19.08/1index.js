//Рандомный победитель 10-го айфона

const prompt = require('prompt-sync')();

let names = prompt('Введите имена участников через запятую: ', ' Вы не ввели ни одного имени.');//'Сардор, Вася, Петя, Коля, Боря'; //сюда через запятую вводим имена, ибо prompt() в терминале не работает
let arrayOfNames = names.split(',', 99999); //переводит строку в ячейки массива, разделяя их при каждой запятой, где 99999 - максимальное количество ячеек в массиве
console.log('Все участники конкурса: ' + arrayOfNames);

// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log('Айфон Х выигрывает... барабанная дробь...:' + arrayOfNames[getRandomInt(0, arrayOfNames.length)]);

/*Пример вывода в консоли:

oneuser@OnePC:~/MyProjects/js/19.08$ node 1index.js 

Все участники конкурса: Сардор, Вася, Петя, Коля, Боря
Айфон Х выигрывает... барабанная дробь...: Вася

*/
