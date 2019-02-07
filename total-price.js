const itemStrategy = {
  Apple: require('./buy-1-get-1-free'),
  Orange: require('./standard-price'),
  Watermelon: require('./3-for-the-price-of-2'),
};

function computeTotalPrice(basket = []) {
  return basket.reduce((totalPrice, line) => {
    return totalPrice + itemStrategy[line.item](line);
  }, 0);
}

module.exports = computeTotalPrice;