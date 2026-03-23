/**
 * Pilot: Cultuurbeek
 *
 * GeoJSON data en instellingen voor het pilotgebied Cultuurbeek.
 * Bevat: groenobjecten, waterobjecten en trajecten (jaarplan).
 */
window.PILOTS = window.PILOTS || {};
window.PILOTS['cultuurbeek'] = {
  name: 'Cultuurbeek',
  mapCenter: [51.31975, 5.8493],
  mapZoom: 19,

  // Beschikbare kaartlagen voor deze pilot
  layers: {
    groen: {
      label: 'Groenobjecten',
      color: 'var(--g)',
      data: {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"GlobalID":1,"naam":"WL beek","trajectcode":"WL123","verschijningsvorm":"Schraalgrasland","ruimtelijke_context":"Talud","objecttype":"Gras- en kruidachtigen","functie":"Cultuurbeek","taludsteilte":"1 : 2"},"geometry":{"type":"MultiPolygon","coordinates":[[[[5.850797,51.320902],[5.850787,51.320902],[5.850232,51.320476],[5.849211,51.319685],[5.848349,51.319020],[5.848172,51.318881],[5.847786,51.318579],[5.847768,51.318566],[5.847763,51.318550],[5.847758,51.318553],[5.847747,51.318563],[5.847748,51.318571],[5.847770,51.318587],[5.848155,51.318889],[5.848332,51.319029],[5.849194,51.319694],[5.850215,51.320485],[5.850771,51.320910],[5.850800,51.320916],[5.850816,51.320912],[5.850805,51.320900],[5.850797,51.320902]]]]}},{"type":"Feature","properties":{"GlobalID":2,"naam":"WL beek","trajectcode":"WL123","verschijningsvorm":"Schraalgrasland","ruimtelijke_context":"Talud","objecttype":"Gras- en kruidachtigen","functie":"Cultuurbeek","taludsteilte":"1 : 2"},"geometry":{"type":"MultiPolygon","coordinates":[[[[5.850442,51.320606],[5.850809,51.320888],[5.850805,51.320900],[5.850816,51.320912],[5.850832,51.320891],[5.850826,51.320879],[5.850458,51.320598],[5.849753,51.320049],[5.849023,51.319485],[5.848916,51.319401],[5.848328,51.318940],[5.847835,51.318565],[5.847798,51.318542],[5.847785,51.318541],[5.847763,51.318550],[5.847777,51.318560],[5.847819,51.318573],[5.848312,51.318949],[5.848899,51.319409],[5.849007,51.319494],[5.849736,51.320057],[5.850442,51.320606]]]]}},{"type":"Feature","properties":{"GlobalID":3,"naam":"WL beek","trajectcode":"WL123","verschijningsvorm":"Schraalgrasland","objecttype":"Gras- en kruidachtigen","functie":"Cultuurbeek","is_werkpad":true},"geometry":{"type":"MultiPolygon","coordinates":[[[[5.850790,51.320921],[5.850800,51.320920],[5.850800,51.320916],[5.850771,51.320910],[5.850215,51.320485],[5.849194,51.319694],[5.848332,51.319029],[5.848155,51.318889],[5.847770,51.318587],[5.847748,51.318571],[5.847747,51.318563],[5.847756,51.318550],[5.847748,51.318553],[5.847740,51.318568],[5.847742,51.318572],[5.847764,51.318590],[5.848149,51.318892],[5.848326,51.319032],[5.849189,51.319697],[5.850210,51.320488],[5.850766,51.320914],[5.850790,51.320921]]]]}},{"type":"Feature","properties":{"GlobalID":4,"naam":"WL beek","trajectcode":"WL123","verschijningsvorm":"Schraalgrasland","objecttype":"Gras- en kruidachtigen","functie":"Cultuurbeek"},"geometry":{"type":"MultiPolygon","coordinates":[[[[5.848916,51.319401],[5.849023,51.319485],[5.849753,51.320049],[5.850458,51.320598],[5.850826,51.320879],[5.850832,51.320891],[5.850829,51.320904],[5.850834,51.320905],[5.850839,51.320892],[5.850836,51.320880],[5.850464,51.320595],[5.849758,51.320046],[5.849029,51.319482],[5.848334,51.318937],[5.847840,51.318561],[5.847808,51.318542],[5.847785,51.318536],[5.847768,51.318541],[5.847756,51.318550],[5.847763,51.318550],[5.847785,51.318541],[5.847798,51.318542],[5.847835,51.318565],[5.848328,51.318940],[5.848916,51.319401]]]]}}]}
    },
    water: {
      label: 'Waterobjecten',
      color: 'var(--b)',
      data: {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"GlobalID":1,"naam":"WL beek","trajectcode":"WL123","objecttype":"Watergang","verschijningsvorm":"Sloot","ruimtelijke_context":null,"functie":"Cultuurbeek","breedteklasse_watergang":2,"type_waterbodem":"Nat"},"geometry":{"type":"MultiPolygon","coordinates":[[[[5.850787,51.320902],[5.850797,51.320902],[5.850805,51.320900],[5.850811,51.320892],[5.850809,51.320888],[5.850442,51.320606],[5.849736,51.320057],[5.849007,51.319494],[5.848924,51.319429],[5.848899,51.319409],[5.848312,51.318949],[5.847819,51.318573],[5.847788,51.318554],[5.847777,51.318560],[5.847768,51.318566],[5.847786,51.318579],[5.848172,51.318881],[5.848349,51.319020],[5.849211,51.319685],[5.850232,51.320476],[5.850787,51.320902]]]]}}]}
    },
    traject: {
      label: 'Trajecten',
      color: 'var(--p)',
      data: {"type":"FeatureCollection","features":[
        {"type":"Feature","properties":{"Traject_ID":"WL-TR-1045","naam":"WL beek segment 12","code":"WL123"},"geometry":{"type":"MultiPolygon","coordinates":[[[[5.850829,51.320904],[5.850834,51.320905],[5.850839,51.320892],[5.850836,51.320880],[5.850464,51.320595],[5.849758,51.320046],[5.849029,51.319482],[5.848334,51.318937],[5.847840,51.318561],[5.847808,51.318542],[5.847756,51.318550],[5.847740,51.318568],[5.847742,51.318572],[5.847764,51.318590],[5.848149,51.318892],[5.848326,51.319032],[5.849189,51.319697],[5.850210,51.320488],[5.850766,51.320914],[5.850800,51.320920],[5.850800,51.320916],[5.850816,51.320912],[5.850829,51.320904]]]]}}
      ]}
    }
  },

  // Werkzaamheden — Traject_Werkzaamheid records (1:N relatie met traject)
  werkzaamheden: [
    // Ecologisch gefaseerd maaien (15-juli regel) — 4 records voor L/R-wisseling over even/oneven jaren
    { Werk_ID:'W-CB-001', Traject_ID:'WL-TR-1045', Handeling:'Maaien', Werkwijze:'Sinusbeheer', Doel:'Talud', Zijde:'Links',   Periode:1, Percentage:50, Afvoer:true },
    { Werk_ID:'W-CB-002', Traject_ID:'WL-TR-1045', Handeling:'Maaien', Werkwijze:'Sinusbeheer', Doel:'Talud', Zijde:'Rechts',  Periode:2, Percentage:50, Afvoer:true },
    { Werk_ID:'W-CB-003', Traject_ID:'WL-TR-1045', Handeling:'Maaien', Werkwijze:'Sinusbeheer', Doel:'Talud', Zijde:'Rechts',  Periode:1,   Percentage:50, Afvoer:true },
    { Werk_ID:'W-CB-004', Traject_ID:'WL-TR-1045', Handeling:'Maaien', Werkwijze:'Sinusbeheer', Doel:'Talud', Zijde:'Links',   Periode:2,   Percentage:50, Afvoer:true },
    // Watergang schonen
    { Werk_ID:'W-CB-005', Traject_ID:'WL-TR-1045', Handeling:'Opschonen',  Werkwijze:'Standaard',         Doel:'Bodem',       Zijde:'N.v.t.', Periode:2, Percentage:100, Afvoer:true  },
    // Vrijmaaien werkpad (voor machinale toegang)
    { Werk_ID:'W-CB-006', Traject_ID:'WL-TR-1045', Handeling:'Vrijmaaien', Werkwijze:'Standaard',         Doel:'Werkpad',     Zijde:'N.v.t.', Periode:1, Percentage:100, Afvoer:false },
    // Habitatbeheer berm — habitatbenadering, niet afvoeren
    { Werk_ID:'W-CB-007', Traject_ID:'WL-TR-1045', Handeling:'Maaien',     Werkwijze:'Habitatbenadering', Doel:'Berm',        Zijde:'Beide',  Periode:2, Percentage:40,  Afvoer:false },
    // Jaarlijkse inspectie constructies
    { Werk_ID:'W-CB-008', Traject_ID:'WL-TR-1045', Handeling:'Inspecteren',Werkwijze:'Standaard',         Doel:'Constructie', Zijde:'N.v.t.', Periode:1, Percentage:100, Afvoer:false }
  ],

  // Aannemersregistratie (persistent via localStorage)
  registraties: []
};
