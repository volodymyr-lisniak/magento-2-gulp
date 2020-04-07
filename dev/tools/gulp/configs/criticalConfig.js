/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2020 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const localConfig = require('./local');

const ptotocol = localConfig.useHttp2 ? 'https' : 'http';

module.exports = {
    out: 'critical.css',
    url: `${ptotocol}://${localConfig.hostname}.${localConfig.generic}/`,
    width: 1920,
    height: 900,
    forceExclude: [/\[data-role=main-css-loader]/]
};
