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
            maintenenceList: function () {
                return maintenence;
            }
        };
        return EquipmentService;
    }

})();
