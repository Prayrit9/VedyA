import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [ScrollAreaProvider, useScrollAreaContext] = createSafeContext(
  "ScrollArea.Root component was not found in tree"
);

export { ScrollAreaProvider, useScrollAreaContext };
//# sourceMappingURL=ScrollArea.context.js.map
