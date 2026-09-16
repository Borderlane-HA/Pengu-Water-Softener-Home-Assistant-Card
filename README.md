# Pengu Water Softener Card

![Pengu Water Softener Card](https://raw.githubusercontent.com/Borderlane-HA/Pengu-Water-Softener-Home-Assistant-Card/main/assets/pengu-logo.png)

A stylish and configurable **Home Assistant dashboard card for water softeners**. It shows only the values you actually configure, supports animated flow and regeneration states, and lets you position values directly in the visual editor via drag & drop.

![Pengu Water Softener Card preview](https://raw.githubusercontent.com/Borderlane-HA/Pengu-Water-Softener-Home-Assistant-Card/main/screenshots/preview.png)

## Highlights

- Visual water-softener schematic with resin vessel, salt tank and pipework
- Animated **current water flow** — service-flow animation runs only when the configured current-flow sensor is above zero
- **Raw-water hardness** and optional **target / soft-water hardness**
- Salt / fill-level visualization
- Automatic handling for `%` and unitless `0…1` level sensors
- Unit-aware full-scale handling for `mm`, `cm`, `m`, `g`, `kg`, `ml`, `L`, `m³`
- Supports level sensors that represent either **fill height** or **distance from top**
- Remaining capacity as percentage and/or amount
- Regeneration state, step, progress and remaining time/amount
- Step-aware hydraulic regeneration flow for filling, brining, slow rinse, backwash and rinse
- Optional consumption, maintenance, error and diagnostic values
- Optional operating mode and manual-regeneration entities
- **No configured/usable entity = no value shown**
- Drag & drop for configured values in the GUI editor
- German / English automatically follows the Home Assistant language
- More-info dialog on configured values

## Value display modes

The value overlays can be changed in the visual editor:

- **Floating text** — default; no box, no fixed minimum width, best for free positioning around the schematic
- **Compact badge** — subtle translucent background with very small padding
- **Card** — classic boxed layout from the first releases

Normal measurements use floating text by default. Status values such as regeneration and errors keep a small, subtle status background so they remain easy to recognize.

Existing configurations from older versions automatically use the new **Floating text** mode unless `value_style` is explicitly set.

```yaml
value_style: text     # text | compact | card
```

## Example Card
![Pengu Water Softener HA Card preview](https://raw.githubusercontent.com/Borderlane-HA/Pengu-Water-Softener-Home-Assistant-Card/main/screenshots/Screenshot1.png)

## Integration profiles

### Automatic / generic

Works with any Home Assistant integration that exposes water-softener values as entities. Assign only the values you want to display.

### Grünbeck softliQ SC — `tizianodeg/gruenbeck_softliQ_SC`

The dedicated Grünbeck profile is optimized for the [tizianodeg/gruenbeck_softliQ_SC Home Assistant integration](https://github.com/tizianodeg/gruenbeck_softliQ_SC).

The profile recognizes common softliQ SC entities and regeneration states and can **auto-assign detected Grünbeck entities** from the card editor. Detection happens entirely from the entities already present in Home Assistant; the card does not create additional requests to the water softener.

For this integration, **Aktueller Regenerationsschritt / Current regeneration step is the primary regeneration entity**. The separate binary sensor **Regeneration aktiv / Regeneration active is optional** and is used only as a fallback if no usable step sensor is configured.

Typical supported values include:

- Aktueller Durchfluss / Current flow
- Rohwasserhärte / Raw-water hardness
- Restkapazität
- Verbleibende Kapazität
- Salzreichweite
- Regeneration aktiv
- Aktueller Regenerationsschritt
- Prozentuale Regeneration
- Verbleibende Zeit/Menge des Regenerationsschritts
- Letzte Regeneration
- Wasserverbrauch gestern
- Durchschnittsverbrauch der letzten 3 Tage
- Flussspitzenwert
- Gesamtverbrauch
- Gesamtdurchfluss
- Weichwasservolumenmesser
- Kapazitätsnummer
- Verbrauchskapazitätsrate
- Salzverbrauch pro Jahr
- Chlorstrom
- Tage bis zur nächsten Wartung
- Letzter Fehler
- Alter des letzten Fehlers
- Software-Version
- Modus
- Manuelle Regeneration

You do **not** need to show all of them. Only assigned and currently usable entities are rendered on the card.

## Installation

### HACS custom repository

1. Open **HACS**.
2. Open **Custom repositories**.
3. Add:

   ```text
   https://github.com/Borderlane-HA/Pengu-Water-Softener-Home-Assistant-Card
   ```

4. Category: **Dashboard**.
5. Install **Pengu Water Softener Card**.
6. Reload the browser if necessary.

### Manual installation

Copy `pengu-water-softener-card.js` to:

```text
/config/www/pengu-water-softener-card.js
```

Add the dashboard resource:

```yaml
url: /local/pengu-water-softener-card.js
type: module
```

## Add the card

Use the visual card picker:

**Add card → Pengu Water Softener Card**

or YAML:

```yaml
type: custom:pengu-water-softener-card
title: Enthärtungsanlage
language: auto
integration_profile: gruenbeck_softliq
value_style: text
flow_entity: sensor.softliq_sc18_aktueller_durchfluss
raw_hardness_entity: sensor.softliq_sc18_rohwasserharte
remaining_capacity_entity: sensor.softliq_sc18_restkapazitat
regeneration_step_entity: sensor.softliq_sc18_aktueller_regenerationsschritt
```

The example entity IDs are illustrative only. Use the actual entity IDs from your Home Assistant instance.

## Grünbeck auto-assignment

When **Grünbeck softliQ SC (tizianodeg)** is selected as the integration profile, the editor shows an **auto-assign** button.

It scans the Home Assistant entities already loaded in the browser and fills matching empty fields. Existing manual assignments are never overwritten. After auto-assignment, remove any values you do not want to display and position the remaining values with drag & drop.

## Entity picker handling

Entity selection is unit-agnostic. Sensors using units such as `m³/h`, `m3/h`, `°dH`, `%`, `m³`, `L`, `d`, `h` and text-state sensors can be assigned normally.

The editor avoids rebuilding an entity picker while Home Assistant is processing its selection event, preventing selected entities from immediately disappearing again.

## Salt / fill-level handling

The card tries to convert a level entity to a visual percentage.

It works automatically for:

- `0 … 100 %`
- unitless `0 … 1`
- entities exposing a numeric `max`, `max_value`, `maximum`, `upper`, `upper_bound` or `full_scale` attribute

For absolute measurements such as `cm`, `m`, `kg` or `L`, configure **Full-scale value** in the GUI editor if the entity does not expose its maximum.

Example: a salt-level sensor reports `42 cm` and the full useful height is `60 cm`:

```yaml
salt_level_entity: sensor.softener_salt_height
salt_level_max: 60
salt_level_max_unit: cm
salt_level_mode: fill_height
```

If an ultrasonic sensor reports the **distance from the top**, select `distance_top`. The displayed percentage is then inverted automatically.

## Regeneration states and hydraulic flow

For `tizianodeg/gruenbeck_softliQ_SC`, the integration exposes the raw regeneration step as a numeric value and Home Assistant translates it in the UI. The Grünbeck profile maps the same values directly inside the card:

| Raw value | German | English | Visual flow |
| --- | --- | --- | --- |
| `0` | Keine Regeneration | No regeneration | No regeneration flow |
| `1` | Salztank füllen | Fill brine tank | Inlet → salt/brine tank |
| `2` | Salzung | Brining | Brine tank → resin vessel → drain |
| `3` | Langsames Spülen | Slow rinse | Inlet → resin vessel → drain, slow animation |
| `4` | Rückspülen | Backwash | Reverse/up-flow through the resin vessel → drain |
| `5` | Ausspülen | Rinse | Inlet → resin vessel → drain |

Text-based German and English step names are still recognized for generic integrations.

The two animations are deliberately independent:

- **Normal service flow** animates only while the configured `flow_entity` reports a value greater than zero. At `0 m³/h` the service flow is static.
- **Regeneration flow** is driven by the current regeneration step. This is intentional because the normal household-flow sensor can be zero while the softener is internally filling, brining, rinsing or backwashing.

If a usable regeneration-step entity is present, it is authoritative. A raw Grünbeck state of `0` therefore always displays **Keine Regeneration / No regeneration** even if a separate binary sensor is temporarily inconsistent.

## Drag & drop positions

Only configured values appear in the position editor. Drag them to the desired location. Coordinates are stored as percentages, for example:

```yaml
pos_flow_x: 50
pos_flow_y: 12
pos_remaining_capacity_x: 77
pos_remaining_capacity_y: 37
```

Use **Reset value positions** to restore the defaults.

## HACS README images

The README intentionally uses plain Markdown image syntax and absolute HTTPS URLs to PNG files in the repository. This avoids relying on HTML `<picture>` or advanced markup that HACS may render differently from GitHub.

If HACS still shows an older README immediately after a release, refresh the repository information after the new GitHub release/tag is available; HACS can temporarily display cached release metadata.

## Repository

https://github.com/Borderlane-HA/Pengu-Water-Softener-Home-Assistant-Card

## License

MIT
