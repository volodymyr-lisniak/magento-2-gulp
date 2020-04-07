/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2020 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const fs = require('fs');

const args = require('./args');
const commands = require('./constants/commands');
const criticalConfig = require('./configs/criticalConfig');
const devArgs = require('./constants/devArgs');
const folders = require('./constants/folders');
const matchTheme = require('./matchTheme');
const themesConfig = require('../grunt/configs/local-themes');
const loggers = require('./loggers');

let cleanPaths = [];
let criticalFiles = [];
let deployPaths = [];
let execPaths = [];
let sources = {};
let deployVersion;

try {
    deployVersion = fs.readFileSync(`${folders.PUB_STATIC}/deployed_version.txt`, 'utf8')
} catch (err) {
    if (err.code === 'ENOENT') {
        let file = 'deployed_version.txt';
        let path = `${folders.PUB_STATIC}/`;

        deployVersion = 'no-version';

        loggers.fileNotFound(file, path);
    } else {
        throw err;
    }
}

if (
    !args.themeName ||
    args.themeName === devArgs.MAP_KEY ||
    args.themeName === devArgs.MIN_KEY ||
    args.themeName === devArgs.LIVE_KEY ||
    args.themeName === devArgs.BS_KEY
) {
    /* eslint-disable max-depth */
    for (let i in themesConfig) {
        if ({}.hasOwnProperty.call(themesConfig, i)) {
            let lessFiles = [],
                cssSrc = [],
                lessPath = `${folders.PUB_STATIC}/${themesConfig[i].area}/${
                    themesConfig[i].name
                }/${themesConfig[i].locale}`,
                criticalDest = `${folders.THEME_FOLDER}/${themesConfig[i].area}/${
                    themesConfig[i].name
                }/${folders.CRITICAL_CSS_DEST}/`,
                criticalAbsolutePath = `url(${criticalConfig.url}${folders.PUB_STATIC}/version${
                    deployVersion}/${themesConfig[i].area
                }/${themesConfig[i].name}/${themesConfig[i].locale}/`,
                imgFiles = `${folders.THEME_FOLDER}/${themesConfig[i].area}/${themesConfig[i].name}`;

            for (let j in themesConfig[i].files) {
                if ({}.hasOwnProperty.call(themesConfig[i].files, j)) {
                    lessFiles = [...lessFiles, `${lessPath}/${themesConfig[i].files[j]}.${themesConfig[i].dsl}`];
                    cssSrc = [...cssSrc, `${lessPath}/${themesConfig[i].files[j]}.css`];
                }
            }

            sources[i] = {
                css: `${lessPath}/${folders.CSS_FOLDER}`,
                less: lessFiles,
                cssSrc: cssSrc,
                criticalDest: criticalDest,
                criticalAbsolutePath: criticalAbsolutePath,
                watch: `${lessPath}/${folders.WATCH_FILES}`,
                imagesSvg: `${imgFiles}/${folders.IMAGE_SVG_FOLDER}`,
                imagesSvgSrc: `${imgFiles}/${folders.IMAGE_SVG_FOLDER_SRC}`,
                imagesSvgDest: `${imgFiles}/${folders.IMAGE_SVG_FOLDER_DEST}`,
                svgStyleFile: `${imgFiles}/${folders.IMAGE_SVG_STYLE_FILE}`,
                svgSpriteFolder: `${imgFiles}/${folders.IMAGE_SVG_SPRITE_FOLDER}`
            };

            execPaths = [
                ...execPaths,
                `${commands.EXECUTION_FILE} ${commands.EXEC_COMMAND} --locale='${themesConfig[i].locale}' --area='${
                    themesConfig[i].area
                }' --theme='${themesConfig[i].name}' ${themesConfig[i].files.join(' ')}`
            ];

            cleanPaths = [...cleanPaths, `${folders.PUB_STATIC}/${themesConfig[i].area}/${themesConfig[i].name}/`];

            criticalFiles = [
                ...criticalFiles,
                `${folders.PUB_STATIC}/${themesConfig[i].area}/${themesConfig[i].name}/${
                    themesConfig[i].locale
                }/${folders.CSS_FOLDER}/${criticalConfig.out}`,
                `${folders.THEME_FOLDER}/${themesConfig[i].area}/${themesConfig[i].name}/${
                    folders.CRITICAL_CSS_DEST
                }/${criticalConfig.out}`
            ];
        }
    }
    /* eslint-enable max-depth */
} else if (~matchTheme.packages.indexOf(args.themeName)) {
    let lessFiles = [],
        cssSrc = [],
        lessPath = `${folders.PUB_STATIC}/${themesConfig[args.themeName].area}/${themesConfig[args.themeName].name}/${
            themesConfig[args.themeName].locale
        }`,
        imgFiles = `${folders.THEME_FOLDER}/${themesConfig[args.themeName].area}/${themesConfig[args.themeName].name}`,
        criticalDest = `${folders.THEME_FOLDER}/${themesConfig[args.themeName].area}/${
            themesConfig[args.themeName].name
        }/${folders.CRITICAL_CSS_DEST}/`,
        criticalAbsolutePath = `url(${criticalConfig.url}${folders.PUB_STATIC}/version${deployVersion}/${
            themesConfig[args.themeName].area
        }/${themesConfig[args.themeName].name}/${themesConfig[args.themeName].locale}/`;

    /* eslint-disable max-depth */
    for (let j in themesConfig[args.themeName].files) {
        if ({}.hasOwnProperty.call(themesConfig[args.themeName].files, j)) {
            lessFiles = [
                ...lessFiles,
                `${lessPath}/${themesConfig[args.themeName].files[j]}.${themesConfig[args.themeName].dsl}`
            ],
            cssSrc = [...cssSrc, `${lessPath}/${themesConfig[args.themeName].files[j]}.css`];
        }
    }
    /* eslint-enable max-depth */

    sources[args.themeName] = {
        css: `${lessPath}/${folders.CSS_FOLDER}`,
        less: lessFiles,
        cssSrc: cssSrc,
        criticalDest: criticalDest,
        criticalAbsolutePath: criticalAbsolutePath,
        watch: `${lessPath}/${folders.WATCH_FILES}`,
        imagesSvg: `${imgFiles}/${folders.IMAGE_SVG_FOLDER}`,
        imagesSvgSrc: `${imgFiles}/${folders.IMAGE_SVG_FOLDER_SRC}`,
        imagesSvgDest: `${imgFiles}/${folders.IMAGE_SVG_FOLDER_DEST}`,
        svgStyleFile: `${imgFiles}/${folders.IMAGE_SVG_STYLE_FILE}`,
        svgSpriteFolder: `${imgFiles}/${folders.IMAGE_SVG_SPRITE_FOLDER}`
    };

    execPaths = [
        ...execPaths,
        `${commands.EXECUTION_FILE} ${commands.EXEC_COMMAND} --locale='${
            themesConfig[args.themeName].locale
        }' --area='${themesConfig[args.themeName].area}' --theme='${themesConfig[args.themeName].name}' ${themesConfig[
            args.themeName
        ].files.join(' ')}`
    ];

    cleanPaths = [
        ...cleanPaths,
        `${folders.PUB_STATIC}/${themesConfig[args.themeName].area}/${themesConfig[args.themeName].name}/`
    ];

    criticalFiles = [
        ...criticalFiles,
        `${folders.PUB_STATIC}/${themesConfig[args.themeName].area}/${themesConfig[args.themeName].name}/${
            themesConfig[args.themeName].locale
        }/${folders.CSS_FOLDER}/${criticalConfig.out}`,
        `${folders.THEME_FOLDER}/${themesConfig[args.themeName].area}/${themesConfig[args.themeName].name}/${
            folders.CRITICAL_CSS_DEST
        }/${criticalConfig.out}`
    ];
} else {
    matchTheme.matchTheme = false;
}

module.exports = {
    execPaths: execPaths,
    deployPaths: deployPaths,
    cleanPaths: cleanPaths,
    criticalFiles: criticalFiles,
    sources: sources
};
