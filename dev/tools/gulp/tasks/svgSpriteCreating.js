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
const svgSprite = require('gulp-svg-sprite');
const plugins = require('gulp-load-plugins')();

const args = require('../args');
const paths = require('../paths');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');
const folders = require('../constants/folders');

module.exports = () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = 'Creating svg sprite';

        loggers.task(task, Object.keys(paths.sources));

        Object.keys(paths.sources).forEach(source => {
            return gulp
                .src(paths.sources[source].imagesSvgSrc)
                .pipe(
                    plugins.svgmin({
                        js2svg: {
                            pretty: true
                        }
                    })
                )
                .pipe(
                    svgSprite({
                        dest: paths.sources[source].imagesSvg,
                        mode: {
                            view: {
                                common: 'svg-icon',
                                prefix: '.aws-svg-icon-',
                                sprite: folders.IMAGE_SVG_SPRITE_FOLDER_DEST,
                                render: {
                                    less: {
                                        dest: folders.IMAGE_SVG_STYLES_FOLDER_DEST
                                    }
                                }
                            }
                        }
                    })
                )
                .pipe(gulp.dest(paths.sources[source].imagesSvgDest));
        });
    }
};
