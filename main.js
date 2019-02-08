#!/usr/bin/env node
const totalPrice = require('./lib/total-price');

console.log(JSON.stringify(totalPrice({
    orderedItemsByType: {
      'Apple': 4,
      'Orange': 3,
      'Watermelon': 5,
    }
}), null, 2));
