"use strict";

let message = "lalala"
  , title = "titlelalala";

alert(message); // Эта функция браузера приостоновит скрипт и выведет модальное окно, пока пользователь не нажмет ОК
let result = prompt(title); // Функция принимает 2 аргумента, вызовет модалку с полев ввода текста и кнопками ОК/Отмена
// title - текст в окне, default - не обязательный аргумент, который устанавливает начальное значение

let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`);

let question = 'Тебя зовут Артур?';
let resultConfirm = confirm(question); // Вызывает модалку с вопросом, где 2 кнопки ОК(true)/Отмена(false) которые возвращают логические значения

alert(`Результат prompt ${result}, результат confirm ${resultConfirm}`)