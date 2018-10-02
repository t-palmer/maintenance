/**
 * Service functions for the equipment.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .factory('EquipmentService', EquipmentService)
    ;

    EquipmentService.$inject = [];
    function EquipmentService() {

        const EquipmentService = {
            equipmentList: function () {
                return equipment;

            },
            equipmentGroupedByMaintenance: function () {
                const maintenanceMap = {};
                Object.keys(maintenance).forEach(function(maintenanceKey){
                    maintenanceMap[maintenanceKey] = [];
                });
                equipment.forEach(function(piece){
                    piece.maintenance.forEach(function(scheduledMaintenance){
                        maintenanceMap[scheduledMaintenance.maintenanceType].push({
                            piece: piece.name,
                            status: scheduledMaintenance.status
                        });
                    });
                });
                return maintenanceMap;
            },
            maintenanceList: function () {
                return maintenance;
            }
        };
        return EquipmentService;
    }

})();
