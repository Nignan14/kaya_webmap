var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
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
var lyr_Occupationdesterres2024_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Occupation des terres 2024<br />\
    <img src="styles/legend/Occupationdesterres2024_2_0.png" /> Plan d\'eau<br />\
    <img src="styles/legend/Occupationdesterres2024_2_1.png" /> Sol nu<br />\
    <img src="styles/legend/Occupationdesterres2024_2_2.png" /> Steppe arborée<br />\
    <img src="styles/legend/Occupationdesterres2024_2_3.png" /> Agglomération<br />\
    <img src="styles/legend/Occupationdesterres2024_2_4.png" /> Steppe arbustive<br />\
    <img src="styles/legend/Occupationdesterres2024_2_5.png" /> Zone de culture<br />\
    <img src="styles/legend/Occupationdesterres2024_2_6.png" /> Culture irriguée<br />\
    <img src="styles/legend/Occupationdesterres2024_2_7.png" /> Forêt galerie<br />\
    <img src="styles/legend/Occupationdesterres2024_2_8.png" /> Affleurement rocheux<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Occupationdesterres2024_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-149707.278150, 1461841.724485, -105283.316801, 1495667.403333]
        })
    });
var lyr_Occupationdesterres2016_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Occupation des terres 2016<br />\
    <img src="styles/legend/Occupationdesterres2016_3_0.png" /> Plan d\'eau<br />\
    <img src="styles/legend/Occupationdesterres2016_3_1.png" /> Sol nu<br />\
    <img src="styles/legend/Occupationdesterres2016_3_2.png" /> Steppe arborée<br />\
    <img src="styles/legend/Occupationdesterres2016_3_3.png" /> Agglomération<br />\
    <img src="styles/legend/Occupationdesterres2016_3_4.png" /> Steppe arbustive<br />\
    <img src="styles/legend/Occupationdesterres2016_3_5.png" /> Zone de culture<br />\
    <img src="styles/legend/Occupationdesterres2016_3_6.png" /> Culture irriguée<br />\
    <img src="styles/legend/Occupationdesterres2016_3_7.png" /> Forêt galerie<br />\
    <img src="styles/legend/Occupationdesterres2016_3_8.png" /> Affleurement rocheux<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Occupationdesterres2016_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-149707.278150, 1461841.724485, -105283.316801, 1495667.403333]
        })
    });
var format_Localit_4 = new ol.format.GeoJSON();
var features_Localit_4 = format_Localit_4.readFeatures(json_Localit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localit_4.addFeatures(features_Localit_4);
var lyr_Localit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localit_4, 
                style: style_Localit_4,
                popuplayertitle: 'Localité',
                interactive: true,
                title: '<img src="styles/legend/Localit_4.png" /> Localité'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CommunedeKaya_1.setVisible(true);lyr_Occupationdesterres2024_2.setVisible(true);lyr_Occupationdesterres2016_3.setVisible(true);lyr_Localit_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CommunedeKaya_1,lyr_Occupationdesterres2024_2,lyr_Occupationdesterres2016_3,lyr_Localit_4];
lyr_CommunedeKaya_1.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Localit_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Statut': 'Statut', 'CLcommune': 'CLcommune', 'CLprovince': 'CLprovince', 'CLregion': 'CLregion', 'EQposte': 'EQposte', 'EQecole': 'EQecole', 'EQgendarme': 'EQgendarme', 'EQpolice': 'EQpolice', 'EQdouane': 'EQdouane', 'EQcontrole': 'EQcontrole', 'EQhopital': 'EQhopital', 'EQsanitair': 'EQsanitair', 'EQAnimiste': 'EQAnimiste', 'EQChretien': 'EQChretien', 'EQMusulman': 'EQMusulman', 'EQLCAn': 'EQLCAn', 'EQLCCh': 'EQLCCh', 'EQLCMu': 'EQLCMu', 'Marche': 'Marche', 'Code_ADM': 'Code_ADM', 'Code_GEO': 'Code_GEO', 'Nom_admin': 'Nom_admin', 'lat': 'lat', 'long': 'long', 'POPULATION': 'POPULATION', });
lyr_CommunedeKaya_1.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Localit_4.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'Statut': 'TextEdit', 'CLcommune': 'Range', 'CLprovince': 'Range', 'CLregion': 'Range', 'EQposte': 'Range', 'EQecole': 'Range', 'EQgendarme': 'Range', 'EQpolice': 'Range', 'EQdouane': 'Range', 'EQcontrole': 'Range', 'EQhopital': 'Range', 'EQsanitair': 'Range', 'EQAnimiste': 'Range', 'EQChretien': 'Range', 'EQMusulman': 'Range', 'EQLCAn': 'Range', 'EQLCCh': 'Range', 'EQLCMu': 'Range', 'Marche': 'Range', 'Code_ADM': 'TextEdit', 'Code_GEO': 'TextEdit', 'Nom_admin': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'POPULATION': 'TextEdit', });
lyr_CommunedeKaya_1.set('fieldLabels', {'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Localit_4.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Statut': 'no label', 'CLcommune': 'no label', 'CLprovince': 'no label', 'CLregion': 'no label', 'EQposte': 'no label', 'EQecole': 'no label', 'EQgendarme': 'no label', 'EQpolice': 'no label', 'EQdouane': 'no label', 'EQcontrole': 'no label', 'EQhopital': 'no label', 'EQsanitair': 'no label', 'EQAnimiste': 'no label', 'EQChretien': 'no label', 'EQMusulman': 'no label', 'EQLCAn': 'no label', 'EQLCCh': 'no label', 'EQLCMu': 'no label', 'Marche': 'no label', 'Code_ADM': 'no label', 'Code_GEO': 'no label', 'Nom_admin': 'no label', 'lat': 'no label', 'long': 'no label', 'POPULATION': 'no label', });
lyr_Localit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});