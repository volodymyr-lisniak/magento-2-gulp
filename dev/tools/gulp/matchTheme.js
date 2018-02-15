/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2018 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

// import themesConfig from './theme';
import themesConfig from '../grunt/configs/themes';

export const packages = Object.keys(themesConfig);
export const avaliablePackages = packages.join(', ');
export let matchTheme = true;
export let changeMatchTheme = newValue => {
    matchTheme = newValue;
};
