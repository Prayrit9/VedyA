import { IStorageProperties } from './create-storage';
export declare function useLocalStorage<T = string>(props: IStorageProperties<T>): readonly [T | undefined, (val: T | ((prevState: T) => T)) => void, () => void];
