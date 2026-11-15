import type { TestEnvironment } from './type';
import { afterEach, beforeEach } from '@jest/globals';
export declare const prepareTestEnvironment: (currentBeforeEach: typeof beforeEach, currentAfterEach: typeof afterEach) => TestEnvironment;
export default prepareTestEnvironment;
