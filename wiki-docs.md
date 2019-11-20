# **Getting Started** #

### ** Check for Node and NPM ** ###

Make sure that you've installed Node and NPM before attempting to install gulp.
```
$ node -v
```
```
$ npm -v
```
### ** Install Gulp globally ** ###

Windows/Mac OS:
```
$ npm install gulp -g
```
Ubuntu:
```
$ sudo npm install gulp -g
```

### **Project integration** ###

Add gulp dependence to project's `composer.json`

```
"require": {
    "absolutewebservices/magento-2.x-gulp":"~1.3.0"
}
```

Run

```
$ composer update --prefer-source
```

Rename the following files in your project root directory

* `package.json.sample-aws` to `package.json`

Check or set theme configuration in the `dev/tools/grunt/configs/themes.js`

```
#!javascript

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
#!javascript

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
#!javascript
module.exports = {
    proxy: 'http://hostname.loc/',
    host: 'hostname.loc',
    tunnel: 'hostname',
    open: false
};
```

Example:

```
#!javascript
module.exports = {
    proxy: 'http://capezio.loc/',
    host: 'capezio.loc',
    tunnel: 'capezio',
    open: false
};
```

Install modules listed as dependencies in `package.json`

```
$ npm i
```

### **How to use** ###

In project root dir run `gulp [command] --[package] --[arguments]`

Available commands:

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

Note:

* ES6 files should be placed at `web/js/src/*.js`. Compiled files will be in the `web/js/dist/`
* images (`*.jpeg`, `*.png`, `*.gif`) need to be uploaded to `app/design/frontend/<your_vendor_name>/<your_theme_name>/web/images/src/`
* svg icons (`*.svg`) need to be uploaded to `app/design/frontend/<your_vendor_name>/<your_theme_name>/web/images/icons/`
