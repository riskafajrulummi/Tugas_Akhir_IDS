ol.proj.get("EPSG:23889").setExtent([410636.476400, 9112386.000500, 448403.311800, 9141229.889100]);
var wms_layers = [];
var format_Batas_0 = new ol.format.GeoJSON();
var features_Batas_0 = format_Batas_0.readFeatures(json_Batas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23889'});
var jsonSource_Batas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Batas_0.addFeatures(features_Batas_0);var lyr_Batas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_0, 
                style: style_Batas_0,
                title: '<img src="styles/legend/Batas_0.png" /> Batas'
            });var format_perairandarat_1 = new ol.format.GeoJSON();
var features_perairandarat_1 = format_perairandarat_1.readFeatures(json_perairandarat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23889'});
var jsonSource_perairandarat_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_perairandarat_1.addFeatures(features_perairandarat_1);var lyr_perairandarat_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_perairandarat_1, 
                style: style_perairandarat_1,
                title: '<img src="styles/legend/perairandarat_1.png" /> perairan darat'
            });var format_Lokasi_Alternatif_SPBU_2 = new ol.format.GeoJSON();
var features_Lokasi_Alternatif_SPBU_2 = format_Lokasi_Alternatif_SPBU_2.readFeatures(json_Lokasi_Alternatif_SPBU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23889'});
var jsonSource_Lokasi_Alternatif_SPBU_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lokasi_Alternatif_SPBU_2.addFeatures(features_Lokasi_Alternatif_SPBU_2);var lyr_Lokasi_Alternatif_SPBU_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lokasi_Alternatif_SPBU_2, 
                style: style_Lokasi_Alternatif_SPBU_2,
    title: 'Lokasi_Alternatif_SPBU<br />\
    <img src="styles/legend/Lokasi_Alternatif_SPBU_2_0.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/Lokasi_Alternatif_SPBU_2_1.png" /> Sesuai<br />\
    <img src="styles/legend/Lokasi_Alternatif_SPBU_2_2.png" /> Sangat Sesuai<br />'
        });var format_jalan_kolektor_3 = new ol.format.GeoJSON();
var features_jalan_kolektor_3 = format_jalan_kolektor_3.readFeatures(json_jalan_kolektor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23889'});
var jsonSource_jalan_kolektor_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_kolektor_3.addFeatures(features_jalan_kolektor_3);var lyr_jalan_kolektor_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_kolektor_3, 
                style: style_jalan_kolektor_3,
                title: '<img src="styles/legend/jalan_kolektor_3.png" /> jalan_kolektor'
            });var format_jalan_arteri_4 = new ol.format.GeoJSON();
var features_jalan_arteri_4 = format_jalan_arteri_4.readFeatures(json_jalan_arteri_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23889'});
var jsonSource_jalan_arteri_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_arteri_4.addFeatures(features_jalan_arteri_4);var lyr_jalan_arteri_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_arteri_4, 
                style: style_jalan_arteri_4,
                title: '<img src="styles/legend/jalan_arteri_4.png" /> jalan_arteri'
            });

lyr_Batas_0.setVisible(true);lyr_perairandarat_1.setVisible(true);lyr_Lokasi_Alternatif_SPBU_2.setVisible(true);lyr_jalan_kolektor_3.setVisible(true);lyr_jalan_arteri_4.setVisible(true);
var layersList = [lyr_Batas_0,lyr_perairandarat_1,lyr_Lokasi_Alternatif_SPBU_2,lyr_jalan_kolektor_3,lyr_jalan_arteri_4];
lyr_Batas_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KODE_KAB': 'KODE_KAB', 'SHAPE_LENG': 'SHAPE_LENG', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_LE_2': 'SHAPE_LE_2', 'SHAPE_AREA': 'SHAPE_AREA', });
lyr_perairandarat_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'LANDUSE_': 'LANDUSE_', 'LANDUSE_ID': 'LANDUSE_ID', 'CLAS1_NAM': 'CLAS1_NAM', 'AREA_2': 'AREA_2', 'PERIMETE_2': 'PERIMETE_2', 'LANDUSE__2': 'LANDUSE__2', 'CLAS1_NA_2': 'CLAS1_NA_2', });
lyr_Lokasi_Alternatif_SPBU_2.set('fieldAliases', {'FID_s_a_k_': 'FID_s_a_k_', 'FID_s_a_k1': 'FID_s_a_k1', 'FID_KOLETO': 'FID_KOLETO', 'distance': 'distance', 'Bobot': 'Bobot', 'FID_S_A_fi': 'FID_S_A_fi', 'FID_jalan_': 'FID_jalan_', 'distance_1': 'distance_1', 'Bobot_1': 'Bobot_1', 'Jarak_Buff': 'Jarak_Buff', 'FID_sungai': 'FID_sungai', 'distance_2': 'distance_2', 'Bobot_12': 'Bobot_12', 'FID_buffer': 'FID_buffer', 'osm_id': 'osm_id', 'access': 'access', 'access_roo': 'access_roo', 'addr_house': 'addr_house', 'addr_postc': 'addr_postc', 'addr_stree': 'addr_stree', 'admin_leve': 'admin_leve', 'aeroway': 'aeroway', 'amenity': 'amenity', 'backup_gen': 'backup_gen', 'beds': 'beds', 'blockage': 'blockage', 'boundary': 'boundary', 'bridge': 'bridge', 'building': 'building', 'building_m': 'building_m', 'capacity': 'capacity', 'communicat': 'communicat', 'communic_1': 'communic_1', 'covered': 'covered', 'denominati': 'denominati', 'depth': 'depth', 'diameter': 'diameter', 'emergency': 'emergency', 'fuel': 'fuel', 'government': 'government', 'health_fac': 'health_fac', 'health_f_1': 'health_f_1', 'health_f_2': 'health_f_2', 'healthcare': 'healthcare', 'highway': 'highway', 'historic': 'historic', 'industrial': 'industrial', 'is_in': 'is_in', 'isced_leve': 'isced_leve', 'landuse': 'landuse', 'layer': 'layer', 'leisure': 'leisure', 'man_made': 'man_made', 'medical_sy': 'medical_sy', 'military': 'military', 'name': 'name', 'name_en': 'name_en', 'name_fr': 'name_fr', 'name_sw': 'name_sw', 'natural': 'natural', 'network': 'network', 'office': 'office', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'operator': 'operator', 'parking': 'parking', 'place': 'place', 'population': 'population', 'power': 'power', 'public_tra': 'public_tra', 'pump': 'pump', 'railway': 'railway', 'religion': 'religion', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'shop': 'shop', 'smoothness': 'smoothness', 'social_fac': 'social_fac', 'staff_coun': 'staff_coun', 'staff_co_1': 'staff_co_1', 'status': 'status', 'surface': 'surface', 'toilets_di': 'toilets_di', 'toilets_ha': 'toilets_ha', 'tourism': 'tourism', 'tower': 'tower', 'tunnel': 'tunnel', 'water': 'water', 'waterway': 'waterway', 'wheelchair': 'wheelchair', 'width': 'width', 'z_index': 'z_index', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'BOBOT_1_13': 'BOBOT_1_13', 'FID_kelere': 'FID_kelere', 'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'Bobot_1_14': 'Bobot_1_14', 'Total_bot': 'Total_bot', });
lyr_jalan_kolektor_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LAYER': 'LAYER', 'KETERANGAN': 'KETERANGAN', 'SOURCETHM': 'SOURCETHM', 'LENGTH_FEE': 'LENGTH_FEE', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_LE_2': 'SHAPE_LE_2', 'Foto': 'Foto', });
lyr_jalan_arteri_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LAYER': 'LAYER', 'KETERANGAN': 'KETERANGAN', 'SOURCETHM': 'SOURCETHM', 'LENGTH_FEE': 'LENGTH_FEE', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_LE_2': 'SHAPE_LE_2', });
lyr_Batas_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'KODE_KAB': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'KODE_PROP': 'TextEdit', 'KABUPATEN': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_LE_2': 'TextEdit', 'SHAPE_AREA': 'TextEdit', });
lyr_perairandarat_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'LANDUSE_': 'TextEdit', 'LANDUSE_ID': 'TextEdit', 'CLAS1_NAM': 'TextEdit', 'AREA_2': 'TextEdit', 'PERIMETE_2': 'TextEdit', 'LANDUSE__2': 'TextEdit', 'CLAS1_NA_2': 'TextEdit', });
lyr_Lokasi_Alternatif_SPBU_2.set('fieldImages', {'FID_s_a_k_': 'TextEdit', 'FID_s_a_k1': 'TextEdit', 'FID_KOLETO': 'TextEdit', 'distance': 'TextEdit', 'Bobot': 'TextEdit', 'FID_S_A_fi': 'TextEdit', 'FID_jalan_': 'TextEdit', 'distance_1': 'TextEdit', 'Bobot_1': 'TextEdit', 'Jarak_Buff': 'TextEdit', 'FID_sungai': 'TextEdit', 'distance_2': 'TextEdit', 'Bobot_12': 'TextEdit', 'FID_buffer': 'TextEdit', 'osm_id': 'TextEdit', 'access': 'TextEdit', 'access_roo': 'TextEdit', 'addr_house': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_stree': 'TextEdit', 'admin_leve': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'backup_gen': 'TextEdit', 'beds': 'TextEdit', 'blockage': 'TextEdit', 'boundary': 'TextEdit', 'bridge': 'TextEdit', 'building': 'TextEdit', 'building_m': 'TextEdit', 'capacity': 'TextEdit', 'communicat': 'TextEdit', 'communic_1': 'TextEdit', 'covered': 'TextEdit', 'denominati': 'TextEdit', 'depth': 'TextEdit', 'diameter': 'TextEdit', 'emergency': 'TextEdit', 'fuel': 'TextEdit', 'government': 'TextEdit', 'health_fac': 'TextEdit', 'health_f_1': 'TextEdit', 'health_f_2': 'TextEdit', 'healthcare': 'TextEdit', 'highway': 'TextEdit', 'historic': 'TextEdit', 'industrial': 'TextEdit', 'is_in': 'TextEdit', 'isced_leve': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'medical_sy': 'TextEdit', 'military': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'name_fr': 'TextEdit', 'name_sw': 'TextEdit', 'natural': 'TextEdit', 'network': 'TextEdit', 'office': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'operator': 'TextEdit', 'parking': 'TextEdit', 'place': 'TextEdit', 'population': 'TextEdit', 'power': 'TextEdit', 'public_tra': 'TextEdit', 'pump': 'TextEdit', 'railway': 'TextEdit', 'religion': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'shop': 'TextEdit', 'smoothness': 'TextEdit', 'social_fac': 'TextEdit', 'staff_coun': 'TextEdit', 'staff_co_1': 'TextEdit', 'status': 'TextEdit', 'surface': 'TextEdit', 'toilets_di': 'TextEdit', 'toilets_ha': 'TextEdit', 'tourism': 'TextEdit', 'tower': 'TextEdit', 'tunnel': 'TextEdit', 'water': 'TextEdit', 'waterway': 'TextEdit', 'wheelchair': 'TextEdit', 'width': 'TextEdit', 'z_index': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'BOBOT_1_13': 'TextEdit', 'FID_kelere': 'TextEdit', 'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', 'Bobot_1_14': 'TextEdit', 'Total_bot': 'TextEdit', });
lyr_jalan_kolektor_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'LAYER': 'TextEdit', 'KETERANGAN': 'TextEdit', 'SOURCETHM': 'TextEdit', 'LENGTH_FEE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_LE_2': 'TextEdit', 'Foto': 'TextEdit', });
lyr_jalan_arteri_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'LAYER': 'TextEdit', 'KETERANGAN': 'TextEdit', 'SOURCETHM': 'TextEdit', 'LENGTH_FEE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_LE_2': 'TextEdit', });
lyr_Batas_0.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINSI': 'no label', 'KODE_KAB': 'no label', 'SHAPE_LENG': 'no label', 'KODE_PROP': 'no label', 'KABUPATEN': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_LE_2': 'no label', 'SHAPE_AREA': 'no label', });
lyr_perairandarat_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'LANDUSE_': 'no label', 'LANDUSE_ID': 'no label', 'CLAS1_NAM': 'no label', 'AREA_2': 'no label', 'PERIMETE_2': 'no label', 'LANDUSE__2': 'no label', 'CLAS1_NA_2': 'no label', });
lyr_Lokasi_Alternatif_SPBU_2.set('fieldLabels', {'FID_s_a_k_': 'no label', 'FID_s_a_k1': 'no label', 'FID_KOLETO': 'no label', 'distance': 'no label', 'Bobot': 'no label', 'FID_S_A_fi': 'no label', 'FID_jalan_': 'no label', 'distance_1': 'no label', 'Bobot_1': 'no label', 'Jarak_Buff': 'no label', 'FID_sungai': 'no label', 'distance_2': 'no label', 'Bobot_12': 'no label', 'FID_buffer': 'no label', 'osm_id': 'no label', 'access': 'no label', 'access_roo': 'no label', 'addr_house': 'no label', 'addr_postc': 'no label', 'addr_stree': 'no label', 'admin_leve': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'backup_gen': 'no label', 'beds': 'no label', 'blockage': 'no label', 'boundary': 'no label', 'bridge': 'no label', 'building': 'no label', 'building_m': 'no label', 'capacity': 'no label', 'communicat': 'no label', 'communic_1': 'no label', 'covered': 'no label', 'denominati': 'no label', 'depth': 'no label', 'diameter': 'no label', 'emergency': 'no label', 'fuel': 'no label', 'government': 'no label', 'health_fac': 'no label', 'health_f_1': 'no label', 'health_f_2': 'no label', 'healthcare': 'no label', 'highway': 'no label', 'historic': 'no label', 'industrial': 'no label', 'is_in': 'no label', 'isced_leve': 'no label', 'landuse': 'no label', 'layer': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'medical_sy': 'no label', 'military': 'no label', 'name': 'no label', 'name_en': 'no label', 'name_fr': 'no label', 'name_sw': 'no label', 'natural': 'no label', 'network': 'no label', 'office': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'operator': 'no label', 'parking': 'no label', 'place': 'no label', 'population': 'no label', 'power': 'no label', 'public_tra': 'no label', 'pump': 'no label', 'railway': 'no label', 'religion': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'shop': 'no label', 'smoothness': 'no label', 'social_fac': 'no label', 'staff_coun': 'no label', 'staff_co_1': 'no label', 'status': 'no label', 'surface': 'no label', 'toilets_di': 'no label', 'toilets_ha': 'no label', 'tourism': 'no label', 'tower': 'no label', 'tunnel': 'no label', 'water': 'no label', 'waterway': 'no label', 'wheelchair': 'no label', 'width': 'no label', 'z_index': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'BOBOT_1_13': 'no label', 'FID_kelere': 'no label', 'ID': 'no label', 'GRIDCODE': 'no label', 'Bobot_1_14': 'no label', 'Total_bot': 'header label', });
lyr_jalan_kolektor_3.set('fieldLabels', {'OBJECTID': 'no label', 'LAYER': 'no label', 'KETERANGAN': 'header label', 'SOURCETHM': 'no label', 'LENGTH_FEE': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_LE_2': 'no label', 'Foto': 'no label', });
lyr_jalan_arteri_4.set('fieldLabels', {'OBJECTID': 'no label', 'LAYER': 'no label', 'KETERANGAN': 'header label', 'SOURCETHM': 'no label', 'LENGTH_FEE': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_LE_2': 'no label', });
lyr_jalan_arteri_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});