// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module debugHelper */
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
import {limit, Logger, represent} from 'clientnode'
import {useEffect, useRef} from 'react'
// endregion
export const log =
    new Logger({name: 'react-generic-tools-logger', level: 'debug'})

export interface ChangedValue<Type> {
    path: Array<string>
    oldValue: Type
    newValue: Type
}
export const getChanges = <Type, SubValue>(
    oldValue: Type,
    newValue: Type,
    path: Array<string> = [],
    recursiveLimit = 10
)=> {
    if (Object.is(oldValue, newValue))
        return []

    if (
        oldValue !== null && typeof oldValue === 'object' &&
        !Array.isArray(oldValue) &&
        !(typeof Blob !== 'undefined' && oldValue instanceof Blob) &&
        newValue !== null && typeof newValue === 'object' &&
        !Array.isArray(newValue) &&
        !(typeof Blob !== 'undefined' && newValue instanceof Blob)
    ) {
        if (recursiveLimit === 0)
            return [{
                oldValue: oldValue,
                newValue: newValue,
                path: path.concat('__RECURSIVE_LIMIT_REACHED__')
            }]

        let changes: Array<ChangedValue<SubValue>> = []
        for (const [name, subNewValue] of Object.entries(newValue)) {
            const subOldValue = oldValue[name as keyof Type]

            changes = changes.concat(
                getChanges(
                    subOldValue,
                    subNewValue,
                    path.concat(name),
                    recursiveLimit - 1
                )
            )
        }

        return changes
    }

    return [{oldValue: oldValue, newValue: newValue, path}]
}

export const useOldValue = <Type>(value: Type) => {
    const reference = useRef<Type>(undefined)

    useEffect(
        () => {
            reference.current = value
        },
        [value]
    )

    return reference.current
}

export const useLogChanges = <Type>(
    value: Type, description: Array<string> | string = [], recursiveLimit = 10
)=> {
    const oldValue = useOldValue<Type>(value)
    const changes = getChanges(
        oldValue,
        value,
        ([] as Array<string>).concat(description),
        recursiveLimit
    )

    for (const {path, oldValue, newValue} of changes) {
        const locator = path.length > 0 ?
            ` in "${path.join('.')}"` :
            ''

        log.debug(
            `Change found${locator}; old value:`,
            `"${limit(represent(oldValue))}"; new value:`,
            `"${limit(represent(newValue))}"`
        )
    }
}
