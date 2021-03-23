const devArgs = require('./constants/devArgs');

const devArguments = (argList => {
    let args = [];

    for (let i = 3; i <= argList.length - 1; i++) {
        if (argList[i]) {
            let arg = argList[i]
                .toString()
                .trim()
                .replace('--', '');

            args = [...args, arg];
        } else {
            return false;
        }
    }

    return args;
})(process.argv);

module.exports = {
    themeName: devArguments[0],
    sourceMapArg: devArguments.indexOf(devArgs.MAP_KEY),
    minCssArg: devArguments.indexOf(devArgs.MIN_KEY),
    liveArg: devArguments.indexOf(devArgs.LIVE_KEY),
    bsArg: devArguments.indexOf(devArgs.BS_KEY)
};
