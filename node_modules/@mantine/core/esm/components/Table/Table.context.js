import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [TableProvider, useTableContext] = createSafeContext(
  "Table component was not found in the tree"
);

export { TableProvider, useTableContext };
//# sourceMappingURL=Table.context.js.map
