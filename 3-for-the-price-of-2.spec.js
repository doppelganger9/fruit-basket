const threeForThePriceOfTwo = require('./3-for-the-price-of-2');

describe('3 for the price of 2 on Watermelons', () => {
  it('given a line containing 1 Watermelon, when called, then return the price of 1 Apple .80', () => {
    let line = { item: 'Watermelon', number: 1 };
    const res = threeForThePriceOfTwo(line);
    expect(res).toEqual(0.8);
  });
  it('given a line containing 2 Watermelons, when called, then return the price of 2 Watermelons 1.60', () => {
    let line = { item: 'Watermelon', number: 2 };
    const res = threeForThePriceOfTwo(line);
    expect(res).toEqual(1.6);
  });
  it('given a line containing 3 Watermelons, when called, then return the price of 2 Watermelons 1.60', () => {
    let line = { item: 'Watermelon', number: 3 };
    const res = threeForThePriceOfTwo(line);
    expect(res).toEqual(1.6);
  });
  it('given a line containing 4 Watermelons, when called, then return the price of 3 Watermelons 2.40', () => {
    let line = { item: 'Watermelon', number: 4 };
    const res = threeForThePriceOfTwo(line);
    expect(res).toEqual(2.4);
  });
  it('given a line containing 5 Watermelons, when called, then return the price of 4 Watermelons 3.20', () => {
    let line = { item: 'Watermelon', number: 5 };
    const res = threeForThePriceOfTwo(line);
    expect(res).toEqual(3.2);
  });
  it('given a line containing 6 Watermelons, when called, then return the price of 4 Watermelons 3.20', () => {
    let line = { item: 'Watermelon', number: 6 };
    const res = threeForThePriceOfTwo(line);
    expect(res).toEqual(3.2);
  });
});