/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2020 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const del = require('del');
const runSequence = require('run-sequence');

const args = require('../args');
const paths = require('../paths');
const loggers = require('../loggers');
const matchTheme = require('../matchTheme');

module.exports = cb => {
    if (!matchTheme.matchTheme) {
        loggers.matchTheme(args.themeName, matchTheme.avaliablePackages);
    } else {
        let task = 'Cleaning svg sprite files';

        loggers.task(task, Object.keys(paths.sources));

        let itemsProcessed = 0;

        Object.keys(paths.sources).forEach((source, index, array) => {
            itemsProcessed++;

            del.sync([paths.sources[source].svgStyleFile, paths.sources[source].svgSpriteFolder]);

            if (itemsProcessed === array.length) {
                runSequence('svg-create', cb);
            }
        });
    }
};
