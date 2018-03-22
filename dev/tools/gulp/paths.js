/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const args = require("./args");
const themesConfig = require("../grunt/configs/themes");
const matchTheme = require("./matchTheme");
const constants = require("./constants");

let execPaths = [];
let deployPaths = [];
let cleanPaths = [];
let sources = {};

if (
    !args.themeName ||
    args.themeName === constants.MAP_KEY ||
    args.themeName === constants.MIN_KEY ||
    args.themeName === constants.LIVE_KEY ||
    args.themeName === constants.BS_KEY
) {
    for (let i in themesConfig) {
        let lessFiles = [];

        let lessPath = `${constants.PUB_STATIC}/${themesConfig[i].area}/${
            themesConfig[i].name
        }/${themesConfig[i].locale}`;

        let imgFiles = `${constants.THEME_FOLDER}/${themesConfig[i].area}/${
            themesConfig[i].name
        }`;

        for (let j in themesConfig[i].files) {
            lessFiles = [
                ...lessFiles,
                `${lessPath}/${themesConfig[i].files[j]}.${themesConfig[i].dsl}`
            ];
        }

        sources[i] = {
            css: `${lessPath}/${constants.CSS_FOLDER}`,
            less: lessFiles,
            watch: `${lessPath}/${constants.WATCH_FILES}`,
            imagesSrc: `${imgFiles}/${constants.IMAGE_FOLDER_SRC}`,
            imagesDest: `${imgFiles}/${constants.IMAGE_FOLDER_DEST}`,
            imagesSvg: `${imgFiles}/${constants.IMAGE_SVG_FOLDER}`,
            imagesSvgSrc: `${imgFiles}/${constants.IMAGE_SVG_FOLDER_SRC}`,
            imagesSvgDest: `${imgFiles}/${constants.IMAGE_SVG_FOLDER_DEST}`,
            svgStyleFile: `${imgFiles}/${constants.IMAGE_SVG_STYLE_FILE}`,
            svgSpriteFolder: `${imgFiles}/${constants.IMAGE_SVG_SPRITE_FOLDER}`
        };

        execPaths = [
            ...execPaths,
            `${constants.EXECUTION_FILE} ${constants.EXEC_COMMAND} --locale="${
                themesConfig[i].locale
            }" --area="${themesConfig[i].area}" --theme="${
                themesConfig[i].name
            }" ${themesConfig[i].files.join(" ")}`
        ];

        cleanPaths = [
            ...cleanPaths,
            `${constants.PUB_STATIC}/${themesConfig[i].area}/${
                themesConfig[i].name
            }/`
        ];
    }
} else if (matchTheme.packages.indexOf(args.themeName) > -1) {
    let lessFiles = [];

    let lessPath = `${constants.PUB_STATIC}/${
        themesConfig[args.themeName].area
    }/${themesConfig[args.themeName].name}/${
        themesConfig[args.themeName].locale
    }`;

    let imgFiles = `${constants.THEME_FOLDER}/${
        themesConfig[args.themeName].area
    }/${themesConfig[args.themeName].name}`;

    for (let j in themesConfig[args.themeName].files) {
        lessFiles = [
            ...lessFiles,
            `${lessPath}/${themesConfig[args.themeName].files[j]}.${
                themesConfig[args.themeName].dsl
            }`
        ];
    }

    sources[args.themeName] = {
        css: `${lessPath}/${constants.CSS_FOLDER}`,
        less: lessFiles,
        watch: `${lessPath}/${constants.WATCH_FILES}`,
        imagesSrc: `${imgFiles}/${constants.IMAGE_FOLDER_SRC}`,
        imagesDest: `${imgFiles}/${constants.IMAGE_FOLDER_DEST}`,
        imagesSvg: `${imgFiles}/${constants.IMAGE_SVG_FOLDER}`,
        imagesSvgSrc: `${imgFiles}/${constants.IMAGE_SVG_FOLDER_SRC}`,
        imagesSvgDest: `${imgFiles}/${constants.IMAGE_SVG_FOLDER_DEST}`,
        svgStyleFile: `${imgFiles}/${constants.IMAGE_SVG_STYLE_FILE}`,
        svgSpriteFolder: `${imgFiles}/${constants.IMAGE_SVG_SPRITE_FOLDER}`
    };

    execPaths = [
        ...execPaths,
        `${constants.EXECUTION_FILE} ${constants.EXEC_COMMAND} --locale="${
            themesConfig[args.themeName].locale
        }" --area="${themesConfig[args.themeName].area}" --theme="${
            themesConfig[args.themeName].name
        }" ${themesConfig[args.themeName].files.join(" ")}`
    ];

    cleanPaths = [
        ...cleanPaths,
        `${constants.PUB_STATIC}/${themesConfig[args.themeName].area}/${
            themesConfig[args.themeName].name
        }/`
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