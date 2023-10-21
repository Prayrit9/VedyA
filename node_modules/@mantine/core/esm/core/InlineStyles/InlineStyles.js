import React from 'react';
import { stylesToString } from './styles-to-string/styles-to-string.js';
import { useMantineStyleNonce } from '../MantineProvider/Mantine.context.js';

function InlineStyles({ selector, styles, media }) {
  const nonce = useMantineStyleNonce();
  return /* @__PURE__ */ React.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: nonce == null ? void 0 : nonce(),
      dangerouslySetInnerHTML: { __html: stylesToString({ selector, styles, media }) }
    }
  );
}

export { InlineStyles };
//# sourceMappingURL=InlineStyles.js.map
