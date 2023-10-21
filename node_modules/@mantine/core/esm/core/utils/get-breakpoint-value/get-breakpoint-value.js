import { px } from '../units-converters/px.js';

function getBreakpointValue(breakpoint, theme) {
  if (breakpoint in theme.breakpoints) {
    return px(theme.breakpoints[breakpoint]);
  }
  return px(breakpoint);
}

export { getBreakpointValue };
//# sourceMappingURL=get-breakpoint-value.js.map
