const NODE_ENV = process.env.NODE_ENV;
let config = {};

if (NODE_ENV === 'development') {
  config = require('./config.dev.js');
} else if (NODE_ENV === 'production') {
  config = require('./config.prod.js');
}

module.exports = config;