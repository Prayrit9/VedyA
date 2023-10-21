function cssVariablesObjectToString(variables) {
  return Object.entries(variables).map(([name, value]) => `${name}: ${value};`).join("");
}

export { cssVariablesObjectToString };
//# sourceMappingURL=css-variables-object-to-string.js.map
