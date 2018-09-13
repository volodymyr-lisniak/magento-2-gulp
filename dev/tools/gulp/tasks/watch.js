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
const livereload = require('gulp-livereload');
const browserSync = require('browser-sync').create();

const args = require('../args');
const paths = require('../paths');
const loggers = require('../loggers');
const arguments = require('../constants/arguments');
const bsConfig = require('../constants/bsConfig');
const matchTheme = require('../matchTheme');

module.exports = () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else if (
        !args.themeName ||
        args.themeName === arguments.MAP_KEY ||
        args.themeName === arguments.MIN_KEY ||
        args.themeName === arguments.LIVE_KEY ||
        args.themeName === arguments.BS_KEY
    ) {
        loggers.specifyTheme(matchTheme.avaliablePackages);
    } else {
        let task = 'Watching';

        loggers.task(task, Object.keys(paths.sources));

        /* eslint-disable max-depth */
        for (let source in paths.sources) {
            if ({}.hasOwnProperty.call(paths.sources, source)) {
                if (args.liveArg >= 0) {
                    livereload.listen();
                } else if (args.bsArg >= 0) {
                    browserSync.init(bsConfig);

                    browserSync
                        .watch(`${paths.sources[source].css}*.css`)
                        .on('change', browserSync.reload);
                }

                gulp.watch([`${paths.sources[source].watch}`], ['less']);
            }
        }
        /* eslint-enable max-depth */
    }
};
