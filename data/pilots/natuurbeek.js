/**
 * Pilot: Natuurbeek (placeholder)
 *
 * Voeg hier GeoJSON data toe voor het pilotgebied Natuurbeek.
 * Kopieer de structuur van ogw.js als voorbeeld.
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
      data: { type: 'FeatureCollection', features: [] }
    },
    water: {
      label: 'Waterobjecten',
      color: 'var(--b)',
      data: { type: 'FeatureCollection', features: [] }
    },
    traject: {
      label: 'Trajecten',
      color: 'var(--p)',
      data: { type: 'FeatureCollection', features: [] }
    }
  }
};
