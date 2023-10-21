import { forwardRef } from 'react';
import { identity } from './factory.js';

function polymorphicFactory(ui) {
  const Component = forwardRef(ui);
  Component.extend = identity;
  return Component;
}

export { polymorphicFactory };
//# sourceMappingURL=polymorphic-factory.js.map
