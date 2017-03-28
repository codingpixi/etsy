let etsyData = require('./etsy-items.js');

console.log(etsyData.length);

function averagePrice (object) {
  let total = 
        return object.males / object.females;
      }
      //let ratios = data.map(genderRatio);
      let ratios = [];
      for (i = 0; i < data.length; i++) {
        ratios[i] = genderRatio(data[i]);
      }
      console.log(ratios);

/*
QUESTIONS
1. Calculate the average price of all items.
    - Total price of all items / number of items

2. Get an array of items that cost between $14.00 and $18.00 USD
3. Which item has a "GBP" currency code? Display its name and price.
4. Display a list of all items which are made of wood.
5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
6. How many items were made by their sellers?


*/
