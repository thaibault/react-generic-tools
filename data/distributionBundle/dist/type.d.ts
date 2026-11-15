import type { Page, PaginateOptions } from 'clientnode';
import type { FunctionComponent, PropsWithChildren, ReactElement, ReactNode, SyntheticEvent } from 'react';
import type { ValidationMap } from 'prop-types';
export interface GenericEvent<T = unknown> extends SyntheticEvent {
    detail?: T;
}
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
export interface TestHookWrapper<P extends Array<unknown> = Array<unknown>, WP extends {
    children: FunctionComponent<{
        parameters: P;
    }> | ReactElement<{
        parameters: P;
    }, FunctionComponent<{
        parameters: P;
    }>>;
} = {
    children: FunctionComponent<{
        parameters: P;
    }> | ReactElement<{
        parameters: P;
    }, FunctionComponent<{
        parameters: P;
    }>>;
}> {
    component: FunctionComponent<WP>;
    properties?: WP;
}
export interface TestHookResult<R = unknown, P extends Array<unknown> = Array<unknown>> {
    result: {
        value: R;
    };
    render: (...parameters: P) => void;
}
export interface TestHookOptions<P extends Array<unknown> = Array<unknown>, WP extends {
    children: FunctionComponent<{
        parameters: P;
    }> | ReactElement<{
        parameters: P;
    }, FunctionComponent<{
        parameters: P;
    }>>;
} = {
    children: FunctionComponent<{
        parameters: P;
    }> | ReactElement<{
        parameters: P;
    }, FunctionComponent<{
        parameters: P;
    }>>;
}> {
    parameters: P;
    wrapper?: null | TestHookWrapper<P, WP>;
    flush?: boolean;
}
export interface TestEnvironment {
    container: HTMLDivElement | null;
    render: <T = HTMLElement>(component: ReactNode) => null | T;
    runHook: <R = unknown, P extends Array<unknown> = Array<unknown>, WP extends {
        children: FunctionComponent<{
            parameters: P;
        }> | ReactElement<{
            parameters: P;
        }, FunctionComponent<{
            parameters: P;
        }>>;
    } = {
        children: FunctionComponent<{
            parameters: P;
        }> | ReactElement<{
            parameters: P;
        }, FunctionComponent<{
            parameters: P;
        }>>;
    }>(hook: (...parameters: P) => R, options: Partial<TestHookOptions<P, WP>>) => TestHookResult<R, P>;
}
export interface PaginationProperties extends PaginateOptions {
    className: string;
    render: (page: Page) => ReactNode;
}
