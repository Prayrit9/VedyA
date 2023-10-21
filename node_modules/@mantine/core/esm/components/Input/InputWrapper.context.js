import { createOptionalContext } from '../../core/utils/create-optional-context/create-optional-context.js';

const [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0
});

export { InputWrapperProvider, useInputWrapperContext };
//# sourceMappingURL=InputWrapper.context.js.map
