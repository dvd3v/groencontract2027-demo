/**
 * Pilot: Waterkering (placeholder)
 *
 * Voeg GeoJSON data toe in data/pilots/waterkering/ om dit pilotgebied te activeren.
 */
window.PILOTS = window.PILOTS || {};
window.PILOTS['waterkering'] = {
  name: 'Kering',
  mapCenter: [51.32, 5.85],
  mapZoom: 18,

  layers: {
    groen: {
      label: 'Groenobjecten',
      color: 'var(--g)',
      src: 'data/pilots/waterkering/groen.geojson',
      data: null
    },
    water: {
      label: 'Waterobjecten',
      color: 'var(--b)',
      src: 'data/pilots/waterkering/water.geojson',
      data: null
    },
    traject: {
      label: 'Trajecten',
      color: 'var(--p)',
      src: 'data/pilots/waterkering/traject.geojson',
      data: null
    }
  },

  werkzaamheden: [],
  registraties: []
};
