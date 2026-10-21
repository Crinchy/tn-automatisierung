import { describe, expect, test } from "bun:test";
import nearestIndex from "@/utils/nearest-index";

describe("nearestIndex", () => {
  test.each([
    [0, 0],
    [100, 0],
    [156, 0],
    [157, 1],
    [313, 1],
    [700, 2],
    [-50, 0],
    [10_000, 3],
  ])("finds the closest position to %p", (value, expected) => {
    expect(nearestIndex([0, 313, 626, 939], value)).toBe(expected);
  });

  test("keeps the first index on a tie", () => {
    expect(nearestIndex([0, 100], 50)).toBe(0);
  });

  test("keeps the first of equal positions", () => {
    expect(nearestIndex([0, 300, 300], 300)).toBe(1);
  });

  test("returns 0 for an empty list", () => {
    expect(nearestIndex([], 42)).toBe(0);
  });

  test("returns 0 when the value is NaN", () => {
    expect(nearestIndex([0, 313, 626], Number.NaN)).toBe(0);
  });
});
