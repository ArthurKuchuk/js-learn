"use strict";

// Оператор switch работает как несколько операторов if, конструкция выглядит следующим образом 
switch (x) {
  case 3:
    console.log("Код А");
    break;
    
  case 4:
    console.log("Код Б");
    break;
    
  case 5:
    console.log("Код С");
    break;
    
  default:
    console.log("Код если не выполнилось все остальное");
    break;
}

// Происходит строгое сравнение с аргументом X  после которого скрипт бежит дальше по строкам, и как он видит что значение x равно одному из значений case тогда он выполняет код case до близжайшего break или до конца конструкции, выполняя остальной код если нет break, так же можно обьеденять case с разными значениями но одинаковым выполнением кода 
