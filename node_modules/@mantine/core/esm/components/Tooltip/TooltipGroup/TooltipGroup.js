import React from 'react';
import { FloatingDelayGroup } from '@floating-ui/react';
import { TooltipGroupProvider } from './TooltipGroup.context.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';

const defaultProps = {
  openDelay: 0,
  closeDelay: 0
};
function TooltipGroup(props) {
  const { openDelay, closeDelay, children } = useProps("TooltipGroup", defaultProps, props);
  return /* @__PURE__ */ React.createElement(TooltipGroupProvider, { value: true }, /* @__PURE__ */ React.createElement(FloatingDelayGroup, { delay: { open: openDelay, close: closeDelay } }, children));
}
TooltipGroup.displayName = "@mantine/core/TooltipGroup";

export { TooltipGroup };
//# sourceMappingURL=TooltipGroup.js.map
