sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
  'use strict';

  return Controller.extend('com.sap.cloudscame.controller.Main', {
    _businessTypeIcons: {
      'HOSPITAIS': '\ue062',
      'CLÍNICAS': '\ue118',
      'MÉDICOS E CONSULTÓRIOS': '\ue0fd',
      'LABORATÓRIOS E CENTRO DE DIAGNÓSTICOS': '\ue138'
    },

    onInit: function () {
      this.configureMap();
      this.loadData();
    },

    configureMap: function () {
      this.getView().byId('map').setMapConfiguration({
        MapProvider: [
          {
            name: 'OpenStreetMap',
            tileX: 256,
            tileY: 256,
            minLOD: 7,
            maxLOD: 19,
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
      });
    },

    loadData: function () {
      var oModel = new JSONModel('data/recursos-266888-geo.json');
      this.getView().setModel(oModel);
    },

    getBusinessTypeIcon: function (sBusinessType) {
      return this._businessTypeIcons[sBusinessType];
    }
  });
});
