import React from 'react';
import { getVariables } from './get-variables/get-variables.js';
import { useMantineContext } from '../../../core/MantineProvider/Mantine.context.js';
import { useMantineTheme } from '../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { InlineStyles } from '../../../core/InlineStyles/InlineStyles.js';

function AppShellMediaStyles({
  navbar,
  header,
  aside,
  footer,
  padding
}) {
  const theme = useMantineTheme();
  const ctx = useMantineContext();
  const { media, baseStyles } = getVariables({ navbar, header, footer, aside, padding, theme });
  return /* @__PURE__ */ React.createElement(InlineStyles, { media, styles: baseStyles, selector: ctx.cssVariablesSelector });
}

export { AppShellMediaStyles };
//# sourceMappingURL=AppShellMediaStyles.js.map
