
(function () {
    "use strict";

    angular
        .module('app')
        .controller('MaintenanceAlertController', MaintenanceAlertController)
        .directive('maintMaintenanceAlert', maintMaintenanceAlert)
    ;

    MaintenanceAlertController.$inject = ['EquipmentService'];
    function MaintenanceAlertController(EquipmentService) {
        const vm = this;
        vm.maintenance = EquipmentService.maintenanceList();
        vm.alertClass = {
            overdue: 'alert-danger',
            complete: 'alert-success',
            pending: 'alert-warning'

        };
    }

    ///////////////////////////////////
    // maintMaintenanceAlert
    // maint-maintenance-alert
    ///////////////////////////////////
    function maintMaintenanceAlert() {
        const directive = {
            templateUrl: 'app/maintenance-alert.html',
            scope: {
                maintenanceSchedule: '='
            },
            controller: MaintenanceAlertController,
            bindToController: true,
            controllerAs: 'vm'
        };
        return directive;
    }


})();
