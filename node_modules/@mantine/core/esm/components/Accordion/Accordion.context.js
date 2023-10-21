import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [AccordionProvider, useAccordionContext] = createSafeContext(
  "Accordion component was not found in the tree"
);

export { AccordionProvider, useAccordionContext };
//# sourceMappingURL=Accordion.context.js.map
