let a = 5;
let b = 10;
let c;
if(a >= 0 && b >= 0) {
   c = a - b;
} else if(a < 0 && b < 0) {
   c = a * b;
} else if(a >= 0 && b < 0 || a < 0 && b >= 0) { // или просто else { c = a + b; }
   c = a + b;
}
alert(c);


/*
//вариант с var позволит объявить переменную с в блоке тела оператора if
var a = 5;
var b = 10;
if(a >= 0 && b >= 0) {
   var c = a - b;
} else if(a < 0 && b < 0) {
   c = a * b;
} else if(a >= 0 && b < 0 || a < 0 && b >= 0) {
   c = a + b;
}
alert(c);
*/
