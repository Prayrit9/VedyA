import { createSafeContext } from '../../../core/utils/create-safe-context/create-safe-context.js';

const [ScrollbarProvider, useScrollbarContext] = createSafeContext(
  "ScrollAreaScrollbar was not found in tree"
);

export { ScrollbarProvider, useScrollbarContext };
//# sourceMappingURL=Scrollbar.context.js.map
