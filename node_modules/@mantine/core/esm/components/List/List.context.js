import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [ListProvider, useListContext] = createSafeContext(
  "List component was not found in tree"
);

export { ListProvider, useListContext };
//# sourceMappingURL=List.context.js.map
