// В JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ).

// Оператор || (ИЛИ) используется для манипуляций с булевыми значениями, всегда будет возвращено true, кроме случая когда все аргументы false, в этом случае вернет false
// возвращается первое попавшееся true либо последнее значение если все аргументы false

// Оператор И - &&, возвращает true если все аргументы верны
// возвращается первое попавшееся false либо последнее значение если все аргументы true

let login = prompt("Введите логин:");

if (login == "Админ") {
  let password = prompt("Введите пароль:")

  if (password == "Я главный!") {
    alert("Здравствуйте!")
  } else if (password == "" || password == null) {
    alert("Отменено")
  } else {
    alert("Неверный пароль!")
  }
} else if (login =="" || login == null){
  alert("Отмененно")
} else {
  alert("Я не знаю тебя! Брысь!")
}