
(function () {
    "use strict";

    angular
        .module('app')
        .controller('ViewGroupController', ViewGroupController)
        .directive('maintViewGroup', maintViewGroup)
    ;

    ViewGroupController.$inject = ['EquipmentService'];
    function ViewGroupController(EquipmentService) {
        const vm = this;
        vm.maintenance = EquipmentService.maintenanceList();
        vm.maintenanceKeys = Object.keys(vm.maintenance);
        vm.maintModel = {};

        vm.maintenanceGroupChange = function () {
            vm.equipment = EquipmentService.equipmentForMaintenance(vm.maintModel);
            vm.hasOneList = EquipmentService.hasOneMaintenance(vm.maintModel);
        };

        function initialize(){
            for (let maintKey in vm.maintenance) {
                vm.maintModel[maintKey] = true;
            }
            vm.maintenanceGroupChange();
        }
        initialize();
    }

    ///////////////////////////////////
    // maintViewGroup
    // maint-view-group
    ///////////////////////////////////
    function maintViewGroup() {
        const directive = {
            templateUrl: 'app/view-group.html',
            scope: {},
            controller: ViewGroupController,
            bindToController: true,
            controllerAs: 'vm'
        };
        return directive;
    }

})();
