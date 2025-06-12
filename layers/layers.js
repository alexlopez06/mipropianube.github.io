var wms_layers = [];

var lyr_Callejero_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/ign-base",
                              attributions: ' ',
                              params: {
                                "LAYERS": "IGNBaseTodo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Callejero',
                            popuplayertitle: 'Callejero',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Callejero_0, 0]);
var format_parquesnac3857edit_1 = new ol.format.GeoJSON();
var features_parquesnac3857edit_1 = format_parquesnac3857edit_1.readFeatures(json_parquesnac3857edit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parquesnac3857edit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parquesnac3857edit_1.addFeatures(features_parquesnac3857edit_1);
var lyr_parquesnac3857edit_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parquesnac3857edit_1, 
                style: style_parquesnac3857edit_1,
                popuplayertitle: 'parquesnac3857edit',
                interactive: true,
                title: '<img src="styles/legend/parquesnac3857edit_1.png" /> parquesnac3857edit'
            });
var format_rios3857edit_2 = new ol.format.GeoJSON();
var features_rios3857edit_2 = format_rios3857edit_2.readFeatures(json_rios3857edit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios3857edit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios3857edit_2.addFeatures(features_rios3857edit_2);
var lyr_rios3857edit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios3857edit_2, 
                style: style_rios3857edit_2,
                popuplayertitle: 'rios3857edit',
                interactive: true,
                title: '<img src="styles/legend/rios3857edit_2.png" /> rios3857edit'
            });

lyr_Callejero_0.setVisible(true);lyr_parquesnac3857edit_1.setVisible(true);lyr_rios3857edit_2.setVisible(true);
var layersList = [lyr_Callejero_0,lyr_parquesnac3857edit_1,lyr_rios3857edit_2];
lyr_parquesnac3857edit_1.set('fieldAliases', {'Name': 'Name', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', 'area': 'area', 'Nombre PN': 'Nombre PN', });
lyr_rios3857edit_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', 'Nombre Río': 'Nombre Río', });
lyr_parquesnac3857edit_1.set('fieldImages', {'Name': '', 'Declaracio': '', 'Reclasific': '', 'Ampliacion': '', 'Fecha de d': '', 'Modificaci': '', 'area': '', 'Nombre PN': '', });
lyr_rios3857edit_2.set('fieldImages', {'OBJECTID': 'Range', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'ExternalResource', 'Shape_Leng': 'TextEdit', 'Nombre Río': 'TextEdit', });
lyr_parquesnac3857edit_1.set('fieldLabels', {'Name': 'no label', 'Declaracio': 'no label', 'Reclasific': 'no label', 'Ampliacion': 'no label', 'Fecha de d': 'no label', 'Modificaci': 'no label', 'area': 'no label', 'Nombre PN': 'no label', });
lyr_rios3857edit_2.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'no label', 'Longitud': 'no label', 'Categoria': 'no label', 'Imagen': 'no label', 'Shape_Leng': 'no label', 'Nombre Río': 'no label', });
lyr_rios3857edit_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});