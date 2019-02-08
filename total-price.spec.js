const totalPrice = require('./total-price');

describe('total-price', () => {

  it('given no basket, when called, then return 0', () => {
    const res = totalPrice();
    expect(res.orderTotal).toEqual(0);
    expect(res.freeItems).toBeUndefined();
  });

  it('given empty basket, when called, then return 0', () => {
    let basket = {};
    const res = totalPrice(basket);
    expect(res.orderTotal).toEqual(0);
    expect(res.freeItems).toBeUndefined();
  });

  it('given a basket containing 1 Apple + 1 Orange + 1 Watermelon, when called, then return 1.5 and 1 free Apple', () => {
    let basket = {
      orderedItemsByType: { 'Apple': 1, 'Orange': 1, 'Watermelon': 1 }
    };
    const res = totalPrice(basket);
    expect(res.orderTotal).toEqual(+(0.2 + 0.8 + 0.5).toFixed(2));
    expect(res.freeItems['Apple']).toEqual(1);
  });

  it('given a basket containing 4 Apples + 3 Oranges + 5 Watermelons, when called, then return 5.1', () => {
    let basket = {
      orderedItemsByType: {
        'Apple': 4,
        'Orange': 3,
        'Watermelon': 5,
      }
    };
    const res = totalPrice(basket);
    expect(res.orderTotal).toEqual(+((4 * .2) + (3 * .5) + (4 * .8)).toFixed(2));
    expect(res.freeItems['Apple']).toEqual(4);
  });

  describe('buy one get one free on Apples', () => {
    it('given a basket containing 1 Apple, when called, then return the price of 1 Apple .20 and 1 free Apple ', () => {
      let basket = { orderedItemsByType: { 'Apple': 1 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(1 * 0.2).toFixed(2));
      expect(res.freeItems['Apple']).toEqual(1);
    });
    it('given a basket containing 2 Apples, when called, then return the price of 2 Apple .40 and 2 free Apples', () => {
      let basket = { orderedItemsByType: { 'Apple': 2 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(2 * 0.2).toFixed(2));
      expect(res.freeItems['Apple']).toEqual(2);
    });
    it('given a basket containing 3 Apples, when called, then return the price of 3 Apples .60 and 3 free Apples', () => {
      let basket = { orderedItemsByType: { 'Apple': 3 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(3 * .2).toFixed(2));
      expect(res.freeItems['Apple']).toEqual(3);
    });
  });

  describe('3 for the price of 2 on Watermelons', () => {
    it('given a basket containing 1 Watermelon, when called, then return the price of 1 Apple .80', () => {
      let basket = { orderedItemsByType: { 'Watermelon': 1 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(1 * 0.8).toFixed(2));
      expect(res.freeItems).toBeUndefined();
    });
    it('given a basket containing 2 Watermelons, when called, then return the price of 2 Watermelons 1.60', () => {
      let basket =  { orderedItemsByType: {'Watermelon': 2}};
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(2 * 0.8).toFixed(2));
      expect(res.freeItems).toBeUndefined();
    });
    it('given a basket containing 3 Watermelons, when called, then return the price of 2 Watermelons 1.60', () => {
      let basket =  { orderedItemsByType: {'Watermelon': 3}};
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(2 * 0.8).toFixed(2));
      expect(res.freeItems).toBeUndefined();
    });
    it('given a basket containing 4 Watermelons, when called, then return the price of 3 Watermelons 2.40', () => {
      let basket =  { orderedItemsByType: {'Watermelon': 4}};
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(3 * 0.8).toFixed(2));
      expect(res.freeItems).toBeUndefined();
    });
    it('given a basket containing 5 Watermelons, when called, then return the price of 4 Watermelons 3.20', () => {
      let basket =  { orderedItemsByType: {'Watermelon': 5}};
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(4 * 0.8).toFixed(2));
      expect(res.freeItems).toBeUndefined();
    });
    it('given a basket containing 6 Watermelons, when called, then return the price of 4 Watermelons 3.20', () => {
      let basket =  { orderedItemsByType: {'Watermelon': 6}};
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(4 * 0.8).toFixed(2));
      expect(res.freeItems).toBeUndefined();
    });
  });
});