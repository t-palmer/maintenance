(function () {
    'use strict';


    angular
        .module('app')
        .controller('PageController', PageController)
    ;

    PageController.$inject = ['$scope', 'EquipmentService'];
    function PageController ($scope, EquipmentService) {
        $scope.vm = {};
        $scope.vm.equipment = EquipmentService.equipmentList();
        $scope.vm.maintenence = EquipmentService.maintenenceList();
    }

})();
