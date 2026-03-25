/**
 * Pilot: Waterbuffer
 *
 * Metadata en instellingen voor het pilotgebied Waterbuffer.
 * GeoJSON data wordt geladen vanuit aparte .geojson bestanden.
 * Bronbestanden: groenobjecten_waterbuffer_total.geojson, waterobjecten_waterbuffer.geojson,
 *               verhardingsobjecten_waterbuffer.geojson, trajecten_waterbuffer.geojson
 */
window.PILOTS = window.PILOTS || {};
window.PILOTS['waterbuffer'] = {
  name: 'Buffer',
  mapCenter: [50.8976, 5.7868],
  mapZoom: 19,

  // Beschikbare kaartlagen — GeoJSON via src, data wordt async geladen
  layers: {
    groen: {
      label: 'Groenobjecten',
      color: 'var(--g)',
      src: 'data/pilots/waterbuffer/groen.geojson',
      data: null
    },
    water: {
      label: 'Waterobjecten',
      color: 'var(--b)',
      src: 'data/pilots/waterbuffer/water.geojson',
      data: null
    },
    verharding: {
      label: 'Verhardingsobjecten',
      color: 'var(--o)',
      src: 'data/pilots/waterbuffer/verharding.geojson',
      data: null
    },
    traject: {
      label: 'Trajecten',
      color: 'var(--p)',
      src: 'data/pilots/waterbuffer/traject.geojson',
      data: null
    }
  },

  // Werkzaamheden — Traject_Werkzaamheid records (1:N relatie met traject)
  werkzaamheden: [
    // Buffer Groot (WL-TR-WB1) — standaard onderhoud
    { Werk_ID:'W-WB-001', Traject_ID:'WL-TR-WB1', Handeling:'Maaien',     Werkwijze:'Sinusbeheer', Doel:'Gehele traject',        Zijde:'N.v.t',  Periode:1, Percentage:33, Afvoer:true },
    { Werk_ID:'W-WB-002', Traject_ID:'WL-TR-WB1', Handeling:'Opschonen',     Werkwijze:'Standaard', Doel:'Natte Bodem',  Zijde:'N.v.t.', Periode:1, Percentage:100, Afvoer:true },
    // Buffer Groot — constructie-onderhoud (2x/jaar)
    { Werk_ID:'W-WB-003', Traject_ID:'WL-TR-WB1', Handeling:'Vrijmaaien', Werkwijze:'Standaard', Doel:'Hek',  Zijde:'N.v.t.', Periode:1, Percentage:100, Afvoer:false },
    { Werk_ID:'W-WB-004', Traject_ID:'WL-TR-WB1', Handeling:'Vrijmaaien', Werkwijze:'Standaard', Doel:'Constructie',  Zijde:'N.v.t.', Periode:2, Percentage:100, Afvoer:false },
    { Werk_ID:'W-WB-004', Traject_ID:'WL-TR-WB1', Handeling:'Uitdunnen', Werkwijze:'Standaard', Doel:'Struweel',  Zijde:'N.v.t.', Periode:4, Percentage:0, Afvoer:false },
    { Werk_ID:'W-WB-004', Traject_ID:'WL-TR-WB1', Handeling:'Snoeien', Werkwijze:'Standaard', Doel:'Haag',  Zijde:'N.v.t.', Periode:4, Percentage:0, Afvoer:false },
    // Buffer Klein (WL-TR-WB2) — standaard onderhoud
    { Werk_ID:'W-WB-009', Traject_ID:'WL-TR-WB2', Handeling:'Maaien',     Werkwijze:'Sinusbeheer',         Doel:'Gehele traject',        Zijde:'N.v.t',  Periode:1, Percentage:33, Afvoer:true  },
    { Werk_ID:'W-WB-010', Traject_ID:'WL-TR-WB2', Handeling:'Opschonen',     Werkwijze:'Standaard',         Doel:'Natte Bodem',  Zijde:'N.v.t.', Periode:1, Percentage:100, Afvoer:true  },
    // Buffer Klein — constructie-onderhoud
    { Werk_ID:'W-WB-011', Traject_ID:'WL-TR-WB2', Handeling:'Vrijmaaien', Werkwijze:'Standaard',         Doel:'Hek',  Zijde:'N.v.t.', Periode:1, Percentage:100, Afvoer:false },
  ],

  // Aannemersregistratie (persistent via localStorage)
  registraties: []
};
