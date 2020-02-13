"use strict";
let mountains = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];
let findNameOfTallestMountain = arrayOfMountains => {
  let tallestMountainHeight = 0;
  let nameOfTallestMountain = "";
  arrayOfMountains.forEach(mountain => {
    if (mountain.height > tallestMountainHeight) {
      tallestMountainHeight = mountain.height;
      nameOfTallestMountain = mountain.name;
    }
  });
  return nameOfTallestMountain;
};
let result = findNameOfTallestMountain(mountains);
console.log(findNameOfTallestMountain(mountains));
let products = [
  { name: "skateboard", price: 100 },
  { name: "climbing shoes", price: 125 },
  { name: "bike", price: 500 },
  { name: "snowboard", price: 200 }
];
let calcAverageProductPrice = arrayOfProducts => {
  let totalPrice = 0;
  arrayOfProducts.forEach(product => {
    totalPrice += product.price;
  });
  return totalPrice / products.length;
};
console.log(calcAverageProductPrice(products));
let inventory = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
let calcInventoryValue = arrayOfInventoryItems => {
  let productTotal = 0;
  arrayOfInventoryItems.forEach(item => {
    productTotal += item.product.price * item.quantity;
  });
  return productTotal;
};
console.log(calcInventoryValue(inventory));
