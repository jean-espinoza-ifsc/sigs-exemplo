var wms_layers = [];


        var lyr_ImagensdeSatlite_0 = new ol.layer.Tile({
            'title': 'Imagens de Satélite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Pases_1 = new ol.format.GeoJSON();
var features_Pases_1 = format_Pases_1.readFeatures(json_Pases_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pases_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pases_1.addFeatures(features_Pases_1);
var lyr_Pases_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pases_1, 
                style: style_Pases_1,
                interactive: true,
                title: '<img src="styles/legend/Pases_1.png" /> Países'
            });
var format_SantaCatarina_2 = new ol.format.GeoJSON();
var features_SantaCatarina_2 = format_SantaCatarina_2.readFeatures(json_SantaCatarina_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaCatarina_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaCatarina_2.addFeatures(features_SantaCatarina_2);
var lyr_SantaCatarina_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantaCatarina_2, 
                style: style_SantaCatarina_2,
                interactive: true,
                title: '<img src="styles/legend/SantaCatarina_2.png" /> Santa Catarina'
            });
var format_MunicipiosdeSC_3 = new ol.format.GeoJSON();
var features_MunicipiosdeSC_3 = format_MunicipiosdeSC_3.readFeatures(json_MunicipiosdeSC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosdeSC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosdeSC_3.addFeatures(features_MunicipiosdeSC_3);
var lyr_MunicipiosdeSC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosdeSC_3, 
                style: style_MunicipiosdeSC_3,
                interactive: true,
                title: '<img src="styles/legend/MunicipiosdeSC_3.png" /> Municipios de SC'
            });
var lyr_Riscodecontgio_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Risco de contágio [%]",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Riscodecontgio_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5882174.213677, -3158594.257106, -5842396.420032, -3115945.073481]
                            })
                        });
var format_ChapecSC_5 = new ol.format.GeoJSON();
var features_ChapecSC_5 = format_ChapecSC_5.readFeatures(json_ChapecSC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChapecSC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapecSC_5.addFeatures(features_ChapecSC_5);
var lyr_ChapecSC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChapecSC_5, 
                style: style_ChapecSC_5,
                interactive: true,
                title: '<img src="styles/legend/ChapecSC_5.png" /> Chapecó - SC'
            });

lyr_ImagensdeSatlite_0.setVisible(true);lyr_Pases_1.setVisible(true);lyr_SantaCatarina_2.setVisible(true);lyr_MunicipiosdeSC_3.setVisible(true);lyr_Riscodecontgio_4.setVisible(true);lyr_ChapecSC_5.setVisible(true);
var layersList = [lyr_ImagensdeSatlite_0,lyr_Pases_1,lyr_SantaCatarina_2,lyr_MunicipiosdeSC_3,lyr_Riscodecontgio_4,lyr_ChapecSC_5];
lyr_Pases_1.set('fieldAliases', {'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'ISO_2DIGIT': 'ISO_2DIGIT', 'ISO_3DIGIT': 'ISO_3DIGIT', 'CNTRY_NAME': 'CNTRY_NAME', 'LONG_NAME': 'LONG_NAME', 'SOVEREIGN': 'SOVEREIGN', 'POP_CNTRY': 'POP_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'SQKM': 'SQKM', 'SQMI': 'SQMI', 'COLOR_MAP': 'COLOR_MAP', });
lyr_SantaCatarina_2.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', });
lyr_MunicipiosdeSC_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_ChapecSC_5.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Pases_1.set('fieldImages', {'FIPS_CNTRY': 'TextEdit', 'GMI_CNTRY': 'TextEdit', 'ISO_2DIGIT': 'TextEdit', 'ISO_3DIGIT': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'LONG_NAME': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'POP_CNTRY': 'TextEdit', 'CURR_TYPE': 'TextEdit', 'CURR_CODE': 'TextEdit', 'LANDLOCKED': 'TextEdit', 'SQKM': 'TextEdit', 'SQMI': 'TextEdit', 'COLOR_MAP': 'TextEdit', });
lyr_SantaCatarina_2.set('fieldImages', {'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', });
lyr_MunicipiosdeSC_3.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_ChapecSC_5.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Pases_1.set('fieldLabels', {'FIPS_CNTRY': 'no label', 'GMI_CNTRY': 'no label', 'ISO_2DIGIT': 'no label', 'ISO_3DIGIT': 'no label', 'CNTRY_NAME': 'no label', 'LONG_NAME': 'no label', 'SOVEREIGN': 'no label', 'POP_CNTRY': 'no label', 'CURR_TYPE': 'no label', 'CURR_CODE': 'no label', 'LANDLOCKED': 'no label', 'SQKM': 'no label', 'SQMI': 'no label', 'COLOR_MAP': 'no label', });
lyr_SantaCatarina_2.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', });
lyr_MunicipiosdeSC_3.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_ChapecSC_5.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_ChapecSC_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});