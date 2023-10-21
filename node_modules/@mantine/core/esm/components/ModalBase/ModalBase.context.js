import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [ModalBaseProvider, useModalBaseContext] = createSafeContext(
  "ModalBase component was not found in tree"
);

export { ModalBaseProvider, useModalBaseContext };
//# sourceMappingURL=ModalBase.context.js.map
