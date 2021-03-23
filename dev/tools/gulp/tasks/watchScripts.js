const gulp = require('gulp');

const args = require('../args');
const devArgs = require('../constants/devArgs');
const folders = require('../constants/folders');
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
        let task = 'Watching JS';

        loggers.task(task, Object.keys(paths.sources));

        gulp.watch([folders.JS_FOLDER_SRC], gulp.series('babel'));
    }
};
