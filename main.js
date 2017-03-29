let etsyData = require('./etsy-items.js');

console.log(etsyData.length);

// 1. Calculate the average price of all items.
//     - Total price of all items / number of items

//PULLING PRICE
function price(v) {
  return v.price
}

let prices = etsyData.map(price);
  console.log(prices);

//ADD PRICES ARRAY SUM
var sum = prices.reduce(function(acc, val) {
  return acc + val;
},0);
console.log(sum);

//AVERAGE PRICE OF ALL ITEMS
let averagePrice = sum / prices.length;
console.log(averagePrice.toFixed(2))

console.log("prices.length", prices.length);

//2. Get an array of items that cost between $14.00 and $18.00 USD

      let costArray = etsyData.filter(object => object.price >= 14 && object.price <= 18).map(pickles => [pickles.title, pickles.price]);
      console.log(costArray);




/*
QUESTIONS
1. Calculate the average price of all items.
    - Total price of all items / number of items
2. Get an array of items that cost between $14.00 and $18.00 USD
3. Which item has a "GBP" currency code? Display its name and price.
4. Display a list of all items which are made of wood.
5. Which items are made of eight or more materials?
    Display the name, number of items and the items it is made of.
6. How many items were made by their sellers?
*/
