/**
 * Pilot: Natuurbeek (placeholder)
 *
 * Voeg GeoJSON data toe in data/pilots/natuurbeek/ om dit pilotgebied te activeren.
 */
window.PILOTS = window.PILOTS || {};
window.PILOTS['natuurbeek'] = {
  name: 'Natuurbeek',
  mapCenter: [51.32, 5.85],   // Pas aan naar werkelijke locatie
  mapZoom: 18,

  layers: {
    groen: {
      label: 'Groenobjecten',
      color: 'var(--g)',
      src: 'data/pilots/natuurbeek/groen.geojson',
      data: null
    },
    water: {
      label: 'Waterobjecten',
      color: 'var(--b)',
      src: 'data/pilots/natuurbeek/water.geojson',
      data: null
    },
    traject: {
      label: 'Trajecten',
      color: 'var(--p)',
      src: 'data/pilots/natuurbeek/traject.geojson',
      data: null
    }
  },

  werkzaamheden: [],
  registraties: []
};
