const itemPriceTable = require("./item-price-table");

let threeForThePriceOfTwo = function(itemType, numberOfItems) {
  if (!itemType) return { orderTotal: 0 };
  if (!numberOfItems) return { orderTotal: 0 };
  if (!itemPriceTable[itemType]) return { orderTotal: 0 };
  const nb = +numberOfItems;
  if ("" + nb === "NaN") return { orderTotal: 0 };

  const priceForItem = itemPriceTable[itemType];
  const amount = +priceForItem.amount;

  const groupOfThrees = Math.floor(nb / 3);
  const rest = nb % 3;
  let price = groupOfThrees * 2;
  price = +price + rest;
  price = +price * amount;

  return { orderTotal: +price.toFixed(2) };
};

module.exports = threeForThePriceOfTwo;
