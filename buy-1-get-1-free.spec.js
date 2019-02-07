const buyOneGetOneFree = require('./buy-1-get-1-free');

describe('buy one get one free on Apples', () => {
  it('given a line containing 1 Apple, when called, then return the price of 1 Apple .20', () => {
    let line = { item: 'Apple', number: 1 };
    const res = buyOneGetOneFree(line);
    expect(res).toEqual(.2);
  });
  it('given a line containing 2 Apples, when called, then return the price of 1 Apple .20', () => {
    let line = { item: 'Apple', number: 2 };
    const res = buyOneGetOneFree(line);
    expect(res).toEqual(0.2);
  });
  it('given a line containing 3 Apples, when called, then return the price of 2 Apples .40', () => {
    let line = { item: 'Apple', number: 3 };
    const res = buyOneGetOneFree(line);
    expect(res).toEqual(0.4);
  });
  it('given a line containing 4 Apples, when called, then return the price of 2 Apples .40', () => {
    let line = { item: 'Apple', number: 4 };
    const res = buyOneGetOneFree(line);
    expect(res).toEqual(0.4);
  });
  it('given a line containing 5 Apples, when called, then return the price of 2 Apples .40', () => {
    let line = { item: 'Apple', number: 5 };
    const res = buyOneGetOneFree(line);
    expect(res).toEqual(0.6);
  });
});