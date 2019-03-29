sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
  'use strict';

  return Controller.extend('guiaquefunciona.controller.Main', {
    onInit: function (oEvent) {
      var oModel = new JSONModel('data/recursos-266888.json');
      this.getView().setModel(oModel);

      var oMap = this.getView().byId('map');
      var oMapConfig = {
        MapProvider: [
          {
            name: 'OpenStreetMap',
            tileX: 256,
            tileY: 256,
            minLOD: 8,
            maxLOD: 12,
            copyright: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
            Source: [
              {
                id: 'a',
                url: 'https://a.tile.openstreetmap.org/{LOD}/{X}/{Y}.png'
              },
              {
                id: 'b',
                url: 'https://b.tile.openstreetmap.org/{LOD}/{X}/{Y}.png'
              },
              {
                id: 'c',
                url: 'https://c.tile.openstreetmap.org/{LOD}/{X}/{Y}.png'
              }
            ]
          }
        ],
        MapLayerStacks: [
          {
            name: 'Default',
            MapLayer: {
              name: 'layer1',
              refMapProvider: 'OpenStreetMap',
              opacity: 1.0
            }
          }
        ]
      };
      oMap.setMapConfiguration(oMapConfig);
    }
  });
});
