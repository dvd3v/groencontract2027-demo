/**
 * Pilot: Waterkering (placeholder)
 *
 * Voeg hier GeoJSON data toe voor het pilotgebied Waterkering.
 * Kopieer de structuur van cultuurbeek.js als voorbeeld.
 */
window.PILOTS = window.PILOTS || {};
window.PILOTS['waterkering'] = {
  name: 'Kering',
  mapCenter: [51.32, 5.85],
  mapZoom: 16,

  layers: {
    groen: {
      label: 'Groenobjecten',
      color: 'var(--g)',
      data: { type: 'FeatureCollection', features: [] }
    },
    water: {
      label: 'Waterobjecten',
      color: 'var(--b)',
      data: { type: 'FeatureCollection', features: [] }
    },
    traject: {
      label: 'Jaarplan',
      color: 'var(--p)',
      data: { type: 'FeatureCollection', features: [] }
    }
  }
};
