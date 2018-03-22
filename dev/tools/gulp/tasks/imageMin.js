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
const imagemin = require("gulp-imagemin");
const args = require("../args");
const paths = require("../paths");
const loggers = require("../loggers");
const matchTheme = require("../matchTheme");
const imageminMozjpeg = require('imagemin-mozjpeg'); 

module.exports = cb => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = "image optimization";

        loggers.task(task, Object.keys(paths.sources));

        Object.keys(paths.sources).forEach(source => {
            return gulp
                .src(paths.sources[source].imagesSrc)
                .pipe(
                    imagemin(
                        [
                            imageminMozjpeg({quality: 10, progressive: true, tune: "ms-ssim", smooth: 2})
                        ],
                        {
                            verbose: true
                        }
                    )
                )
                .pipe(gulp.dest(paths.sources[source].imagesDest), {overwrite: true});
        });
    }
};