const standardPrice = require('./standard-price');

describe('standard-price', () => {

  it('when given nothing, then return 0', () => {
    const res = standardPrice();
    expect(res.orderTotal).toEqual(0);
  });

  it('when given no number, then return 0', () => {
    const res = standardPrice('Apple', undefined);
    expect(res.orderTotal).toEqual(0);
  });

  it('when given an unknown type of item, then return 0', () => {
    const res = standardPrice('Unknown', 2);
    expect(res.orderTotal).toEqual(0);
  });

  it('when given 1, then return 0.2', () => {
    const res = standardPrice('Apple', 1);
    expect(res.orderTotal).toEqual(0.2);
  });

  it('when given nothing, then return 0', () => {
    const res = standardPrice();
    expect(res.orderTotal).toEqual(0);
  });

});