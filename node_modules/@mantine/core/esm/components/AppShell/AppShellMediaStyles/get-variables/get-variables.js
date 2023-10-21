import { assignAsideVariables } from '../assign-aside-variables/assign-aside-variables.js';
import { assignFooterVariables } from '../assign-footer-variables/assign-footer-variables.js';
import { assignHeaderVariables } from '../assign-header-variables/assign-header-variables.js';
import { assignNavbarVariables } from '../assign-navbar-variables/assign-navbar-variables.js';
import { assignPaddingVariables } from '../assign-padding-variables/assign-padding-variables.js';
import { getSortedBreakpoints } from '../../../../core/utils/get-sorted-breakpoints/get-sorted-breakpoints.js';
import { em } from '../../../../core/utils/units-converters/rem.js';
import { keys } from '../../../../core/utils/keys/keys.js';

function getVariables({ navbar, header, footer, aside, padding, theme }) {
  const minMediaStyles = {};
  const maxMediaStyles = {};
  const baseStyles = {};
  assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    navbar,
    theme
  });
  assignAsideVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    aside,
    theme
  });
  assignHeaderVariables({ baseStyles, minMediaStyles, header });
  assignFooterVariables({ baseStyles, minMediaStyles, footer });
  assignPaddingVariables({ baseStyles, minMediaStyles, padding });
  const minMedia = getSortedBreakpoints(keys(minMediaStyles), theme).map((breakpoint) => ({
    query: `(min-width: ${em(breakpoint.px)})`,
    styles: minMediaStyles[breakpoint.value]
  }));
  const maxMedia = getSortedBreakpoints(keys(maxMediaStyles), theme).map((breakpoint) => ({
    query: `(max-width: ${em(breakpoint.px)})`,
    styles: maxMediaStyles[breakpoint.value]
  }));
  const media = [...minMedia, ...maxMedia];
  return { baseStyles, media };
}

export { getVariables };
//# sourceMappingURL=get-variables.js.map
