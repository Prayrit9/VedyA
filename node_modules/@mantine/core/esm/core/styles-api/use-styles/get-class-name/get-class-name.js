import cx from 'clsx';
import { getStaticClassNames } from './get-static-class-names/get-static-class-names.js';
import { getThemeClassNames } from './get-theme-class-names/get-theme-class-names.js';
import { getGlobalClassNames } from './get-global-class-names/get-global-class-names.js';
import { getVariantClassName } from './get-variant-class-name/get-variant-class-name.js';
import { getRootClassName } from './get-root-class-name/get-root-class-name.js';
import { getSelectorClassName } from './get-selector-class-name/get-selector-class-name.js';
import { getResolvedClassNames } from './get-resolved-class-names/get-resolved-class-names.js';
import { getOptionsClassNames } from './get-options-class-names/get-options-class-names.js';

function getClassName({
  theme,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx
}) {
  return cx(
    getGlobalClassNames({ theme, options, unstyled }),
    getThemeClassNames({ theme, themeName, selector, props, stylesCtx }),
    getVariantClassName({ options, classes, selector, unstyled }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }),
    getOptionsClassNames({ selector, stylesCtx, options, props, theme }),
    getRootClassName({ rootSelector, selector, className }),
    getSelectorClassName({ selector, classes, unstyled }),
    getStaticClassNames({ themeName, classNamesPrefix, selector }),
    options == null ? void 0 : options.className
  );
}

export { getClassName };
//# sourceMappingURL=get-class-name.js.map
