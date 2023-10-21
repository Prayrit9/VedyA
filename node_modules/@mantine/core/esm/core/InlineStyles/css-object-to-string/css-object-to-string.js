import { keys } from '../../utils/keys/keys.js';
import { camelToKebabCase } from '../../utils/camel-to-kebab-case/camel-to-kebab-case.js';

function cssObjectToString(css) {
  return keys(css).reduce(
    (acc, rule) => css[rule] !== void 0 ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
    ""
  ).trim();
}

export { cssObjectToString };
//# sourceMappingURL=css-object-to-string.js.map
