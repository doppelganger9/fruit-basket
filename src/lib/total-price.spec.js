const totalPrice = require("./total-price");

const expectToHaveNFreeItems = (res, n = 0) => {
  expect(res.freeItems).toBeDefined();
  expect(Object.keys(res.freeItems)).toHaveLength(n);
};
const expectToHaveNOrderedItemsByType = (res, n = 0) => {
  expect(res.orderedItemsByType).toBeDefined();
  expect(Object.keys(res.orderedItemsByType)).toHaveLength(n);
};

describe("total-price", () => {
  it("given no basket, when called, then return 0", () => {
    const res = totalPrice();
    expect(res.orderTotal).toEqual(0);
    expectToHaveNFreeItems(res, 0);
    expectToHaveNOrderedItemsByType(res, 0);
  });

  it("given empty basket, when called, then return 0", () => {
    const basket = {};
    const res = totalPrice(basket);
    expect(res.orderTotal).toEqual(0);
    expectToHaveNFreeItems(res, 0);
    expectToHaveNOrderedItemsByType(res, 0);
  });

  it("given a basket containing 1 Apple + 1 Orange + 1 Watermelon, when called, then return 1.5 and 1 free Apple", () => {
    const basket = {
      orderedItemsByType: { Apple: 1, Orange: 1, Watermelon: 1 }
    };
    const res = totalPrice(basket);
    expect(res.orderTotal).toEqual(+(0.2 + 0.8 + 0.5).toFixed(2));
    expect(res.freeItems["Apple"]).toEqual(1);
  });

  it("given a basket with a specific order, when called, then return should contain this order untouched", () => {
    const basket = {
      orderedItemsByType: { Apple: 1, Orange: 2, Watermelon: 3 }
    };
    const res = totalPrice(basket);
    expect(res.orderedItemsByType).not.toBeUndefined();
    expect(res.orderedItemsByType).toEqual(basket.orderedItemsByType);
  });

  it("given a basket containing two kind of buy-1-get-1-free items, when called, then don't mess up the free items", () => {
    const basket = {
      orderedItemsByType: { Apple: 1, Orange: 1, Watermelon: 1 }
    };
    const buy1get1FreeStrategy = require("./buy-1-get-1-free");
    const res = totalPrice(basket, {
      Apple: buy1get1FreeStrategy,
      Orange: buy1get1FreeStrategy,
      Watermelon: buy1get1FreeStrategy
    });
    expect(res.orderTotal).toEqual(+(0.2 + 0.8 + 0.5).toFixed(2));
    expect(res.freeItems["Apple"]).toEqual(1);
    expect(res.freeItems["Orange"]).toEqual(1);
    expect(res.freeItems["Watermelon"]).toEqual(1);
  });

  it("given a basket containing 4 Apples + 3 Oranges + 5 Watermelons, when called, then return 5.1", () => {
    const basket = {
      orderedItemsByType: {
        Apple: 4,
        Orange: 3,
        Watermelon: 5
      }
    };
    const res = totalPrice(basket);
    expect(res.orderTotal).toEqual(+(4 * 0.2 + 3 * 0.5 + 4 * 0.8).toFixed(2));
    expect(res.freeItems["Apple"]).toEqual(4);
  });

  describe("buy one get one free on Apples", () => {
    it("given a basket containing 1 Apple, when called, then return the price of 1 Apple .20 and 1 free Apple ", () => {
      const basket = { orderedItemsByType: { Apple: 1 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(1 * 0.2).toFixed(2));
      expect(res.freeItems["Apple"]).toEqual(1);
    });
    it("given a basket containing 2 Apples, when called, then return the price of 2 Apple .40 and 2 free Apples", () => {
      const basket = { orderedItemsByType: { Apple: 2 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(2 * 0.2).toFixed(2));
      expect(res.freeItems["Apple"]).toEqual(2);
    });
    it("given a basket containing 3 Apples, when called, then return the price of 3 Apples .60 and 3 free Apples", () => {
      const basket = { orderedItemsByType: { Apple: 3 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(3 * 0.2).toFixed(2));
      expect(res.freeItems["Apple"]).toEqual(3);
    });
  });

  describe("3 for the price of 2 on Watermelons", () => {
    it("given a basket containing 1 Watermelon, when called, then return the price of 1 Apple .80", () => {
      const basket = { orderedItemsByType: { Watermelon: 1 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(1 * 0.8).toFixed(2));
      expectToHaveNFreeItems(res, 0);
      expectToHaveNOrderedItemsByType(res, 1);
    });
    it("given a basket containing 2 Watermelons, when called, then return the price of 2 Watermelons 1.60", () => {
      const basket = { orderedItemsByType: { Watermelon: 2 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(2 * 0.8).toFixed(2));
      expectToHaveNFreeItems(res, 0);
      expectToHaveNOrderedItemsByType(res, 1);
    });
    it("given a basket containing 3 Watermelons, when called, then return the price of 2 Watermelons 1.60", () => {
      const basket = { orderedItemsByType: { Watermelon: 3 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(2 * 0.8).toFixed(2));
      expectToHaveNFreeItems(res, 0);
      expectToHaveNOrderedItemsByType(res, 1);
    });
    it("given a basket containing 4 Watermelons, when called, then return the price of 3 Watermelons 2.40", () => {
      const basket = { orderedItemsByType: { Watermelon: 4 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(3 * 0.8).toFixed(2));
      expectToHaveNFreeItems(res, 0);
      expectToHaveNOrderedItemsByType(res, 1);
    });
    it("given a basket containing 5 Watermelons, when called, then return the price of 4 Watermelons 3.20", () => {
      const basket = { orderedItemsByType: { Watermelon: 5 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(4 * 0.8).toFixed(2));
      expectToHaveNFreeItems(res, 0);
      expectToHaveNOrderedItemsByType(res, 1);
    });
    it("given a basket containing 6 Watermelons, when called, then return the price of 4 Watermelons 3.20", () => {
      const basket = { orderedItemsByType: { Watermelon: 6 } };
      const res = totalPrice(basket);
      expect(res.orderTotal).toEqual(+(4 * 0.8).toFixed(2));
      expectToHaveNFreeItems(res, 0);
      expectToHaveNOrderedItemsByType(res, 1);
    });
  });
});
