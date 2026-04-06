var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CommunedeKaya_1 = new ol.format.GeoJSON();
var features_CommunedeKaya_1 = format_CommunedeKaya_1.readFeatures(json_CommunedeKaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunedeKaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunedeKaya_1.addFeatures(features_CommunedeKaya_1);
var lyr_CommunedeKaya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunedeKaya_1, 
                style: style_CommunedeKaya_1,
                popuplayertitle: 'Commune de Kaya',
                interactive: true,
                title: '<img src="styles/legend/CommunedeKaya_1.png" /> Commune de Kaya'
            });
var format_Densit2024_2 = new ol.format.GeoJSON();
var features_Densit2024_2 = format_Densit2024_2.readFeatures(json_Densit2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densit2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densit2024_2.addFeatures(features_Densit2024_2);
var lyr_Densit2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densit2024_2, 
                style: style_Densit2024_2,
                popuplayertitle: 'Densité 2024',
                interactive: true,
    title: 'Densité 2024<br />\
    <img src="styles/legend/Densit2024_2_0.png" /> 0 - 21<br />\
    <img src="styles/legend/Densit2024_2_1.png" /> 21 - 43<br />\
    <img src="styles/legend/Densit2024_2_2.png" /> 43 - 64<br />\
    <img src="styles/legend/Densit2024_2_3.png" /> 64 - 86<br />\
    <img src="styles/legend/Densit2024_2_4.png" /> 86 - 107<br />' });
var format_Densit2020_3 = new ol.format.GeoJSON();
var features_Densit2020_3 = format_Densit2020_3.readFeatures(json_Densit2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densit2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densit2020_3.addFeatures(features_Densit2020_3);
var lyr_Densit2020_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densit2020_3, 
                style: style_Densit2020_3,
                popuplayertitle: 'Densité 2020',
                interactive: true,
    title: 'Densité 2020<br />\
    <img src="styles/legend/Densit2020_3_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Densit2020_3_1.png" /> 20 - 39<br />\
    <img src="styles/legend/Densit2020_3_2.png" /> 39 - 59<br />\
    <img src="styles/legend/Densit2020_3_3.png" /> 59 - 79<br />\
    <img src="styles/legend/Densit2020_3_4.png" /> 79 - 99<br />' });
var format_Densit2016_4 = new ol.format.GeoJSON();
var features_Densit2016_4 = format_Densit2016_4.readFeatures(json_Densit2016_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densit2016_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densit2016_4.addFeatures(features_Densit2016_4);
var lyr_Densit2016_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densit2016_4, 
                style: style_Densit2016_4,
                popuplayertitle: 'Densité 2016',
                interactive: true,
    title: 'Densité 2016<br />\
    <img src="styles/legend/Densit2016_4_0.png" /> 0 - 18<br />\
    <img src="styles/legend/Densit2016_4_1.png" /> 18 - 35<br />\
    <img src="styles/legend/Densit2016_4_2.png" /> 35 - 53<br />\
    <img src="styles/legend/Densit2016_4_3.png" /> 53 - 70<br />\
    <img src="styles/legend/Densit2016_4_4.png" /> 70 - 88<br />' });
var format_Localit_5 = new ol.format.GeoJSON();
var features_Localit_5 = format_Localit_5.readFeatures(json_Localit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localit_5.addFeatures(features_Localit_5);
var lyr_Localit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localit_5, 
                style: style_Localit_5,
                popuplayertitle: 'Localité',
                interactive: true,
                title: '<img src="styles/legend/Localit_5.png" /> Localité'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CommunedeKaya_1.setVisible(true);lyr_Densit2024_2.setVisible(true);lyr_Densit2020_3.setVisible(true);lyr_Densit2016_4.setVisible(true);lyr_Localit_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CommunedeKaya_1,lyr_Densit2024_2,lyr_Densit2020_3,lyr_Densit2016_4,lyr_Localit_5];
lyr_CommunedeKaya_1.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Densit2024_2.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Densit2020_3.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Densit2016_4.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Localit_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Statut': 'Statut', 'CLcommune': 'CLcommune', 'CLprovince': 'CLprovince', 'CLregion': 'CLregion', 'EQposte': 'EQposte', 'EQecole': 'EQecole', 'EQgendarme': 'EQgendarme', 'EQpolice': 'EQpolice', 'EQdouane': 'EQdouane', 'EQcontrole': 'EQcontrole', 'EQhopital': 'EQhopital', 'EQsanitair': 'EQsanitair', 'EQAnimiste': 'EQAnimiste', 'EQChretien': 'EQChretien', 'EQMusulman': 'EQMusulman', 'EQLCAn': 'EQLCAn', 'EQLCCh': 'EQLCCh', 'EQLCMu': 'EQLCMu', 'Marche': 'Marche', 'Code_ADM': 'Code_ADM', 'Code_GEO': 'Code_GEO', 'Nom_admin': 'Nom_admin', 'lat': 'lat', 'long': 'long', 'POPULATION': 'POPULATION', });
lyr_CommunedeKaya_1.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Densit2024_2.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Densit2020_3.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Densit2016_4.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Localit_5.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'Statut': 'TextEdit', 'CLcommune': 'Range', 'CLprovince': 'Range', 'CLregion': 'Range', 'EQposte': 'Range', 'EQecole': 'Range', 'EQgendarme': 'Range', 'EQpolice': 'Range', 'EQdouane': 'Range', 'EQcontrole': 'Range', 'EQhopital': 'Range', 'EQsanitair': 'Range', 'EQAnimiste': 'Range', 'EQChretien': 'Range', 'EQMusulman': 'Range', 'EQLCAn': 'Range', 'EQLCCh': 'Range', 'EQLCMu': 'Range', 'Marche': 'Range', 'Code_ADM': 'TextEdit', 'Code_GEO': 'TextEdit', 'Nom_admin': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'POPULATION': 'TextEdit', });
lyr_CommunedeKaya_1.set('fieldLabels', {'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Densit2024_2.set('fieldLabels', {'VALUE': 'no label', });
lyr_Densit2020_3.set('fieldLabels', {'VALUE': 'no label', });
lyr_Densit2016_4.set('fieldLabels', {'VALUE': 'no label', });
lyr_Localit_5.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Statut': 'no label', 'CLcommune': 'no label', 'CLprovince': 'no label', 'CLregion': 'no label', 'EQposte': 'no label', 'EQecole': 'no label', 'EQgendarme': 'no label', 'EQpolice': 'no label', 'EQdouane': 'no label', 'EQcontrole': 'no label', 'EQhopital': 'no label', 'EQsanitair': 'no label', 'EQAnimiste': 'no label', 'EQChretien': 'no label', 'EQMusulman': 'no label', 'EQLCAn': 'no label', 'EQLCCh': 'no label', 'EQLCMu': 'no label', 'Marche': 'no label', 'Code_ADM': 'no label', 'Code_GEO': 'no label', 'Nom_admin': 'no label', 'lat': 'no label', 'long': 'no label', 'POPULATION': 'no label', });
lyr_Localit_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});