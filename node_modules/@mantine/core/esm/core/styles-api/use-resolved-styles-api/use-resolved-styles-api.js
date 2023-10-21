import { resolveClassNames } from '../use-styles/get-class-name/resolve-class-names/resolve-class-names.js';
import { resolveStyles } from '../use-styles/get-style/resolve-styles/resolve-styles.js';
import { useMantineTheme } from '../../MantineProvider/MantineThemeProvider/MantineThemeProvider.js';

function useResolvedStylesApi({
  classNames,
  styles,
  props,
  stylesCtx
}) {
  const theme = useMantineTheme();
  return {
    resolvedClassNames: resolveClassNames({
      theme,
      classNames,
      props,
      stylesCtx: stylesCtx || void 0
    }),
    resolvedStyles: resolveStyles({
      theme,
      styles,
      props,
      stylesCtx: stylesCtx || void 0
    })
  };
}

export { useResolvedStylesApi };
//# sourceMappingURL=use-resolved-styles-api.js.map
