const buyOneGetOneFree = require("./buy-1-get-1-free");

describe("buy one get one free on Apples", () => {
  it("given no type when called then return 0", () => {
    const { freeItems, orderTotal } = buyOneGetOneFree();
    expect(freeItems).toBeUndefined();
    expect(orderTotal).toEqual(0);
  });

  it("given no number of items when called then return 0", () => {
    const { freeItems, orderTotal } = buyOneGetOneFree("Apple");
    expect(freeItems).toBeUndefined();
    expect(orderTotal).toEqual(0);
  });

  it("given wrong number of items type when called then return 0", () => {
    const { freeItems, orderTotal } = buyOneGetOneFree("Apple", "coco");
    expect(freeItems).toBeUndefined();
    expect(orderTotal).toEqual(0);
  });

  it("given unknown kind of item type when called then return 0", () => {
    const { freeItems, orderTotal } = buyOneGetOneFree("Pouet", 2);
    expect(freeItems).toBeUndefined();
    expect(orderTotal).toEqual(0);
  });

  describe.each`
    apples | freeApples | expectedPrice
    ${1}   | ${1}       | ${0.2}
    ${2}   | ${2}       | ${0.4}
    ${3}   | ${3}       | ${0.6}
    ${4}   | ${4}       | ${0.8}
    ${5}   | ${5}       | ${1.0}
  `(
    "given a line containing $apples Apples, when called",
    ({ apples: appleNumber, freeApples: expectedFreeItems, expectedPrice }) => {
      test(`, then return ${expectedFreeItems} free items and ${expectedPrice} total price`, () => {
        const { freeItems, orderTotal } = buyOneGetOneFree(
          "Apple",
          +appleNumber
        );
        expect(freeItems).toEqual(+expectedFreeItems);
        expect(orderTotal).toEqual(+expectedPrice);
      });
    }
  );
});
