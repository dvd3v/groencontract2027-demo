# Groencontract 2027 – Demo Kaartlagenviewer

Demo-applicatie voor het beheer en de visualisatie van groene infrastructuur en waterbeheer in pilotgebieden, ontwikkeld in het kader van het Groencontract 2027. De applicatie ondersteunt assetbeheer conform de **IMBOR 2025** standaard en de specificaties van **Waterschap Limburg**.

---

## Inhoud

- [Over de applicatie](#over-de-applicatie)
- [Functionaliteit](#functionaliteit)
- [Projectstructuur](#projectstructuur)
- [Starten](#starten)
- [Pilotgebieden](#pilotgebieden)
- [Datamodel](#datamodel)
- [Gebruikte technologieën](#gebruikte-technologieën)

---

## Over de applicatie

De viewer biedt een interactieve kaartomgeving waarmee beheerders van groene en waterinfrastructuur objecten kunnen bekijken, attributen kunnen inzien en jaarplannen kunnen volgen. De applicatie werkt volledig client-side en vereist geen backend.

Doelgroepen: waterbeheerders, groenbeheerders en gemeentelijke planners in de regio Limburg.

---

## Functionaliteit

### Kaartweergave
- Interactieve Leaflet-kaart met vier achtergrondkaarten (Light, Color, PDOK 25 cm, PDOK HR 8 cm)
- In- en uitschakelen van kaartlagen per objectgroep (groen, water, jaarplan)
- Kleuring op attribuut: objecttype, verschijningsvorm, ruimtelijke context of functie

### Tabelbeheer
- Tabelweergave van alle objectattributen met bewerkbare velden
- CSV-export van de attributentabel

### Jaarplan
- Overzicht van geplande onderhoudstaken per object en periode
- Statusregistratie: gepland, in uitvoering, uitgevoerd, afgekeurd

### Documentatie
- **Datamodel** – attribuutdefinities en domeinen conform IMBOR 2025
- **Drielagen** – decompositiemodel (technisch / identificatie / beheer)
- **Regimematrix** – matrix van beheerregimes vs. objecttypen

### Woordenlijst
- Begrippenlijst met definitie, bron en status per term

---

## Projectstructuur

```
groencontract2027-demo/
├── index.html              # Single-page applicatie (kaart, plan, datamodel, matrix)
└── data/
    ├── config.js           # Gedeelde configuratie (domeinen, kleurmappen, woordenlijst)
    ├── objecttypes.js      # Objecttype-definities (groen & water)
    └── pilots/
        ├── ogw.js          # Pilotgebied Omgevingsgericht water (volledig ingevuld)
        ├── natuurbeek.js   # Pilotgebied Natuurbeek (sjabloon)
        ├── waterbuffer.js  # Pilotgebied Waterbuffer (sjabloon)
        └── waterkering.js  # Pilotgebied Waterkering (sjabloon)
```

---

## Starten

De applicatie werkt zonder installatie of buildstap. Open `index.html` direct in een browser, of serveer de map via een lokale webserver:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Navigeer daarna naar `http://localhost:8080`.

---

## Pilotgebieden

| Pilot | Status | Locatie |
|---|---|---|
| Omgevingsgericht water (OGW) | Actief – volledig ingevuld | Regio Limburg |
| Natuurbeek | Sjabloon | – |
| Waterbuffer | Sjabloon | – |
| Waterkering | Sjabloon | – |

Elk pilotgebied is een apart JavaScript-bestand in `data/pilots/` met GeoJSON FeatureCollections voor de lagen `groen`, `water` en `traject`.

---

## Datamodel

Objecten volgen het **drielagen-model**:

| Laag | Inhoud |
|---|---|
| A – Technisch | GlobalID, objecttype, verschijningsvorm, ruimtelijke context, functie, taludsteilte, is_werkpad |
| B – Identificatie | watergang_id, trajectcode, naam, beheerder |
| C – Beheer | beheerregime, periode, fase/zijde, bewerkingspercentage, uitvoerder, datum gepland, status |

Beheerregimes: `Natuur_A`, `Natuur_B`, `OGW_Ext`, `OGW_Int`, `Kering`, `Buffer`.

---

## Gebruikte technologieën

| Onderdeel | Technologie |
|---|---|
| Kaartbibliotheek | [Leaflet.js](https://leafletjs.com/) v1.9.4 |
| Geografisch formaat | GeoJSON |
| Frontend | Vanilla HTML/CSS/JavaScript |
| Achtergrondkaarten | PDOK (Rijksoverheid), OpenStreetMap |
| Standaard | IMBOR 2025 |

---

## Licentie

Dit is een demoapplicatie. Neem contact op met de projectbeheerder voor gebruiksvoorwaarden.
