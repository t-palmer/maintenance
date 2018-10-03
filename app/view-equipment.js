
(function () {
    "use strict";

    angular
        .module('app')
        .controller('ViewEquipmentController', ViewEquipmentController)
        .directive('maintViewEquipment', maintViewEquipment)
    ;

    ViewEquipmentController.$inject = ['EquipmentService'];
    function ViewEquipmentController(EquipmentService) {
        const vm = this;
        vm.equipment = EquipmentService.equipmentList();
        vm.maintenance = EquipmentService.maintenanceList();
        vm.maintenanceKeys = Object.keys(vm.maintenance);
        vm.maintModel = {};

        function initialize(){
            for (let maintKey in vm.maintenance) {
                vm.maintModel[maintKey] = true;
            }
        }
        initialize();


    }

    ///////////////////////////////////
    // maintViewEquipment
    // maint-view-equipment
    ///////////////////////////////////
    function maintViewEquipment() {
        const directive = {
            templateUrl: 'app/view-equipment.html',
            scope: {},
            controller: ViewEquipmentController,
            bindToController: true,
            controllerAs: 'vm'
        };
        return directive;
    }

})();
