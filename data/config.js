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
    functie: ['Cultuurbeek','Natuurbeek','Aanvoersloot','Omgevingsgericht water','Buffer','Waterbuffer','Bronbeek','Vispassage'],
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
      'Houtsingel':'#4d7c0f','Watergang':'#2563eb','Watervlakte':'#3b82f6',
      'Elementenverharding':'#78716c','Halfverharding':'#a8a29e'
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
      'Beek':'#0ea5e9','Poel':'#06b6d4','Ven':'#67e8f9','Plas':'#22d3ee',
      'Natuursteen':'#78716c','Betonsteen':'#a1a1aa','Gebakken klinkers':'#92400e',
      'Kleischelpen':'#d6a35c','Grind':'#d4d4d8','Schelpen':'#fef3c7','Puin':'#a8a29e'
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
      'Waterbuffer':'#ea580c','Bronbeek':'#14b8a6','Vispassage':'#f43f5e'
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
    // ── Bovenliggende Velden ──────────────────────────────────────────
    "Uniek ID (GlobalID)":  {"d":"Een door het systeem gegenereerde code die uniek is. Cruciaal voor relaties tussen tabellen en systemen.","s":"GUID/ArcGIS","st":"Definitief","o":"Data","c":"Velden"},
    "Naam":                 {"d":"Naam van de watergang en/of traject.","s":"WL","st":"Controleren","o":"Assetmanagement","c":"Velden"},
    "Traject Code":         {"d":"Logisch opgebouwde betekenisvolle trajectcode (traject, zijde, onderdeel etc).","s":"WL","st":"Definitief","o":"Data","c":"Velden"},
    "Object Type":          {"d":"De hoofdklasse van het groen; bepaalt welke verdere kenmerken (verschijningsvormen) mogelijk zijn.","s":"IMBOR 2025","st":"Definitief","o":"Data","c":"Velden"},
    "Verschijningsvorm":    {"d":"Toplaag van het object op basis van bepaalde eigenschappen.","s":"IMBOR 2025","st":"Controleren","o":"Data","c":"Velden"},
    "Ruimtelijke Context":  {"d":"De omgeving of constructieve situatie waarin het object zich bevindt.","s":"WL","st":"Controleren","o":"Data","c":"Velden"},
    "Functie":              {"d":"De functie (natuurbeek, aanvoersloot, omgevingsgericht water, buffer etc).","s":"WL","st":"Controleren","o":"Ecologie","c":"Velden"},
    "Beheerder":            {"d":"De partij die juridisch en financieel verantwoordelijk is voor het onderhoud.","s":"WL","st":"Controleren","o":"Data","c":"Velden"},
    "Breedteklasse Watergang":{"d":"Klasseindeling voor de bovenbreedte van de watergang. Afstand tussen de twee insteken.","s":"IMBOR 2025","st":"Definitief","o":"Data","c":"Velden"},
    "Bodembreedte":         {"d":"Bodembreedte van teen tot teen.","s":"WL","st":"Definitief","o":"Data","c":"Velden"},

    // ── Functie ──────────────────────────────────────────────────────
    "Natuurbeek":           {"d":"Door de provincie toegekende functie aan een watergang waarvan de ontwikkeling is gericht op behalen en behouden van de ecologische doelen vanuit KRW, Natura 2000 en het overig Natuurnetwerk met een hoofdfunctie natuur.","s":"PWP & Waterbeheerprogramma","st":"Controleren","o":"Tamira","c":"Functie"},
    "Aanvoersloot":         {"d":"Watergangen in Noord- en Midden-Limburg om Maaswater naar landbouwgebieden te brengen.","s":"Waterbeheerprogramma","st":"Controleren","o":"Tamira","c":"Functie"},
    "Omgevingsgericht water":{"d":"Beken waarbij het dominante landgebruik in de omgeving de werking van het watersysteem bepaald.","s":"PWP","st":"Controleren","o":"Tamira","c":"Functie"},
    "Buffer":               {"d":"Een regenwaterbuffer is een opvangbassin dat bij hevige regen het teveel aan water tijdelijk opvangt en geleidelijk weer loost.","s":"Waterbeheerprogramma / DAMO","st":"Controleren","o":"Tamira","c":"Functie"},
    "Waterbuffer":          {"d":"Voorziening voor tijdelijke berging van water bij piekafvoer.","s":"WL","st":"Controleren","o":"Tamira","c":"Functie"},
    "Bronbeek":             {"d":"Bovenloop van een watergang die worden gevoed door (semi-)permanent stromende bronnen of kwelzones.","s":"Waterbeheerprogramma","st":"Controleren","o":"Tamira","c":"Functie"},
    "Vispassage":           {"d":"Waterbouwkundig constructie dat vissen toegang geeft tot een door een dijk, dam, stuw of sluis ontoegankelijk geworden achterland.","s":"IMBOR 2025","st":"Controleren","o":"Tamira","c":"Functie"},
    "Cultuurbeek":          {"d":"Watergang in cultuurlandschap.","s":"WL","st":"","o":"Tamira","c":"Functie"},

    // ── Ruimtelijke Context ──────────────────────────────────────────
    "Talud":                {"d":"Onder helling gelegen vlak.","s":"kennisbank","st":"Controleren","o":"Vaos","c":"Ruimtelijke Context"},
    "Boven Talud":          {"d":"Onder helling gelegen vlak, niet aan de watergang zijde maar aan de landzijde van het onderhoudspad. Voorkomend bij verlaagde onderhoudspaden.","s":"WL","st":"Controleren","o":"Vaos","c":"Ruimtelijke Context"},
    "Wegberm":              {"d":"Plat of iets onderhelling gelegen terreindeel naast een verharde of onverharde weg wat tevens dient als werkpad om het onderhoud van de watergang te kunnen uitvoeren.","s":"WL","st":"Controleren","o":"Vaos","c":"Ruimtelijke Context"},
    "Meterstrook":          {"d":"Strook aan een of beide zijde van de watergang van ca. 1m breed om het onderhoud te kunnen uitvoeren en of maaisel op te deponeren.","s":"WL","st":"Controleren","o":"Vaos","c":"Ruimtelijke Context"},
    "Natte Bodem":          {"d":"Bodems van regenwaterbuffers die niet permanent water bevatten maar door de duur van de periode dat er water staat als nat/vochtig beschouwt kunnen worden.","s":"WL","st":"","o":"Vaos","c":"Ruimtelijke Context"},
    "Bodem":                {"d":"Het laagst gelegen vlak in een terrein.","s":"WL","st":"Controleren","o":"Vaos","c":"Ruimtelijke Context"},
    "Winterbed":            {"d":"De oppervlakte tussen het zomerbed van een bovenrivier en de buitenkruinlijn van de hoogwaterkerende dijk dan wel de hoge gronden, die het water bij hoge standen keren.","s":"kennisbank","st":"Controleren","o":"Vaos","c":"Ruimtelijke Context"},
    "Instroom Voorziening": {"d":"Constructie die ervoor gemaakt is om te zorgen dat het regenwater de buffer in stroomt.","s":"WL","st":"Controleren","o":"Vaos","c":"Ruimtelijke Context"},
    "Uitstroom Voorziening":{"d":"Constructie die ervoor gemaakt is om te zorgen dat het regenwater de buffer uit stroomt.","s":"WL","st":"Controleren","o":"Vaos","c":"Ruimtelijke Context"},
    "Kruin":                {"d":"Horizontale of licht hellende strook grond die bovenop de waterkering ligt of het hoogst gelegen deel van de waterkering.","s":"WL","st":"Controleren","o":"Vaos","c":"Ruimtelijke Context"},

    // ── Objecttypen ──────────────────────────────────────────────────
    "Gras- en kruidachtigen":{"d":"Gras: terrein met grasvegetatie, niet primair in gebruik voor grasproductie. Kruidachtige: door inheemse kruidensoorten bepaalde grasachtige vegetatie.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Objecttypen"},
    "Bos":                  {"d":"Begroeiing die bestaat uit een dusdanig aantal bomen dat deze een min of meer gesloten geheel vormen of, na volgroeiing, zullen vormen.","s":"WL","st":"Definitief","o":"Max","c":"Objecttypen"},
    "Bosplantsoen":         {"d":"Een bosplantsoen wordt gekenmerkt door veelal boomsoorten met enkele struwelen die aanwezig zijn in de ondergroei.","s":"WL","st":"Definitief","o":"Max","c":"Objecttypen"},
    "Struweel":             {"d":"Struweel wordt gekenmerkt door veelal struweelsoorten (struikvormers) met enkele aanwezige bomen die boven het struweel uitgroeien.","s":"WL","st":"Definitief","o":"Max","c":"Objecttypen"},
    "Struweelhaag":         {"d":"Een lijnvormige, smalle, lage haag van inheemse, vaak doornachtige struiken (zoals meidoorn en sleedoorn), die zorgt voor een ondoordringbare afscheiding en hoge biodiversiteit.","s":"WL","st":"Definitief","o":"Max","c":"Objecttypen"},
    "Haag":                 {"d":"Gesloten lijnvormige beplanting, waarvan de hoogte en breedte door middel van knippen in stand wordt gehouden.","s":"IMBOR 2025","st":"Controleren","o":"Max","c":"Objecttypen"},
    "Moeras":               {"d":"Een overgangsgebied tussen water en land, vaak in drassige omstandigheden. Gekenmerkt door altijd vochtige en/of natte omstandigheden.","s":"WL","st":"Definitief","o":"Max","c":"Objecttypen"},
    "Houtsingel":           {"d":"Een brede strook met bomen en struiken als afscheiding tussen weilanden en akkers en ook wel langs beken en waterlopen. Lijnvormig landschapselement van 4 tot 20 meter breed.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Objecttypen"},
    "Graft":                {"d":"Steile rand met bos of struikgewas op hellingen voornamelijk gelegen in agrarische terreinen of natuurgebieden. Een knik of mini-terras op een helling.","s":"IMBOR 2025","st":"","o":"Max","c":"Objecttypen"},
    "Watergang":            {"d":"Een voor de waterbeheersing bestemde geul met een vlakke bodem die meestal permanent water bevat.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Objecttypen"},
    "Watervlakte":          {"d":"Een aan het oppervlak gelegen, niet lijnvormige, natuurlijke dan wel kunstmatige verdieping van de bodem die, eventueel periodiek, gevuld is met water.","s":"IMBOR 2025","st":"Controleren","o":"Max","c":"Objecttypen"},
    "Boom":                 {"d":"Een houtachtig gewas (loofboom of conifeer) met een wortelgestel en een enkele, stevige, houtige stam, die zich boven de grond vertakt.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Objecttypen"},
    "Elementenverharding":  {"d":"Verharding samengesteld uit individuele elementen (stenen, tegels).","s":"IMBOR 2025","st":"Definitief","o":"","c":"Objecttypen"},
    "Halfverharding":       {"d":"Semi-verharde laag van ongebonden materiaal (schelpen, grind, puin).","s":"IMBOR 2025","st":"Definitief","o":"","c":"Objecttypen"},

    // ── Verschijningsvormen ──────────────────────────────────────────
    "Rietvegetatie":        {"d":"Een vegetatie met als hoofdsoort een of meerdere soorten riet, kan zowel een natte als een droge ondergrond hebben.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Zoomvegetatie":        {"d":"Een zoom vormt de overgang tussen bos en grasland die bestaat uit een ruigere gras-/kruidenvegetatie.","s":"WL","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Ruige glanshaverhooilanden":{"d":"Hooilanden gelegen op vochtige gronden tot gronden die periodiek overstroomd worden. Kenmerkend is een hoog opgroeiende ruige grasvegetatie.","s":"WL","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Glanshaverhooilanden op schrale bodem":{"d":"Hooilanden gelegen op vochtige gronden. Kenmerkend is een hoog opgroeiende (zeer) bloem-/kruidenrijke vegetatie met een hoge abundantie van glanshaver.","s":"WL","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Bloemrijk natte ruigte":{"d":"Een perceel in een natte omgeving bestaande uit kruidachtige planten die groter worden dan een meter en rijk zijn aan bloemen.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Ruigte":               {"d":"Gevarieerd grasmengsel met beperkt aantal soorten van hoog opgaande, meerjarige kruidachtige planten zoals distels, gewone berenklauw, brandnetels, bramen.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Gazon extensief":      {"d":"Grasterrein met relatief uniform grasmengsel dat extensief bewerkt wordt, jaarlijks 4-6x gemaaid.","s":"WL","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Dotterbloemhooiland (droge vorm)":{"d":"Een niet drassig grasland met een weelderige hoeveelheid bloemen uit graslanden, broekbossen en moerassen, waar sprake is van invloed van grondwater.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Dotterbloemhooiland (Natte vorm)":{"d":"Een drassig grasland met een weelderige hoeveelheid bloemen uit graslanden, broekbossen en moerassen, waar sprake is van invloed van grondwater.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Heischraal grasland":  {"d":"Graslanden gelegen op droge, zure, laagproductieve en meestal zandachtige gronden. Kenmerkt zich door afwezigheid van dwergstruiken.","s":"WL","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Schraalgrasland":      {"d":"Graslanden gelegen op droge, laagproductieve en meestal zandachtige gronden. Soortenrijke korte vegetaties met hoge soortenrijkdom.","s":"WL","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Kalkgrasland":         {"d":"Droge half-natuurlijke graslanden op kalkhoudende bodems. Veelal op zonnige hellingen.","s":"WL","st":"Te bepalen","o":"Max","c":"Verschijningsvormen"},
    "Pimpernelhooiland":    {"d":"Specifieke flora en insecten (grote pimpernel, donker pimpernelblauwtje en steekmieren).","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Orchidee\u00EBngrasland":{"d":"Graslanden gelegen op (meestal) vochtige, schrale en laagproductieve gronden. Kenmerken zich door hoge dichtheden orchidee\u00EBn.","s":"WL","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Geschoren haag":       {"d":"Al of niet gemengde smalle heesterbeplanting die aan de bovenkant en de zijkant(en) wordt geknipt.","s":"WL","st":"Controleren","o":"Max","c":"Verschijningsvormen"},
    "Losse haag":           {"d":"Een of maximaal twee rijen (sier)heesters al dan niet van dezelfde soort die samen een lijnvormig element (haag) vormen. Deze haag wordt niet geknipt.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Doorstroommoeras":     {"d":"Een moeras dat ontstaat doordat een of meer diffuse waterstromen door een wat lager gelegen zone stromen. Bos-, zoommantelzones-, zeggenvegetaties en kruidenvegetaties.","s":"WL","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Beek":                 {"d":"Een min of meer natuurlijke stroom ondiep water die vanuit een oorsprong, vaak een bron, stroomafwaarts vloeit.","s":"IMBOR 2025","st":"Definitief","o":"Max","c":"Verschijningsvormen"},
    "Sloot":                {"d":"Een gegraven watergang die dient om overtollig water af te voeren. Algemene benaming voor een waterloop van beperkte breedte die stilstaand of langzaam stromend water bevat.","s":"IMBOR 2025","st":"Controleren","o":"Max","c":"Verschijningsvormen"},
    "Poel":                 {"d":"Een door mens gegraven ge\u00EFsoleerde waterpartij die stilstaand en veelal ondiep water (max 150cm) bevat. De poel dient een leefgebied te zijn voor verschillende macrofauna-/amfibie\u00EBn- en plantensoorten.","s":"WL","st":"Controleren","o":"Max","c":"Verschijningsvormen"},
    "Ven":                  {"d":"Een klein, meestal ondiep meer, dat voorkomt op Pleistocene zandgronden. Wisselende waterstanden, zelden groter dan enkele hectaren.","s":"IMBOR 2025","st":"Controleren","o":"Max","c":"Verschijningsvormen"},
    "Plas":                 {"d":"Jaarrond waterhoudende regenwaterbufferbodem.","s":"WL","st":"","o":"","c":"Verschijningsvormen"},
    "Natuursteen":          {"d":"Verhardingselement van natuurlijk gewonnen steen.","s":"IMBOR 2025","st":"Definitief","o":"","c":"Verschijningsvormen"},
    "Kleischelpen":         {"d":"Halfverharding van klei-schelpenmengsels, waterdoorlatend.","s":"WL","st":"Controleren","o":"","c":"Verschijningsvormen"},
    "Betonsteen":           {"d":"","s":"IMBOR 2025","st":"","o":"","c":"Verschijningsvormen"},
    "Gebakken klinkers":    {"d":"","s":"IMBOR 2025","st":"","o":"","c":"Verschijningsvormen"},
    "Grind":                {"d":"","s":"","st":"","o":"","c":"Verschijningsvormen"},
    "Schelpen":             {"d":"","s":"","st":"","o":"","c":"Verschijningsvormen"},
    "Puin":                 {"d":"","s":"","st":"","o":"","c":"Verschijningsvormen"},

    // ── Type Waterbodem ──────────────────────────────────────────────
    "Droog":                {"d":"Watergang die tussen 1 april en 1 oktober bij normale omstandigheden geen of nauwelijks water afvoert.","s":"","st":"Controleren","o":"Henk","c":"Type Waterbodem"},
    "Nat":                  {"d":"Watergang die het gehele jaar bij normale omstandigheden water afvoert.","s":"","st":"Controleren","o":"Henk","c":"Type Waterbodem"}
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
    "Cultuur_Ext": {
      t: "Cultuur Extensief \u2014 Sinusbeheer",
      ty: "Ecologisch maaibeheer",
      fr: "2x/jaar",
      ma: "Ja",
      bp: "50%",
      ds: "Extensief maaibeheer schraalgrasland op taluds. Sinusbeheer: per periode wisselende zijde (L/R), 50% per beurt. Watergang eenzijdig schonen. Maaisel afvoeren t.b.v. verschraling."
    },
    "Buffer_Normaal": {
      t: "Buffer Normaal \u2014 Standaard onderhoud",
      ty: "Extensief maaibeheer",
      fr: "1x/jaar",
      ma: "Ja",
      bp: "100%",
      ds: "Jaarlijks maaien van taluds, boven-taluds en natte bodem. Maaisel afvoeren. Schraalgrasland- en rietvegetatie behouden. Geen fasering nodig bij buffers."
    },
    "Buffer_Voorziening": {
      t: "Buffer Voorziening \u2014 Vrijmaaien in-/uitstroom",
      ty: "Constructie-onderhoud",
      fr: "2x/jaar",
      ma: "Nee",
      bp: "100%",
      ds: "Vrijmaaien rondom instroom- en uitstroomvoorzieningen. Begroeiing rondom constructies verwijderen zodat doorstroming gewaarborgd blijft. Visuele inspectie constructie."
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
    'Buffer|Gras- en kruidachtigen': '1x/jaar maaien, maaisel afvoeren, schraalgrasland behouden',
    'Buffer|Watervlakte': 'Rietvegetatie in stand houden, max 30% maaien per jaar',
    'Buffer|Elementenverharding': 'Onkruid verwijderen rondom constructies, 2x/jaar',
    'Buffer|Halfverharding': 'Pad begaanbaar houden, opslag verwijderen, 1x/jaar',
    'Natuur_B|Gras- en kruidachtigen': '1x/jaar sept, niet maaien voor 15 jul'
  }
};
