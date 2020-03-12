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
const requireDir = require('require-dir');

const tasks = requireDir('dev/tools/gulp/tasks');

gulp.task('cache-clean', tasks.cacheClean);
gulp.task('clean', tasks.clean);
gulp.task('critical', tasks.critical);
gulp.task('default', tasks.default);
gulp.task('es6', tasks.es6);
gulp.task('exec', tasks.exec);
gulp.task('help', tasks.help);
gulp.task('less', tasks.less);
gulp.task('svg', tasks.svgSprite);
gulp.task('watch-scripts', tasks.watchScripts);
gulp.task('watch-styles', tasks.watchStyles);
