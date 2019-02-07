const standardPrice = require('./standard-price');

describe('standard-price', () => {

  it('when given nothing, then return 0', () => {
    const res = standardPrice({});
    expect(res).toEqual(0);
  })

  it('when given no number, then return 0', () => {
    const res = standardPrice({ item: 'Apple', prout: 1 });
    expect(res).toEqual(0);
  })

  it('when given 1, then return 0.2', () => {
    const res = standardPrice({item:'Apple', number:1});
    expect(res).toEqual(.2);
  })

  it('when given nothing, then return 0', () => {
    const res = standardPrice({});
    expect(res).toEqual(0);
  })

});