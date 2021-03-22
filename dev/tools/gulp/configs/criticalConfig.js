const localConfig = require('./local');

const ptotocol = localConfig.useHttp2 ? 'https' : 'http';

module.exports = {
    out: 'critical.css',
    url: `${ptotocol}://${localConfig.hostname}.${localConfig.generic}/`,
    width: 1920,
    height: 200,
    forceExclude: [/\[data-role=main-css-loader]/]
};
