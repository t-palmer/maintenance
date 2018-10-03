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

        function pieceHasMaintenanceType(piece, maintenanceType){
            const i = piece.maintenance.findIndex(function (maint) {
                return maint.maintenanceType === maintenanceType;
            });
            return i >= 0;
        }

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
            equipmentForMaintenance: function (maintModel) {
                return this.equipmentList().filter(function (piece) {
                    for (let maintKey in maintModel) {
                        if(pieceHasMaintenanceType(piece, maintKey) !== maintModel[maintKey]){
                            return false;
                        }
                    }
                    return true;
                });
            },
            hasOneMaintenance: function (maintModel) {
                return this.equipmentList().filter(function (piece) {
                    for (let maintKey in maintModel) {
                        if(maintModel[maintKey] && pieceHasMaintenanceType(piece, maintKey)){
                            return true;
                        }
                    }
                    return false;
                });
            },
            maintenanceList: function () {
                return maintenance;
            }
        };
        return EquipmentService;
    }

})();
