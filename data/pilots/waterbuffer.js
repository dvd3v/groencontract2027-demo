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
  werkzaamheden: [],

  // Aannemersregistratie (persistent via localStorage)
  registraties: []
};
