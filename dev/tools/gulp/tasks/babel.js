const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const args = require('../args');
const folders = require('../constants/folders');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');
const paths = require('../paths');

module.exports = async () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = 'JS compilation';

        loggers.task(task, Object.keys(paths.sources));

        return gulp
            .src(folders.JS_FOLDER_SRC)
            .pipe(
                plugins.rename(path => {
                    path.dirname = `${path.dirname}/${folders.JS_FOLDER_DIST}`;
                })
            )
            .pipe(plugins.babel())
            .pipe(plugins.prettierEslint())
            .pipe(gulp.dest(folders.JS_FOLDER_BASEDIR));
    }

    return this;
};
