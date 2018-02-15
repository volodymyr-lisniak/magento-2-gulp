/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

import { themeName } from './args';
import themesConfig from '../grunt/configs/themes';
import { changeMatchTheme, packages } from './matchTheme';
import {
    LIVE_KEY,
    MAP_KEY,
    MIN_KEY,
    EXECUTION_FILE,
    CSS_FOLDER,
    PUB_STATIC,
    EXEC_COMMAND
} from './constants';

export let execPaths = [];
export let deployPaths = [];
export let cleanPaths = [];
export let sources = {};

if (
    !themeName ||
    themeName === MAP_KEY ||
    themeName === MIN_KEY ||
    themeName === LIVE_KEY
) {
    for (let i in themesConfig) {
        let lessFiles = [];
        let lessPath = `${PUB_STATIC}/${themesConfig[i].area}/${
            themesConfig[i].name
        }/${themesConfig[i].locale}`;

        for (let j in themesConfig[i].files) {
            lessFiles = [
                ...lessFiles,
                `${lessPath}/${themesConfig[i].files[j]}.${themesConfig[i].dsl}`
            ];
        }

        sources[i] = {
            css: `${lessPath}/${CSS_FOLDER}`,
            less: lessFiles
        };

        execPaths = [
            ...execPaths,
            `${EXECUTION_FILE} ${EXEC_COMMAND} --locale="${
                themesConfig[i].locale
            }" --area="${themesConfig[i].area}" --theme="${
                themesConfig[i].name
            }" ${themesConfig[i].files.join(' ')}`
        ];

        cleanPaths = [
            ...cleanPaths,
            `${PUB_STATIC}/${themesConfig[i].area}/${themesConfig[i].name}/`
        ];
    }
} else if (packages.indexOf(themeName) > -1) {
    let lessFiles = [];
    let lessPath = `${PUB_STATIC}/${themesConfig[themeName].area}/${
        themesConfig[themeName].name
    }/${themesConfig[themeName].locale}`;

    for (let j in themesConfig[themeName].files) {
        lessFiles = [
            ...lessFiles,
            `${lessPath}/${themesConfig[themeName].files[j]}.${
                themesConfig[themeName].dsl
            }`
        ];
    }

    sources[themeName] = {
        css: `${lessPath}/${CSS_FOLDER}`,
        less: lessFiles
    };

    execPaths = [
        ...execPaths,
        `${EXECUTION_FILE} ${EXEC_COMMAND} --locale="${
            themesConfig[themeName].locale
        }" --area="${themesConfig[themeName].area}" --theme="${
            themesConfig[themeName].name
        }" ${themesConfig[themeName].files.join(' ')}`
    ];

    cleanPaths = [
        ...cleanPaths,
        `${PUB_STATIC}/${themesConfig[themeName].area}/${
            themesConfig[themeName].name
        }/`
    ];
} else {
    changeMatchTheme(false);
}
