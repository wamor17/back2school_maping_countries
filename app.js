
AmCharts.makeChart("map",{
		"type": "map",
		"pathToImages": "http://www.amcharts.com/lib/3/images/",
		"addClassNames": true,
		"fontSize": 15,
		"color": "#000000",
		"projection": "miller",
		"backgroundAlpha": 1,
		"backgroundColor": "rgba(148, 204, 244, 0.2)",
		"dataProvider": {
			"map": "worldLow",
			"getAreasFromMap": true,
			"images": [
				{
					"top": 40,
					"left": 60,
					"width": 80,
					"height": 40,
					"pixelMapperLogo": true,
					"imageURL": "http://pixelmap.amcharts.com/static/img/logo-black.svg no-active",
					"url": "http://www.amcharts.com"
				}
			],
			"areas": [
				{
					"id": "AR",
					"title": "Argentina (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "AT",
					"title": "Austria (sin modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "BE",
					"title": "Bélgica (sin modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "BO",
					"title": "Bolívia (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "BR",
					"title": "Brasil (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "CA",
					"title": "Canadá (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "CL",
					"title": "Chile (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "CO",
					"title": "Colombia (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "CR",
					"title": "Costa Rica (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "CU",
					"title": "Cuba (sin modelo híbrido)",
					"color": "rgba(189,189,189,1)"
				},
				{
					"id": "DE",
					"title": "Alemania (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "EC",
					"title": "Ecuador (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "ES",
					"title": "España (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "FI",
					"title": "Finlandia (sin modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "FR",
					"title": "Francia (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "GB",
					"title": "Reino Unido (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "GT",
					"title": "Guatemala (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "IE",
					"title": "Irlanda (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "IL",
					"title": "Israel  (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "IT",
					"title": "Italia  (modelo híbrido)",
					"color": "rgba(189,189,189,1)"
				},
				{
					"id": "JP",
					"title": "Japón (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "KR",
					"title": "Corea del Sur (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "MX",
					"title": "México (modelo híbrido)",
					"color": "rgba(189,189,189,1)"
				},
				{
					"id": "NL",
					"title": "Países Bajos (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "NO",
					"title": "Noruega (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "PE",
					"title": "Peru (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "PY",
					"title": "Paraguay (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "SE",
					"title": "Suecia (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				},
				{
					"id": "US",
					"title": "Estados Unidos (modelo híbrido)",
					"color": "rgba(0,24,75,1)"
				}
			]
		},
		"balloon": {
			"horizontalPadding": 15,
			"borderAlpha": 0,
			"borderThickness": 1,
			"verticalPadding": 15
		},
		"areasSettings": {
			"color": "rgba(189,189,189,1)",
			"outlineColor": "rgba(108, 108, 108, 1)",
			"rollOverOutlineColor": "rgba(208, 208, 208, 1)",
			"rollOverBrightness": 40,
			"selectedBrightness": 40,
			"selectable": true,
			"unlistedAreasAlpha": 0,
			"unlistedAreasOutlineAlpha": 0
		},
		"imagesSettings": {
			"alpha": 1,
			"color": "rgba(189,189,189,1)",
			"outlineAlpha": 0,
			"rollOverOutlineAlpha": 0,
			"outlineColor": "rgba(208,208,208,0.12)",
			"rollOverBrightness": 20,
			"selectedBrightness": 20,
			"selectable": true
		},
		"linesSettings": {
			"color": "rgba(189, 189, 189, 1)",
			"selectable": true,
			"rollOverBrightness": 20,
			"selectedBrightness": 20
		},
		"zoomControl": {
			"zoomControlEnabled": true,
			"homeButtonEnabled": true,
			"panControlEnabled": false,
			"right": 38,
			"bottom": 30,
			"minZoomLevel": 0.25,
			"gridHeight": 100,
			"gridAlpha": 0.1,
			"gridBackgroundAlpha": 0,
			"gridColor": "#FFFFFF",
			"draggerAlpha": 1,
			"buttonCornerRadius": 2
		}
	});