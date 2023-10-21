import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [AppShellProvider, useAppShellContext] = createSafeContext(
  "AppShell was not found in tree"
);

export { AppShellProvider, useAppShellContext };
//# sourceMappingURL=AppShell.context.js.map
