import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [CardProvider, useCardContext] = createSafeContext(
  "Card component was not found in tree"
);

export { CardProvider, useCardContext };
//# sourceMappingURL=Card.context.js.map
