// вариант без возврата пустого объекта
let myObject = {};

   function getNumber() {
       let a = parseInt(prompt("Введите число от 0 до 999: "));
       

       while(a < 0 || a > 999 || isNaN(a)) {     
          a = parseInt(prompt("Введите число от 0 до 999: "));
       }

       if(a >=0 || a <= 999) {        
          return a;     
       }
    }

    function converter(func) {
        let a = func();
        myObject.ones = a % 10;
        myObject.tens = (a - myObject.ones) % 100 / 10;
        myObject.hundreds = Math.floor(a / 100);
        return myObject;      
    }

converter(getNumber);
console.log(myObject);     

/*
// вариант c возвратом пустого объекта
let myObject = {};

   function getNumber() {
       let a = parseInt(prompt("Введите число от 0 до 999: "));

       while(a < 0 || isNaN(a)) {     
          a = parseInt(prompt("Введите число от 0 до 999: "));
       }

       if(a > 999) {
          console.log("Введённое Вами число больше 999");
          return myObject;
       }

       if(a >=0 || a <= 999) {        
          return a;     
       }
   }


   function converter(func) {
       let a = func();
       myObject.ones = a % 10;
       myObject.tens = (a - myObject.ones) % 100 / 10;
       myObject.hundreds = Math.floor(a / 100);
       return myObject;      
   }

converter(getNumber);
console.log(myObject);     
*/



   


  
       
    