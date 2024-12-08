// -*- coding: utf-8 -*-
/** @module type */
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
import {Page, PaginateOptions} from 'clientnode'
import {
    FunctionComponent,
    PropsWithChildren,
    ReactElement,
    ReactNode,
    SyntheticEvent
} from 'react'
import {ValidationMap} from 'prop-types'
// endregion
// region generic
export interface GenericEvent<T = unknown> extends SyntheticEvent {
    detail?: T
}
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Fills lack of reacts flexible function component return values (ReactNode).
 * Copied reacts component type but with "ReactNode" instead of "ReactElement"
 * as allowed return value.
 */
export interface GenericFunctionComponent<P = object> {
    (props: PropsWithChildren<P>, context?: any): ReactNode;

    propTypes?: ValidationMap<P>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
// endregion
// region testing
export interface TestHookWrapper<
    P extends Array<unknown> = Array<unknown>,
    WP extends {
        children:
            FunctionComponent<{parameters: P}> |
            ReactElement<
                {parameters: P}, FunctionComponent<{parameters: P}>
            >
    } = {
        children:
            FunctionComponent<{parameters: P}> |
            ReactElement<
                {parameters: P}, FunctionComponent<{parameters: P}>
            >
    }
> {
    component: FunctionComponent<WP>
    properties?: WP
}
export interface TestHookResult<
    R = unknown, P extends Array<unknown> = Array<unknown>
> {
    result: {value: R}
    render: (...parameters: P) => void
}
export interface TestHookOptions<
    P extends Array<unknown> = Array<unknown>,
    WP extends {
        children:
            FunctionComponent<{parameters: P}> |
            ReactElement<
                {parameters: P}, FunctionComponent<{parameters: P}>
            >
    } = {
        children:
            FunctionComponent<{parameters: P}> |
            ReactElement<
                {parameters: P}, FunctionComponent<{parameters: P}>
            >
    }
> {
    parameters: P,
    wrapper?: null | TestHookWrapper<P, WP>,
    flush?: boolean
}
export interface TestEnvironment {
    container: HTMLDivElement | null
    render: <T = HTMLElement>(component: ReactNode) => null | T
    runHook: <
        R = unknown,
        P extends Array<unknown> = Array<unknown>,
        WP extends {
            children: ReactElement<
                {parameters: P}, FunctionComponent<{parameters: P}>
            >
        } = {
            children: ReactElement<
                {parameters: P}, FunctionComponent<{parameters: P}>
            >
        }
    >(
        hook: (...parameters: P) => R, options: Partial<TestHookOptions<P, WP>>
    ) =>
        TestHookResult<R, P>
}
// endregion
// region pagination
export interface PaginationProperties extends PaginateOptions {
    className: string
    render: (page: Page) => ReactNode
}
// endregion
