# Getting Started

### Check for Node and NPM

Make sure that you've installed Node and NPM before attempting to install gulp (supports `gulp 4.x.x`). For gulp 3.x.x use [~1.4.0](https://github.com/bobmotor/magento-2-gulp/releases/tag/v1.4.1) version.
```
$ node -v
```
```
$ npm -v
```
### Install Gulp globally

```
$ npm install gulp -g
```

## Project integration

- ### Composer

Add repository's path to the `composer.json`

```
"repositories": [
    {
        "type": "github",
        "url": "https://github.com/bobmotor/magento-2-gulp"
    }
],
```

Run

```
$ composer require --dev bobmotor/magento-2-gulp
```

Rename the following files in your project root directory

* `package.json.example` to `package.json`

Install modules listed as dependencies in `package.json`

```
$ npm install
```
or
```
$ yarn
```

- ### Manually

Copy source files to your project root directory


Rename the following files in your project root directory

* `package.json.example` to `package.json`

Install modules listed as dependencies in `package.json`

```
$ npm install
```
or
```
$ yarn
```

## Configuration

Copy the contents of `themes.js` into `local-themes.js` and add your theme configuration in the `dev/tools/grunt/configs/` directory.

```
module.exports = {
    ...
    <Theme>: {
        area: 'frontend|adminhtml',
        name: '<Vendor>/<Theme>',
        locale: locale,
        files: [
            'css/styles-m',
            'css/styles-l',
        ],
        dsl: 'less'
    }
    ...
}
```

Example:

```
module.exports = {
    ...
    capezio: {
        area: 'frontend',
        name: 'Package/themeName',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    }
    ...
}
```

Open `dev/tools/gulp/configs/local.js` and set your `hostname` to configure `BrowserSync` and `Critical CSS` urls.

```
module.exports = {
    hostname: 'hostname',
    generic: 'loc',
    useHttp2: false
};
```

Example:

```
module.exports = {
    hostname: 'localhost',
    generic: 'loc',
    useHttp2: true
};
```

If you need to configure `BrowserSync` use the `dev/tools/gulp/configs/bsConfig.js`

```
module.exports = {
    proxy: `${ptotocol}://${localConfig.hostname}.${localConfig.generic}/`,
    host: `${localConfig.hostname}.${localConfig.generic}`,
    tunnel: `${localConfig.hostname}`,
    open: false
};
```

Example:

```
module.exports = {
    proxy: `${ptotocol}://${localConfig.hostname}.${localConfig.generic}/`,
    host: `${localConfig.hostname}.${localConfig.generic}`,
    tunnel: `${localConfig.hostname}`,
    open: true
};
```

To configure your desired screen size for the critical path use the `dev/tools/gulp/configs/criticalConfig.js`

```
module.exports = {
    out: 'critical.css',
    url: `${ptotocol}://${localConfig.hostname}.${localConfig.generic}/`,
    width: 1920,
    height: 900,
    forceExclude: [/\[data-role=main-css-loader]/]
};
```

Example:

```
module.exports = {
    out: 'critical.css',
    url: `${ptotocol}://${localConfig.hostname}.${localConfig.generic}/`,
    width: 1920,
    height: 250,
    forceExclude: [/\[data-role=main-css-loader]/]
};
```

### How to use

In project root dir run `gulp [command] --[theme] --[arguments]`

Avaliable commands:

```
babel                           Compile ES6+ to ES5
clean                           Remove cached files (pub/static/*, var/*)
critical                        Compile critical css
default, help                   Display this help message
exec                            Republishes symlinks to the source files
less                            Compile LESS to CSS
watch-scripts                   Watch for src/*.js files
watch-styles                    Watch for *.less files
```

Options:

```
--[package]                     Package name (optional field). Need to be the first option. Ex.: --blank
--min                           Minify css files
--map                           Add maping to CSS files
--live                          Enable livereload
--bs                            Enable browsersync
```

Examples:

Removes the theme related static files in the `pub/static` and `var` directories, republishes symlinks to the source files to the `pub/static/frontend/ directory` and compiles CSS files using the symlinks published in the `pub/static/frontend/ directory` with source map and minification.
```
gulp clean --themeName && gulp exec --themeName && gulp less --themeName --map --min
```
Compiles CSS files using the symlinks published in the `pub/static/frontend/` directory with source map.
```
gulp less --themeName --map
```
Watch styles with `livereload` (`LiveReload` browser extension should be installed)
```
gulp watch-styles --themeName --map --live
```
Creates `critical.css` from `styles-l.css` and `styles-m.css` and put it to `app/design/frontend/<VandorName>/<ThemeName>/web/css`.
In `production` mode should be run after `php bin/magento s:s:d` (task uses `pub/static/deployed_version.txt` to create absolute path to the static files)
```
gulp critical --themeName
```

Note:

* ES6 files should be placed at `.../web/js/src/*.js`. Compiled files will be in the `.../web/js/*.js`
