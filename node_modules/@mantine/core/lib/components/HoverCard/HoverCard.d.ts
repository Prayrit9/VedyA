import React from 'react';
import { PopoverProps } from '../Popover';
import { HoverCardDropdown } from './HoverCardDropdown/HoverCardDropdown';
export interface HoverCardProps extends PopoverProps {
    variant?: string;
    /** Initial opened state */
    initiallyOpened?: boolean;
    /** Called when dropdown is opened */
    onOpen?(): void;
    /** Called when dropdown is closed */
    onClose?(): void;
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
}
export declare function HoverCard(props: HoverCardProps): import("react/jsx-runtime").JSX.Element;
export declare namespace HoverCard {
    var displayName: string;
    var Target: React.ForwardRefExoticComponent<import("./HoverCardTarget/HoverCardTarget").HoverCardTargetProps & React.RefAttributes<HTMLElement>>;
    var Dropdown: typeof HoverCardDropdown;
}
