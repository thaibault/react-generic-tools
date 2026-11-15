import type { FunctionComponent } from 'react';
import type { PaginationProperties } from './type';
import { useState } from 'react';
/**
 * Custom hook to memorize any values with a default empty array. Useful if
 * using previous constant complex object within a render function.
 * @param value - Value to memorize.
 * @param dependencies - Optional dependencies when to update given value.
 * @returns Given cached value.
 */
export declare function useMemorizedValue<T = unknown>(value: T, ...dependencies: Array<unknown>): T;
/**
 * Use state wrapper to deal with references. It only sets a new state if the
 * given reference isn't null.
 * @param initialValue - To set state to.
 * @returns Whatever "useState" would return.
 */
export declare const useReferenceState: typeof useState;
export declare const Pagination: FunctionComponent<Partial<PaginationProperties>>;
