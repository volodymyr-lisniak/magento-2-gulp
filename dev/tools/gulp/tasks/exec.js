const exec = require('exec-queue');

const args = require('../args');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');
const paths = require('../paths');

module.exports = async () => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = 'exec';

        loggers.task(task, paths.execPaths);

        paths.execPaths.forEach(execOptions => {
            exec(`${execOptions}`, (err, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
            });
        });
    }
};
