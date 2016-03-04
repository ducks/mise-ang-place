'use strict';

var angular = require('angular'),
    app = require('./app');

angular.module('plate', [
  require('angular-ui-router'),
  app.name
])
// route configuration file
// browserify will recognize this file as routes/index.js
.config(require('./routes')) 
// You can set constants here that you can inject to any
// service or controller. An example may be an API url
// that you often hit.
.constant('API', 'PUT_API_URL_HERE')
.run(function() {
  // Put code here to run on app startup
});
