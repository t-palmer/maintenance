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

        $scope.alertClass = function (maintenenceStatus){
            if (maintenenceStatus === 'overdue'){
                return 'alert-danger';
            }
            if (maintenenceStatus === 'complete'){
                return 'alert-success';
            }
            if (maintenenceStatus === 'pending'){
                return 'alert-warning';
            }
        }

    }

})();
