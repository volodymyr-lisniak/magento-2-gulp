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
import requireDir from 'require-dir';

let tasks = requireDir('dev/tools/gulp/tasks');

gulp.task('help', tasks.help);
gulp.task('exec', tasks.exec);
gulp.task('cache-flush', tasks.cacheFlush);
gulp.task('deploy', tasks.deploy);
gulp.task('clean', tasks.clean);
gulp.task('less', tasks.less);
gulp.task('watch', tasks.watch);
gulp.task('default', tasks.default);
