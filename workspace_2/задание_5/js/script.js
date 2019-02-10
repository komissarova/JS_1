let arg1 = parseInt(prompt("Введите число: "));
let arg2 = parseInt(prompt("Введите второе число: "));
let operation = prompt("Укажите арифметическую операцию: ");

function addNumbers() {
  return arg1 + arg2;  
}

function subtractNumbers() {
    return arg1 - arg2;    
}

function divideNumbers() {
    return arg1 / arg2;    
}

function multiplyNumbers() {
    return arg1 * arg2;   
}

function mathOperation() {
  switch(operation){
       case 'сложение':
       case 'Сложение':
         return addNumbers();
         break;
       case 'вычитание':
       case 'Вычитание':
         return subtractNumbers();
         break;
       case 'деление':
       case 'Деление':
         return divideNumbers();
         break;
       case 'умножение':
       case 'Умножение':
         return multiplyNumbers();
         break;
  }
}
alert(mathOperation(arg1, arg2, operation));