import add from "./math.js";

test("returns guest if input is empty string", () => {
  expect(add(" ")).toBe("guest");
});