(function() {
    'use strict';
    angular
        .module('bluebot')
        .controller('inputCtrl', inputCtrl);

    function inputCtrl(FireData, $state) {
        var vm = this;

        // accesible data
        vm.logs = FireData.logs();
        vm.categories = FireData.categories();

        // accessible functions
        vm.submit = submit;

        ////////////////

        function submit() {
            console.log(vm.data);
            //vm.logs.$add(data);
        }

    }

})();
