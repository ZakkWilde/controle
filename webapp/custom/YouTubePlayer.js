sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/Text",
	"sap/ui/model/json/JSONModel"
], function (Control, Text, JSONModel) {
	"use strict";

	return Control.extend("ovly.controle.custom.YouTubePlayer", {
		
		metadata:{
			properties: {
				largura: {
					type: "sap.ui.core.CSSSize",
					defaultValue: "400px"
				},
				fonte: "string"
			},
			aggregations: {
				
			},
			events: {
				
			}
		},
		
		init: function(){
			
		}
		/*renderer: function(oRm, oYouTubePlayer){
			
		//	manager.write("<h1> PLayer <h1>");
					// debugger;
			oRm.write("<div");
			oRm.writeControlData(oYouTubePlayer);
			oRm.write(">");
			// oRm.write("<h2>Player</h2>");

			oRm.write("<iframe");
			
			var sLargura = oYouTubePlayer.getLargura();
			oRm.write(" width=" + sLargura);

			var sFonte = oYouTubePlayer.getFonte();
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
			
			
		}*/
		
	});
});