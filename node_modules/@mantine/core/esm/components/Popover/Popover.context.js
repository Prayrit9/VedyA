import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [PopoverContextProvider, usePopoverContext] = createSafeContext(
  "Popover component was not found in the tree"
);

export { PopoverContextProvider, usePopoverContext };
//# sourceMappingURL=Popover.context.js.map
