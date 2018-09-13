/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const child_process = require('child_process');

const commands = require('../constants/commands');

module.exports = cb => {
    child_process.exec(
        `${commands.EXECUTION_FILE} ${commands.CACHE_FLUSH_COMMAND}`,

        (err, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        }
    );
};
