ol.proj.get("EPSG:27700").setExtent([220973.874158, 51238.092818, 318526.629140, 103738.092818]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Catchments_1 = new ol.format.GeoJSON();
var features_Catchments_1 = format_Catchments_1.readFeatures(json_Catchments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Catchments_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Catchments_1.addFeatures(features_Catchments_1);var lyr_Catchments_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Catchments_1, 
                style: style_Catchments_1,
    title: 'Catchments<br />\
    <img src="styles/legend/Catchments_1_0.png" /> High<br />\
    <img src="styles/legend/Catchments_1_1.png" /> Medium<br />\
    <img src="styles/legend/Catchments_1_2.png" /> Low<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Catchments_1.setVisible(true);
var layersList = [baseLayer,lyr_OpenStreetMap_0,lyr_Catchments_1];
lyr_Catchments_1.set('fieldAliases', {'Shape_Area': 'Shape_Area', 'Catchment': 'Catchment', 'Priority': 'Priority', });
lyr_Catchments_1.set('fieldImages', {'Shape_Area': 'TextEdit', 'Catchment': 'TextEdit', 'Priority': 'TextEdit', });
lyr_Catchments_1.set('fieldLabels', {'Shape_Area': 'no label', 'Catchment': 'no label', 'Priority': 'no label', });
lyr_Catchments_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});