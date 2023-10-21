import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [HoverCardContextProvider, useHoverCardContext] = createSafeContext(
  "HoverCard component was not found in the tree"
);

export { HoverCardContextProvider, useHoverCardContext };
//# sourceMappingURL=HoverCard.context.js.map
