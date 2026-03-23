/**
 * Objecttype-definities voor Groenbeheer Kaartlagen
 *
 * Elk objecttype definieert:
 *   - category:  laag-categorie (bijv. 'groen', 'water', 'verharding')
 *   - verschijningsvormen:  toegestane verschijningsvormen
 *   - domainOverrides:  domeinlijsten specifiek voor dit objecttype (optioneel)
 *
 * Om een nieuw objecttype toe te voegen: voeg een entry toe aan dit object.
 * De app detecteert automatisch welke objecttypen per category beschikbaar zijn.
 */
window.OBJECT_TYPES = {

  // ── Groen ──────────────────────────────────────────────────────────
  'Gras- en kruidachtigen': {
    category: 'groen',
    verschijningsvormen: [
      'Rietvegetatie','Zoomvegetatie','Ruige glanshaverhooilanden',
      'Glanshaverhooilanden op schrale bodem','Bloemrijk natte ruigte','Ruigte',
      'Gazon extensief','Dotterbloemhooiland (droge vorm)','Dotterbloemhooiland (Natte vorm)',
      'Heischraal grasland','Schraalgrasland','Kalkgrasland',
      'Pimpernelhooiland','Orchidee\u00EBngrasland','Fauna- en kruidenrijkgrasland'
    ]
  },
  'Bos': {
    category: 'groen',
    verschijningsvormen: ['Bos']
  },
  'Bosplantsoen': {
    category: 'groen',
    verschijningsvormen: ['Bomen en struikvormers']
  },
  'Struweel': {
    category: 'groen',
    verschijningsvormen: ['Struweel']
  },
  'Haag': {
    category: 'groen',
    verschijningsvormen: ['Geschoren haag','Losse haag']
  },
  'Moeras': {
    category: 'groen',
    verschijningsvormen: ['Doorstroommoeras']
  },
  'Houtsingel': {
    category: 'groen',
    verschijningsvormen: ['Houtsingel']
  },
  'Struweelhaag': {
    category: 'groen',
    verschijningsvormen: []
  },
  'Graft': {
    category: 'groen',
    verschijningsvormen: []
  },
  'Boom': {
    category: 'groen',
    verschijningsvormen: []
  },

  // ── Water ──────────────────────────────────────────────────────────
  'Watergang': {
    category: 'water',
    verschijningsvormen: ['Beek','Sloot']
  },
  'Watervlakte': {
    category: 'water',
    verschijningsvormen: ['Poel','Ven','Plas']
  },

  // ── Verharding ───────────────────────────────────────────────────────
  'Asfaltverharding': {
    category: 'verharding',
    verschijningsvormen: ['Asfaltverharding']
  },
  'Betonverharding': {
    category: 'verharding',
    verschijningsvormen: ['Betonverharding']
  },
  'Onverhard': {
    category: 'verharding',
    verschijningsvormen: ['Onverhard']
  },
  'Elementverharding': {
    category: 'verharding',
    verschijningsvormen: ['Elementverharding']
  },

  // ── Hekken ────────────────────────────────────────────────────────
  'Draadraaster': {
    category: 'hek',
    verschijningsvormen: []
  },
  'Faunaraster': {
    category: 'hek',
    verschijningsvormen: []
  },
  'Gaashek': {
    category: 'hek',
    verschijningsvormen: []
  },
  'Spijlenhek': {
    category: 'hek',
    verschijningsvormen: []
  },
  'Schrikdraad': {
    category: 'hek',
    verschijningsvormen: []
  },
  'Toegangspoort': {
    category: 'hek',
    verschijningsvormen: ['Boerenhekwerk','Grootveehek','V-werk','Combinatiepoort','Klaphek','Draaihek','Kleinveehek']
  }
};
