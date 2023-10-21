import { resolveClassNames } from '../resolve-class-names/resolve-class-names.js';

function getResolvedClassNames({
  selector,
  stylesCtx,
  theme,
  classNames,
  props
}) {
  return resolveClassNames({ theme, classNames, props, stylesCtx })[selector];
}

export { getResolvedClassNames };
//# sourceMappingURL=get-resolved-class-names.js.map
