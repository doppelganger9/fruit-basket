#!/usr/bin/env node
const totalPrice = require('./lib/total-price');

const basket = {
  orderedItemsByType: {
    Apple: 4,
    Orange: 3,
    Watermelon: 5,
  },
};

const text = JSON.stringify(totalPrice(basket), null, 2);

console.log(text);

process.exit(0);