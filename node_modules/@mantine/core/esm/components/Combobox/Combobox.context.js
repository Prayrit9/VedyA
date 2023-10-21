import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [ComboboxProvider, useComboboxContext] = createSafeContext(
  "Combobox component was not found in tree"
);

export { ComboboxProvider, useComboboxContext };
//# sourceMappingURL=Combobox.context.js.map
