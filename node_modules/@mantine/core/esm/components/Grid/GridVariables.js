import React from 'react';
import { useMantineTheme } from '../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { filterProps } from '../../core/utils/filter-props/filter-props.js';
import { getSpacing } from '../../core/utils/get-size/get-size.js';
import { getBaseValue } from '../../core/utils/get-base-value/get-base-value.js';
import { keys } from '../../core/utils/keys/keys.js';
import { getSortedBreakpoints } from '../../core/utils/get-sorted-breakpoints/get-sorted-breakpoints.js';
import { InlineStyles } from '../../core/InlineStyles/InlineStyles.js';

function GridVariables({ gutter, selector }) {
  const theme = useMantineTheme();
  const baseStyles = filterProps({
    "--grid-gutter": getSpacing(getBaseValue(gutter))
  });
  const queries = keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof gutter === "object" && gutter[breakpoint] !== void 0) {
        acc[breakpoint]["--grid-gutter"] = getSpacing(gutter[breakpoint]);
      }
      return acc;
    },
    {}
  );
  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ React.createElement(InlineStyles, { styles: baseStyles, media, selector });
}

export { GridVariables };
//# sourceMappingURL=GridVariables.js.map
