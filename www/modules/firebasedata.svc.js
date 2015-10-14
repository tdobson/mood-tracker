(function () {
    'use strict';
    angular
        .module('bluebot')
        .factory('FireData', FireData);

    function FireData($firebaseArray, $firebaseObject){
        var exports = {
            userLogs: userLogs,
            userCategories: userCategories
        };


        return exports;

        ////////////////

        function userCategories() {
            var ref = new Firebase("https://bluebot.firebaseio.com/categories");
            return $firebaseArray(ref);
        }
        function userLogs() {
            var ref = new Firebase("https://bluebot.firebaseio.com/logs");
            return $firebaseArray(ref);
        }
    }
})();
