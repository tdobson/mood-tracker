(function () {
    'use strict';
    angular
        .module('bluebot')
        .factory('FireData', FireData);

    function FireData($firebaseArray, $firebaseObject){
        var exports = {
            logs: logs,
            categories: categories
        };

        return exports;

        ////////////////

        function categories() {
            var ref = new Firebase("https://bluebot.firebaseio.com/user/categories");
            return $firebaseObject(ref);
        }
        function logs() {
            var ref = new Firebase("https://bluebot.firebaseio.com/user/logs");
            return $firebaseObject(ref);
        }
        function defaultCategories() {
            var ref = new Firebase("https://bluebot.firebaseio.com/defaultCategories");

            // create defaults
            // remove this in production - users shouldn't be able to edit this
            /*
            ref.push({
                "iconHigh": "ion-happy-outline",
                "iconLow": "ion-sad-outline",
                "nameHigh": "happy",
                "nameLow": "sad"
            }
            ref.push({
                "iconHigh": "ion-ribbon-b",
                "iconLow": "ion-umbrella",
                "nameHigh": "proud",
                "nameLow": "disappointed"
            })
            ref.push({
                "iconHigh": "ion-battery-charging",
                "iconLow": "ion-battery-empty",
                "nameHigh": "active",
                "nameLow": "passive"
            })
            ref.push({
                "iconHigh": "ion-leaf",
                "iconLow": "ion-flash",
                "nameHigh": "calm",
                "nameLow": "angry"
            })
            */

            return $firebaseObject(ref);
        }
    }
})();
