import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [StepperProvider, useStepperContext] = createSafeContext(
  "Stepper component was not found in tree"
);

export { StepperProvider, useStepperContext };
//# sourceMappingURL=Stepper.context.js.map
