const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const args = require('../args');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');
const paths = require('../paths');

module.exports = async () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = 'LESS compilation';

        loggers.task(task, Object.keys(paths.sources));

        Object.keys(paths.sources).forEach(source => {
            return gulp
                .src(paths.sources[source].less)
                .pipe(plugins.if(args.sourceMapArg >= 0, plugins.sourcemaps.init()))
                .pipe(
                    plugins.less().on('error', err => {
                        console.log(err);
                    })
                )
                .pipe(plugins.if(args.minCssArg >= 0, plugins.cssmin()))
                .pipe(plugins.if(args.sourceMapArg >= 0, plugins.sourcemaps.write('')))
                .pipe(gulp.dest(paths.sources[source].css))
                .pipe(plugins.if(args.liveArg >= 0, plugins.livereload()))
                .pipe(plugins.if(args.bsArg >= 0, browserSync.stream()));
        });
    }
};
