import { isResponsiveSize } from '../is-responsive-size/is-responsive-size.js';
import { isPrimitiveSize } from '../is-primitive-size/is-primitive-size.js';
import { getBaseSize } from '../get-base-size/get-base-size.js';
import { rem } from '../../../../core/utils/units-converters/rem.js';
import { keys } from '../../../../core/utils/keys/keys.js';

function assignHeaderVariables({
  baseStyles,
  minMediaStyles,
  header
}) {
  var _a;
  const headerHeight = header == null ? void 0 : header.height;
  const collapsedHeaderTransform = "translateY(calc(var(--app-shell-header-height) * -1))";
  const shouldOffset = (_a = header == null ? void 0 : header.offset) != null ? _a : true;
  if (isPrimitiveSize(headerHeight)) {
    const baseSize = rem(getBaseSize(headerHeight));
    baseStyles["--app-shell-header-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-header-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(headerHeight)) {
    if (typeof headerHeight.base !== "undefined") {
      baseStyles["--app-shell-header-height"] = rem(headerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-header-offset"] = rem(headerHeight.base);
      }
    }
    keys(headerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-header-height"] = rem(headerHeight[key]);
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-header-offset"] = rem(headerHeight[key]);
        }
      }
    });
  }
  if (header == null ? void 0 : header.collapsed) {
    baseStyles["--app-shell-header-transform"] = collapsedHeaderTransform;
    baseStyles["--app-shell-header-offset"] = "0px !important";
  }
}

export { assignHeaderVariables };
//# sourceMappingURL=assign-header-variables.js.map
