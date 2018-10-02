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
        $scope.vm.maintenance = EquipmentService.maintenanceList();

        $scope.alertClass = function (maintenanceStatus){
            if (maintenanceStatus === 'overdue'){
                return 'alert-danger';
            }
            if (maintenanceStatus === 'complete'){
                return 'alert-success';
            }
            if (maintenanceStatus === 'pending'){
                return 'alert-warning';
            }
        }

    }

})();
