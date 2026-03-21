/**
 * Gedeelde configuratie voor Groenbeheer Kaartlagen
 *
 * Bevat: domeinlijsten, kleurmappen, begrippen, regimes, drielagen-defaults, matrix-defaults.
 * Wijzig dit bestand om domeinwaarden, kleuren of begrippen aan te passen.
 */
window.APP_CONFIG = {

  // ── Domeinlijsten ──────────────────────────────────────────────────
  domains: {
    ruimtelijke_context: ['Talud','Boven Talud','Wegberm','Meterstrook','Bodem','Natte Bodem','Winterbed','Instroom Voorziening','Uitstroom Voorziening','Kruin'],
    functie: ['Cultuurbeek','Natuurbeek','Aanvoersloot','Omgevingsgericht water','Buffer','Bronbeek','Vispassage'],
    beheerder: ['Waterschap Limburg','Gemeente','Particulier','Rijkswaterstaat','Provincie'],
    is_werkpad: ['true','false'],
    type_waterbodem: ['Droog','Nat'],
    breedteklasse_watergang: ['1','2','3','4','5'],
    verschijningsvorm_water: ['Beek','Sloot','Poel','Ven','Plas'],
    fase_zijde: ['L','R']
  },

  // ── Kleurmappen per visualisatie-attribuut ─────────────────────────
  colorMaps: {
    objecttype: {
      'Gras- en kruidachtigen':'#16a34a','Bos':'#166534','Bosplantsoen':'#15803d',
      'Struweel':'#65a30d','Haag':'#84cc16','Moeras':'#a3e635',
      'Houtsingel':'#4d7c0f','Watergang':'#2563eb','Watervlakte':'#3b82f6'
    },
    verschijningsvorm: {
      'Schraalgrasland':'#22c55e','Rietvegetatie':'#84cc16','Zoomvegetatie':'#a3e635',
      'Ruige glanshaverhooilanden':'#4ade80','Glanshaverhooilanden op schrale bodem':'#16a34a',
      'Bloemrijk natte ruigte':'#86efac','Ruigte':'#eab308','Gazon extensief':'#bef264',
      'Dotterbloemhooiland (droge vorm)':'#a3e635','Dotterbloemhooiland (Natte vorm)':'#34d399',
      'Heischraal grasland':'#d9f99d','Kalkgrasland':'#fde68a','Pimpernelhooiland':'#fbbf24',
      'Orchidee\u00EBngrasland':'#f0abfc','Bos':'#166534','Bomen en struikvormers':'#15803d',
      'Struweel':'#65a30d','Geschoren haag':'#84cc16','Losse haag':'#a3e635',
      'Doorstroommoeras':'#0d9488','Houtsingel':'#4d7c0f','Sloot':'#3b82f6',
      'Beek':'#0ea5e9','Poel':'#06b6d4','Ven':'#67e8f9','Plas':'#22d3ee'
    },
    ruimtelijke_context: {
      'Talud':'#ea580c','Boven Talud':'#f97316','Wegberm':'#a3a3a3',
      'Meterstrook':'#d4d4d4','Bodem':'#78716c','Natte Bodem':'#0ea5e9',
      'Winterbed':'#7dd3fc','Instroom Voorziening':'#f59e0b',
      'Uitstroom Voorziening':'#fbbf24','Kruin':'#a16207'
    },
    functie: {
      'Cultuurbeek':'#0ea5e9','Natuurbeek':'#10b981','Aanvoersloot':'#6366f1',
      'Omgevingsgericht water':'#8b5cf6','Buffer':'#f59e0b',
      'Bronbeek':'#14b8a6','Vispassage':'#f43f5e'
    }
  },

  // ── Status kleuren (jaarplan) ──────────────────────────────────────
  statusColors: {
    gepland: '#7c3aed',
    in_uitvoering: '#d97706',
    uitgevoerd: '#16a34a',
    afgekeurd: '#dc2626'
  },

  // ── Begrippen / Glossary ───────────────────────────────────────────
  glossary: {
    "Uniek ID (GlobalID)":  {"d":"Systeemgegenereerde unieke code.","s":"GUID/ArcGIS","st":"Definitief","c":"Velden"},
    "Naam":                 {"d":"Naam watergang/traject","s":"WL","st":"Controleren","c":"Velden"},
    "Traject Code":         {"d":"Logische trajectcode","s":"WL","st":"Definitief","c":"Velden"},
    "Object Type":          {"d":"Hoofdklasse; bepaalt verschijningsvormen.","s":"IMBOR 2025","st":"Definitief","c":"Velden"},
    "Verschijningsvorm":    {"d":"Toplaag op basis van eigenschappen.","s":"IMBOR 2025","st":"Controleren","c":"Velden"},
    "Ruimtelijke Context":  {"d":"Omgeving/constructieve situatie.","s":"WL","st":"Controleren","c":"Velden"},
    "Functie":              {"d":"Functie watergang.","s":"WL","st":"Controleren","c":"Velden"},
    "Gras- en kruidachtigen":{"d":"Terrein met gras/kruidachtige vegetatie.","s":"IMBOR 2025","st":"Definitief","c":"Objecttypen"},
    "Watergang":            {"d":"Geul voor waterbeheersing.","s":"IMBOR 2025","st":"Definitief","c":"Objecttypen"},
    "Schraalgrasland":      {"d":"Droge, soortenrijke graslanden.","s":"WL","st":"Definitief","c":"Verschijningsvormen"},
    "Talud":                {"d":"Onder helling gelegen vlak.","s":"kennisbank","st":"Controleren","c":"Ruimtelijke Context"},
    "Sloot":                {"d":"Gegraven watergang.","s":"IMBOR 2025","st":"Controleren","c":"Verschijningsvormen"},
    "Cultuurbeek":          {"d":"Watergang in cultuurlandschap.","s":"WL","st":"","c":"Functie"},
    "Nat":                  {"d":"Jaarrond watervoerend.","s":"","st":"Controleren","c":"Waterbodem"}
  },

  // ── Property → begrip mapping ──────────────────────────────────────
  propertyToConcept: {
    globalid: 'Uniek ID (GlobalID)',
    naam: 'Naam',
    trajectcode: 'Traject Code',
    objecttype: 'Object Type',
    verschijningsvorm: 'Verschijningsvorm',
    ruimtelijke_context: 'Ruimtelijke Context',
    functie: 'Functie',
    breedteklasse_watergang: 'Breedteklasse Watergang',
    type_waterbodem: 'Type Waterbodem'
  },

  // ── Regimes ────────────────────────────────────────────────────────
  regimes: {
    "Regime 1": {
      t: "Regime 1 \u2014 Cultuurbeek Extensief",
      ty: "Ecologisch maaibeheer",
      fr: "2x/jaar",
      ma: "Ja",
      bp: "50%",
      ds: "Schraalgrasland extensief maaibeheer. Sinusbeheer: jaarlijks wisselende zijde."
    }
  },

  // ── Drielagen-model defaults ───────────────────────────────────────
  defaultLayers: {
    A: ['GlobalID','objecttype','verschijningsvorm','ruimtelijke_context','functie','taludsteilte','is_werkpad','steilheidklasse','eigenaar'],
    B: ['watergang_id','complex_id','trajectcode','naam','streefbeeld_id','ecologisch_doel','beheerder'],
    C: ['beheerregime','periode','fase_zijde','bewerkingspercentage','uitvoerder','techniek','maaifrequentie','datum_gepland','datum_uitgevoerd','status','opmerking']
  },

  // ── Regimematrix defaults ──────────────────────────────────────────
  matrixRegimes: ['Natuur_A','Natuur_B','Cultuur_Ext','Cultuur_Int','Kering','Buffer'],

  matrixData: {
    'Natuur_A|Gras- en kruidachtigen': 'Sinusbeheer, 2x/jaar, maaisel afvoeren',
    'Natuur_A|Watergang': 'Eenzijdig schonen, 1x/jaar okt',
    'Cultuur_Ext|Gras- en kruidachtigen': '2x maaien, maaisel afvoeren',
    'Cultuur_Int|Gras- en kruidachtigen': '4-6x maaien, klepelen',
    'Kering|Gras- en kruidachtigen': '6x maaien, gazon kort',
    'Buffer|Watergang': 'Schonen bij vulling >50%',
    'Natuur_B|Gras- en kruidachtigen': '1x/jaar sept, niet maaien voor 15 jul'
  }
};
