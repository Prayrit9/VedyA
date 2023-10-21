import { getBreakpointValue } from '../get-breakpoint-value/get-breakpoint-value.js';

function getSortedBreakpoints(breakpoints, theme) {
  const convertedBreakpoints = breakpoints.map((breakpoint) => ({
    value: breakpoint,
    px: getBreakpointValue(breakpoint, theme)
  }));
  convertedBreakpoints.sort((a, b) => a.px - b.px);
  return convertedBreakpoints;
}

export { getSortedBreakpoints };
//# sourceMappingURL=get-sorted-breakpoints.js.map
