(function() {
    'use strict';
    angular
        .module('bluebot')
        .controller('settingsCtrl', settingsCtrl);

    function settingsCtrl() {
        var vm = this;
        var fire = new Firebase('https://bluebot.firebaseio.com/');

        createUserSettings();

        ////////////////

        function createUserSettings() {
            vm.settings = {
                "user": {
                    "categories": [{
                        "highName": "happy",
                        "lowName": "sad"
                    },{
                        "highName": "calm",
                        "lowName": "angry"
                    },{
                        "highName": "grateful",
                        "lowName": "disappointed"
                    },{
                        "highName": "active",
                        "lowName": "passive"
                    }]
                }
            }

            fire.set(vm.settings);
        }
    }
})();
