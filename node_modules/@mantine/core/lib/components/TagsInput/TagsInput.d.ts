import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../core';
import { ComboboxLikeProps, ComboboxLikeStylesNames } from '../Combobox';
import { __BaseInputProps, __InputStylesNames } from '../Input';
export type TagsInputStylesNames = __InputStylesNames | ComboboxLikeStylesNames | 'pill' | 'pillsList' | 'inputField';
export interface TagsInputProps extends BoxProps, __BaseInputProps, ComboboxLikeProps, StylesApiProps<TagsInputFactory>, ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
    /** Controlled component value */
    value?: string[];
    /** Default value for uncontrolled component */
    defaultValue?: string[];
    /** Called whe value changes */
    onChange?(value: string[]): void;
    /** Controlled search value */
    searchValue?: string;
    /** Default search value */
    defaultSearchValue?: string;
    /** Called when search changes */
    onSearchChange?(value: string): void;
    /** Maximum number of tags, `Infinity` by default */
    maxTags?: number;
    /** Determines whether duplicate tags are allowed, `false` by default */
    allowDuplicates?: boolean;
    /** Called when user tries to submit a duplicated tag */
    onDuplicate?(value: string): void;
    /** Characters that should trigger tags split, `[',']` by default */
    splitChars?: string[];
}
export type TagsInputFactory = Factory<{
    props: TagsInputProps;
    ref: HTMLInputElement;
    stylesNames: TagsInputStylesNames;
}>;
export declare const TagsInput: import("../../core").MantineComponent<{
    props: TagsInputProps;
    ref: HTMLInputElement;
    stylesNames: TagsInputStylesNames;
}>;
