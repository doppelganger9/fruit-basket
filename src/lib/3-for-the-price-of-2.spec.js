const threeForThePriceOfTwo = require("./3-for-the-price-of-2");

describe("3 for the price of 2 on Watermelons", () => {
  it("given no type when called then return 0", () => {
    const { freeItems, orderTotal } = threeForThePriceOfTwo();
    expect(freeItems).toBeUndefined();
    expect(orderTotal).toEqual(0);
  });

  it("given no number of items when called then return 0", () => {
    const { freeItems, orderTotal } = threeForThePriceOfTwo("Watermelon");
    expect(freeItems).toBeUndefined();
    expect(orderTotal).toEqual(0);
  });

  it("given wrong number of items type when called then return 0", () => {
    const { freeItems, orderTotal } = threeForThePriceOfTwo(
      "Watermelon",
      "coco"
    );
    expect(freeItems).toBeUndefined();
    expect(orderTotal).toEqual(0);
  });

  it("given unknown kind of item type when called then return 0", () => {
    const { freeItems, orderTotal } = threeForThePriceOfTwo("Unknown", 2);
    expect(freeItems).toBeUndefined();
    expect(orderTotal).toEqual(0);
  });

  it("given a orderedNumberOfItemsByType containing 1 Watermelon, when called, then return the price of 1 Apple .80", () => {
    const res = threeForThePriceOfTwo("Watermelon", 1);
    expect(res.orderTotal).toEqual(0.8);
  });
  it("given a orderedNumberOfItemsByType containing 2 Watermelons, when called, then return the price of 2 Watermelons 1.60", () => {
    const res = threeForThePriceOfTwo("Watermelon", 2);
    expect(res.orderTotal).toEqual(1.6);
  });
  it("given a orderedNumberOfItemsByType containing 3 Watermelons, when called, then return the price of 2 Watermelons 1.60", () => {
    const res = threeForThePriceOfTwo("Watermelon", 3);
    expect(res.orderTotal).toEqual(1.6);
  });
  it("given a orderedNumberOfItemsByType containing 4 Watermelons, when called, then return the price of 3 Watermelons 2.40", () => {
    const res = threeForThePriceOfTwo("Watermelon", 4);
    expect(res.orderTotal).toEqual(2.4);
  });
  it("given a orderedNumberOfItemsByType containing 5 Watermelons, when called, then return the price of 4 Watermelons 3.20", () => {
    const res = threeForThePriceOfTwo("Watermelon", 5);
    expect(res.orderTotal).toEqual(3.2);
  });
  it("given a orderedNumberOfItemsByType containing 6 Watermelons, when called, then return the price of 4 Watermelons 3.20", () => {
    const res = threeForThePriceOfTwo("Watermelon", 6);
    expect(res.orderTotal).toEqual(3.2);
  });
});
