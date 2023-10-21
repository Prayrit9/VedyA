import React, { forwardRef } from 'react';
import cx from 'clsx';
import { getBoxStyle } from './get-box-style/get-box-style.js';
import { useRandomClassName } from './use-random-classname/use-random-classname.js';
import { getBoxMod } from './get-box-mod/get-box-mod.js';
import { useMantineTheme } from '../MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { extractStyleProps } from './style-props/extract-style-props/extract-style-props.js';
import { parseStyleProps } from './style-props/parse-style-props/parse-style-props.js';
import { STYlE_PROPS_DATA } from './style-props/style-props-data.js';
import { InlineStyles } from '../InlineStyles/InlineStyles.js';
import { isNumberLike } from '../utils/is-number-like/is-number-like.js';
import { createPolymorphicComponent } from '../factory/create-polymorphic-component.js';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const _Box = forwardRef(
  (_a, ref) => {
    var _b = _a, { component, style, __vars, className, variant, mod, size, hiddenFrom, visibleFrom } = _b, others = __objRest(_b, ["component", "style", "__vars", "className", "variant", "mod", "size", "hiddenFrom", "visibleFrom"]);
    const theme = useMantineTheme();
    const Element = component || "div";
    const { styleProps, rest } = extractStyleProps(others);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      data: STYlE_PROPS_DATA
    });
    return /* @__PURE__ */ React.createElement(React.Fragment, null, parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ React.createElement(
      InlineStyles,
      {
        selector: `.${responsiveClassName}`,
        styles: parsedStyleProps.styles,
        media: parsedStyleProps.media
      }
    ), /* @__PURE__ */ React.createElement(
      Element,
      __spreadValues(__spreadValues({
        ref,
        style: getBoxStyle({
          theme,
          style,
          vars: __vars,
          styleProps: parsedStyleProps.inlineStyles
        }),
        className: cx(className, {
          [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
          [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
          [`mantine-visible-from-${visibleFrom}`]: visibleFrom
        }),
        "data-variant": variant,
        "data-size": isNumberLike(size) ? void 0 : size || void 0
      }, getBoxMod(mod)), rest)
    ));
  }
);
_Box.displayName = "@mantine/core/Box";
const Box = createPolymorphicComponent(_Box);

export { Box };
//# sourceMappingURL=Box.js.map
