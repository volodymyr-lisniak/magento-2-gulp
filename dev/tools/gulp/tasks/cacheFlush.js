/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const gulp = require('gulp');
const child_process = require('child_process');

const constants = require('../constants');

module.exports = cb => {
    child_process.exec(
        `${constants.EXECUTION_FILE} ${constants.CACHE_FLUSH_COMMAND}`,

        (err, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        }
    );
};
