const itemPriceTable = require('./item-price-table');

let buyOneGetOneFree = function (itemType, numberOfItems) {
  if (!itemType) return { orderTotal: 0 };
  if (!numberOfItems) return { orderTotal: 0 };
  if (!itemPriceTable[itemType]) return { orderTotal: 0 };
  const nb = +numberOfItems;
  if ('' + nb === 'NaN') return { orderTotal: 0 };

  const amount = itemPriceTable[itemType].amount;
  return {
    orderTotal: +(nb * amount).toFixed(2),
    freeItems: +nb,
  };
};

module.exports = buyOneGetOneFree;