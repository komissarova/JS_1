﻿//1)
 
if(!("a" in window)) {
    var a = 1;
}

alert(a);

/* тоже сначала подумала, что alert выдаст 1.
потом поняла, что js заранее определяет переменную var как undefined, и после ложного if
оставляет её такой и выводит в alert undefined
*/

//2)

var b = function a(x) {
  x && a(--x);
};

alert(a);

/* в этом примере нельзя обращаться к функции а в обход переменной b, которой она передана.
доступ к функции осуществляется через переменную b, поэтому alert(a) даёт ошибку
*/

//3)

function a(x) {
  return x * 2;
}

var a;
alert(a);

/* переменная var не инициализирована, а объявление функции приоритетнее объявления переменной, 
поэтому alert выводит код функции а
*/

//4)

function b(x, y, a) {
  arguments[2] = 10;
  alert(a);
}

b(1, 2, 3);

/* браузер chrome вывел alert'ом 10, потому что по старому стандарту объект arguments и параметры функции ссылаются на одни и те же значения, и изменение в одном приводит к аналогичному изменению в другом.
в новом стандарте это уже не так, поэтому, если указать "use strict", alert выведет 3  
*/
