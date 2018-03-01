/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const constants = require('./constants');

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

module.exports = {
    themeName: devArguments[0],
    sourceMapArg: devArguments.indexOf(constants.MAP_KEY),
    minCssArg: devArguments.indexOf(constants.MIN_KEY),
    liveArg: devArguments.indexOf(constants.LIVE_KEY),
    bsArg: devArguments.indexOf(constants.BS_KEY)
};
