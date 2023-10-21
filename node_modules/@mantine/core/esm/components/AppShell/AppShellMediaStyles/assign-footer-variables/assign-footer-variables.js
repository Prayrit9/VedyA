import { isResponsiveSize } from '../is-responsive-size/is-responsive-size.js';
import { isPrimitiveSize } from '../is-primitive-size/is-primitive-size.js';
import { getBaseSize } from '../get-base-size/get-base-size.js';
import { rem } from '../../../../core/utils/units-converters/rem.js';
import { keys } from '../../../../core/utils/keys/keys.js';

function assignFooterVariables({
  baseStyles,
  minMediaStyles,
  footer
}) {
  var _a;
  const footerHeight = footer == null ? void 0 : footer.height;
  const collapsedFooterTransform = "translateY(var(--app-shell-footer-height))";
  const shouldOffset = (_a = footer == null ? void 0 : footer.offset) != null ? _a : true;
  if (isPrimitiveSize(footerHeight)) {
    const baseSize = rem(getBaseSize(footerHeight));
    baseStyles["--app-shell-footer-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-footer-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(footerHeight)) {
    if (typeof footerHeight.base !== "undefined") {
      baseStyles["--app-shell-footer-height"] = rem(footerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-footer-offset"] = rem(footerHeight.base);
      }
    }
    keys(footerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-footer-height"] = rem(footerHeight[key]);
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-footer-offset"] = rem(footerHeight[key]);
        }
      }
    });
  }
  if (footer == null ? void 0 : footer.collapsed) {
    baseStyles["--app-shell-footer-transform"] = collapsedFooterTransform;
    baseStyles["--app-shell-footer-offset"] = "0px !important";
  }
}

export { assignFooterVariables };
//# sourceMappingURL=assign-footer-variables.js.map
