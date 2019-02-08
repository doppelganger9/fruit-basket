const itemPriceTable = require('./item-price-table');

let standardPrice = function (itemType, numberOfItems) {
  if (!itemType) return { orderTotal: 0 };
  if (!numberOfItems) return { orderTotal: 0 };
  if (!itemPriceTable[itemType]) return { orderTotal: 0 };
  const amount = itemPriceTable[itemType].amount;
  const nb = +numberOfItems;
  return {
    orderTotal: + (amount * nb).toFixed(2)
  };
};

module.exports = standardPrice;