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
import {equals, Logger} from 'clientnode'
import {useEffect, useRef} from 'react'
// endregion
export const log =
    new Logger({name: 'react-generic-tools-logger', level: 'debug'})

export interface ChangedValue<Type> {
    name?: string
    oldValue: Type
    newValue: Type
}
export const getChanges = <Type, SubValue>(oldValue: Type, newValue: Type)=> {
    if (
        typeof oldValue === 'object' &&
        oldValue !== null &&
        typeof newValue === 'object' &&
        newValue !== null
    ) {
        const changes: Array<ChangedValue<SubValue>> = []
        for (const [name, subNewValue] of Object.entries(newValue)) {
            const subOldValue = oldValue[name as keyof Type]

            if (!equals(subNewValue, oldValue))
                changes.push({
                    name,
                    oldValue: subOldValue as SubValue,
                    newValue: subNewValue
                })
        }

        return changes
    }

    // Handle primitive values
    if (oldValue !== newValue)
        return [{oldValue: oldValue, newValue: newValue}]

    return []
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
        for (const change of changes)
            log.debug(change)
}
