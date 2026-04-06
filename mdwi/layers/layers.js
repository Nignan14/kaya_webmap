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
var lyr_NDWI2024_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDWI 2024<br />\
    <img src="styles/legend/NDWI2024_2_0.png" /> -0,3937<br />\
    <img src="styles/legend/NDWI2024_2_1.png" /> -0,3276<br />\
    <img src="styles/legend/NDWI2024_2_2.png" /> -0,2616<br />\
    <img src="styles/legend/NDWI2024_2_3.png" /> -0,1955<br />\
    <img src="styles/legend/NDWI2024_2_4.png" /> -0,1294<br />\
    <img src="styles/legend/NDWI2024_2_5.png" /> -0,0634<br />\
    <img src="styles/legend/NDWI2024_2_6.png" /> 0,0027<br />\
    <img src="styles/legend/NDWI2024_2_7.png" /> 0,0637<br />\
    <img src="styles/legend/NDWI2024_2_8.png" /> 0,1145<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDWI2024_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-149540.000000, 1461884.122971, -105460.000000, 1495631.290670]
        })
    });
var lyr_NDWI2016_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDWI 2016<br />\
    <img src="styles/legend/NDWI2016_3_0.png" /> -0,5589<br />\
    <img src="styles/legend/NDWI2016_3_1.png" /> -0,3630<br />\
    <img src="styles/legend/NDWI2016_3_2.png" /> -0,1671<br />\
    <img src="styles/legend/NDWI2016_3_3.png" /> 0,0288<br />\
    <img src="styles/legend/NDWI2016_3_4.png" /> 0,2247<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDWI2016_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-149540.000000, 1461884.122971, -105460.000000, 1495631.290670]
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

lyr_OSMStandard_0.setVisible(true);lyr_CommunedeKaya_1.setVisible(true);lyr_NDWI2024_2.setVisible(true);lyr_NDWI2016_3.setVisible(true);lyr_Localit_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CommunedeKaya_1,lyr_NDWI2024_2,lyr_NDWI2016_3,lyr_Localit_4];
lyr_CommunedeKaya_1.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Localit_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Statut': 'Statut', 'CLcommune': 'CLcommune', 'CLprovince': 'CLprovince', 'CLregion': 'CLregion', 'EQposte': 'EQposte', 'EQecole': 'EQecole', 'EQgendarme': 'EQgendarme', 'EQpolice': 'EQpolice', 'EQdouane': 'EQdouane', 'EQcontrole': 'EQcontrole', 'EQhopital': 'EQhopital', 'EQsanitair': 'EQsanitair', 'EQAnimiste': 'EQAnimiste', 'EQChretien': 'EQChretien', 'EQMusulman': 'EQMusulman', 'EQLCAn': 'EQLCAn', 'EQLCCh': 'EQLCCh', 'EQLCMu': 'EQLCMu', 'Marche': 'Marche', 'Code_ADM': 'Code_ADM', 'Code_GEO': 'Code_GEO', 'Nom_admin': 'Nom_admin', 'lat': 'lat', 'long': 'long', 'POPULATION': 'POPULATION', });
lyr_CommunedeKaya_1.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Localit_4.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'Statut': 'TextEdit', 'CLcommune': 'Range', 'CLprovince': 'Range', 'CLregion': 'Range', 'EQposte': 'Range', 'EQecole': 'Range', 'EQgendarme': 'Range', 'EQpolice': 'Range', 'EQdouane': 'Range', 'EQcontrole': 'Range', 'EQhopital': 'Range', 'EQsanitair': 'Range', 'EQAnimiste': 'Range', 'EQChretien': 'Range', 'EQMusulman': 'Range', 'EQLCAn': 'Range', 'EQLCCh': 'Range', 'EQLCMu': 'Range', 'Marche': 'Range', 'Code_ADM': 'TextEdit', 'Code_GEO': 'TextEdit', 'Nom_admin': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'POPULATION': 'TextEdit', });
lyr_CommunedeKaya_1.set('fieldLabels', {'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Localit_4.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Statut': 'no label', 'CLcommune': 'no label', 'CLprovince': 'no label', 'CLregion': 'no label', 'EQposte': 'no label', 'EQecole': 'no label', 'EQgendarme': 'no label', 'EQpolice': 'no label', 'EQdouane': 'no label', 'EQcontrole': 'no label', 'EQhopital': 'no label', 'EQsanitair': 'no label', 'EQAnimiste': 'no label', 'EQChretien': 'no label', 'EQMusulman': 'no label', 'EQLCAn': 'no label', 'EQLCCh': 'no label', 'EQLCMu': 'no label', 'Marche': 'no label', 'Code_ADM': 'no label', 'Code_GEO': 'no label', 'Nom_admin': 'no label', 'lat': 'no label', 'long': 'no label', 'POPULATION': 'no label', });
lyr_Localit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});