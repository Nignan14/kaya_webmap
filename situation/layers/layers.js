var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
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
                interactive: false,
                title: '<img src="styles/legend/CommunedeKaya_1.png" /> Commune de Kaya'
            });
var format_Plandeau_2 = new ol.format.GeoJSON();
var features_Plandeau_2 = format_Plandeau_2.readFeatures(json_Plandeau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plandeau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plandeau_2.addFeatures(features_Plandeau_2);
var lyr_Plandeau_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plandeau_2, 
                style: style_Plandeau_2,
                popuplayertitle: 'Plan d\'eau',
                interactive: true,
                title: '<img src="styles/legend/Plandeau_2.png" /> Plan d\'eau'
            });
var format_Courdeau_3 = new ol.format.GeoJSON();
var features_Courdeau_3 = format_Courdeau_3.readFeatures(json_Courdeau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courdeau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courdeau_3.addFeatures(features_Courdeau_3);
var lyr_Courdeau_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courdeau_3, 
                style: style_Courdeau_3,
                popuplayertitle: 'Cour d\'eau',
                interactive: false,
                title: '<img src="styles/legend/Courdeau_3.png" /> Cour d\'eau'
            });
var format_Piste_4 = new ol.format.GeoJSON();
var features_Piste_4 = format_Piste_4.readFeatures(json_Piste_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piste_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piste_4.addFeatures(features_Piste_4);
var lyr_Piste_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piste_4, 
                style: style_Piste_4,
                popuplayertitle: 'Piste',
                interactive: false,
                title: '<img src="styles/legend/Piste_4.png" /> Piste'
            });
var format_Route_5 = new ol.format.GeoJSON();
var features_Route_5 = format_Route_5.readFeatures(json_Route_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_5.addFeatures(features_Route_5);
var lyr_Route_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_5, 
                style: style_Route_5,
                popuplayertitle: 'Route',
                interactive: false,
    title: 'Route<br />\
    <img src="styles/legend/Route_5_0.png" /> <br />\
    <img src="styles/legend/Route_5_1.png" /> DEPARTEMENTALE<br />\
    <img src="styles/legend/Route_5_2.png" /> NATIONALE<br />\
    <img src="styles/legend/Route_5_3.png" /> REGIONALE<br />' });
var format_Localit_6 = new ol.format.GeoJSON();
var features_Localit_6 = format_Localit_6.readFeatures(json_Localit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localit_6.addFeatures(features_Localit_6);
var lyr_Localit_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localit_6, 
                style: style_Localit_6,
                popuplayertitle: 'Localité',
                interactive: true,
                title: '<img src="styles/legend/Localit_6.png" /> Localité'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CommunedeKaya_1.setVisible(true);lyr_Plandeau_2.setVisible(true);lyr_Courdeau_3.setVisible(true);lyr_Piste_4.setVisible(true);lyr_Route_5.setVisible(true);lyr_Localit_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CommunedeKaya_1,lyr_Plandeau_2,lyr_Courdeau_3,lyr_Piste_4,lyr_Route_5,lyr_Localit_6];
lyr_CommunedeKaya_1.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Plandeau_2.set('fieldAliases', {'Regime': 'Regime', 'Type': 'Type', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Courdeau_3.set('fieldAliases', {'Regime': 'Regime', 'Type': 'Type', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Piste_4.set('fieldAliases', {'Type': 'Type', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Route_5.set('fieldAliases', {'Nom': 'Nom', 'Cl_admin': 'Cl_admin', 'Revetement': 'Revetement', 'Niveau': 'Niveau', 'Praticab': 'Praticab', 'Nb_chausse': 'Nb_chausse', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Localit_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Statut': 'Statut', 'CLcommune': 'CLcommune', 'CLprovince': 'CLprovince', 'CLregion': 'CLregion', 'EQposte': 'EQposte', 'EQecole': 'EQecole', 'EQgendarme': 'EQgendarme', 'EQpolice': 'EQpolice', 'EQdouane': 'EQdouane', 'EQcontrole': 'EQcontrole', 'EQhopital': 'EQhopital', 'EQsanitair': 'EQsanitair', 'EQAnimiste': 'EQAnimiste', 'EQChretien': 'EQChretien', 'EQMusulman': 'EQMusulman', 'EQLCAn': 'EQLCAn', 'EQLCCh': 'EQLCCh', 'EQLCMu': 'EQLCMu', 'Marche': 'Marche', 'Code_ADM': 'Code_ADM', 'Code_GEO': 'Code_GEO', 'Nom_admin': 'Nom_admin', 'lat': 'lat', 'long': 'long', 'POPULATION': 'POPULATION', });
lyr_CommunedeKaya_1.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Plandeau_2.set('fieldImages', {'Regime': 'TextEdit', 'Type': 'TextEdit', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Courdeau_3.set('fieldImages', {'Regime': 'TextEdit', 'Type': 'TextEdit', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Piste_4.set('fieldImages', {'Type': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Route_5.set('fieldImages', {'Nom': 'TextEdit', 'Cl_admin': 'TextEdit', 'Revetement': 'Range', 'Niveau': 'Range', 'Praticab': 'TextEdit', 'Nb_chausse': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_Localit_6.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'Statut': 'TextEdit', 'CLcommune': 'Range', 'CLprovince': 'Range', 'CLregion': 'Range', 'EQposte': 'Range', 'EQecole': 'Range', 'EQgendarme': 'Range', 'EQpolice': 'Range', 'EQdouane': 'Range', 'EQcontrole': 'Range', 'EQhopital': 'Range', 'EQsanitair': 'Range', 'EQAnimiste': 'Range', 'EQChretien': 'Range', 'EQMusulman': 'Range', 'EQLCAn': 'Range', 'EQLCCh': 'Range', 'EQLCMu': 'Range', 'Marche': 'Range', 'Code_ADM': 'TextEdit', 'Code_GEO': 'TextEdit', 'Nom_admin': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'POPULATION': 'TextEdit', });
lyr_CommunedeKaya_1.set('fieldLabels', {'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Plandeau_2.set('fieldLabels', {'Regime': 'no label', 'Type': 'no label', 'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Courdeau_3.set('fieldLabels', {'Regime': 'no label', 'Type': 'no label', 'Nom': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Piste_4.set('fieldLabels', {'Type': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Route_5.set('fieldLabels', {'Nom': 'no label', 'Cl_admin': 'no label', 'Revetement': 'no label', 'Niveau': 'no label', 'Praticab': 'no label', 'Nb_chausse': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Localit_6.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Statut': 'no label', 'CLcommune': 'no label', 'CLprovince': 'no label', 'CLregion': 'no label', 'EQposte': 'no label', 'EQecole': 'no label', 'EQgendarme': 'no label', 'EQpolice': 'no label', 'EQdouane': 'no label', 'EQcontrole': 'no label', 'EQhopital': 'no label', 'EQsanitair': 'no label', 'EQAnimiste': 'no label', 'EQChretien': 'no label', 'EQMusulman': 'no label', 'EQLCAn': 'no label', 'EQLCCh': 'no label', 'EQLCMu': 'no label', 'Marche': 'no label', 'Code_ADM': 'no label', 'Code_GEO': 'no label', 'Nom_admin': 'no label', 'lat': 'no label', 'long': 'no label', 'POPULATION': 'no label', });
lyr_Localit_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});