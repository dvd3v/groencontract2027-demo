/**
 * Pilot: Omgevingsgericht water (OGW)
 *
 * Metadata en instellingen voor het pilotgebied Omgevingsgericht water.
 * GeoJSON data wordt geladen vanuit aparte .geojson bestanden.
 */
window.PILOTS = window.PILOTS || {};
window.PILOTS['ogw'] = {
  name: 'Omgevingsgericht water',
  mapCenter: [51.31975, 5.8493],
  mapZoom: 19,

  // Beschikbare kaartlagen — GeoJSON via src, data wordt async geladen
  layers: {
    groen: {
      label: 'Groenobjecten',
      color: 'var(--g)',
      src: 'data/pilots/ogw/groen.geojson',
      data: null
    },
    water: {
      label: 'Waterobjecten',
      color: 'var(--b)',
      src: 'data/pilots/ogw/water.geojson',
      data: null
    },
    traject: {
      label: 'Trajecten',
      color: 'var(--p)',
      src: 'data/pilots/ogw/traject.geojson',
      data: null
    }
  },

  // Werkzaamheden — Traject_Werkzaamheid records (1:N relatie met traject)
  werkzaamheden: [
    // OGW beek segment Noord — Sinusbeheer (15-juli regel, L/R-wisseling per periode)
    { Werk_ID:'W-OGW-001', Traject_ID:'WL-TR-OGW1', Handeling:'Maaien',     Werkwijze:'Habitatbenadering',       Doel:'Talud',       Zijde:'Links',  Periode:1, Percentage:100,  Afvoer:true  },
    { Werk_ID:'W-OGW-002', Traject_ID:'WL-TR-OGW1', Handeling:'Maaien',     Werkwijze:'Habitatbenadering',       Doel:'Talud',       Zijde:'Rechts', Periode:2, Percentage:100,  Afvoer:true  },
    { Werk_ID:'W-OGW-003', Traject_ID:'WL-TR-OGW1', Handeling:'Opschonen',  Werkwijze:'Standaard',         Doel:'Bodem',       Zijde:'N.v.t.', Periode:2, Percentage:100, Afvoer:true  },
    { Werk_ID:'W-OGW-006', Traject_ID:'WL-TR-OGW1', Handeling:'Maaien', Werkwijze:'Standaard',         Doel:'Werkpad',     Zijde:'N.v.t.', Periode:1, Percentage:100, Afvoer:false },
    { Werk_ID:'W-OGW-007', Traject_ID:'WL-TR-OGW1', Handeling:'Maaien', Werkwijze:'Sinusbeheer',         Doel:'Meterstrook',     Zijde:'Links', Periode:1, Percentage:33, Afvoer:false },
  ],

  // Aannemersregistratie (persistent via localStorage)
  registraties: []
};
