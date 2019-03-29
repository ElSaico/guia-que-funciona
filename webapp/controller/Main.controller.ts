import Controller = sap.ui.core.mvc.Controller;
import JSONModel = sap.ui.model.json.JSONModel;

export default class Main extends Controller {
  onInit() {
    let oModel = new JSONModel('data/recursos-266888.json');
    this.getView().setModel(oModel);

    let oMap = this.getView().byId('map');
    const oMapConfig = {
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
    oMap['setMapConfiguration'](oMapConfig);
  }
}
