
(function () {
    "use strict";

    angular
        .module('app')
        .controller('ViewMaintenanceController', ViewMaintenanceController)
        .directive('maintViewMaintenance', maintViewMaintenance)
    ;

    ViewMaintenanceController.$inject = ['EquipmentService'];
    function ViewMaintenanceController(EquipmentService) {
        const vm = this;
        vm.maintenance = EquipmentService.maintenanceList();
        vm.maintenanceKeys = Object.keys(vm.maintenance);
        vm.equipmentGroupedByMaintenance = EquipmentService.equipmentGroupedByMaintenance();
    }

    ///////////////////////////////////
    // maintViewMaintenance
    // maint-view-maintenance
    ///////////////////////////////////
    function maintViewMaintenance() {
        const directive = {
            templateUrl: 'app/view-maintenance.html',
            scope: {},
            controller: ViewMaintenanceController,
            bindToController: true,
            controllerAs: 'vm'
        };
        return directive;
    }

})();
