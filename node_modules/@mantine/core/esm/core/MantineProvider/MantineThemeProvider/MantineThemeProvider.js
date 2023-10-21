import React, { createContext, useContext, useMemo } from 'react';
import { DEFAULT_THEME } from '../default-theme.js';
import { mergeMantineTheme } from '../merge-mantine-theme/merge-mantine-theme.js';

const MantineThemeContext = createContext(null);
const useSafeMantineTheme = () => useContext(MantineThemeContext) || DEFAULT_THEME;
function useMantineTheme() {
  const ctx = useContext(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  }
  return ctx;
}
function MantineThemeProvider({
  theme,
  children,
  inherit = true
}) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = useMemo(
    () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );
  return /* @__PURE__ */ React.createElement(MantineThemeContext.Provider, { value: mergedTheme }, children);
}
MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";

export { MantineThemeContext, MantineThemeProvider, useMantineTheme, useSafeMantineTheme };
//# sourceMappingURL=MantineThemeProvider.js.map
