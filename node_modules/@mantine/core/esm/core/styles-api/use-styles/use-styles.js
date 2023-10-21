import { getClassName } from './get-class-name/get-class-name.js';
import { getStyle } from './get-style/get-style.js';
import { useMantineTheme } from '../../MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { useMantineClassNamesPrefix } from '../../MantineProvider/Mantine.context.js';

function useStyles({
  name,
  classes,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = "root",
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver
}) {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
  return (selector, options) => ({
    className: getClassName({
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
    }),
    style: getStyle({
      theme,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver
    })
  });
}

export { useStyles };
//# sourceMappingURL=use-styles.js.map
