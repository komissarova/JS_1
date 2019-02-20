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
      {name: "арбуз", price: 40, count: 1}    
];

console.log(basket.putToBasket(goods)); 

// пункт 4 задания
basket.goodList.push(goods[1], goods[2], goods[3]);
console.log(basket.goodList);
console.log(basket.countTotalPrice());
console.log(basket.countTotalNumber());




