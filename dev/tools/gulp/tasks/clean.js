const del = require('del');

const args = require('../args');
const folders = require('../constants/folders');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');
const paths = require('../paths');

module.exports = async () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = 'clean';
        let target = 'source(s)';
        let files = [...folders.CACHED_FILES, ...paths.cleanPaths];

        loggers.task(task, files, target);

        del(files);
    }
};
