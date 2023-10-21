import React from 'react';
import { useMantineStyleNonce, useMantineCssVariablesResolver } from '../Mantine.context.js';
import { convertCssVariables } from '../convert-css-variables/convert-css-variables.js';
import { getMergedVariables } from './get-merged-variables.js';
import { removeDefaultVariables } from './remove-default-variables.js';
import { useMantineTheme } from '../MantineThemeProvider/MantineThemeProvider.js';

function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function MantineCssVariables({ cssVariablesSelector }) {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesResolver();
  const mergedVariables = getMergedVariables({ theme, generator });
  const shouldCleanVariables = cssVariablesSelector === ":root";
  const cleanedVariables = shouldCleanVariables ? removeDefaultVariables(mergedVariables) : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);
  if (css) {
    return /* @__PURE__ */ React.createElement(
      "style",
      {
        "data-mantine-styles": true,
        nonce: nonce == null ? void 0 : nonce(),
        dangerouslySetInnerHTML: {
          __html: `${css}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`
        }
      }
    );
  }
  return null;
}
MantineCssVariables.displayName = "@mantine/CssVariables";

export { MantineCssVariables };
//# sourceMappingURL=MantineCssVariables.js.map
