sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.controle.controller.View1", {
		onInit: function () {
			
			var aVideos = [
				{ url: "lsLgPwQmOGw" },
				{ url: "SKElI_xwqRY" },
				{ url: "jlOUkRdNxO0" }
			];
			var oModel = new JSONModel(aVideos);
			this.getView().setModel(oModel);

		}
	});
});