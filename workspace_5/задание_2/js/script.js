// пункт 1 задания
let basket = {

   goodList: [
      {name: "яблоко", price: 12 , count: 3},
      {name: "груша", price: 18, count: 5},
      {name: "киви", price: 20, count: 10}
   ],

   countTotalPrice() {
       let result = 0;
       for(let i = 0; i < this.goodList.length; i++) {
       result += this.goodList[i].price * this.goodList[i].count;
       }
      
       return result;
   },

   countTotalNumber() {
       let totalNumber = 0;
       for(let i = 0; i < this.goodList.length; i++) {
         totalNumber += this.goodList[i].count;
       }
      
       return totalNumber;
   },

   putToBasket(obj) {
       let putGood = this.goodList.concat(obj) ;
       return putGood;
   }   
};

console.log(basket.countTotalPrice());
console.log(basket.countTotalNumber());

// пункт 2 задания
let good = {
      name: "банан",
      price: 15,
      count: 4,
};    

console.log(basket.putToBasket(good));  


// пункт 3 задания
let goods = [
      {name: "апельсин", price: 16 , count: 2},
      {name: "мандарин", price: 14, count: 12},
      {name: "грейпфрут", price: 30, count: 5},
      {name: "арбуз", price: 40, count: 1},
      {name: "манго", price: 19 , count: 8},
      {name: "хурма", price: 23, count: 14},
      {name: "помело", price: 35, count: 5},
      {name: "дыня", price: 32, count: 1}        
];

console.log(basket.putToBasket(goods));
 

// пункт 4 задания
let odd = [];
let even = [];
goods.forEach(function(item, index) {        
       if(index % 2 == 1) {odd.push(item)}
       if(index % 2 == 0) {even.push(item)}             
});

function getRandomArray(arr, obj) {
    let tempArr = Array(arr.length);              
    for(let i = 0; i < obj; i++) {
          let random = getRandomInt(0, arr.length);
          tempArr[random] = arr[random];
    }
 
    return tempArr;
}
 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(odd);
console.log(even);
console.log(getRandomArray(odd, 2));
console.log(getRandomArray(even, 1));

console.log("Стоимость всех товаров в Вашей корзине: " + basket.countTotalPrice());
console.log("Всего товаров в Вашей корзине: " + basket.countTotalNumber());

let myBasket = document.getElementById("myBasket");      
      if(basket.goodList == 0) {
        myBasket.innerText = "Корзина пуста";
      } else {
         myBasket.innerText = "В корзине: " +  basket.countTotalNumber() + " товаров на сумму " +  basket.countTotalPrice() + " рублей";
         console.log(myBasket);
      }








































