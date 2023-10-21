import { colorResolver } from './color-resolver/color-resolver.js';
import { fontSizeResolver } from './font-size-resolver/font-size-resolver.js';
import { spacingResolver } from './spacing-resolver/spacing-resolver.js';
import { identityResolver } from './identity-resolver/identity-resolver.js';
import { sizeResolver } from './size-resolver/size-resolver.js';
import { lineHeightResolver } from './line-height-resolver/line-height-resolver.js';

const resolvers = {
  color: colorResolver,
  fontSize: fontSizeResolver,
  spacing: spacingResolver,
  identity: identityResolver,
  size: sizeResolver,
  lineHeight: lineHeightResolver
};

export { resolvers };
//# sourceMappingURL=index.js.map
