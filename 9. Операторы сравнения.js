// Операторы сравнения: >, <, >=, <=, ==(равно), !=(не равно), операторы сравнения возвращают логический тип, если утверждение верно то true, иначе false
alert(2 == 1);
// Результат сравнения можно присвоить переменной
// Сравнение строк. Чтобы определить что одна строка больше другой, язык использует алфавитный порядок.
/* Алгоритм сравнения двух строк довольно прост:

Сначала сравниваются первые символы строк.
Если первый символ первой строки больше (меньше), чем первый символ второй, то первая строка больше (меньше) второй.
Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.
Сравнение продолжается, пока не закончится одна из строк.
Если обе строки заканчиваются одновременно, то они равны. Иначе, большей считается более длинная строка.
*/

// При сравнении разных типов данных, оба приводятся к числу

// Оператор строгого равенства === проверяет значения без приведения типов, так же строкое неравенство !==

// null и undefined при строгом равенстве не равны друг другу, т.к. не равны их типы, а при не строгом равенстве они равны друг другу, но не равны больше ничему, это спец.правило языка

