import UIComponent = sap.ui.core.UIComponent;
import models from "guiaquefunciona/model/models";

export default class Component extends UIComponent {
  protected static readonly metadata = {
    manifest: 'json'
  };

  /**
   * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
   * @public
   * @override
   */
  init() {
    // call the base component's init function
    super.init();

    // set the device model
    this.setModel(models.createDeviceModel(), 'device');

    this.getRouter().initialize();
  }
}