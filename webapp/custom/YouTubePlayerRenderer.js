sap.ui.define([
	"sap/m/Text"
], function (Text) {
	"use strict";

	var oRenderer = {
		render: function (oRm, oControl) {

			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.write(">");

			oRm.write("<iframe");

			var sLargura = oControl.getLargura();
			oRm.write(" width=" + sLargura);

			var sFonte = oControl.getFonte();
			var sUrl = ' src="https://www.youtube.com/embed/' + sFonte + '"';
			if (sFonte) {
				oRm.write(sUrl);
			}

			oRm.write(' allow="autoplay; encrypted-media"');
			oRm.write("/>");

			oRm.write("</div>");

            var oText = new Text();
            oText.setText("Player");
			oRm.renderControl(oText);

		}
	};

	return oRenderer;
});