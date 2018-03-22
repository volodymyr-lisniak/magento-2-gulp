/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

module.exports = {
    BS_KEY: 'bs',
    MAP_KEY: 'map',
    MIN_KEY: 'min',
    LIVE_KEY: 'live',
    CSS_FOLDER: 'css/',
    IMAGE_FOLDER_SRC: 'web/images/src/**/*',
    IMAGE_FOLDER_DEST: 'web/images/',
    IMAGE_SVG_FOLDER: 'web/',
    IMAGE_SVG_FOLDER_SRC: 'web/images/icons/**/*',
    IMAGE_SVG_FOLDER_DEST: 'web/images/icons/',
    IMAGE_SVG_STYLES_FOLDER_DEST: "../../../css/source/aws/_aws-sprite-svg.less",
    IMAGE_SVG_SPRITE_FOLDER_DEST: "../../../images/icons/svg/aws-sprite.svg",
    IMAGE_SVG_STYLE_FILE: "web/css/source/aws/_aws-sprite-svg.less",
    IMAGE_SVG_SPRITE_FOLDER: "web/images/icons/svg",
    WATCH_FILES: '**/*.less',
    PUB_STATIC: 'pub/static',
    THEME_FOLDER: 'app/design',
    EXECUTION_FILE: 'php bin/magento',
    EXEC_COMMAND: 'dev:source-theme:deploy',
    CACHE_FLUSH_COMMAND: 'cache:flush',
    CACHED_FILES: ['./var/cache/**', './var/view_preprocessed/**']
};
