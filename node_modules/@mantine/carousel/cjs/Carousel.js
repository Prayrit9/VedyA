'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var useEmblaCarousel = require('embla-carousel-react');
var getChevronRotation = require('./get-chevron-rotation.js');
var Carousel_context = require('./Carousel.context.js');
var CarouselSlide = require('./CarouselSlide/CarouselSlide.js');
var CarouselVariables = require('./CarouselVariables/CarouselVariables.js');
var Carousel_module = require('./Carousel.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var useEmblaCarousel__default = /*#__PURE__*/_interopDefaultLegacy(useEmblaCarousel);

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
const defaultProps = {
  controlSize: 26,
  controlsOffset: "sm",
  slideSize: "100%",
  slideGap: 0,
  orientation: "horizontal",
  align: "center",
  slidesToScroll: 1,
  includeGapInSize: true,
  draggable: true,
  dragFree: false,
  loop: false,
  speed: 10,
  initialSlide: 0,
  inViewThreshold: 0,
  withControls: true,
  withIndicators: false,
  skipSnaps: false,
  containScroll: "",
  withKeyboardEvents: true
};
const varsResolver = core.createVarsResolver(
  (_, { height, controlSize, controlsOffset }) => ({
    root: {
      "--carousel-height": core.rem(height),
      "--carousel-control-size": core.rem(controlSize),
      "--carousel-controls-offset": core.getSpacing(controlsOffset)
    }
  })
);
const Carousel = core.factory((_props, ref) => {
  const props = core.useProps("Carousel", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    getEmblaApi,
    onNextSlide,
    onPreviousSlide,
    onSlideChange,
    nextControlProps,
    previousControlProps,
    controlSize,
    controlsOffset,
    slideSize,
    slideGap,
    orientation,
    height,
    align,
    slidesToScroll,
    includeGapInSize,
    draggable,
    dragFree,
    loop,
    speed,
    initialSlide,
    inViewThreshold,
    withControls,
    withIndicators,
    plugins,
    nextControlIcon,
    previousControlIcon,
    skipSnaps,
    containScroll,
    withKeyboardEvents
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "getEmblaApi",
    "onNextSlide",
    "onPreviousSlide",
    "onSlideChange",
    "nextControlProps",
    "previousControlProps",
    "controlSize",
    "controlsOffset",
    "slideSize",
    "slideGap",
    "orientation",
    "height",
    "align",
    "slidesToScroll",
    "includeGapInSize",
    "draggable",
    "dragFree",
    "loop",
    "speed",
    "initialSlide",
    "inViewThreshold",
    "withControls",
    "withIndicators",
    "plugins",
    "nextControlIcon",
    "previousControlIcon",
    "skipSnaps",
    "containScroll",
    "withKeyboardEvents"
  ]);
  const getStyles = core.useStyles({
    name: "Carousel",
    classes: Carousel_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const responsiveClassName = core.useRandomClassName();
  const { dir } = core.useDirection();
  const [emblaRefElement, embla] = useEmblaCarousel__default(
    {
      axis: orientation === "horizontal" ? "x" : "y",
      direction: orientation === "horizontal" ? dir : void 0,
      startIndex: initialSlide,
      loop,
      align,
      slidesToScroll,
      draggable,
      dragFree,
      speed,
      inViewThreshold,
      skipSnaps,
      containScroll
    },
    plugins
  );
  const [selected, setSelected] = React.useState(0);
  const [slidesCount, setSlidesCount] = React.useState(0);
  const handleScroll = React.useCallback((index) => embla && embla.scrollTo(index), [embla]);
  const handleSelect = React.useCallback(() => {
    if (!embla)
      return;
    const slide = embla.selectedScrollSnap();
    setSelected(slide);
    onSlideChange == null ? void 0 : onSlideChange(slide);
  }, [embla, setSelected]);
  const handlePrevious = React.useCallback(() => {
    embla == null ? void 0 : embla.scrollPrev();
    onPreviousSlide == null ? void 0 : onPreviousSlide();
  }, [embla]);
  const handleNext = React.useCallback(() => {
    embla == null ? void 0 : embla.scrollNext();
    onNextSlide == null ? void 0 : onNextSlide();
  }, [embla]);
  const handleKeydown = React.useCallback(
    (event) => {
      if (withKeyboardEvents) {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          handleNext();
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          handlePrevious();
        }
      }
    },
    [embla]
  );
  React.useEffect(() => {
    if (embla) {
      getEmblaApi == null ? void 0 : getEmblaApi(embla);
      handleSelect();
      setSlidesCount(embla.scrollSnapList().length);
      embla.on("select", handleSelect);
      return () => {
        embla.off("select", handleSelect);
      };
    }
    return void 0;
  }, [embla, slidesToScroll]);
  React.useEffect(() => {
    if (embla) {
      embla.reInit();
      setSlidesCount(embla.scrollSnapList().length);
      setSelected(
        (currentSelected) => hooks.clamp(currentSelected, 0, React.Children.toArray(children).length - 1)
      );
    }
  }, [React.Children.toArray(children).length, slidesToScroll]);
  const canScrollPrev = (embla == null ? void 0 : embla.canScrollPrev()) || false;
  const canScrollNext = (embla == null ? void 0 : embla.canScrollNext()) || false;
  const indicators = Array(slidesCount).fill(0).map((_, index) => /* @__PURE__ */ React__default.createElement(
    core.UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("indicator")), {
      key: index,
      "data-active": index === selected || void 0,
      "aria-hidden": true,
      tabIndex: -1,
      onClick: () => handleScroll(index)
    })
  ));
  return /* @__PURE__ */ React__default.createElement(Carousel_context.CarouselProvider, { value: { getStyles, orientation } }, /* @__PURE__ */ React__default.createElement(CarouselVariables.CarouselVariables, __spreadProps(__spreadValues({}, props), { selector: `.${responsiveClassName}` })), /* @__PURE__ */ React__default.createElement(
    core.Box,
    __spreadProps(__spreadValues(__spreadValues({
      ref
    }, getStyles("root", { className: responsiveClassName })), others), {
      mod: { orientation, "include-gap-in-size": includeGapInSize },
      onKeyDownCapture: handleKeydown
    }),
    /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, getStyles("viewport")), { ref: emblaRefElement }), /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, getStyles("container")), { "data-orientation": orientation }), children)),
    withIndicators && /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("indicators")), indicators),
    withControls && /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("controls")), /* @__PURE__ */ React__default.createElement(
      core.UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, previousControlProps), getStyles("control")), {
        onClick: handlePrevious,
        "data-inactive": !canScrollPrev || void 0,
        tabIndex: canScrollPrev ? 0 : -1
      }),
      typeof previousControlIcon !== "undefined" ? previousControlIcon : /* @__PURE__ */ React__default.createElement(
        core.AccordionChevron,
        {
          style: {
            transform: `rotate(${getChevronRotation.getChevronRotation({
              dir,
              orientation,
              direction: "previous"
            })}deg)`
          }
        }
      )
    ), /* @__PURE__ */ React__default.createElement(
      core.UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({
        onClick: handleNext
      }, getStyles("control")), nextControlProps), {
        "data-inactive": !canScrollNext || void 0,
        tabIndex: canScrollNext ? 0 : -1
      }),
      typeof nextControlIcon !== "undefined" ? nextControlIcon : /* @__PURE__ */ React__default.createElement(
        core.AccordionChevron,
        {
          style: {
            transform: `rotate(${getChevronRotation.getChevronRotation({
              dir,
              orientation,
              direction: "next"
            })}deg)`
          }
        }
      )
    ))
  ));
});
Carousel.classes = Carousel_module['default'];
Carousel.displayName = "@mantine/core/Carousel";
Carousel.Slide = CarouselSlide.CarouselSlide;

exports.Carousel = Carousel;
//# sourceMappingURL=Carousel.js.map
