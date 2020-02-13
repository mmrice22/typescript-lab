// create an interface called Mountain
interface Mountain {
  name: string;
  height: number;
}

//Create an interface called Product that contains the following poperties of name as a string and price as a number
interface Product {
  name: string;
  price: number;
}

// declare an interface called Inventory item containing the porperties of product as Product(from other one) and quantity as a number
interface InventoryItem {
  product: Product;
  quantity: number;
}

// declare an array called mountains which is an array of Mountain
let mountains: Mountain[] = [
  // these are the objects inside the array
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

// declare a funciton taking in one parameter an array of Mountain objects
// this function will return as a string (:string)
let findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string => {
  let tallestMountainHeight: number = 0;
  let nameOfTallestMountain: string = "";
  // this forEach loop will loop through the array of mountains which has the properties of name and height
  arrayOfMountains.forEach(mountain => {
    //  mountain. height is how you get to the height property in the array mountains
    if (mountain.height > tallestMountainHeight) {
      //   if the mountains height in the array (mountain.height) is greater than the tallestMountain
      tallestMountainHeight = mountain.height;
      // then the tallestMountainHeight will equal that mountains height (first one would be Kiliminjaro)
      nameOfTallestMountain = mountain.name;
      // now the name of the tallest mountain will be Kiliminjaro the first time loop is ran
    }
  });
  return nameOfTallestMountain;
  //  the loop will run through Kiliminjaro first... since we set the tallestMountainHeight to zero OUTSIDE of the function
  // the tallestMountHeight will equal Kiliminjaros height
  // now that kiliminjaro is the tallestMountain, the nameOfTallestMountain will return Kiliminjaro
  // the next time the loop runs it will compare Kiliminjaro to Everest
  // Everest is the tallest, breaks out of loop
};

let result = findNameOfTallestMountain(mountains);
// call the function to see if Everest is the answer --- if it is then the function works
console.log(findNameOfTallestMountain(mountains));

// declare an array called products which is an array of type Product
// fill the array with whatever
let products: Product[] = [
  { name: "skateboard", price: 100 },
  { name: "climbing shoes", price: 125 },
  { name: "bike", price: 500 },
  { name: "snowboard", price: 200 }
];

// declare a function taking in one parameter, an array of Product objects, returning a number
let calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let totalPrice = 0;
  arrayOfProducts.forEach(product => {
    totalPrice += product.price;
    // totalPrice = totalPrice + product.price;
  });
  //  to get the average price of all the products provided
  // instead of using the number 3, you use the name of the array.length
  // array.length is how many products are in the array. in the products array its 3
  // this way, if you keep adding products this equation will still work
  return totalPrice / products.length;
};

console.log(calcAverageProductPrice(products));

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

let calcInventoryValue = (arrayOfInventoryItems: InventoryItem[]): number => {
  let productTotal = 0;
  arrayOfInventoryItems.forEach(item => {
    productTotal += item.product.price * item.quantity;
  });
  return productTotal;
};

console.log(calcInventoryValue(inventory));
