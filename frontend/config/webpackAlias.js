const path = require('path');

const webpackAlias = {
  '#apis': path.join(__dirname, '../src/apis'),
  '#assets': path.join(__dirname, '../src/assets'),
  '#components': path.join('../src/components'),
  '#store': path.join(__dirname, '../src/store'),
  '#styles': path.join(__dirname, '../src/styles'),
  '#widgets': path.join(__dirname, '../src/widgets')
};

module.exports = webpackAlias;
