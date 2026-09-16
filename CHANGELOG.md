# Changelog

## 0.1.3

- Removed the fixed **Salt level** text from the water-softener schematic.
- Removed the fixed salt percentage text from the tank; the fill level remains visualized graphically and can be shown as a movable value instead.
- Removed the fixed **No regeneration / regeneration step** text below the regeneration icon.
- Salt level and regeneration state are now shown only when configured as normal movable card values, avoiding duplicate labels in the diagram.

## 0.1.2

- Added three value display modes: **Floating text**, **Compact badge**, and **Card**.
- Changed the default value display to **Floating text** to reduce visual clutter and make drag-and-drop positioning more precise.
- Removed fixed minimum widths, borders, shadows and backgrounds from normal values in Floating text mode.
- Kept regeneration/error controls as subtle status pills in Floating text mode for better state recognition.
- Preserved the classic boxed layout as the optional `value_style: card` mode.
- Added `value_style: compact` for a lightweight translucent alternative.
- Updated responsive styling for the new value modes.
- Rebuilt the project banner specifically for **Pengu Water Softener Card** (the previous PNG still contained Pengu Heat Card artwork).
- Rebuilt the README preview to show the new floating-value layout.
- Changed README images from HTML `<img>` blocks to plain Markdown images with absolute HTTPS PNG URLs for better HACS compatibility.
- Removed the hard-coded current-version line from the README to avoid stale version text in HACS caches.

## 0.1.1

- Fixed entity selections not being retained in the visual editor.
- Prevented empty fallback picker events from clearing a just-selected entity.
- Entity changes now refresh only the drag-and-drop position area instead of rebuilding the complete editor.
- Verified the picker logic is unit-agnostic, including `m³/h`, `m3/h`, `°dH`, `%`, `m³`, `L`, `d`, `h` and text-state sensors.
- Added a dedicated **Grünbeck softliQ SC (tizianodeg)** integration profile.
- Added optional automatic assignment of commonly exposed `tizianodeg/gruenbeck_softliQ_SC` entities.
- Added optional fields for remaining-capacity amount, total flow, salt consumption per year and last-error age.
- Improved common unit rendering (`m3/h` → `m³/h`, `m3` → `m³`).
- Updated all repository/documentation links to `Borderlane-HA/Pengu-Water-Softener-Home-Assistant-Card`.
- Switched README images to absolute raw GitHub PNG URLs for reliable rendering in HACS.

## 0.1.0

- Initial public preview.
- Visual water-softener schematic with animated water flow.
- Optional raw-water and target-water hardness values.
- Salt/fill-level visualization with automatic percent/unit handling and configurable full-scale value.
- Remaining capacity, salt range and last regeneration display.
- Regeneration-step recognition for common English/German step names, including Grünbeck softliQ-style states.
- Step-aware regeneration animation for fill, brining, slow rinse, backwash and rinse.
- Optional consumption, flow peak, maintenance, error, software and diagnostic entities.
- Values without a configured/usable entity are not rendered.
- Drag-and-drop positioning of configured value labels in the GUI editor.
- German / English UI with automatic Home Assistant language detection.
- Home Assistant entity pickers and More-info interaction.
