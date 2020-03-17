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
    CACHED_FILES: ['var/cache/**', 'var/view_preprocessed/**'],
    CRITICAL_CSS_DEST: 'web/css',
    CSS_FOLDER: 'css',
    IMAGE_SVG_FOLDER: 'web/',
    IMAGE_SVG_FOLDER_DEST: 'web/images/icons/',
    IMAGE_SVG_FOLDER_SRC: 'web/images/icons/**/*',
    IMAGE_SVG_STYLES_FOLDER_DEST: '../../../css/source/aws/_aws-sprite-svg.less',
    IMAGE_SVG_STYLE_FILE: 'web/css/source/aws/_aws-sprite-svg.less',
    IMAGE_SVG_SPRITE_FOLDER: 'web/images/icons/svg',
    IMAGE_SVG_SPRITE_FOLDER_DEST: '../../../images/icons/svg/aws-sprite.svg',
    JS_FOLDER_BASEDIR: 'app/',
    JS_FOLDER_DIST: '../',
    JS_FOLDER_SRC: 'app/**/web/js/**/src/*.js',
    PUB_STATIC: 'pub/static',
    STATIC: '/static',
    THEME_FOLDER: 'app/design',
    WATCH_FILES: '**/*.less'
};
