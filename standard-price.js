const itemPriceTable = require('./item-price-table');

let standardPrice = function (line) {
  if (!line.item) return 0;
  if (!itemPriceTable[line.item]) return 0;
  const amount = itemPriceTable[line.item].amount;
  const nb = +(line.number ? line.number : 0);
  return +(amount * nb).toFixed(2);
};

module.exports = standardPrice;