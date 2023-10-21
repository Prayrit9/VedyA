import React, { useRef, useState } from 'react';
import { useId, useUncontrolled, useMergedRef, clamp } from '@mantine/hooks';
import { RatingProvider } from './Rating.context.js';
import classes from './Rating.module.css.js';
import { RatingItem } from './RatingItem/RatingItem.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { useDirection } from '../../core/DirectionProvider/DirectionProvider.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSize } from '../../core/utils/get-size/get-size.js';
import { getThemeColor } from '../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
function roundValueTo(value, to) {
  var _a;
  const rounded = Math.round(value / to) * to;
  const precision = ((_a = `${to}`.split(".")[1]) == null ? void 0 : _a.length) || 0;
  return Number(rounded.toFixed(precision));
}
const defaultProps = {
  size: "sm",
  getSymbolLabel: (value) => `${value}`,
  count: 5,
  fractions: 1,
  color: "yellow"
};
const varsResolver = createVarsResolver((theme, { size, color }) => ({
  root: {
    "--rating-size": getSize(size, "rating-size"),
    "--rating-color": getThemeColor(color, theme)
  }
}));
const Rating = factory((_props, ref) => {
  const props = useProps("Rating", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    name,
    id,
    value,
    defaultValue,
    onChange,
    fractions,
    count,
    onMouseEnter,
    readOnly,
    onMouseMove,
    onHover,
    onMouseLeave,
    size,
    variant,
    getSymbolLabel,
    color,
    emptySymbol,
    fullSymbol,
    highlightSelectedOnly
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "name",
    "id",
    "value",
    "defaultValue",
    "onChange",
    "fractions",
    "count",
    "onMouseEnter",
    "readOnly",
    "onMouseMove",
    "onHover",
    "onMouseLeave",
    "size",
    "variant",
    "getSymbolLabel",
    "color",
    "emptySymbol",
    "fullSymbol",
    "highlightSelectedOnly"
  ]);
  const getStyles = useStyles({
    name: "Rating",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const { dir } = useDirection();
  const _name = useId(name);
  const _id = useId(id);
  const rootRef = useRef(null);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 0,
    onChange
  });
  const [hovered, setHovered] = useState(-1);
  const [isOutside, setOutside] = useState(true);
  const _fractions = Math.floor(fractions);
  const _count = Math.floor(count);
  const decimalUnit = 1 / _fractions;
  const stableValueRounded = roundValueTo(_value, decimalUnit);
  const finalValue = hovered !== -1 ? hovered : stableValueRounded;
  const handleMouseEnter = (event) => {
    onMouseEnter == null ? void 0 : onMouseEnter(event);
    !readOnly && setOutside(false);
  };
  const handleMouseMove = (event) => {
    onMouseMove == null ? void 0 : onMouseMove(event);
    if (readOnly) {
      return;
    }
    const { left, right, width } = rootRef.current.getBoundingClientRect();
    const symbolWidth = width / _count;
    const hoverPosition = dir === "rtl" ? right - event.clientX : event.clientX - left;
    const hoverValue = hoverPosition / symbolWidth;
    const rounded = clamp(
      roundValueTo(hoverValue + decimalUnit / 2, decimalUnit),
      decimalUnit,
      _count
    );
    setHovered(rounded);
    rounded !== hovered && (onHover == null ? void 0 : onHover(rounded));
  };
  const handleMouseLeave = (event) => {
    onMouseLeave == null ? void 0 : onMouseLeave(event);
    if (readOnly) {
      return;
    }
    setHovered(-1);
    setOutside(true);
    hovered !== -1 && (onHover == null ? void 0 : onHover(-1));
  };
  const handleItemBlur = () => isOutside && setHovered(-1);
  const handleChange = (event) => {
    if (!readOnly) {
      if (typeof event === "number") {
        setValue(event);
      } else {
        setValue(parseFloat(event.target.value));
      }
    }
  };
  const items = Array(_count).fill(0).map((_, index) => {
    const integerValue = index + 1;
    const fractionItems = Array.from(new Array(index === 0 ? _fractions + 1 : _fractions));
    const isGroupActive = !readOnly && Math.ceil(hovered) === integerValue;
    return /* @__PURE__ */ React.createElement(
      "div",
      __spreadValues({
        key: integerValue,
        "data-active": isGroupActive || void 0
      }, getStyles("symbolGroup")),
      fractionItems.map((__, fractionIndex) => {
        const fractionValue = decimalUnit * (index === 0 ? fractionIndex : fractionIndex + 1);
        const symbolValue = roundValueTo(integerValue - 1 + fractionValue, decimalUnit);
        return /* @__PURE__ */ React.createElement(
          RatingItem,
          {
            key: `${integerValue}-${symbolValue}`,
            size,
            getSymbolLabel,
            emptyIcon: emptySymbol,
            fullIcon: fullSymbol,
            full: highlightSelectedOnly ? symbolValue === finalValue : symbolValue <= finalValue,
            active: symbolValue === finalValue,
            checked: symbolValue === stableValueRounded,
            readOnly,
            fractionValue,
            value: symbolValue,
            name: _name,
            onChange: handleChange,
            onBlur: handleItemBlur,
            id: `${_id}-${index}-${fractionIndex}`
          }
        );
      })
    );
  });
  return /* @__PURE__ */ React.createElement(RatingProvider, { value: { getStyles } }, /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues({
      ref: useMergedRef(rootRef, ref)
    }, getStyles("root")), {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      variant,
      size
    }), others),
    items
  ));
});
Rating.classes = classes;
Rating.displayName = "@mantine/core/Rating";

export { Rating };
//# sourceMappingURL=Rating.js.map
