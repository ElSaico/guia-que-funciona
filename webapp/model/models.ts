import JSONModel = sap.ui.model.json.JSONModel;
import BindingMode = sap.ui.model.BindingMode;
import Device = sap.ui.Device;

export default {
  createDeviceModel(): JSONModel {
    let oModel = new JSONModel(Device);
    oModel.setDefaultBindingMode(BindingMode.OneWay);
    return oModel;
  }
}
