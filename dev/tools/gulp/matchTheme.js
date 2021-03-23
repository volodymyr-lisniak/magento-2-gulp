const themesConfig = require('../grunt/configs/local-themes');

const packages = Object.keys(themesConfig);

module.exports = {
    packages: packages,
    avaliablePackages: packages.join(', '),
    matchTheme: true
};
