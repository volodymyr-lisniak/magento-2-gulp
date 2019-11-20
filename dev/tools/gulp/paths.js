/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2020 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const args = require('./args');
const themesConfig = require('../grunt/configs/themes');
const matchTheme = require('./matchTheme');
const devArgs = require('./constants/devArgs');
const commands = require('./constants/commands');
const folders = require('./constants/folders');

let execPaths = [];
let deployPaths = [];
let cleanPaths = [];
let sources = {};

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
            let lessFiles = [];

            let lessPath = `${folders.PUB_STATIC}/${themesConfig[i].area}/${themesConfig[i].name}/${themesConfig[i].locale}`;

            let criticalDest = `${folders.THEME_FOLDER}/frontend/${themesConfig[i].name}/${folders.CRITICAL_CSS_DEST}`;

            let imgFiles = `${folders.THEME_FOLDER}/${themesConfig[i].area}/${themesConfig[i].name}`;

            for (let j in themesConfig[i].files) {
                if ({}.hasOwnProperty.call(themesConfig[i].files, j)) {
                    lessFiles = [...lessFiles, `${lessPath}/${themesConfig[i].files[j]}.${themesConfig[i].dsl}`];
                }
            }

            sources[i] = {
                css: `${lessPath}/${folders.CSS_FOLDER}`,
                less: lessFiles,
                criticalSrc: [
                    `${lessPath}/${folders.CSS_FOLDER}styles-l.css`,
                    `${lessPath}/${folders.CSS_FOLDER}styles-m.css`
                ],
                criticalDest: criticalDest,
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
        }
    }
    /* eslint-enable max-depth */
} else if (matchTheme.packages.indexOf(args.themeName) > -1) {
    let lessFiles = [];

    let lessPath = `${folders.PUB_STATIC}/${themesConfig[args.themeName].area}/${themesConfig[args.themeName].name}/${themesConfig[args.themeName].locale}`;

    let imgFiles = `${folders.THEME_FOLDER}/${themesConfig[args.themeName].area}/${themesConfig[args.themeName].name}`;

    let criticalDest = `${folders.THEME_FOLDER}/frontend/${themesConfig[args.themeName].name}/${folders.CRITICAL_CSS_DEST}`;

    /* eslint-disable max-depth */
    for (let j in themesConfig[args.themeName].files) {
        if ({}.hasOwnProperty.call(themesConfig[args.themeName].files, j)) {
            lessFiles = [
                ...lessFiles,
                `${lessPath}/${themesConfig[args.themeName].files[j]}.${themesConfig[args.themeName].dsl}`
            ];
        }
    }
    /* eslint-enable max-depth */

    sources[args.themeName] = {
        css: `${lessPath}/${folders.CSS_FOLDER}`,
        less: lessFiles,
        criticalSrc: [
            `${lessPath}/${folders.CSS_FOLDER}styles-l.css`,
            `${lessPath}/${folders.CSS_FOLDER}styles-m.css`
        ],
        criticalDest: criticalDest,
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
} else {
    matchTheme.matchTheme = false;
}

module.exports = {
    execPaths: execPaths,
    deployPaths: deployPaths,
    cleanPaths: cleanPaths,
    sources: sources
};
