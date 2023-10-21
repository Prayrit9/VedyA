import { getSpacing } from '../../../../core/utils/get-size/get-size.js';

function getPaddingValue(padding) {
  return Number(padding) === 0 ? "0px" : getSpacing(padding);
}

export { getPaddingValue };
//# sourceMappingURL=get-padding-value.js.map
