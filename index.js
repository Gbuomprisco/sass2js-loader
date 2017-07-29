const sass2js = require('sass2js');

/**
 * @name loader
 * @description enables webpack to require files using sass2js
 * @param source {string}
 */
module.exports = function loader(source) {
    this.cacheable && this.cacheable();

    const callback = this.async();

    sass2js(source).then(value => {
        const result = stringify.call(this, value);

        callback(null, result);
    });
}

/**
 * @name stringify
 * @param result {object}
 */
function stringify(result) {
    const version = +this.version;
    const value = JSON.stringify(result);

    return version >= 2 ? `export default ${value};` : `module.exports = ${value};`;
}
