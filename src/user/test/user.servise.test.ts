import { describe, expect, test } from "@jest/globals";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});
describe("subtract module", () => {
    test("subtract 5-2 to equal 3", () => {
      expect(5 - 2).toBe(3);
    });
  });