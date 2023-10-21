import { IStorageProperties } from '../use-local-storage/create-storage';
export declare function useSessionStorage<T = string>(props: IStorageProperties<T>): readonly [T | undefined, (val: T | ((prevState: T) => T)) => void, () => void];
