// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module endToEndTestHelper */
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
import {Locator, Page} from 'playwright-core'

import {expect} from '@playwright/test'
// endregion
export interface BaseLocator {
    locator: Locator['locator']
    getByRole: Locator['getByRole']
}

export const isSameLocator =
    async (firstLocator: Locator, secondLocator: Locator): Promise<boolean> => {
        const firstHandle = await firstLocator.elementHandle()
        const secondHandle = await secondLocator.elementHandle()

        return firstLocator.page().evaluate(
            (compare) => {
                if (!compare.left)
                    return compare.left === compare.right

                return compare.left.isEqualNode(compare.right)
            },
            {left: firstHandle, right: secondHandle}
        )
    }

export const waitForFinishedLoading = async (
    page: Page, loadingSpinner?: Locator
) => {
    await page.waitForLoadState('networkidle')

    if (loadingSpinner && await loadingSpinner.isVisible())
        await expect(loadingSpinner).not.toBeAttached()
}
