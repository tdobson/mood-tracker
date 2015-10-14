(function () {
    'use strict';

    angular.module('bluebot', [
        // 3rd party modules
        'ionic',
        'chart.js',
        'firebase'
    ])
    .run(runFn)
    .config(configuration);

    function runFn ($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    };


    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('input', {
            url: '/',
            templateUrl: 'modules/input/input.html',
            controller: 'inputCtrl as vm'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'modules/settings/settings.html',
            controller: 'settingsCtrl as vm'
        })
        $urlRouterProvider.otherwise('/');

    }
})();
