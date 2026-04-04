// Suppress noisy staleness warnings
// Used via NODE_OPTIONS=--require to ensure it loads before any module
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" && (
      args[0].includes("baseline-browser-mapping") ||
      args[0].includes("rowserslist")
    )
  ) return;
  originalWarn.apply(console, args);
};
