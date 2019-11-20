/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2020 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

module.exports = {
    CSS_FOLDER: 'css/',
    CRITICAL_CSS_DEST: 'web/css',
    JS_FOLDER_SRC: 'app/**/web/js/**/src/*.js',
    JS_FOLDER_DIST: '../',
    JS_FOLDER_BASEDIR: 'app/',
    IMAGE_SVG_FOLDER: 'web/',
    IMAGE_SVG_FOLDER_SRC: 'web/images/icons/**/*',
    IMAGE_SVG_FOLDER_DEST: 'web/images/icons/',
    IMAGE_SVG_STYLES_FOLDER_DEST: '../../../css/source/aws/_aws-sprite-svg.less',
    IMAGE_SVG_SPRITE_FOLDER_DEST: '../../../images/icons/svg/aws-sprite.svg',
    IMAGE_SVG_STYLE_FILE: 'web/css/source/aws/_aws-sprite-svg.less',
    IMAGE_SVG_SPRITE_FOLDER: 'web/images/icons/svg',
    WATCH_FILES: '**/*.less',
    PUB_STATIC: 'pub/static',
    THEME_FOLDER: 'app/design',
    CACHED_FILES: ['./var/cache/**', './var/view_preprocessed/**']
};
