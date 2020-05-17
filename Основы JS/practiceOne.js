"use strict";

// residue:
// for (let i = 45; i <= 670; i++) {

//   for (let j = 45; j <= i; j++) {
//     if (i % 10 == 0)console.log(i);
//   }
// }

// var n = 7;
// switch( n ) {
//   case 0:
//     console.log(0);
//     break;
//   case 1:
//     console.log(1)
//     break;
//   case 2:
//     console.log(2);
//     break;
//   case 3:
//     console.log(3)
//     break;  
//   case 4:
//     console.log(4);
//     break;
//   case 5:
//     console.log(5)
//     break;
//   case 6:
//     console.log(6);
//     break;
//   case 7:
//     console.log(7)
//     break;
//   case 8:
//     console.log(8);
//     break;
//   case 9:
//     console.log(9);
//     break;
// }


let o = prompt("Введите число, до которого будут найдены все простые числа", "");

function showPrime(n) {

  for (let i = 2; i < n; i++){
    if (isPrime(i)) continue;

    alert(i)
  }
}

function isPrime(n) {

  for (let i = 2; i < n; i++) {
    if (n % i == 0) return true;
  }

  return false;
}

showPrime(o);