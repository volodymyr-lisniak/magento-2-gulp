const localConfig = require('./local');

const ptotocol = localConfig.useHttp2 ? 'https' : 'http';

module.exports = {
    proxy: `${ptotocol}://${localConfig.hostname}.${localConfig.generic}/`,
    host: `${localConfig.hostname}.${localConfig.generic}`,
    tunnel: `${localConfig.hostname}`,
    open: false
};
