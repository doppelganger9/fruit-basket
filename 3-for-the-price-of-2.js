const itemPriceTable = require('./item-price-table');

let threeForThePriceOfTwo = function (line) {
  const nb = line.number ? +line.number : 0;
  const priceForItem = itemPriceTable[line.item];
  const amount = priceForItem.amount;
  const groupOfThrees = Math.floor(nb / 3);
  const rest = nb % 3;
  let price = groupOfThrees * 2;
  price = +price + rest;
  price = +price * amount;
  return +(price).toFixed(2);
};

module.exports = threeForThePriceOfTwo;