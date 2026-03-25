/**
 * Schema Helper — Loads schema.json and provides a backward-compatible API
 *
 * This module replaces config.js + objecttypes.js with a single source of truth.
 * It exposes the same global variables the app expects (window.APP_CONFIG, window.OBJECT_TYPES)
 * so index.html requires minimal changes.
 */

window.SchemaLoader = {

  _schema: null,

  /**
   * Load schema.json and populate all legacy globals.
   * Must be awaited before the app initialises.
   */
  async load() {
    const r = await fetch('data/schema.json');
    if (!r.ok) throw new Error(`Schema load failed: HTTP ${r.status}`);
    this._schema = await r.json();
    this._buildLegacyGlobals();
    return this._schema;
  },

  /** Raw schema access */
  get data() { return this._schema; },

  // ─── Lookup helpers ──────────────────────────────────────────────

  /** Get domain list by key (objecttypen, verschijningsvormen, functies, etc.) */
  getDomain(key) {
    if (this._schema[key]) return Object.keys(this._schema[key]);
    if (this._schema.werkzaamheden?.[key]) return this._schema.werkzaamheden[key];
    if (this._schema.extra_domains?.[key]) return this._schema.extra_domains[key];
    return [];
  },

  /** Objecttypen filtered by category */
  getObjecttypenFor(category) {
    return Object.entries(this._schema.objecttypen)
      .filter(([, v]) => v.category === category)
      .map(([k]) => k);
  },

  /** Verschijningsvormen for a given objecttype */
  getVerschijningsvormen(objecttype) {
    return this._schema.objecttypen[objecttype]?.verschijningsvormen || [];
  },

  /** Color lookup across all dimensions */
  getColor(dimension, value) {
    const map = {
      objecttype: 'objecttypen',
      verschijningsvorm: 'verschijningsvormen',
      ruimtelijke_context: 'ruimtelijke_contexten',
      functie: 'functies'
    };
    const section = map[dimension] || dimension;
    return this._schema[section]?.[value]?.color || '#6b7280';
  },

  /** Unified definition lookup — searches all sections */
  getDefinition(term) {
    for (const section of ['objecttypen', 'verschijningsvormen', 'ruimtelijke_contexten', 'functies', 'type_waterbodem']) {
      if (this._schema[section]?.[term]) {
        const entry = this._schema[section][term];
        return { d: entry.definitie, s: entry.standaard, st: entry.status, c: section };
      }
    }
    // Check werkzaamheden meta
    if (this._schema.werkzaamheden?.meta?.[term]) {
      const entry = this._schema.werkzaamheden.meta[term];
      return { d: entry.definitie, s: entry.standaard, st: entry.status, c: 'Werkzaamheden' };
    }
    // Check velden
    for (const [, v] of Object.entries(this._schema.velden)) {
      if (v.label === term) {
        return { d: v.definitie, s: v.standaard, st: v.status, c: 'Velden' };
      }
    }
    return null;
  },

  // ─── Build backward-compatible globals ───────────────────────────

  _buildLegacyGlobals() {
    const s = this._schema;

    // ── window.OBJECT_TYPES ──
    const OT = {};
    for (const [name, def] of Object.entries(s.objecttypen)) {
      OT[name] = {
        category: def.category,
        verschijningsvormen: def.verschijningsvormen
      };
    }
    window.OBJECT_TYPES = OT;

    // ── window.APP_CONFIG ──
    // Rebuild domains from schema sections
    const domains = {
      ruimtelijke_context: Object.keys(s.ruimtelijke_contexten),
      functie: Object.keys(s.functies),
      beheerder: s.extra_domains?.beheerder || [],
      is_werkpad: ['true', 'false'],
      breedteklasse_watergang: s.extra_domains?.breedteklasse_watergang || [],
      fase_zijde: s.extra_domains?.fase_zijde || [],
      handeling: s.werkzaamheden?.handeling || [],
      werkwijze: s.werkzaamheden?.werkwijze || [],
      doel: s.werkzaamheden?.doel || [],
      zijde: s.werkzaamheden?.zijde || [],
      registratie_status: s.werkzaamheden?.registratie_status || []
    };

    // Rebuild colorMaps from schema
    const colorMaps = {
      objecttype: {},
      verschijningsvorm: {},
      ruimtelijke_context: {},
      functie: {}
    };
    for (const [k, v] of Object.entries(s.objecttypen))           colorMaps.objecttype[k] = v.color;
    for (const [k, v] of Object.entries(s.verschijningsvormen))   colorMaps.verschijningsvorm[k] = v.color;
    for (const [k, v] of Object.entries(s.ruimtelijke_contexten)) colorMaps.ruimtelijke_context[k] = v.color;
    for (const [k, v] of Object.entries(s.functies))              colorMaps.functie[k] = v.color;

    // Rebuild glossary from all schema sections
    const glossary = {};
    const addToGlossary = (section, categoryLabel) => {
      for (const [term, def] of Object.entries(section)) {
        glossary[term] = {
          d: def.definitie || '',
          s: def.standaard || '',
          st: def.status || '',

          c: categoryLabel
        };
      }
    };
    addToGlossary(s.objecttypen, 'Objecttypen');
    addToGlossary(s.verschijningsvormen, 'Verschijningsvormen');
    addToGlossary(s.ruimtelijke_contexten, 'Ruimtelijke Context');
    addToGlossary(s.functies, 'Functie');
    if (s.type_waterbodem) addToGlossary(s.type_waterbodem, 'Type Waterbodem');
    if (s.werkzaamheden?.meta) addToGlossary(s.werkzaamheden.meta, 'Werkzaamheden');
    // Add velden as glossary entries
    for (const [, v] of Object.entries(s.velden)) {
      if (v.label && v.definitie) {
        glossary[v.label] = {
          d: v.definitie,
          s: v.standaard || '',
          st: v.status || '',

          c: 'Velden'
        };
      }
    }

    // Rebuild propertyToConcept from velden
    const propertyToConcept = {};
    for (const [prop, v] of Object.entries(s.velden)) {
      propertyToConcept[prop.toLowerCase()] = v.label;
    }

    window.APP_CONFIG = {
      domains,
      colorMaps,
      statusColors: s.statusColors || {},
      glossary,
      propertyToConcept,
      regimes: s.regimes || {},
      defaultLayers: s.defaultLayers || {},
      matrixRegimes: s.matrixRegimes || [],
      matrixData: s.matrixData || {}
    };
  }
};
