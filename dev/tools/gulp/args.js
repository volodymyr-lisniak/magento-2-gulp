/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

import { LIVE_KEY, MAP_KEY, MIN_KEY } from './constants';

const devArguments = (argList => {
    let args = [];

    for (let i = 3; i <= argList.length - 1; i++) {
        if (!argList[i]) {
            return false;
        } else {
            let arg = argList[i]
                .toString()
                .trim()
                .replace('--', '');
            args = [...args, arg];
        }
    }

    return args;
})(process.argv);

export let changeMinCssArg = newValue => {
    minCssArg = newValue;
};
export let changeSourceMapArg = newValue => {
    sourceMapArg = newValue;
};
export let themeName = devArguments[0];
export let sourceMapArg = devArguments.indexOf(MAP_KEY);
export let minCssArg = devArguments.indexOf(MIN_KEY);
export let liveArg = devArguments.indexOf(LIVE_KEY);
