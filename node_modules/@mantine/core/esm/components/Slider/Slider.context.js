import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [SliderProvider, useSliderContext] = createSafeContext(
  "SliderProvider was not found in tree"
);

export { SliderProvider, useSliderContext };
//# sourceMappingURL=Slider.context.js.map
