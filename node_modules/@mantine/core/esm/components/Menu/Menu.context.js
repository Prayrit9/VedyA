import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [MenuContextProvider, useMenuContext] = createSafeContext(
  "Menu component was not found in the tree"
);

export { MenuContextProvider, useMenuContext };
//# sourceMappingURL=Menu.context.js.map
