(function () {
  'use strict';

  angular
    .module('bluebot.users', [])
    .config(configuration)

    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('settings', {
            url: '/settings',
            templateUrl: 'modules/users/settings.html',
            controller: 'settingsCtrl as vm'
        })
    }
})();
