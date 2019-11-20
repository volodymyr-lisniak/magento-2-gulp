/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2020 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const exec = require('exec-queue');

const args = require('../args');
const paths = require('../paths');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');

module.exports = () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = 'exec';

        loggers.task(task, paths.execPaths);

        paths.execPaths.forEach(execOptions => {
            exec(`${execOptions}`, (err, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
            });
        });
    }
};
