import React from 'react';
import { useMantineStyleNonce } from '../Mantine.context.js';
import { useMantineTheme } from '../MantineThemeProvider/MantineThemeProvider.js';
import { keys } from '../../utils/keys/keys.js';
import { px } from '../../utils/units-converters/px.js';
import { em } from '../../utils/units-converters/rem.js';

function MantineClasses() {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const classes = keys(theme.breakpoints).reduce((acc, breakpoint) => {
    const pxValue = px(theme.breakpoints[breakpoint]);
    return `${acc}@media (max-width: ${em(
      pxValue - 0.1
    )}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${em(
      pxValue
    )}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ React.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: nonce == null ? void 0 : nonce(),
      dangerouslySetInnerHTML: { __html: classes }
    }
  );
}

export { MantineClasses };
//# sourceMappingURL=MantineClasses.js.map
