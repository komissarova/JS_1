let basket = {
    goodList: [],

    countTotalPrice() {
      let result = 0;
      for (let i = 0; i < this.goodList[0].length; i++) {
        result += this.goodList[0][i].price * this.goodList[0][i].count;
      }

      return result;
    },

  countTotalNumber() {
    let totalNumber = 0;
    for (let i = 0; i < this.goodList[0].length; i++) {
      totalNumber += this.goodList[0][i].count;
    }

    return totalNumber;
  },

  putToBasket(obj) {
    return this.goodList.concat(obj);
  }
};

let goods = [{
    name: "яблоко",
    price: 12,
    count: 3
  },
  {
    name: "груша",
    price: 18,
    count: 5
  },
  {
    name: "киви",
    price: 20,
    count: 10
  },
  {
    name: "апельсин",
    price: 16,
    count: 2
  },
  {
    name: "мандарин",
    price: 14,
    count: 12
  },
  {
    name: "грейпфрут",
    price: 30,
    count: 5
  },
  {
    name: "арбуз",
    price: 40,
    count: 1
  },
  {
    name: "манго",
    price: 19,
    count: 8
  },
  {
    name: "хурма",
    price: 23,
    count: 14
  },
  {
    name: "помело",
    price: 35,
    count: 5
  },
  {
    name: "дыня",
    price: 32,
    count: 1
  },
  {
    name: "банан",
    price: 15,
    count: 4
  }
];
 
basket.goodList.push(basket.putToBasket(goods)); 

function objToString(obj) {
  for(let i = 0; i < obj.length; i++) {
     document.write("Товар: " + obj[i]["name"] + " " + "Цена: " + obj[i]["price"] +  " " +
      "Количество: " + " " + obj[i]["count"] + "<br/>" + "<br/>");
     
  }
  document.write(myBasket.innerText = "В корзине: " + basket.countTotalNumber() + " товаров на сумму " + basket.countTotalPrice() + " рублей"); 
}

let myButton = document.createElement("button");

document.body.appendChild(myButton);
myButton.innerHTML = "Купить";

myButton.setAttribute("id", "buy_button");
myButton.addEventListener("click", function(event) { objToString(basket.goodList[0]);});

let myBasket = document.getElementById("myBasket");
basket.goodList == 0;
myBasket.innerText = "Корзина пуста";
