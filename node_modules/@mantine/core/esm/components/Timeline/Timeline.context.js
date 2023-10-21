import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [TimelineProvider, useTimelineContext] = createSafeContext(
  "Timeline component was not found in tree"
);

export { TimelineProvider, useTimelineContext };
//# sourceMappingURL=Timeline.context.js.map
