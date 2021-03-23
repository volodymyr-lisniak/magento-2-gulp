const color = require('gulp-color');

module.exports = {
    matchTheme: (theme, packages) => {
        console.log(
            color('Theme', 'WHITE'),
            color(`'${theme}'`, 'MAGENTA'),
            color('is absent in', 'WHITE'),
            color('local-themes.js.', 'MAGENTA'),
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

    task: (task, source, targetArray) => {
        let target = targetArray || 'theme(s)';

        console.log(
            color('Running gulp task', 'WHITE'),
            color(`${task}`, 'CYAN'),
            color(`for ${source.length} ${target}:`, 'WHITE')
        );

        for (let i in source) {
            if ({}.hasOwnProperty.call(source, i)) {
                console.log(color(source[i], 'MAGENTA'));
            }
        }
    },

    fileNotFound: (file, path) => {
        console.log(
            color('[WARNING]', 'RED'),
            color('File', 'WHITE'),
            color(`${file}`, 'MAGENTA'),
            color('not found in', 'WHITE'),
            color(`${path}`, 'MAGENTA')
        );
    },

    help: () => {
        console.log(
            color('\nMagento 2 Gulp', 'GREEN'),
            color('version', 'WHITE'),
            color('1.5.0\n\n', 'YELLOW'),
            color('Usage:\n', 'YELLOW'),
            color('  gulp [command] --[package] --[arguments]\n\n', 'WHITE'),
            color('Avaliable commands:\n', 'YELLOW'),
            color('  babel                          ', 'GREEN'),
            color('Compile ES6+ to ES5\n', 'WHITE'),
            color('  clean                          ', 'GREEN'),
            color('Remove cached files (pub/static/*, var/*)\n', 'WHITE'),
            color('  critical                       ', 'GREEN'),
            color('Compile critical css\n', 'WHITE'),
            color('  default, help                  ', 'GREEN'),
            color('Display this help message\n', 'WHITE'),
            color('  exec                           ', 'GREEN'),
            color('Republishes symlinks to the source files\n', 'WHITE'),
            color('  less                           ', 'GREEN'),
            color('Compile LESS to CSS\n', 'WHITE'),
            color('  watch-scripts                  ', 'GREEN'),
            color('Watch for *.less files\n', 'WHITE'),
            color('  watch-styles                   ', 'GREEN'),
            color('Watch for src/*.js files\n\n', 'WHITE'),
            color('Options:\n', 'YELLOW'),
            color('  --[package]                    ', 'GREEN'),
            color('Package name (optional field). Need to be the first option. Ex.: --luma\n', 'WHITE'),
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
