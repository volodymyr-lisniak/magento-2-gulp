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

### Composer

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
$ composer require bobmotor/magento-2-gulp
```

Install modules listed as dependencies in `package.json`

```
$ npm install
```

### Manually

Copy source files to your project root directory


Install modules listed as dependencies in `package.json`

```
$ npm install
```

## Configuration

Rename the following files in your project root directory

* `package.json.sample-aws` to `package.json`

Check or set theme configuration in the `dev/tools/grunt/configs/themes.js`

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

In project root dir run `gulp [command] --[package] --[arguments]`

Avaliable commands:

```
default, help                   Display this help message
cache-flush                     Flush Magento cache
clean                           Remove cached files (pub/static/*, var/*)
exec                            Republishes symlinks to the source files
less                            Compile LESS to CSS
critical                        Compile critical css
watch                           Watch for theme files
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

Example:

```
gulp clean --capezio && gulp exec --capezio && gulp less --capezio --map
```

Note:

* ES6 files should be placed at `.../web/js/src/*.js`. Compiled files will be in the `.../web/js/dist/`
* svg icons (`*.svg`) need to be uploaded to `app/design/frontend/<your_vendor_name>/<your_theme_name>/web/images/icons/`
