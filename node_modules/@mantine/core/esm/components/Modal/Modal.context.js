import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [ModalProvider, useModalContext] = createSafeContext(
  "Modal component was not found in tree"
);

export { ModalProvider, useModalContext };
//# sourceMappingURL=Modal.context.js.map
