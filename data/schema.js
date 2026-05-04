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
    if (this._schema[key]) {
      return Object.entries(this._schema[key])
        .filter(([, v]) => !v.alleen_begrip)
        .map(([k]) => k);
    }
    if (this._schema.werkzaamheden?.[key]) return this._schema.werkzaamheden[key];
    if (this._schema.extra_domains?.[key]) return this._schema.extra_domains[key];
    if (this._schema.planning?.domeinen?.[key]) return this._schema.planning.domeinen[key];
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
    if (this._schema.werkzaamheden?.meta?.[term]) {
      const entry = this._schema.werkzaamheden.meta[term];
      return { d: entry.definitie, s: entry.standaard, st: entry.status, c: 'Werkzaamheden' };
    }
    if (this._schema.begrippen_extra?.[term]) {
      const entry = this._schema.begrippen_extra[term];
      return { d: entry.definitie, s: entry.standaard, st: entry.status, c: entry.category || 'Overig' };
    }
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

    // Helper: keys filtered to exclude glossary-only entries
    const domainKeys = section => Object.entries(section || {})
      .filter(([, v]) => !v.alleen_begrip)
      .map(([k]) => k);

    // Planning domains shorthand
    const pd = s.planning?.domeinen || {};

    // ── window.APP_CONFIG.domains ──
    const domains = {
      ruimtelijke_context: domainKeys(s.ruimtelijke_contexten),
      functie:             domainKeys(s.functies),
      beheerder:           s.extra_domains?.beheerder || [],
      is_werkpad:          ['true', 'false'],
      ja_nee:              s.extra_domains?.ja_nee || ['Ja', 'Nee'],
      breedteklasse_watergang: s.extra_domains?.breedteklasse_watergang || [],
      fase_zijde:          s.extra_domains?.fase_zijde || [],
      boomgrootte:         s.extra_domains?.boomgrootte || [],
      type_vaarwater:      s.extra_domains?.type_vaarwater || [],
      // Backwards-compat (planPage, matrix)
      handeling:           s.werkzaamheden?.handeling || [],
      werkwijze:           s.werkzaamheden?.werkwijze || [],
      doel:                s.werkzaamheden?.doel || [],
      zijde:               s.werkzaamheden?.zijde || [],
      registratie_status:  s.werkzaamheden?.registratie_status || [],
      // Nieuw — Laag C planning domeinen
      regime_id:                pd.DOM_REGIME_ID || [],
      werkzaamheden_lijst:      pd.DOM_WERKZAAMHEDEN || [],
      afvoeren:                 pd.DOM_AFVOEREN || [],
      werkperiode:              pd.DOM_WERKPERIODE || [],
      uitvoerder:               pd.DOM_UITVOERDER || [],
      uitvoeringswijze_maaien:  pd.DOM_UITVOERINGSWIJZEMAAIEN || [],
      steekproef_status:        pd.DOM_STEEKPROEFSTATUS || [],
      uitvoering_status:        pd.DOM_UITVOERINGSTATUS || []
    };

    // Rebuild colorMaps from schema (include alleen_begrip-entries — they may still appear in legends)
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
      for (const [term, def] of Object.entries(section || {})) {
        glossary[term] = {
          d: def.definitie || '',
          s: def.standaard || '',
          st: def.status || '',
          c: categoryLabel
        };
      }
    };
    addToGlossary(s.objecttypen,           'Objecttypen');
    addToGlossary(s.verschijningsvormen,   'Verschijningsvormen');
    addToGlossary(s.ruimtelijke_contexten, 'Ruimtelijke Context');
    addToGlossary(s.functies,              'Functie');
    if (s.type_waterbodem) addToGlossary(s.type_waterbodem, 'Type Waterbodem');
    if (s.werkzaamheden?.meta) addToGlossary(s.werkzaamheden.meta, 'Werkzaamheden');

    // Velden as glossary entries (label as key)
    for (const [, v] of Object.entries(s.velden)) {
      if (v.label && v.definitie) {
        glossary[v.label] = {
          d: v.definitie,
          s: v.standaard || '',
          st: v.status || '',
          c: 'Bovenliggende Velden'
        };
      }
    }

    // Extra glossary entries (begrippen die niet in een domeinsectie horen)
    if (s.begrippen_extra) {
      for (const [term, def] of Object.entries(s.begrippen_extra)) {
        glossary[term] = {
          d: def.definitie || '',
          s: def.standaard || '',
          st: def.status || '',
          c: def.category || 'Overig'
        };
      }
    }

    // Planning entiteit-velden als begrippen
    const pe = s.planning?.entiteiten;
    if (pe) {
      for (const [entName, ent] of Object.entries(pe)) {
        for (const [, v] of Object.entries(ent.velden || {})) {
          if (v.label && (v.toelichting || v.type)) {
            // Voeg toe als nog niet aanwezig (anders overschrijven we bovenliggende velden)
            if (!glossary[v.label]) {
              glossary[v.label] = {
                d: v.toelichting || '',
                s: 'WL',
                st: 'Definitief',
                c: 'Planning — ' + entName
              };
            }
          }
        }
      }
    }

    // Rebuild propertyToConcept from velden (technische naam → label)
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
