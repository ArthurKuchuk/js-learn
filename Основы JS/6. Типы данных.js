"use strict";

// Число, это числовое значение как ни странно, может быть дробным и не больше чем 2^53. Чтобы обойти это ограничение нужно использовать bigInt, использовав в конце числа n; Специальные числовые значения: Infinity, -Infinity, NaN.
let numberVar = 123.456;

// Строка, должна быть заключена в кавычки, может быть как буква, так и слово и предложение и цифры
let stringVar = "lalala";
// Обратные кавычки позволяют встраивать переменные внутрь строки
let varStringVar = `Сюда можно вставить переменную ${stringVar}`;
// Булевый тип, логический, либо true, либо false
let booleanVar = 5 > 9;
// null - ссылка на пустоту :)
let nullVar = null;
// undefined - значит не присвоенно никакой значение, например переменная без значения
let pipi;
let undefinedVar = pipi;

// Есть еще обьект и символ, но о них потом.
// Оператор typeof возвращает тип перменной или функции typeof() возвращает тип функции
alert(typeof varStringVar)

/*В JavaScript есть 8 основных типов.

number для любых чисел: целочисленных или чисел с плавающей точкой, целочисленные значения ограничены диапазоном ±2^53.
bigint для целых чисел произвольной длины.
string для строк. Строка может содержать один или больше символов, нет отдельного символьного типа.
boolean для true/false.
null для неизвестных значений – отдельный тип, имеющий одно значение null.
undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
object для более сложных структур данных.
symbol для уникальных идентификаторов.
Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

Имеет две формы: typeof x или typeof(x).
Возвращает строку с именем типа. Например, "string".
Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.
*/