
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
