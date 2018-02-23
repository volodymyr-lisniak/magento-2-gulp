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
import livereload from 'gulp-livereload';
import gulpLoadPlugins from 'gulp-load-plugins';
const plugins = gulpLoadPlugins();
const browserSync = require('browser-sync').create();

import * as loggers from '../loggers';
import { matchTheme, avaliablePackages } from '../matchTheme';
import { themeName, sourceMapArg, minCssArg, liveArg, bsArg } from '../args';
import { sources } from '../paths';

module.exports = () => {
    if (!matchTheme) {
        loggers.matchTheme(themeName, avaliablePackages);
    } else {
        let task = 'LESS compilation';

        loggers.task(task, Object.keys(sources));

        for (let source in sources) {
            return gulp
                .src(sources[source].less)
                .pipe(plugins.if(sourceMapArg >= 0, plugins.sourcemaps.init()))
                .pipe(
                    plugins.less().on('error', err => {
                        console.log(err);
                    })
                )
                .pipe(plugins.if(minCssArg >= 0, plugins.cssmin()))
                .pipe(
                    plugins.if(sourceMapArg >= 0, plugins.sourcemaps.write(''))
                )
                .pipe(gulp.dest(sources[source].css))
                .pipe(plugins.if(liveArg >= 0, plugins.livereload()))
                .pipe(plugins.if(bsArg >= 0, browserSync.stream()));
        }
    }
};
