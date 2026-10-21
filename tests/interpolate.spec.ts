import { describe, expect, test } from "bun:test";
import interpolate from "@/utils/interpolate";

describe("interpolate", () => {
  test("replaces every placeholder with its value", () => {
    expect(
      interpolate("© {year} {businessName}", {
        year: 2026,
        businessName: "Nestmann Automatisierung",
      }),
    ).toBe("© 2026 Nestmann Automatisierung");
  });

  test("replaces a placeholder that appears more than once", () => {
    expect(interpolate("{name} und {name}", { name: "TIA" })).toBe(
      "TIA und TIA",
    );
  });

  test("keeps placeholders without a value", () => {
    expect(interpolate("© {year} {businessName}", { year: 2026 })).toBe(
      "© 2026 {businessName}",
    );
  });

  test("converts zero and negative numbers to text", () => {
    expect(interpolate("{a} / {b}", { a: 0, b: -5 })).toBe("0 / -5");
  });

  test("keeps an empty value as an empty replacement", () => {
    expect(interpolate("[{value}]", { value: "" })).toBe("[]");
  });

  test("returns a template without placeholders unchanged", () => {
    expect(interpolate("Gute Logik.", { year: 2026 })).toBe("Gute Logik.");
  });

  test("handles Unicode values", () => {
    expect(interpolate("{city}", { city: "Düsseldorf ✓" })).toBe(
      "Düsseldorf ✓",
    );
  });

  test("ignores braces that do not wrap a placeholder name", () => {
    expect(interpolate("{ year } {}", { year: 2026 })).toBe("{ year } {}");
  });
});
