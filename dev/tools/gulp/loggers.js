/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

import color from 'gulp-color';

export const matchTheme = (theme, packages) => {
    console.log(
        color('Theme', 'WHITE'),
        color(`"${theme}"`, 'MAGENTA'),
        color('is absent in', 'WHITE'),
        color('themes.js.', 'MAGENTA'),
        color('\nAvalible theme(s):', 'WHITE'),
        color(`\n${packages}`, 'MAGENTA')
    );
};

export const error = (error, exitCode, taskName) => {
    console.log(
        color('[ERROR]', 'RED'),
        color(`gulp ${taskName} task failed with exiting code`, 'MAGENTA'),
        color(`${exitCode}`, 'RED'),
        color(`\n${error}`, 'RED')
    );
};

export const task = (task, source) => {
    console.log(
        color(`Running gulp task`, 'WHITE'),
        color(`${task}`, 'CYAN'),
        color(`for ${source.length} theme(s):`, 'WHITE')
    );

    for (let i in source) {
        console.log(color(source[i], 'MAGENTA'));
    }
};

export const help = () => {
    console.log(
        color('\nAWS Magento 2 Gulp', 'GREEN'),
        color('version', 'WHITE'),
        color('0.8.0\n\n', 'YELLOW'),
        color('Usage:\n', 'YELLOW'),
        color('  gulp [command] --[package] --[arguments]\n\n', 'WHITE'),
        color('Avaliable commands:\n', 'YELLOW'),
        color('  default, help       ', 'GREEN'),
        color('Display this help message\n', 'WHITE'),
        color('  exec                ', 'GREEN'),
        color('Republishes symlinks to the source files\n', 'WHITE'),
        color('  cache-flush         ', 'GREEN'),
        color('Flush Magento cache\n', 'WHITE'),
        color('  watch               ', 'GREEN'),
        color('Watch for theme files\n', 'WHITE'),
        color('  clean-styles        ', 'GREEN'),
        color('Remove *.css and *.map.css files\n\n', 'WHITE'),
        color('Options:\n', 'YELLOW'),
        color('  --[package]         ', 'GREEN'),
        color(
            'Package name (optional field). Need to be the first option. Ex.: --luma\n',
            'WHITE'
        ),
        color('  --min               ', 'GREEN'),
        color('Minify css files\n', 'WHITE'),
        color('  --map               ', 'GREEN'),
        color('Add maping to CSS files\n', 'WHITE'),
        color('  --live              ', 'GREEN'),
        color('Enable livereload\n', 'WHITE')
    );
};
