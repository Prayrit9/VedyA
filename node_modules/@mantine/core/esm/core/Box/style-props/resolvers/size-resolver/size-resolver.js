import { rem } from '../../../../utils/units-converters/rem.js';

function sizeResolver(value) {
  if (typeof value === "number") {
    return rem(value);
  }
  return value;
}

export { sizeResolver };
//# sourceMappingURL=size-resolver.js.map
