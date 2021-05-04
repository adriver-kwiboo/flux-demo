export function get() {
  return new Promise((resolve) =>
    setTimeout(resolve, 10, [{ name: "Test" }, { name: "Two" }])
  );
}
