import { useId } from 'react';

function useRandomClassName() {
  const id = useId().replace(/:/g, "");
  return `__m__-${id}`;
}

export { useRandomClassName };
//# sourceMappingURL=use-random-classname.js.map
