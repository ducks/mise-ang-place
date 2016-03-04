'use strict';

module.exports = function($scope) {
  function init() {
    $scope.copyright = new Date().getFullYear();
  }

  init();
}
