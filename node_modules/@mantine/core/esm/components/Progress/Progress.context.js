import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [ProgressProvider, useProgressContext] = createSafeContext(
  "Progress.Root component was not found in tree"
);

export { ProgressProvider, useProgressContext };
//# sourceMappingURL=Progress.context.js.map
