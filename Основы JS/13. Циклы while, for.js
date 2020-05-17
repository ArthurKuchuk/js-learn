"use sctrict";
// Синтаксис цикла 
/*
while (condition) {
  тело цикла
}
*/
// Цикл повторяется пока condition верно, пример
let i = 2;
while (i > 0) {
  alert(i--);
}
// do while используется для того, чтобы цикл выполнился хотябы один раз

do {
  alert(i);
  i++;
} while (i <= 2);
// Цикл for более сложный

for (i = 0; i <= 3; i++) {
  alert(i);
}

// Директива break останавливает цикл, continue начинает цикл заново, не выполняя код после себя

let sum = 0;

while (true) {
  let value = +prompt('Введите число', "");
  if (!value) break;
  sum += value;
}

alert(`Сумма ваших чисел: ${sum}`)

for (let o = 0; o < 10; o++) {
  if (o % 2 == 0) continue;
  alert(o)
}

// Метки для break и continue, их пишут вот так вот как снизу, и по ним обращаются через break и continue если надо разорвать связь с внешними циклами

metkaName: for (let j = 0; j < 3; j++) {
  for (let d = 0; d < 3; d++) {
    let variableName = +prompt("Введите число хоть какое нибудь", "")
    if (!variableName) break metkaName;
  }
}

/* 
Мы рассмотрели 3 вида циклов:

while – Проверяет условие перед каждой итерацией.
do..while – Проверяет условие после каждой итерации.
for (;;) – Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.
Чтобы организовать бесконечный цикл, используют конструкцию while (true). При этом он, как и любой другой цикл, может быть прерван директивой break.

Если на данной итерации цикла делать больше ничего не надо, но полностью прекращать цикл не следует – используют директиву continue.

Обе этих директивы поддерживают метки, которые ставятся перед циклом. Метки – единственный способ для break/continue выйти за пределы текущего цикла, повлиять на выполнение внешнего.*/


let c;
do {
  c = prompt("Введите трехзначное число", "");
  if (c == null) alert("Вы не ввели число");
  if (c < 100 && c > 0) alert("Ваше число меньше нужного");
  if (c >= 1000) alert("Ваше число больше нужного");
} while (c < 100 || c >= 1000);

alert("Ваше число подошло!")

let n = 10;

residue:
for (let r = 2; r <= n; r++) {

  for (let g = 2; g < r; g++) {
    if (r % g == 0) continue residue;
  }

  alert(r)
}


