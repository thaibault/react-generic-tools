// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Generic */
'use strict'
/* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {Page, paginate} from 'clientnode'
import {FunctionComponent, ReactElement, useMemo, useState} from 'react'

import {PaginationProperties} from './type'
// endregion
// region hooks
/**
 * Custom hook to memorize any values with a default empty array. Useful if
 * using previous constant complex object within a render function.
 * @param value - Value to memorize.
 * @param dependencies - Optional dependencies when to update given value.
 * @returns Given cached value.
 */
export const useMemorizedValue = <T = unknown>(
    value: T, ...dependencies: Array<unknown>
): T => useMemo<T>(() => value, dependencies)
/**
 * Use state wrapper to deal with references. It only sets a new state if the
 * given reference isn't null.
 * @param initialValue - To set state to.
 * @returns Whatever "useState" would return.
 */
export const useReferenceState = (<T = unknown>(initialValue: T) => {
    const [value, setValue] = useState(initialValue)

    return [
        value,
        useMemorizedValue((reference: T | null) => {
            if (reference !== null)
                setValue(reference)
        })
    ]
}) as typeof useState
// endregion
// region components
export const Pagination: FunctionComponent<Partial<PaginationProperties>> = ({
    boundaryCount = 1,
    className = 'pagination',
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    page = 1,
    pageSize = 5,
    render = ({page, type}): string => String(page) || type,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    total = 100,
    ...additionalProperties
}): ReactElement => (
    total > (pageSize ?? 1) ?
        <div className={className}>
            <ul {...additionalProperties}>
                {paginate({
                    boundaryCount,
                    disabled,
                    hideNextButton,
                    hidePrevButton,
                    page,
                    pageSize,
                    showFirstButton,
                    showLastButton,
                    siblingCount,
                    total
                }).map((item: Page): ReactElement =>
                    <li key={
                        item.type +
                        (typeof item.page === 'number' ?
                            `-${String(item.page)}` :
                            ''
                        )
                    }>{render(item)}</li>
                )}
            </ul>
        </div> :
        <></>
)
// endregion
