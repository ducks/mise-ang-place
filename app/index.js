'use strict';

var headCtrl = require('./header.controller');
var footCtrl = require('./footer.controller');

module.exports = 
  angular.module('plate.app', [
    require('./home').name
  ])
  .controller('headerCtrl', headCtrl)
  .controller('footerCtrl', footCtrl);
