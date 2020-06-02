ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([68.093477, 6.754368, 97.411498, 37.077611]);
var wms_layers = [];

var format_TotalCases_0 = new ol.format.GeoJSON();
var features_TotalCases_0 = format_TotalCases_0.readFeatures(json_TotalCases_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TotalCases_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalCases_0.addFeatures(features_TotalCases_0);
var lyr_TotalCases_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalCases_0, 
                style: style_TotalCases_0,
                interactive: true,
    title: 'Total Cases<br />\
    <img src="styles/legend/TotalCases_0_0.png" /> 0 - 330<br />\
    <img src="styles/legend/TotalCases_0_1.png" /> 330 - 1340<br />\
    <img src="styles/legend/TotalCases_0_2.png" /> 1340 - 2698<br />\
    <img src="styles/legend/TotalCases_0_3.png" /> 2698 - 5501<br />\
    <img src="styles/legend/TotalCases_0_4.png" /> 5501 - 16794<br />\
    <img src="styles/legend/TotalCases_0_5.png" /> 16794 - 22333<br />\
    <img src="styles/legend/TotalCases_0_6.png" /> 22333 - 67655<br />'
        });

lyr_TotalCases_0.setVisible(true);
var layersList = [lyr_TotalCases_0];
lyr_TotalCases_0.set('fieldAliases', {'State ': 'State ', 'Serial': 'Serial', 'Total Cases': 'Total Cases', 'Active': 'Active', 'Recovered': 'Recovered', 'Deaths': 'Deaths', 'Cases per pop': 'Cases per pop', 'Mortality rate': 'Mortality rate', });
lyr_TotalCases_0.set('fieldImages', {'State ': 'TextEdit', 'Serial': 'Range', 'Total Cases': 'Range', 'Active': 'Range', 'Recovered': 'Range', 'Deaths': 'Range', 'Cases per pop': 'TextEdit', 'Mortality rate': 'TextEdit', });
lyr_TotalCases_0.set('fieldLabels', {'State ': 'header label', 'Serial': 'inline label', 'Total Cases': 'inline label', 'Active': 'inline label', 'Recovered': 'inline label', 'Deaths': 'inline label', 'Cases per pop': 'inline label', 'Mortality rate': 'inline label', });
lyr_TotalCases_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});