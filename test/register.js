require('babel-register')({
  ignore: /node_modules/,
});
require('ignore-styles');
require('global-jsdom')(undefined, {
  url: 'http://localhost',
});
