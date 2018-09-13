/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const del = require('del');

const args = require('../args');
const paths = require('../paths');
const loggers = require('../loggers');
const folders = require('../constants/folders');
const matchTheme = require('../matchTheme');

module.exports = () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = 'clean';

        loggers.task(task, paths.cleanPaths);

        del(folders.CACHED_FILES);

        paths.cleanPaths.forEach(cleanOptions => {
            del([`${cleanOptions}`]);
        });
    }
};
