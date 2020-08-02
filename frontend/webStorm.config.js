const path = require('path');
// set this file as webpack config
// #=> preferences -> language and frameworks -> javascript -> webpack
module.exports = {
  resolve: {
    alias: {
      '#assets': path.resolve('./src/assets'),
      '#repository': path.resolve('./src/repository'),
      '#store': path.resolve('./src/store'),
      '#styles': path.resolve('./src/styles'),
      '#widgets': path.resolve('./src/widgets')
    }
  }
};
