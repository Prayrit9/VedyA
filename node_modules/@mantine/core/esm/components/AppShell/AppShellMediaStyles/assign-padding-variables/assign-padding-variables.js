import { getBaseSize } from '../get-base-size/get-base-size.js';
import { getPaddingValue } from '../get-padding-value/get-padding-value.js';
import { isPrimitiveSize } from '../is-primitive-size/is-primitive-size.js';
import { isResponsiveSize } from '../is-responsive-size/is-responsive-size.js';
import { keys } from '../../../../core/utils/keys/keys.js';

function assignPaddingVariables({
  padding,
  baseStyles,
  minMediaStyles
}) {
  if (isPrimitiveSize(padding)) {
    baseStyles["--app-shell-padding"] = getPaddingValue(getBaseSize(padding));
  }
  if (isResponsiveSize(padding)) {
    if (padding.base) {
      baseStyles["--app-shell-padding"] = getPaddingValue(padding.base);
    }
    keys(padding).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-padding"] = getPaddingValue(padding[key]);
      }
    });
  }
}

export { assignPaddingVariables };
//# sourceMappingURL=assign-padding-variables.js.map
