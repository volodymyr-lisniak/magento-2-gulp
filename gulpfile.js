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
const requireDir = require('require-dir');

const tasks = requireDir('dev/tools/gulp/tasks');

gulp.task('cache-flush', tasks.cacheFlush);
gulp.task('clean', tasks.clean);
gulp.task('exec', tasks.exec);
gulp.task('less', tasks.less);
gulp.task('watch', tasks.watch);
gulp.task('help', tasks.help);
gulp.task('default', tasks.default);
gulp.task('svg-sprite-creating', tasks.svgSpriteCreating);
gulp.task('svg-sprite-creating-cleaning', tasks.svgSprite);
gulp.task('image-min', tasks.imageMin);