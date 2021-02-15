const itemPriceTable = require("./item-price-table");

let standardPrice = function (itemType, numberOfItems) {
  if (!itemPriceTable[itemType]) return { orderTotal: 0 };
  const amount = itemPriceTable[itemType].amount;
  const nb = +numberOfItems;
  if ("" + nb === "NaN") return { orderTotal: 0 };

  return {
    orderTotal: +(amount * nb).toFixed(2)
  };
};

module.exports = standardPrice;
