const localConfig = require('./local');

const ptotocol = localConfig.useHttps ? 'https' : 'http';

module.exports = {
    proxy: `${ptotocol}://${localConfig.hostname}.${localConfig.generic}/`,
    host: `${localConfig.hostname}.${localConfig.generic}`,
    tunnel: `${localConfig.hostname}`,
    open: false
};
