import { parseThemeColor } from '../parse-theme-color/parse-theme-color.js';

function getThemeColor(color, theme) {
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}

export { getThemeColor };
//# sourceMappingURL=get-theme-color.js.map
