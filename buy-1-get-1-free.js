const itemPriceTable = require('./item-price-table');

let buyOneGetOneFree = function (line) {
  const nb = line.number;
  const amount = itemPriceTable[line.item].amount;
  const groupOfTwos = Math.floor(nb / 2);
  const rest = nb % 2;
  return +((groupOfTwos + rest) * amount).toFixed(2);
};

module.exports = buyOneGetOneFree;