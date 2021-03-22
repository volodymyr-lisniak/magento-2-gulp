const gulp = require('gulp');
const requireDir = require('require-dir');

const tasks = requireDir('dev/tools/gulp/tasks');

gulp.task('babel', tasks.babel);
gulp.task('clean', tasks.clean);
gulp.task('critical', tasks.critical);
gulp.task('default', gulp.series(tasks.help));
gulp.task('exec', tasks.exec);
gulp.task('help', tasks.help);
gulp.task('less', tasks.less);
gulp.task('watch-scripts', tasks.watchScripts);
gulp.task('watch-styles', tasks.watchStyles);
