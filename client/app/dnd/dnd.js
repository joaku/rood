'use strict';

angular.module('roodApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dnd', {
        url: '/dnd',
        templateUrl: 'app/dnd/dnd.html',
        controller: 'DndCtrl'
      });
  });