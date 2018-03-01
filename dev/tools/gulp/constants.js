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
    WATCH_FILES: '**/*.less',
    PUB_STATIC: 'pub/static',
    EXECUTION_FILE: 'php bin/magento',
    EXEC_COMMAND: 'dev:source-theme:deploy',
    CACHE_FLUSH_COMMAND: 'cache:flush',
    CACHED_FILES: ['./var/cache/**', './var/view_preprocessed/**']
};
