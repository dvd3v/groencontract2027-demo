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

  trajecten: [
    { guid: 'tr-wb-001', traject_code: 'WB-001', naam_traject: 'Buffer Groot' },
    { guid: 'tr-wb-002', traject_code: 'WB-002', naam_traject: 'Buffer Klein' }
  ],

  regimes: {
    M13: {
      regime_code: 'M13',
      regime_naam: 'Maaien regenwaterbuffer habitatbenadering',
      categorie: 'Maaien',
      werkinstructie: 'Bodem volledig maaien; overige terreindelen roterend sparen. Binnen 15 maart tot 15 juli 50% maaien, daarbuiten 25%, telkens een ander deel.'
    },
    M15: {
      regime_code: 'M15',
      regime_naam: 'Vrijmaaien in- en uitstroomvoorziening',
      categorie: 'Maaien',
      werkinstructie: 'In- en uitstroomvoorziening vrijmaken en maaien, inclusief poorten en toegangspaden. Maaisel afvoeren conform afvoerkeuze.'
    },
    M16: {
      regime_code: 'M16',
      regime_naam: 'Vrijmaaien afrasteringen en poorten',
      categorie: 'Maaien',
      werkinstructie: 'Afrasteringen, hekken en poorten rondom de buffer vrijhouden zodat toegang en inspectie mogelijk blijven.'
    },
    O5: {
      regime_code: 'O5',
      regime_naam: 'Begrazen',
      categorie: 'Overig',
      werkinstructie: 'Met begrazing de vegetatie kort houden; voor buffers in de periode 1 april tot 15 november. Begrazingsdruk locatiegericht bepalen.'
    }
  },

  // Maatregelen — GC2027 datamodel (1:N relatie via traject_guid)
  maatregelen: [
    {
      traject_guid: 'tr-wb-001',
      maatregel_guid: 'mt-wb-001',
      wl_regime: 'M13',
      wl_werkperiode: 10,
      wl_zijde: 'N.v.t.',
      wl_bodempercentage: '100%',
      wl_afvoeren: 'Direct afvoeren',
      wl_uitvoeringswijze_maaien: 'Maaien',
      wl_soortspecifiek: 'Ja',
      wl_locatiebezoek: 'Ja',
      wl_planstatus: 'Gereed voor uitvoering',
      wl_toelichting: 'Waterbuffer maaien: bodem volledig, droge delen gefaseerd sparen.',
      wl_steekproef_status: 'Nog niet gecontroleerd',
      wl_acceptatie_status: 'Nog niet aangeboden',
      anm_status_maatregel: 'Gepland',
      anm_periode_gepland: 10,
      anm_datum_uitvoering: '',
      anm_opmerking: ''
    },
    {
      traject_guid: 'tr-wb-001',
      maatregel_guid: 'mt-wb-002',
      wl_regime: 'M16',
      wl_werkperiode: 12,
      wl_zijde: 'Beide zijden',
      wl_bodempercentage: 'N.v.t.',
      wl_afvoeren: 'Laten liggen',
      wl_uitvoeringswijze_maaien: 'Handmatig',
      wl_soortspecifiek: 'Nee',
      wl_locatiebezoek: 'Nee',
      wl_planstatus: 'Gereed voor uitvoering',
      wl_toelichting: 'Hekken en poorten over volledige omtrek vrijhouden.',
      wl_steekproef_status: 'Nog niet gecontroleerd',
      wl_acceptatie_status: 'Nog niet aangeboden',
      anm_status_maatregel: 'Gepland',
      anm_periode_gepland: 12,
      anm_datum_uitvoering: '',
      anm_opmerking: ''
    },
    {
      traject_guid: 'tr-wb-001',
      maatregel_guid: 'mt-wb-003',
      wl_regime: 'O5',
      wl_werkperiode: 18,
      wl_zijde: 'N.v.t.',
      wl_bodempercentage: 'N.v.t.',
      wl_afvoeren: 'N.v.t.',
      wl_uitvoeringswijze_maaien: 'N.v.t.',
      wl_soortspecifiek: 'Ja',
      wl_locatiebezoek: 'Ja',
      wl_planstatus: 'Concept',
      wl_toelichting: 'Nazomerbegrazing na de hoofdmaaironde, buiten de eerste maaiperiode.',
      wl_steekproef_status: 'Nog niet gecontroleerd',
      wl_acceptatie_status: 'Nog niet aangeboden',
      anm_status_maatregel: 'Gepland',
      anm_periode_gepland: 18,
      anm_datum_uitvoering: '',
      anm_opmerking: ''
    },
    {
      traject_guid: 'tr-wb-002',
      maatregel_guid: 'mt-wb-004',
      wl_regime: 'M13',
      wl_werkperiode: 14,
      wl_zijde: 'N.v.t.',
      wl_bodempercentage: '100%',
      wl_afvoeren: 'Na 24 uur afvoeren',
      wl_uitvoeringswijze_maaien: 'Maaien',
      wl_soortspecifiek: 'Ja',
      wl_locatiebezoek: 'Nee',
      wl_planstatus: 'Gereed voor uitvoering',
      wl_toelichting: 'Kleine buffer volledig maaien; vegetatie-eiland op droge rand sparen.',
      wl_steekproef_status: 'Nog niet gecontroleerd',
      wl_acceptatie_status: 'Nog niet aangeboden',
      anm_status_maatregel: 'Gepland',
      anm_periode_gepland: 14,
      anm_datum_uitvoering: '',
      anm_opmerking: ''
    },
    {
      traject_guid: 'tr-wb-002',
      maatregel_guid: 'mt-wb-005',
      wl_regime: 'M15',
      wl_werkperiode: 15,
      wl_zijde: 'N.v.t.',
      wl_bodempercentage: 'N.v.t.',
      wl_afvoeren: 'Direct afvoeren',
      wl_uitvoeringswijze_maaien: 'Handmatig',
      wl_soortspecifiek: 'Nee',
      wl_locatiebezoek: 'Ja',
      wl_planstatus: 'Gereed voor uitvoering',
      wl_toelichting: 'Inlaat, uitlaat en toegangspad vrijmaken.',
      wl_steekproef_status: 'Nog niet gecontroleerd',
      wl_acceptatie_status: 'Nog niet aangeboden',
      anm_status_maatregel: 'Gepland',
      anm_periode_gepland: 15,
      anm_datum_uitvoering: '',
      anm_opmerking: ''
    },
    {
      traject_guid: 'tr-wb-002',
      maatregel_guid: 'mt-wb-006',
      wl_regime: 'O5',
      wl_werkperiode: 20,
      wl_zijde: 'N.v.t.',
      wl_bodempercentage: 'N.v.t.',
      wl_afvoeren: 'N.v.t.',
      wl_uitvoeringswijze_maaien: 'N.v.t.',
      wl_soortspecifiek: 'Ja',
      wl_locatiebezoek: 'Ja',
      wl_planstatus: 'Concept',
      wl_toelichting: 'Korte nabegrazing in oktober om opslag te remmen.',
      wl_steekproef_status: 'Nog niet gecontroleerd',
      wl_acceptatie_status: 'Nog niet aangeboden',
      anm_status_maatregel: 'Gepland',
      anm_periode_gepland: 20,
      anm_datum_uitvoering: '',
      anm_opmerking: ''
    }
  ],

  // Aannemersregistratie (persistent via localStorage)
  registraties: []
};
