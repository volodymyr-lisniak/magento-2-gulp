/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const gulp = require("gulp");
const image = require('gulp-image');

const args = require("../args");
const paths = require("../paths");
const loggers = require("../loggers");
const matchTheme = require("../matchTheme");

module.exports = cb => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = "image optimization";

        loggers.task(task, Object.keys(paths.sources));

        Object.keys(paths.sources).forEach(source => {
            gulp
                .src(paths.sources[source].imagesSrc)
                .pipe(
                    image({
                        pngquant: true,
                        optipng: false,
                        zopflipng: true,
                        jpegRecompress: false,
                        mozjpeg: true,
                        guetzli: false,
                        gifsicle: true,
                        svgo: true,
                        concurrent: 10,
                        quiet: true 
                    })
                )
                .pipe(gulp.dest(paths.sources[source].imagesDest));
        });
    }
};