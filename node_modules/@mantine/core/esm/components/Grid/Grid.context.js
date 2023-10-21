import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [GridProvider, useGridContext] = createSafeContext(
  "Grid component was not found in tree"
);

export { GridProvider, useGridContext };
//# sourceMappingURL=Grid.context.js.map
