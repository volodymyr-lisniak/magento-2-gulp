/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const args = require('../args');
const paths = require('../paths');
const loggers = require('../loggers');
const folders = require('../constants/folders');
const matchTheme = require('../matchTheme');

module.exports = () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = 'JS compilation';

        loggers.task(task, Object.keys(paths.sources));

        return gulp
            .src(folders.JS_FOLDER_SRC)
            .pipe(
                plugins.rename(path => {
                    path.dirname = `${path.dirname}/${folders.JS_FOLDER_DIST}`;
                })
            )
            .pipe(plugins.babel())
            .pipe(plugins.prettierEslint())
            .pipe(gulp.dest(folders.JS_FOLDER_BASEDIR));
    }

    return this;
};
