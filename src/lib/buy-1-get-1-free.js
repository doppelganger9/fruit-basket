const itemPriceTable = require("./item-price-table");

let buyOneGetOneFree = function(itemType, numberOfItems) {
  if (!itemPriceTable[itemType]) return { orderTotal: 0 };
  const nb = +numberOfItems;
  if ("" + nb === "NaN") return { orderTotal: 0 };

  const amount = itemPriceTable[itemType].amount;
  return {
    orderTotal: +(nb * amount).toFixed(2),
    freeItems: +nb
  };
};

module.exports = buyOneGetOneFree;
