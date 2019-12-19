# Getting Started

### Check for Node and NPM

Make sure that you've installed Node and NPM before attempting to install gulp.
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

* `package.json.sample-aws` to `package.json`

Install modules listed as dependencies in `package.json`

```
$ npm install
```

- ### Manually

Copy source files to your project root directory


Rename the following files in your project root directory

* `package.json.sample-aws` to `package.json`

Install modules listed as dependencies in `package.json`

```
$ npm install
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
        name: 'Aws/capezio',
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

To configure BrowserSync set hostnames in the `dev/tools/gulp/constants/bsConfig.js`

```
module.exports = {
    proxy: 'http://hostname.loc/',
    host: 'hostname.loc',
    tunnel: 'hostname',
    open: false
};
```

Example:

```
module.exports = {
    proxy: 'http://capezio.loc/',
    host: 'capezio.loc',
    tunnel: 'capezio',
    open: false
};
```

To configure critical CSS compilation set `url` and your desired screen size in the `dev/tools/gulp/constants/criticalConfig.js`

```
module.exports = {
    out: 'critical.css',
    url: 'http://localhost.loc/',
    width: 1920,
    height: 900,
    userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
};
```

Example:

```
module.exports = {
    out: 'critical.css',
    url: 'http://capezio.loc/',
    width: 1920,
    height: 900,
    userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
};
```

### How to use

In project root dir run `gulp [command] --[theme] --[arguments]`

Avaliable commands:

```
default, help                   Display this help message
cache-flush                     Flush Magento cache
clean                           Remove cached files (pub/static/*, var/*)
exec                            Republishes symlinks to the source files
less                            Compile LESS to CSS
critical                        Compile critical css
watch-styles                    Watch for *.less files
watch-scripts                   Watch for src/*.js files
es6                             Compile ES6+ to ES5
svg                             Create svg sprite
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
gulp clean --capezio && gulp exec --capezio && gulp less --capezio --map --min
```
Compiles CSS files using the symlinks published in the `pub/static/frontend/ directory` with source map.
```
gulp less --capezio --map
```
Watch styles with `livereload` (`LiveReload` browser extension should be installed)
```
gulp watch-styles --capezio --map --live
```
Creates `critical.css` from `styles-l.css` and `styles-m.css` and put it to `app/design/frontend/<VandorName>/<ThemeName>/web/css`
```
gulp critical --capezio
```

Note:

* ES6 files should be placed at `.../web/js/src/*.js`. Compiled files will be in the `.../web/js/*.js`
* svg icons (`*.svg`) need to be uploaded to `app/design/frontend/<VandorName>/<ThemeName>/web/images/icons/`
