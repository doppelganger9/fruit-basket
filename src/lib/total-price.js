function computeTotalPrice(
  basket = {},
  itemStrategy = {
    Apple: require("./buy-1-get-1-free"),
    Orange: require("./standard-price"),
    Watermelon: require("./3-for-the-price-of-2")
  }
) {
  if (!basket.orderedItemsByType) return { orderTotal: 0, freeItems: {}, orderedItemsByType: {} };
  const truc = { ...basket.orderedItemsByType };
  const itemTypes = Object.keys(truc);
  let reducer = (finalBasket, itemType) => {
    const numberOfItems = truc[itemType];
    const strategyFn = itemStrategy[itemType];
    const { freeItems, orderTotal } = strategyFn(itemType, numberOfItems);
    const finalBasketTotal = finalBasket.orderTotal ? +finalBasket.orderTotal : 0;
    let res = {
      ...finalBasket,
      orderTotal: +finalBasketTotal + +orderTotal
    };
    if (freeItems) {
      res.freeItems[itemType] = freeItems;
    }
    return res;
  };
  const reduceResult = itemTypes.reduce(reducer, {
    orderedItemsByType: basket.orderedItemsByType,
    freeItems: {}
  });
  return reduceResult;
}

module.exports = computeTotalPrice;
