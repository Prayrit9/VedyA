import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [TabsProvider, useTabsContext] = createSafeContext(
  "Tabs component was not found in the tree"
);

export { TabsProvider, useTabsContext };
//# sourceMappingURL=Tabs.context.js.map
