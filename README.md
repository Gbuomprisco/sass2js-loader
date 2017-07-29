# sass2js-loader

Webpack loader for [sass2js](https://github.com/gbuomprisco/sass2js)

## Install

    yarn add sass2js-loader
    // OR
    npm install sass2js-loader --save

## Usage

```javascript
import variables from '!sass2js-loader!./scss/variables.scss'; 
// OR
const variables = require('!sass2js-loader!./scss/variables.scss').default;
```