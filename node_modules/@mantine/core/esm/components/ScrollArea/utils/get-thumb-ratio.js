function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}

export { getThumbRatio };
//# sourceMappingURL=get-thumb-ratio.js.map
