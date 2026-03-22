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
      'Pimpernelhooiland','Orchidee\u00EBngrasland'
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
  'Elementenverharding': {
    category: 'verharding',
    verschijningsvormen: ['Natuursteen','Betonsteen','Gebakken klinkers']
  },
  'Halfverharding': {
    category: 'verharding',
    verschijningsvormen: ['Kleischelpen','Grind','Schelpen','Puin']
  }
};
