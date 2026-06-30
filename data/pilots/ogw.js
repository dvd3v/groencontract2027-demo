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

  trajecten: [
    { guid: 'tr-ogw-001', traject_code: 'OGW-001', naam_traject: 'OGW beek segment Noord' }
  ],

  regimes: {
    M8: {
      regime_code: 'M8',
      regime_naam: 'Maaien watergangprofiel habitatbenadering',
      categorie: 'Maaien',
      werkinstructie: 'Watergangprofiel volgens habitatbenadering maaien. Zijde en bodempercentage bepalen welk deel wordt geraakt; maaisel afvoeren conform afvoerkeuze.'
    },
    M15: {
      regime_code: 'M15',
      regime_naam: 'Vrijmaaien kunstwerken',
      categorie: 'Maaien',
      werkinstructie: 'Kunstwerken, in- en uitstroomvoorzieningen vrijmaken en maaien, inclusief directe bereikbaarheid voor inspectie en onderhoud.'
    }
  },

  // Maatregelen — GC2027 datamodel (1:N relatie via traject_guid)
  maatregelen: [
    {
      traject_guid: 'tr-ogw-001',
      maatregel_guid: 'mt-ogw-001',
      wl_regime: 'M8',
      wl_werkperiode: 13,
      wl_zijde: 'Links',
      wl_bodempercentage: '75%',
      wl_afvoeren: 'Direct afvoeren',
      wl_uitvoeringswijze_maaien: 'Maaien',
      wl_soortspecifiek: 'Ja',
      wl_locatiebezoek: 'Ja',
      wl_planstatus: 'Gereed voor uitvoering',
      wl_toelichting: 'Eerste habitatronde: linker talud en bodemstrook uitvoeren, rechterzijde sparen.',
      wl_steekproef_status: 'Nog niet gecontroleerd',
      wl_acceptatie_status: 'Nog niet aangeboden',
      anm_status_maatregel: 'Gepland',
      anm_periode_gepland: 13,
      anm_datum_uitvoering: '',
      anm_opmerking: ''
    },
    {
      traject_guid: 'tr-ogw-001',
      maatregel_guid: 'mt-ogw-002',
      wl_regime: 'M8',
      wl_werkperiode: 17,
      wl_zijde: 'Rechts',
      wl_bodempercentage: '75%',
      wl_afvoeren: 'Na 24 uur afvoeren',
      wl_uitvoeringswijze_maaien: 'Maaien',
      wl_soortspecifiek: 'Ja',
      wl_locatiebezoek: 'Nee',
      wl_planstatus: 'Concept',
      wl_toelichting: 'Tweede habitatronde: zijde wisselen ten opzichte van P13.',
      wl_steekproef_status: 'Nog niet gecontroleerd',
      wl_acceptatie_status: 'Nog niet aangeboden',
      anm_status_maatregel: 'Gepland',
      anm_periode_gepland: 17,
      anm_datum_uitvoering: '',
      anm_opmerking: ''
    },
    {
      traject_guid: 'tr-ogw-001',
      maatregel_guid: 'mt-ogw-003',
      wl_regime: 'M15',
      wl_werkperiode: 12,
      wl_zijde: 'N.v.t.',
      wl_bodempercentage: 'N.v.t.',
      wl_afvoeren: 'Direct afvoeren',
      wl_uitvoeringswijze_maaien: 'Handmatig',
      wl_soortspecifiek: 'Nee',
      wl_locatiebezoek: 'Ja',
      wl_planstatus: 'Gereed voor uitvoering',
      wl_toelichting: 'Kunstwerken en inspectiepunten vrijmaaien voor bereikbaarheid.',
      wl_steekproef_status: 'Nog niet gecontroleerd',
      wl_acceptatie_status: 'Nog niet aangeboden',
      anm_status_maatregel: 'Gepland',
      anm_periode_gepland: 12,
      anm_datum_uitvoering: '',
      anm_opmerking: ''
    }
  ],

  // Aannemersregistratie (persistent via localStorage)
  registraties: []
};
