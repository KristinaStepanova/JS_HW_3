// task 1
const rectangle = {
  width: 10,
  height: 20,
  getSquare: function() {
    return this.width * this.height;
  }
};

console.log(rectangle.getSquare());

//task 2
const price = {
  price: 10,
  discount: "15%",
  getPrice: function() {
    return this.price;
  },
  getPriceWithDiscount: function() {
    return this.price - (this.price / 100) * this.discount.slice(0, -1);
  }
};
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

//task 3
const figure = {
  height: 10,
  incrementHeight: function() {
    return ++this.height;
  }
};

console.log(figure.incrementHeight());

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

console.log(numerator.value);

//task 5

