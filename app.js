// task 1
const rectangle = {
  width: 10,
  height: 20,
  getSquare: function() {
    return this.width * this.height;
  }
};

//console.log(rectangle.getSquare());

//task 2
const price = {
  price: 10,
  discount: "15%",
  getPrice: function() {
    return this.price;
  },
  getPriceWithDiscount: function() {
    return this.price - (this.price / 100) * parseInt(this.discount);
  }
};
//console.log(price.getPrice());
//console.log(price.getPriceWithDiscount());

//task 3
const figure = {
  height: 10,
  incrementHeight: function() {
    return ++this.height;
  }
};

//console.log(figure.incrementHeight());

//task 4
const numerator = {
  value: 1,
  double: function() {
    this.value *= 2;
    return this;
  },
  plusOne: function() {
    ++this.value;
    return this;
  },
  minusOne: function() {
    --this.value;
      return this;
  }
};
numerator.double().plusOne().plusOne().minusOne();

//console.log(numerator.value);

//task 5-6
const goods = {
    price: 30,
    amount: 80,
    getGeneralCost: function() {
        return this.price * this.amount;
    }
}

const detail = {
    price: 10,
    amount: 14
}

let cost = goods.getGeneralCost.call(detail);
//console.log(cost);

//task 7
let sizes = {
    width: 5, 
    height: 10
}
getSquare = function () {
    return this.width * this.height
};

let res = getSquare.call(sizes);
//console.log(res);
//or
let res2 = getSquare.bind(sizes);
//console.log(res2());

//task 8
let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight(); 

//Перебирающие методы. Задачи.
//task 1
const arr = [1, 2, 3, 5, 8, 9, 10];
let newArr = [];
arr.forEach((item, index, arr) => {
    let obj = {
        digit: item,
        odd: item % 2 === 0 ? false : true
    }
    newArr.push(obj);
});

//console.log(newArr);

//task 2
const numbers = [12, 4, 50, 1, 0, 18, 40];
let val = numbers.every(item => item !== 0);

//console.log(val);

//task 3
const words = ['yes', 'hello', 'no', 'easycode', 'what'];
let wordRes = words.some(item => item.length > 3);

//console.log(wordRes);

//task 4
const sentence = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

let sentenceRes = sentence.sort((a, b) => a.index - b.index).reduce((acc, item) => acc + item.char, '');

//console.log(sentenceRes);

//task 5
const numberArray = [  [14, 45],  [1],  ['a', 'c', 'd']  ];

let sortedArray = numberArray.sort((a, b) => a.length - b.length);
//console.log(sortedArray);

//task 6
const coresArray = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
];

let coresRes = coresArray.sort((a, b) => a.info.cores - b.info.cores);
//console.log(coresRes);

//task 7
let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(arr, lowestPrice, highestPrice) {
  let filteredProducts = arr.filter(item => item.price >= lowestPrice && item.price <= highestPrice);
  return filteredProducts.sort((a, b) => a.price - b.price);
}

filterCollection(products, 0.17, 19);








