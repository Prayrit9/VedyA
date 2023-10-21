import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [RatingProvider, useRatingContext] = createSafeContext(
  "Rating was not found in tree"
);

export { RatingProvider, useRatingContext };
//# sourceMappingURL=Rating.context.js.map
