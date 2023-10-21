import { createSafeContext } from '../../core/utils/create-safe-context/create-safe-context.js';

const [PaginationProvider, usePaginationContext] = createSafeContext(
  "Pagination.Root component was not found in tree"
);

export { PaginationProvider, usePaginationContext };
//# sourceMappingURL=Pagination.context.js.map
