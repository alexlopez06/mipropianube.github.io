var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortoimagen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var lyr_Callejero_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/ign-base",
                              attributions: ' ',
                              params: {
                                "LAYERS": "IGNBaseTodo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Callejero',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Callejero_1, 0]);
var format_ccaa3857edit_2 = new ol.format.GeoJSON();
var features_ccaa3857edit_2 = format_ccaa3857edit_2.readFeatures(json_ccaa3857edit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ccaa3857edit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ccaa3857edit_2.addFeatures(features_ccaa3857edit_2);
var lyr_ccaa3857edit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ccaa3857edit_2, 
                style: style_ccaa3857edit_2,
                popuplayertitle: 'ccaa3857edit',
                interactive: true,
                title: '<img src="styles/legend/ccaa3857edit_2.png" /> ccaa3857edit'
            });
var format_parquesnac3857edit_3 = new ol.format.GeoJSON();
var features_parquesnac3857edit_3 = format_parquesnac3857edit_3.readFeatures(json_parquesnac3857edit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parquesnac3857edit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parquesnac3857edit_3.addFeatures(features_parquesnac3857edit_3);
var lyr_parquesnac3857edit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parquesnac3857edit_3, 
                style: style_parquesnac3857edit_3,
                popuplayertitle: 'parquesnac3857edit',
                interactive: true,
                title: '<img src="styles/legend/parquesnac3857edit_3.png" /> parquesnac3857edit'
            });
var format_rios3857edit_4 = new ol.format.GeoJSON();
var features_rios3857edit_4 = format_rios3857edit_4.readFeatures(json_rios3857edit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios3857edit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios3857edit_4.addFeatures(features_rios3857edit_4);
var lyr_rios3857edit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios3857edit_4, 
                style: style_rios3857edit_4,
                popuplayertitle: 'rios3857edit',
                interactive: true,
                title: '<img src="styles/legend/rios3857edit_4.png" /> rios3857edit'
            });

lyr_Ortoimagen_0.setVisible(true);lyr_Callejero_1.setVisible(true);lyr_ccaa3857edit_2.setVisible(true);lyr_parquesnac3857edit_3.setVisible(true);lyr_rios3857edit_4.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_Callejero_1,lyr_ccaa3857edit_2,lyr_parquesnac3857edit_3,lyr_rios3857edit_4];
lyr_ccaa3857edit_2.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'ETIQUETA', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', 'area': 'area', 'CCAA': 'CCAA', });
lyr_parquesnac3857edit_3.set('fieldAliases', {'Name': 'Name', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', 'area': 'area', 'Nombre PN': 'Nombre PN', });
lyr_rios3857edit_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', 'Nombre Río': 'Nombre Río', });
lyr_ccaa3857edit_2.set('fieldImages', {'ID': '', 'TIPO_0101': '', 'CODIGO_INE': '', 'ETIQUETA': '', 'COD_INE': '', 'TOT_FOR': '', 'ARB': '', 'NO_ARB': '', 'area': '', 'CCAA': '', });
lyr_parquesnac3857edit_3.set('fieldImages', {'Name': '', 'Declaracio': '', 'Reclasific': '', 'Ampliacion': '', 'Fecha de d': '', 'Modificaci': '', 'area': '', 'Nombre PN': '', });
lyr_rios3857edit_4.set('fieldImages', {'OBJECTID': 'Range', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'ExternalResource', 'Shape_Leng': 'TextEdit', 'Nombre Río': 'TextEdit', });
lyr_ccaa3857edit_2.set('fieldLabels', {'ID': 'no label', 'TIPO_0101': 'no label', 'CODIGO_INE': 'no label', 'ETIQUETA': 'no label', 'COD_INE': 'no label', 'TOT_FOR': 'no label', 'ARB': 'no label', 'NO_ARB': 'no label', 'area': 'no label', 'CCAA': 'no label', });
lyr_parquesnac3857edit_3.set('fieldLabels', {'Name': 'no label', 'Declaracio': 'no label', 'Reclasific': 'no label', 'Ampliacion': 'no label', 'Fecha de d': 'no label', 'Modificaci': 'no label', 'area': 'no label', 'Nombre PN': 'no label', });
lyr_rios3857edit_4.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'no label', 'Longitud': 'no label', 'Categoria': 'no label', 'Imagen': 'no label', 'Shape_Leng': 'no label', 'Nombre Río': 'no label', });
lyr_rios3857edit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});