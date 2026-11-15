import type { Locator, Page } from 'playwright-core';
export interface BaseLocator {
    locator: Locator['locator'];
    getByRole: Locator['getByRole'];
}
export declare const isSameLocator: (firstLocator: Locator, secondLocator: Locator) => Promise<boolean>;
export declare const waitForFinishedLoading: (page: Page, loadingSpinner?: Locator) => Promise<void>;
export declare const formatEndUserDate: (date: Date) => string;
export declare const formatEndUserTime: (date: Date) => string;
export declare const forwardLogging: (page: Page) => void;
