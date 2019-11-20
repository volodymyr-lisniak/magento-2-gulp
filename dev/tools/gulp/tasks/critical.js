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
const plugins = require('gulp-load-plugins')();

const args = require('../args');
const paths = require('../paths');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');
const criticalConfig = require('../constants/criticalConfig');

module.exports = () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = 'Critical CSS compilation';

        loggers.task(task, Object.keys(paths.sources));

        Object.keys(paths.sources).forEach(source => {
            return gulp
                .src(paths.sources[source].criticalSrc, {
                    base: paths.sources[source].css
                })
                .pipe(plugins.penthouse(criticalConfig))
                .pipe(plugins.cssmin())
                .pipe(gulp.dest(paths.sources[source].criticalDest));
        });
    }
};
