/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2020 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const gulp = require('gulp');

const args = require('../args');
const devArgs = require('../constants/devArgs');
const folders = require('../constants/folders');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');
const paths = require('../paths');

module.exports = () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else if (
        !args.themeName ||
        args.themeName === devArgs.MAP_KEY ||
        args.themeName === devArgs.MIN_KEY ||
        args.themeName === devArgs.LIVE_KEY ||
        args.themeName === devArgs.BS_KEY
    ) {
        loggers.specifyTheme(matchTheme.avaliablePackages);
    } else {
        let task = 'Watching JS';

        loggers.task(task, Object.keys(paths.sources));

        gulp.watch([folders.JS_FOLDER_SRC], ['es6']);
    }
};
