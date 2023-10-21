import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [DrawerProvider, useDrawerContext] = createSafeContext(
  "Drawer component was not found in tree"
);

export { DrawerProvider, useDrawerContext };
//# sourceMappingURL=Drawer.context.js.map
