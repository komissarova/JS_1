//создаются две ссылки на один массив
/*let a = [
    [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
    [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
    [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];
 
let b = Object.assign({}, a);
console.log(a[0] === b[0]);

b[2][1]['name'] = 'Sam';
console.log(b[2][1]['name'] === a[2][1]['name']);
*/

//создаётся новый массив
/*
let a = [
    [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
    [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
    [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

let b = JSON.parse(JSON.stringify(a));
console.log(b);
console.log(b === a);
b[2][1]['name'] = 'Sam';
console.log(b[2][1]['name']);
console.log(a[2][1]['name']);
*/




let products = [
       {name: "Пушкин", price: 10},
       {name: 'Толстой', price: 20},
       {name: 'Достоевский', price: 30}
];


let startingBasketPrice = 0;
let startingProductsQuantity = 0;
let clientChoice = prompt("Сделайте Ваш выбор, введите фамилию автора");
let clientChoiceQuantity;
if(clientChoice == "") {
    alert("Вы ничего не ввели");
    clientChoice = prompt("Введите фамилию автора");
    console.log(clientChoice);
} else if(clientChoice === null) {
    alert("Жаль");
} else if(clientChoice != "") {
    clientChoiceQuantity = parseInt(prompt("Введите необходимое количество товара"));
}
 
function countBasketPrise() {
    for(i = 0; i < products.length; i++) {
        if(clientChoice === products[i].name) {
           startingBasketPrice = startingBasketPrice + products[i].price;
        } else if(clientChoiceQuantity > 1) {
           startingBasketPrice = startingBasketPrice * clientChoiceQuantity; 
           return startingBasketPrice;         
        }
    }
    
    
}
console.log(countBasketPrise());




       
