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
import exec from 'exec-queue';

import { themeName } from '../args';
import * as loggers from '../loggers';
import { matchTheme, avaliablePackages } from '../matchTheme';
import { execPaths } from '../paths';

module.exports = () => {
    if (!matchTheme) {
        loggers.matchTheme(themeName, avaliablePackages);
    } else {
        let task = 'exec';

        loggers.task(task, execPaths);

        execPaths.forEach(execOptions => {
            exec(`${execOptions}`, (err, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
            });
        });
    }
};
