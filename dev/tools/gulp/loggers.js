/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const color = require('gulp-color');

module.exports = {
    matchTheme: (theme, packages) => {
        console.log(
            color('Theme', 'WHITE'),
            color(`"${theme}"`, 'MAGENTA'),
            color('is absent in', 'WHITE'),
            color('themes.js.', 'MAGENTA'),
            color('\nAvalible theme(s):', 'WHITE'),
            color(`\n${packages}`, 'MAGENTA')
        );
    },

    specifyTheme: packages => {
        console.log(
            color('Need to specify theme', 'WHITE'),
            color('\nAvalible theme(s):', 'MAGENTA'),
            color(`\n${packages}`, 'MAGENTA')
        );
    },

    error: (error, exitCode, taskName) => {
        console.log(
            color('[ERROR]', 'RED'),
            color(`gulp ${taskName} task failed with exiting code`, 'MAGENTA'),
            color(`${exitCode}`, 'RED'),
            color(`\n${error}`, 'RED')
        );
    },

    task: (task, source) => {
        console.log(
            color(`Running gulp task`, 'WHITE'),
            color(`${task}`, 'CYAN'),
            color(`for ${source.length} theme(s):`, 'WHITE')
        );

        for (let i in source) {
            console.log(color(source[i], 'MAGENTA'));
        }
    },

    help: () => {
        console.log(
            color('\nAWS Magento 2 Gulp', 'GREEN'),
            color('version', 'WHITE'),
            color('1.1.2\n\n', 'YELLOW'),
            color('Usage:\n', 'YELLOW'),
            color('  gulp [command] --[package] --[arguments]\n\n', 'WHITE'),
            color('Avaliable commands:\n', 'YELLOW'),
            color('  default, help                  ', 'GREEN'),
            color('Display this help message\n', 'WHITE'),
            color('  cache-flush                    ', 'GREEN'),
            color('Flush Magento cache\n', 'WHITE'),
            color('  clean                          ', 'GREEN'),
            color('Remove cached files (pub/static/*, var/*)\n', 'WHITE'),
            color('  image-min                      ', 'GREEN'),
            color('Images optimization\n', 'WHITE'),
            color('  svg                            ', 'GREEN'),
            color('Create svg sprite\n', 'WHITE'),
            color('  exec                           ', 'GREEN'),
            color('Republishes symlinks to the source files\n', 'WHITE'),
            color('  less                           ', 'GREEN'),
            color('Compile LESS to CSS\n', 'WHITE'),
            color('  watch                          ', 'GREEN'),
            color('Watch for theme files\n\n', 'WHITE'),
            color('Options:\n', 'YELLOW'),
            color('  --[package]                    ', 'GREEN'),
            color(
                'Package name (optional field). Need to be the first option. Ex.: --luma\n',
                'WHITE'
            ),
            color('  --min                          ', 'GREEN'),
            color('Minify css files\n', 'WHITE'),
            color('  --map                          ', 'GREEN'),
            color('Add maping to CSS files\n', 'WHITE'),
            color('  --live                         ', 'GREEN'),
            color('Enable livereload\n', 'WHITE'),
            color('  --bs                           ', 'GREEN'),
            color('Enable browsersync\n', 'WHITE')
        );
    }
};
