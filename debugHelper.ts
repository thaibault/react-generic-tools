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
    oldValue: Type, newValue: Type, path: Array<string> = []
)=> {
    if (oldValue === newValue)
        return []

    if (
        oldValue !== null && typeof oldValue === 'object' &&
        newValue !== null && typeof newValue === 'object'
    ) {
        let changes: Array<ChangedValue<SubValue>> = []
        for (const [name, subNewValue] of Object.entries(newValue)) {
            const subOldValue = oldValue[name as keyof Type]

            changes = changes.concat(
                getChanges(subOldValue, subNewValue, path.concat(name))
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

export const useLogChanges = <Type>(value: Type)=> {
    const previousValue = useOldValue<Type>(value)
    const changes = getChanges(previousValue, value)

    if (changes.length)
        for (const {path, oldValue, newValue} of changes) {
            const locator = path.length > 1 ?
                ` in "${path.join('.')}"` :
                ''

            log.debug(
                `Change found${locator}; old value:`,
                `"${limit(represent(oldValue))}"; new value:`,
                `"${limit(represent(newValue))}"`
            )
        }
}
