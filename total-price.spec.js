const totalPrice = require('./total-price');

describe('total-price', () => {

  it('given empty basket, when called, then return 0', () => {
    let basket = [];
    const res = totalPrice(basket);
    expect(res).toEqual(0);
  });

  it('given a basket containing 1 Apple + 1 Orange + 1 Watermelon, when called, then return 1.5', () => {
    let basket = [{ item: 'Apple', number: 1 }, { item: 'Orange', number: 1 }, { item: 'Watermelon', number: 1 }];
    const res = totalPrice(basket);
    expect(res).toEqual(0.2+.8+.5);
  });

  it('given a basket containing 4 Apples + 3 Oranges + 5 Watermelons, when called, then return 5.1', () => {
    let basket = [
      { item: 'Apple', number: 4 },
      { item: 'Orange', number: 3 },
      { item: 'Watermelon', number: 5 },
    ];
    /*
      pay 2 Apples = 2*.20, 2 free = 4 Apples
      pay Orange : 3 * .50
      pay 3 watermelons for price of 2 + 2 = 4*.8
      = 2*.2+ 3*.5 + 4*.8 = 5.1
      */
    const res = totalPrice(basket);
    expect(res).toEqual(5.1);
  });

  describe('buy one get one free on Apples', () => {
    it('given a basket containing 1 Apple, when called, then return the price of 1 Apple .20', () => {
      let basket = [{ item: 'Apple', number: 1 }];
      const res = totalPrice(basket);
      expect(res).toEqual(.2);
    });
    it('given a basket containing 2 Apples, when called, then return the price of 1 Apple .20', () => {
      let basket = [{ item: 'Apple', number: 2 }];
      const res = totalPrice(basket);
      expect(res).toEqual(0.2);
    });
    it('given a basket containing 3 Apples, when called, then return the price of 2 Apples .40', () => {
      let basket = [{ item: 'Apple', number: 3 }];
      const res = totalPrice(basket);
      expect(res).toEqual(0.4);
    });
  });

  describe('3 for the price of 2 on Watermelons', () => {
    it('given a basket containing 1 Watermelon, when called, then return the price of 1 Apple .80', () => {
      let basket = [{ item: 'Watermelon', number: 1 }];
      const res = totalPrice(basket);
      expect(res).toEqual(0.8);
    });
    it('given a basket containing 2 Watermelons, when called, then return the price of 2 Watermelons 1.60', () => {
      let basket = [{ item: 'Watermelon', number: 2 }];
      const res = totalPrice(basket);
      expect(res).toEqual(1.6);
    });
    it('given a basket containing 3 Watermelons, when called, then return the price of 2 Watermelons 1.60', () => {
      let basket = [{ item: 'Watermelon', number: 3 }];
      const res = totalPrice(basket);
      expect(res).toEqual(1.6);
    });
    it('given a basket containing 4 Watermelons, when called, then return the price of 3 Watermelons 2.40', () => {
      let basket = [{ item: 'Watermelon', number: 4 }];
      const res = totalPrice(basket);
      expect(res).toEqual(2.4);
    });
    it('given a basket containing 5 Watermelons, when called, then return the price of 4 Watermelons 3.20', () => {
      let basket = [{ item: 'Watermelon', number: 5 }];
      const res = totalPrice(basket);
      expect(res).toEqual(3.2);
    });
    it('given a basket containing 6 Watermelons, when called, then return the price of 4 Watermelons 3.20', () => {
      let basket = [{ item: 'Watermelon', number: 6 }];
      const res = totalPrice(basket);
      expect(res).toEqual(3.2);
    });
  });
});