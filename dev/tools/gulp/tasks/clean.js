/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

import gulp from 'gulp';
import del from 'del';

import { cleanPaths } from '../paths';
import { themeName } from '../args';
import * as loggers from '../loggers';
import { CACHED_FILES } from '../constants';
import { matchTheme, avaliablePackages } from '../matchTheme';

module.exports = cb => {
    if (!matchTheme) {
        loggers.matchTheme(themeName, avaliablePackages);
    } else {
        let task = 'clean';

        loggers.task(task, cleanPaths);

        del(CACHED_FILES);

        cleanPaths.forEach(cleanOptions => {
            del([`${cleanOptions}`]);
        });
    }
};
