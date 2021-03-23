const del = require('del');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const args = require('../args');
const criticalConfig = require('../configs/criticalConfig');
const devArgs = require('../constants/devArgs');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');
const paths = require('../paths');
const penthouse = require('../plugins/penthouse');

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
        let task = 'Critical CSS compilation';

        loggers.task(task, Object.keys(paths.sources));

        del(paths.criticalFiles);

        Object.keys(paths.sources).forEach(source => {
            return gulp
                .src(paths.sources[source].cssSrc)
                .pipe(plugins.expectFile(paths.sources[source].cssSrc))
                .pipe(plugins.concatCss(criticalConfig.out))
                .pipe(plugins.cssmin())
                .pipe(plugins.replace(/url\(..\//gm, paths.sources[source].criticalAbsolutePath))
                .pipe(gulp.dest(paths.sources[source].css))
                .pipe(penthouse(criticalConfig))
                .pipe(plugins.cssmin())
                .pipe(gulp.dest(paths.sources[source].criticalDest));
        });
    }
};
