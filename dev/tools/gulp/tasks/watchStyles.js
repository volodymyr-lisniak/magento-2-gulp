const gulp = require('gulp');
const livereload = require('gulp-livereload');
const browserSync = require('browser-sync').create();

const args = require('../args');
const bsConfig = require('../configs/bsConfig');
const devArgs = require('../constants/devArgs');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');
const paths = require('../paths');

module.exports = async () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else if (
        !args.themeName ||
        args.themeName === devArgs.MAP_KEY ||
        args.themeName === devArgs.MIN_KEY ||
        args.themeName === devArgs.LIVE_KEY ||
        args.themeName === devArgs.BS_KEY
    ) {
        loggers.specifyTheme(matchTheme.avaliablePackages);
    } else {
        let task = 'Watching LESS';

        loggers.task(task, Object.keys(paths.sources));

        /* eslint-disable max-depth */
        for (let source in paths.sources) {
            if ({}.hasOwnProperty.call(paths.sources, source)) {
                if (args.liveArg >= 0) {
                    livereload.listen();
                    gulp.watch([`${paths.sources[source].watch}`], gulp.series('less'));
                } else if (args.bsArg >= 0) {
                    gulp.watch([`${paths.sources[source].watch}`], gulp.series('less'));
                    browserSync.init(bsConfig);
                    gulp.watch(`${paths.sources[source].css}/*.css`).on('change', browserSync.reload);
                }
            }
        }
        /* eslint-enable max-depth */
    }
};
