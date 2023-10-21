'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function CarouselVariables({ slideGap, slideSize, selector }) {
  var _a;
  const theme = core.useMantineTheme();
  const baseStyles = core.filterProps({
    "--carousel-slide-gap": core.getSpacing(core.getBaseValue(slideGap)),
    "--carousel-slide-size": (_a = core.getBaseValue(slideSize)) == null ? void 0 : _a.toString()
  });
  const queries = core.keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof slideGap === "object" && slideGap[breakpoint] !== void 0) {
        acc[breakpoint]["--carousel-slide-gap"] = core.getSpacing(slideGap[breakpoint]);
      }
      if (typeof slideSize === "object" && slideSize[breakpoint] !== void 0) {
        acc[breakpoint]["--carousel-slide-size"] = core.getSpacing(slideSize[breakpoint]);
      }
      return acc;
    },
    {}
  );
  const sortedBreakpoints = core.getSortedBreakpoints(core.keys(queries), theme).filter(
    (breakpoint) => core.keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ React__default.createElement(core.InlineStyles, { styles: baseStyles, media, selector });
}

exports.CarouselVariables = CarouselVariables;
//# sourceMappingURL=CarouselVariables.js.map
