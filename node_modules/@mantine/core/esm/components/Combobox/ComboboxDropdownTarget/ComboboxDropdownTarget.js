import React from 'react';
import { useComboboxContext } from '../Combobox.context.js';
import { Popover } from '../../Popover/Popover.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { isElement } from '../../../core/utils/is-element/is-element.js';

const defaultProps = {
  refProp: "ref"
};
const ComboboxDropdownTarget = factory((props, ref) => {
  const { children, refProp } = useProps("ComboboxDropdownTarget", defaultProps, props);
  useComboboxContext();
  if (!isElement(children)) {
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  return /* @__PURE__ */ React.createElement(Popover.Target, { ref, refProp }, children);
});
ComboboxDropdownTarget.displayName = "@mantine/core/ComboboxDropdownTarget";

export { ComboboxDropdownTarget };
//# sourceMappingURL=ComboboxDropdownTarget.js.map
