const PENGU_WATER_VERSION = "0.1.3";

const T = {
  en: {
    card_name: "Pengu Water Softener Card",
    title_default: "Water softener",
    general: "General",
    language: "Language",
    auto: "Automatic",
    german: "German",
    english: "English",
    title: "Title",
    title_placeholder: "Water softener",
    integration_profile: "Integration profile",
    profile_auto: "Automatic / generic",
    profile_gruenbeck: "Grünbeck softliQ SC (tizianodeg)",
    profile_help_auto: "Generic mode for any water-softener integration. Assign the entities you want to show.",
    profile_help_gruenbeck: "Optimized for tizianodeg/gruenbeck_softliQ_SC. The profile can detect the integration's common entities locally in Home Assistant; it does not make additional requests to the softener.",
    auto_assign_profile: "Auto-assign detected Grünbeck entities",
    auto_assign_done: "Detected entities assigned",
    auto_assign_none: "No matching Grünbeck entities found",
    appearance: "Appearance",
    visual_style: "Visual style",
    style_modern: "Clean modern",
    style_technical: "Technical",
    style_compact: "Compact",
    value_style: "Value display",
    value_style_text: "Floating text",
    value_style_compact: "Compact badge",
    value_style_card: "Card",
    value_style_hint: "Floating text uses only the space needed by the label and value. Compact badge adds a subtle background; Card keeps the classic boxed layout.",
    animation_mode: "Flow animation",
    animation_off: "Off",
    animation_subtle: "Subtle",
    animation_normal: "Normal",
    tap_action: "Tap action",
    tap_more_info: "More info",
    tap_none: "None",
    primary_values: "Primary values",
    regeneration: "Regeneration",
    consumption: "Consumption & capacity",
    diagnostics: "Diagnostics",
    controls: "Optional controls",
    label_positions: "Value positions",
    drag_labels_hint: "Drag configured values to the preferred position. Positions are saved as percentages.",
    reset_positions: "Reset value positions",
    salt_level_settings: "Salt / fill level",
    salt_level_mode: "Level interpretation",
    level_auto: "Automatic",
    level_fill_height: "Measured fill height",
    level_distance_top: "Distance from top",
    salt_level_max: "Full-scale value",
    salt_level_max_unit: "Full-scale unit",
    salt_level_max_hint: "Percent and 0…1 sensors work without a full-scale value. For cm/m/mm/kg/L sensors, set the full-scale value if the entity does not expose a maximum attribute.",
    flow_entity: "Current flow",
    raw_hardness_entity: "Raw-water hardness",
    target_hardness_entity: "Target / soft-water hardness",
    salt_level_entity: "Salt / fill level",
    salt_range_entity: "Salt range",
    remaining_capacity_entity: "Remaining capacity",
    remaining_capacity_amount_entity: "Remaining capacity (amount)",
    regeneration_active_entity: "Regeneration active",
    regeneration_step_entity: "Regeneration step",
    regeneration_progress_entity: "Regeneration progress",
    regeneration_remaining_entity: "Remaining regeneration time/amount",
    last_regeneration_entity: "Last regeneration",
    water_yesterday_entity: "Water consumption yesterday",
    average_consumption_entity: "Average consumption",
    peak_flow_entity: "Peak flow",
    total_consumption_entity: "Total consumption",
    total_flow_entity: "Total flow",
    salt_consumption_year_entity: "Salt consumption per year",
    soft_water_meter_entity: "Soft-water meter",
    capacity_number_entity: "Capacity number",
    consumption_capacity_entity: "Consumed capacity rate",
    chlorine_current_entity: "Chlorine current",
    maintenance_days_entity: "Days to next maintenance",
    last_error_entity: "Last error",
    last_error_age_entity: "Last error age",
    software_version_entity: "Software version",
    mode_entity: "Operating mode",
    manual_regeneration_entity: "Manual regeneration button",
    label_flow: "Flow",
    label_raw_hardness: "Raw water",
    label_target_hardness: "Soft water",
    label_salt_level: "Salt level",
    label_salt_range: "Salt range",
    label_remaining_capacity: "Remaining capacity",
    label_remaining_capacity_amount: "Capacity amount",
    label_regeneration: "Regeneration",
    label_regeneration_progress: "Progress",
    label_regeneration_remaining: "Remaining",
    label_last_regeneration: "Last regeneration",
    label_water_yesterday: "Yesterday",
    label_average_consumption: "3-day average",
    label_peak_flow: "Peak flow",
    label_total_consumption: "Total consumption",
    label_total_flow: "Total flow",
    label_salt_consumption_year: "Salt / year",
    label_soft_water_meter: "Soft-water meter",
    label_capacity_number: "Capacity number",
    label_consumption_capacity: "Capacity rate",
    label_chlorine_current: "Chlorine current",
    label_maintenance_days: "Maintenance",
    label_last_error: "Last error",
    label_last_error_age: "Error age",
    label_software_version: "Software",
    label_mode: "Mode",
    label_manual_regeneration: "Manual regeneration",
    no_regeneration: "No regeneration",
    regen_fill: "Fill brine tank",
    regen_brine: "Brining",
    regen_slow_rinse: "Slow rinse",
    regen_backwash: "Backwash",
    regen_rinse: "Rinse",
    regen_unknown: "Regeneration",
    press: "Open",
    no_data_preview: "Assign at least one entity in the card editor.",
    unavailable: "Unavailable"
  },
  de: {
    card_name: "Pengu Water Softener Card",
    title_default: "Enthärtungsanlage",
    general: "Allgemein",
    language: "Sprache",
    auto: "Automatisch",
    german: "Deutsch",
    english: "Englisch",
    title: "Titel",
    title_placeholder: "Enthärtungsanlage",
    integration_profile: "Integrationsprofil",
    profile_auto: "Automatisch / generisch",
    profile_gruenbeck: "Grünbeck softliQ SC (tizianodeg)",
    profile_help_auto: "Generischer Modus für beliebige Enthärtungsanlagen-Integrationen. Es werden nur die von dir zugewiesenen Entitäten angezeigt.",
    profile_help_gruenbeck: "Optimiert für tizianodeg/gruenbeck_softliQ_SC. Das Profil kann die typischen Entitäten lokal in Home Assistant erkennen; die Karte erzeugt keine zusätzlichen Anfragen an die Enthärtungsanlage.",
    auto_assign_profile: "Erkannte Grünbeck-Entitäten automatisch zuweisen",
    auto_assign_done: "Erkannte Entitäten wurden zugewiesen",
    auto_assign_none: "Keine passenden Grünbeck-Entitäten gefunden",
    appearance: "Darstellung",
    visual_style: "Darstellungsstil",
    style_modern: "Modern",
    style_technical: "Technisch",
    style_compact: "Kompakt",
    value_style: "Wertdarstellung",
    value_style_text: "Schwebender Text",
    value_style_compact: "Kompakt",
    value_style_card: "Kachel",
    value_style_hint: "Schwebender Text belegt nur den tatsächlich benötigten Platz. Kompakt ergänzt einen dezenten Hintergrund; Kachel behält die klassische Box-Darstellung.",
    animation_mode: "Durchflussanimation",
    animation_off: "Aus",
    animation_subtle: "Dezent",
    animation_normal: "Normal",
    tap_action: "Tippen",
    tap_more_info: "Mehr Informationen",
    tap_none: "Keine Aktion",
    primary_values: "Hauptwerte",
    regeneration: "Regeneration",
    consumption: "Verbrauch & Kapazität",
    diagnostics: "Diagnose",
    controls: "Optionale Bedienung",
    label_positions: "Wert-Positionen",
    drag_labels_hint: "Konfigurierte Werte per Drag & Drop an die gewünschte Position ziehen. Positionen werden prozentual gespeichert.",
    reset_positions: "Positionen zurücksetzen",
    salt_level_settings: "Salz- / Füllstand",
    salt_level_mode: "Interpretation des Füllstands",
    level_auto: "Automatisch",
    level_fill_height: "Gemessene Füllhöhe",
    level_distance_top: "Abstand von oben",
    salt_level_max: "Voll-Skala",
    salt_level_max_unit: "Einheit Voll-Skala",
    salt_level_max_hint: "Prozent- und 0…1-Sensoren funktionieren ohne Voll-Skala. Für cm/m/mm/kg/L bitte eine Voll-Skala angeben, falls die Entität keinen Maximalwert liefert.",
    flow_entity: "Aktueller Durchfluss",
    raw_hardness_entity: "Rohwasserhärte",
    target_hardness_entity: "Ziel- / Weichwasserhärte",
    salt_level_entity: "Salz- / Füllstand",
    salt_range_entity: "Salzreichweite",
    remaining_capacity_entity: "Restkapazität",
    remaining_capacity_amount_entity: "Verbleibende Kapazität (Menge)",
    regeneration_active_entity: "Regeneration aktiv",
    regeneration_step_entity: "Aktueller Regenerationsschritt",
    regeneration_progress_entity: "Prozentuale Regeneration",
    regeneration_remaining_entity: "Verbleibende Zeit/Menge der Regeneration",
    last_regeneration_entity: "Letzte Regeneration",
    water_yesterday_entity: "Wasserverbrauch gestern",
    average_consumption_entity: "Durchschnittsverbrauch",
    peak_flow_entity: "Flussspitzenwert",
    total_consumption_entity: "Gesamtverbrauch",
    total_flow_entity: "Gesamtdurchfluss",
    salt_consumption_year_entity: "Salzverbrauch pro Jahr",
    soft_water_meter_entity: "Weichwasservolumenmesser",
    capacity_number_entity: "Kapazitätsnummer",
    consumption_capacity_entity: "Verbrauchskapazitätsrate",
    chlorine_current_entity: "Chlorstrom",
    maintenance_days_entity: "Tage bis zur nächsten Wartung",
    last_error_entity: "Letzter Fehler",
    last_error_age_entity: "Alter des letzten Fehlers",
    software_version_entity: "Software-Version",
    mode_entity: "Modus",
    manual_regeneration_entity: "Manuelle Regeneration",
    label_flow: "Durchfluss",
    label_raw_hardness: "Rohwasser",
    label_target_hardness: "Weichwasser",
    label_salt_level: "Salzstand",
    label_salt_range: "Salzreichweite",
    label_remaining_capacity: "Restkapazität",
    label_remaining_capacity_amount: "Kapazitätsmenge",
    label_regeneration: "Regeneration",
    label_regeneration_progress: "Fortschritt",
    label_regeneration_remaining: "Verbleibend",
    label_last_regeneration: "Letzte Regeneration",
    label_water_yesterday: "Gestern",
    label_average_consumption: "Ø 3 Tage",
    label_peak_flow: "Spitzenfluss",
    label_total_consumption: "Gesamtverbrauch",
    label_total_flow: "Gesamtdurchfluss",
    label_salt_consumption_year: "Salz / Jahr",
    label_soft_water_meter: "Weichwasserzähler",
    label_capacity_number: "Kapazitätsnummer",
    label_consumption_capacity: "Kapazitätsrate",
    label_chlorine_current: "Chlorstrom",
    label_maintenance_days: "Wartung",
    label_last_error: "Letzter Fehler",
    label_last_error_age: "Fehleralter",
    label_software_version: "Software",
    label_mode: "Modus",
    label_manual_regeneration: "Manuelle Regeneration",
    no_regeneration: "Keine Regeneration",
    regen_fill: "Salztank füllen",
    regen_brine: "Salzung",
    regen_slow_rinse: "Langsames Spülen",
    regen_backwash: "Rückspülen",
    regen_rinse: "Ausspülen",
    regen_unknown: "Regeneration",
    press: "Öffnen",
    no_data_preview: "Mindestens eine Entität im Karteneditor zuweisen.",
    unavailable: "Nicht verfügbar"
  }
};

const ENTITY_GROUPS = {
  primary: ["flow_entity", "raw_hardness_entity", "target_hardness_entity", "salt_level_entity", "salt_range_entity", "remaining_capacity_entity", "remaining_capacity_amount_entity"],
  regeneration: ["regeneration_active_entity", "regeneration_step_entity", "regeneration_progress_entity", "regeneration_remaining_entity", "last_regeneration_entity"],
  consumption: ["water_yesterday_entity", "average_consumption_entity", "peak_flow_entity", "total_consumption_entity", "total_flow_entity", "soft_water_meter_entity", "capacity_number_entity", "consumption_capacity_entity", "salt_consumption_year_entity"],
  diagnostics: ["chlorine_current_entity", "maintenance_days_entity", "last_error_entity", "last_error_age_entity", "software_version_entity"],
  controls: ["mode_entity", "manual_regeneration_entity"]
};

const POSITION_DEFS = [
  ["flow", "flow_entity", "label_flow", 50, 12],
  ["raw_hardness", "raw_hardness_entity", "label_raw_hardness", 18, 13],
  ["target_hardness", "target_hardness_entity", "label_target_hardness", 82, 13],
  ["remaining_capacity", "remaining_capacity_entity", "label_remaining_capacity", 77, 37],
  ["remaining_capacity_amount", "remaining_capacity_amount_entity", "label_remaining_capacity_amount", 77, 45],
  ["regeneration", "regeneration_step_entity", "label_regeneration", 77, 55],
  ["regeneration_progress", "regeneration_progress_entity", "label_regeneration_progress", 77, 68],
  ["regeneration_remaining", "regeneration_remaining_entity", "label_regeneration_remaining", 77, 80],
  ["last_regeneration", "last_regeneration_entity", "label_last_regeneration", 77, 91],
  ["salt_level", "salt_level_entity", "label_salt_level", 25, 73],
  ["salt_range", "salt_range_entity", "label_salt_range", 25, 91],
  ["water_yesterday", "water_yesterday_entity", "label_water_yesterday", 48, 87],
  ["average_consumption", "average_consumption_entity", "label_average_consumption", 48, 96],
  ["peak_flow", "peak_flow_entity", "label_peak_flow", 61, 27],
  ["total_consumption", "total_consumption_entity", "label_total_consumption", 50, 77],
  ["total_flow", "total_flow_entity", "label_total_flow", 50, 84],
  ["soft_water_meter", "soft_water_meter_entity", "label_soft_water_meter", 50, 66],
  ["capacity_number", "capacity_number_entity", "label_capacity_number", 67, 27],
  ["consumption_capacity", "consumption_capacity_entity", "label_consumption_capacity", 61, 35],
  ["chlorine_current", "chlorine_current_entity", "label_chlorine_current", 34, 29],
  ["maintenance_days", "maintenance_days_entity", "label_maintenance_days", 64, 91],
  ["last_error", "last_error_entity", "label_last_error", 64, 83],
  ["last_error_age", "last_error_age_entity", "label_last_error_age", 64, 88],
  ["software_version", "software_version_entity", "label_software_version", 42, 37],
  ["mode", "mode_entity", "label_mode", 36, 17],
  ["manual_regeneration", "manual_regeneration_entity", "label_manual_regeneration", 36, 95],
  ["salt_consumption_year", "salt_consumption_year_entity", "label_salt_consumption_year", 24, 96]
];

const GRUENBECK_PROFILE_HINTS = {
  flow_entity: ["aktueller durchfluss", "current flow", "current flow rate"],
  raw_hardness_entity: ["rohwasserharte", "raw water hardness"],
  target_hardness_entity: ["weichwasserharte", "zielwasserharte", "soft water hardness", "target water hardness", "target hardness"],
  salt_level_entity: ["salzfullstand", "salzstand", "salt level", "salt fill level"],
  salt_range_entity: ["salzreichweite in tagen", "salzreichweite", "salt range"],
  remaining_capacity_entity: ["restkapazitat", "remaining capacity percent", "remaining capacity %"],
  remaining_capacity_amount_entity: ["verbleibende kapazitat", "remaining capacity amount"],
  regeneration_active_entity: ["regeneration aktiv", "regeneration active"],
  regeneration_step_entity: ["aktueller regenerationsschritt", "current regeneration step", "regeneration step"],
  regeneration_progress_entity: ["prozentuale regeneration", "regeneration progress"],
  regeneration_remaining_entity: ["verbleibende zeit menge des regenerationsschritts", "verbleibende zeit menge der regeneration", "remaining regeneration time", "remaining regeneration amount"],
  last_regeneration_entity: ["letzte regeneration", "last regeneration"],
  water_yesterday_entity: ["wasserverbrauch gestern", "water consumption yesterday"],
  average_consumption_entity: ["durchschnittsverbrauch der letzten 3 tage", "durchschnittsverbrauch", "average consumption"],
  peak_flow_entity: ["flussspitzenwert", "flow peak", "peak flow"],
  total_consumption_entity: ["gesamtverbrauch", "total consumption"],
  total_flow_entity: ["gesamtdurchfluss", "total flow"],
  soft_water_meter_entity: ["weichwasservolumenmesser", "soft water volume meter", "soft-water meter"],
  capacity_number_entity: ["kapazitatsnummer", "capacity number"],
  consumption_capacity_entity: ["verbrauchskapazitatsrate", "consumption capacity rate", "consumed capacity rate"],
  salt_consumption_year_entity: ["salzverbrauch pro jahr", "salt consumption per year"],
  chlorine_current_entity: ["chlorstrom", "chlorine current"],
  maintenance_days_entity: ["tage bis zur nachsten wartung", "days until next maintenance", "days to next maintenance"],
  last_error_age_entity: ["letzter fehler stunden alt", "last error hours old", "last error age"],
  last_error_entity: ["letzter fehler", "last error"],
  software_version_entity: ["software-version", "software version"],
  mode_entity: ["modus", "mode", "operating mode"],
  manual_regeneration_entity: ["manuelle regeneration", "manual regeneration"]
};

function normalizeSearchText(value) {
  return `${value ?? ""}`.toLowerCase()
    .replaceAll("ä", "a").replaceAll("ö", "o").replaceAll("ü", "u").replaceAll("ß", "ss")
    .replace(/[³²]/g, (m) => m === "³" ? "3" : "2")
    .replace(/[^a-z0-9%]+/g, " ").replace(/\s+/g, " ").trim();
}

function entitySearchText(entityId, state) {
  return normalizeSearchText([
    entityId,
    state?.attributes?.friendly_name,
    state?.attributes?.translation_key,
    state?.attributes?.device_class,
    state?.attributes?.unit_of_measurement
  ].filter(Boolean).join(" "));
}

function profileMatchScore(entityId, state, hints) {
  const text = entitySearchText(entityId, state);
  const friendly = normalizeSearchText(state?.attributes?.friendly_name || "");
  let score = 0;
  for (const hintRaw of hints || []) {
    const hint = normalizeSearchText(hintRaw);
    if (!hint) continue;
    if (friendly === hint) score = Math.max(score, 120 + hint.length);
    else if (friendly.includes(hint)) score = Math.max(score, 90 + hint.length);
    else if (text.includes(hint)) score = Math.max(score, 55 + hint.length);
  }
  return score;
}

function findProfileEntity(hass, key) {
  const hints = GRUENBECK_PROFILE_HINTS[key];
  if (!hints || !hass?.states) return null;
  const allowed = key === "manual_regeneration_entity" ? new Set(["button", "input_button", "script"])
    : key === "mode_entity" ? new Set(["select", "input_select", "sensor"])
    : new Set(["sensor", "binary_sensor"]);
  const candidates = Object.entries(hass.states).map(([entityId,state]) => {
    const domain = entityId.split(".")[0];
    if (!allowed.has(domain)) return null;
    let score = profileMatchScore(entityId, state, hints);
    if (!score) return null;
    const unit = `${state?.attributes?.unit_of_measurement || ""}`;
    if (key === "remaining_capacity_entity" && unit === "%") score += 35;
    if (key === "remaining_capacity_amount_entity" && unit && unit !== "%") score += 20;
    if (key === "flow_entity" && /m(?:3|³)\s*\/\s*h/i.test(unit)) score += 35;
    if (key === "raw_hardness_entity" && /dh/i.test(unit)) score += 35;
    return {entityId, score};
  }).filter(Boolean).sort((a,b)=>b.score-a.score);
  return candidates[0]?.entityId || null;
}

function esc(value) {
  return `${value ?? ""}`.replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
}

function tr(lang, key) {
  return (T[lang] || T.en)[key] ?? T.en[key] ?? key;
}

function resolveLanguage(hass, config) {
  if (config?.language && config.language !== "auto") return config.language;
  const lang = hass?.language || hass?.locale?.language || navigator.language || "en";
  return `${lang}`.toLowerCase().startsWith("de") ? "de" : "en";
}

function normalizeConfig(config = {}) {
  return {
    language: "auto",
    integration_profile: "auto",
    visual_style: "modern",
    value_style: "text",
    animation_mode: "subtle",
    tap_action: "more-info",
    salt_level_mode: "auto",
    salt_level_max_unit: "auto",
    ...config
  };
}

function getState(hass, entityId) {
  return entityId ? hass?.states?.[entityId] || null : null;
}

function usableState(hass, entityId) {
  const s = getState(hass, entityId);
  if (!s || s.state === "") return false;
  const domain = `${entityId || ""}`.split(".")[0];
  const value = `${s.state}`.toLowerCase();
  if (domain === "button") return value !== "unavailable";
  return !["unknown", "unavailable", "none", "null"].includes(value);
}

function numState(hass, entityId) {
  const s = getState(hass, entityId);
  if (!s) return null;
  const n = Number(`${s.state}`.replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function unitOf(state) {
  return state?.attributes?.unit_of_measurement || "";
}

function displayUnit(unit) {
  return `${unit || ""}`
    .replace(/m3\/h/gi, "m³/h")
    .replace(/m3\*°?dH/gi, "m³·°dH")
    .replace(/m3/gi, "m³");
}

function decimalCount(value) {
  const a = Math.abs(value);
  if (a >= 100) return 0;
  if (a >= 10) return 1;
  return 2;
}

function formatEntity(hass, entityId, lang, options = {}) {
  const s = getState(hass, entityId);
  if (!s || !usableState(hass, entityId)) return "";
  const domain = `${entityId || ""}`.split(".")[0];
  if (domain === "button") return tr(lang, "press");
  const n = Number(`${s.state}`.replace(",", "."));
  if (Number.isFinite(n) && options.raw !== true) {
    const decimals = options.decimals ?? decimalCount(n);
    const value = new Intl.NumberFormat(lang === "de" ? "de-DE" : "en-US", { minimumFractionDigits: options.fixed ? decimals : 0, maximumFractionDigits: decimals }).format(n);
    const unit = displayUnit(options.unit ?? unitOf(s));
    return `${value}${unit ? ` ${unit}` : ""}`;
  }
  return `${s.state}`;
}

function boolishActive(hass, entityId) {
  const s = getState(hass, entityId);
  if (!s) return false;
  const v = `${s.state}`.toLowerCase();
  return ["on", "true", "active", "running", "yes", "1", "regeneration", "regenerating", "ein", "aktiv", "läuft", "laeuft"].includes(v);
}

function entityLabel(hass, entityId, fallback) {
  return getState(hass, entityId)?.attributes?.friendly_name || fallback;
}

function pos(config, key, x, y) {
  const px = Number(config?.[`pos_${key}_x`]);
  const py = Number(config?.[`pos_${key}_y`]);
  return {
    x: Number.isFinite(px) ? Math.max(3, Math.min(97, px)) : x,
    y: Number.isFinite(py) ? Math.max(3, Math.min(97, py)) : y
  };
}

function convertUnit(value, fromUnit, toUnit) {
  const from = `${fromUnit || ""}`.toLowerCase().replace("³", "3").replace("²", "2");
  const to = `${toUnit || ""}`.toLowerCase().replace("³", "3").replace("²", "2");
  if (!from || !to || from === to || to === "auto") return value;
  const length = { mm: 0.001, cm: 0.01, m: 1 };
  const mass = { g: 0.001, kg: 1 };
  const volume = { ml: 0.001, l: 1, liter: 1, litre: 1, "m3": 1000 };
  for (const family of [length, mass, volume]) {
    if (family[from] && family[to]) return value * family[from] / family[to];
  }
  return value;
}

function findMaxAttribute(state) {
  if (!state?.attributes) return null;
  for (const key of ["max", "max_value", "maximum", "upper", "upper_bound", "full_scale"]) {
    const n = Number(state.attributes[key]);
    if (Number.isFinite(n) && n > 0) return n;
  }
  return null;
}

function saltPercent(hass, config) {
  const state = getState(hass, config.salt_level_entity);
  const value = numState(hass, config.salt_level_entity);
  if (!state || value === null) return null;
  const unit = `${unitOf(state)}`.trim();
  let pct = null;
  if (unit === "%") pct = value;
  else if (!unit && value >= 0 && value <= 1) pct = value * 100;
  else {
    let max = Number(config.salt_level_max);
    if (!Number.isFinite(max) || max <= 0) max = findMaxAttribute(state);
    if (Number.isFinite(max) && max > 0) {
      const maxUnit = config.salt_level_max_unit && config.salt_level_max_unit !== "auto" ? config.salt_level_max_unit : unit;
      const normalized = convertUnit(value, unit, maxUnit);
      pct = normalized / max * 100;
    } else if (!unit && value >= 0 && value <= 100) {
      pct = value;
    }
  }
  if (pct === null) return null;
  if (config.salt_level_mode === "distance_top") pct = 100 - pct;
  return Math.max(0, Math.min(100, pct));
}

function normalizeRegenStep(raw) {
  const v = `${raw || ""}`.trim().toLowerCase();
  if (!v) return "none";
  if (/(keine|none|idle|no regen|standby|bereit)/.test(v)) return "none";
  if (/(salztank.*füll|sole.*füll|brine.*fill|fill.*brine|tank.*fill)/.test(v)) return "fill";
  if (/(salzung|besalz|brin|sole ziehen|draw brine)/.test(v)) return "brine";
  if (/(langsam.*spül|slow.*rinse)/.test(v)) return "slow_rinse";
  if (/(rückspül|rueckspuel|backwash|back wash)/.test(v)) return "backwash";
  if (/(ausspül|ausspuel|fast.*rinse|final.*rinse|rinse)/.test(v)) return "rinse";
  return "unknown";
}

function localizedRegenStep(lang, step, raw) {
  const map = {
    none: "no_regeneration",
    fill: "regen_fill",
    brine: "regen_brine",
    slow_rinse: "regen_slow_rinse",
    backwash: "regen_backwash",
    rinse: "regen_rinse",
    unknown: "regen_unknown"
  };
  return step === "unknown" && raw ? `${raw}` : tr(lang, map[step] || "regen_unknown");
}

function allConfiguredEntityKeys(config) {
  return Object.values(ENTITY_GROUPS).flat().filter((key) => config?.[key]);
}

function hasAnyUsableEntity(hass, config) {
  return allConfiguredEntityKeys(config).some((key) => usableState(hass, config[key]));
}

function getLabel(config, lang, key) {
  return config?.[`custom_${key}`] || tr(lang, `label_${key}`);
}

function pill(config, hass, lang, def, customValue = null, tone = "blue") {
  const [key, entityKey, , dx, dy] = def;
  const entityId = config[entityKey];
  if (!entityId || !usableState(hass, entityId)) return "";
  const p = pos(config, key, dx, dy);
  const value = customValue ?? formatEntity(hass, entityId, lang);
  if (!value) return "";
  const label = getLabel(config, lang, key);
  const valueStyle = ["text","compact","card"].includes(config.value_style) ? config.value_style : "text";
  const statusClass = ["regeneration","last_error","manual_regeneration"].includes(key) ? " status-metric" : "";
  return `<div class="metric value-${valueStyle} tone-${tone}${statusClass}" data-entity-id="${esc(entityId)}" style="left:${p.x}%;top:${p.y}%">
    <span class="metric-label">${esc(label)}</span><span class="metric-value">${esc(value)}</span>
  </div>`;
}

function styles() {
  return `
    :host{display:block}
    ha-card{overflow:hidden}
    .root{font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif);color:var(--primary-text-color);background:var(--ha-card-background,var(--card-background-color,#fff))}
    .header{padding:14px 18px 0;font-size:1.15rem;font-weight:750;line-height:1.2}
    .shell{padding:8px 10px 14px}
    .canvas{position:relative;width:100%;aspect-ratio:10/7.2;min-height:360px;overflow:hidden;border-radius:16px;background:linear-gradient(180deg,rgba(248,250,252,.66),rgba(255,255,255,.1));}
    .diagram{position:absolute;inset:0;width:100%;height:100%}
    .overlay{position:absolute;inset:0;pointer-events:none}
    .metric{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;max-width:230px;pointer-events:auto;cursor:pointer;z-index:4;box-sizing:border-box}
    .metric-label{font-size:.68rem;font-weight:650;color:var(--secondary-text-color,#64748b);white-space:nowrap;line-height:1.15}
    .metric-value{font-size:.96rem;font-weight:760;line-height:1.24;white-space:nowrap;color:var(--primary-text-color,#334155)}
    .value-text{padding:2px 3px;border:0;background:transparent;box-shadow:none;backdrop-filter:none}
    .value-text .metric-label,.value-text .metric-value{text-shadow:0 1px 2px color-mix(in srgb,var(--card-background-color,#fff) 88%,transparent),0 0 5px color-mix(in srgb,var(--card-background-color,#fff) 70%,transparent)}
    .value-compact{padding:5px 8px;border:1px solid rgba(148,163,184,.18);border-radius:8px;background:color-mix(in srgb,var(--card-background-color,#fff) 78%,transparent);box-shadow:0 2px 7px rgba(15,23,42,.045);backdrop-filter:blur(3px)}
    .value-card{min-width:112px;padding:7px 10px;border:1px solid rgba(148,163,184,.32);border-radius:11px;background:color-mix(in srgb,var(--card-background-color,#fff) 92%,transparent);box-shadow:0 3px 10px rgba(15,23,42,.08);backdrop-filter:blur(5px)}
    .value-text.status-metric{padding:4px 7px;border-radius:999px;background:color-mix(in srgb,var(--card-background-color,#fff) 72%,transparent);box-shadow:0 2px 7px rgba(15,23,42,.04);backdrop-filter:blur(3px)}
    .value-text.status-metric .metric-label{font-size:.62rem}
    .tone-red .metric-value{color:var(--error-color,#dc2626)}
    .tone-amber .metric-value{color:#b45309}
    .value-compact.tone-blue,.value-card.tone-blue{border-color:rgba(59,130,246,.24)} .value-compact.tone-green,.value-card.tone-green{border-color:rgba(34,197,94,.30)} .value-compact.tone-amber,.value-card.tone-amber{border-color:rgba(245,158,11,.34)} .value-compact.tone-red,.value-card.tone-red{border-color:rgba(239,68,68,.35)} .value-compact.tone-gray,.value-card.tone-gray{border-color:rgba(100,116,139,.28)}
    .tap-none .metric{cursor:default}
    .empty-note{position:absolute;left:50%;bottom:12px;transform:translateX(-50%);padding:7px 12px;border:1px dashed rgba(148,163,184,.5);border-radius:999px;background:rgba(255,255,255,.88);color:#64748b;font-size:.74rem;white-space:nowrap}
    .pipe{fill:none;stroke:#d7e3ef;stroke-width:22;stroke-linecap:round;stroke-linejoin:round}
    .pipe-edge{fill:none;stroke:#8ea5ba;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;opacity:.62}
    .pipe-water{fill:none;stroke:url(#waterGradient);stroke-width:16;stroke-linecap:round;stroke-linejoin:round;opacity:.92}
    .flow-on .pipe-water{stroke-dasharray:18 16;animation:waterFlow var(--flow-duration,1.7s) linear infinite}
    .anim-off .pipe-water{animation:none;stroke-dasharray:none}
    .anim-subtle.flow-on .pipe-water{stroke-dasharray:30 25;animation-duration:2.6s;opacity:.78}
    .regen-path{fill:none;stroke:#60a5fa;stroke-width:10;stroke-linecap:round;stroke-dasharray:14 12;opacity:0}
    .regen-active .regen-path{opacity:.82;animation:regenDown 1.6s linear infinite}
    .regen-backwash .regen-path{animation-name:regenUp}
    .regen-slow_rinse .regen-path{animation-duration:3.0s}
    .regen-brine .regen-path{stroke:#f59e0b;animation-duration:2.1s}
    .regen-fill .salt-fill-stream{opacity:.9;animation:saltFill 1.2s ease-in-out infinite}
    @keyframes waterFlow{to{stroke-dashoffset:-68}}
    @keyframes regenDown{to{stroke-dashoffset:-52}}
    @keyframes regenUp{to{stroke-dashoffset:52}}
    @keyframes saltFill{0%,100%{opacity:.3;transform:translateY(-3px)}50%{opacity:1;transform:translateY(3px)}}
    .valve{fill:#f8fafc;stroke:#93a4b6;stroke-width:3}
    .cabinet{fill:rgba(248,250,252,.88);stroke:#9ca3af;stroke-width:3}
    .resin{fill:url(#resinGradient);stroke:#9ca3af;stroke-width:3}
    .salt-shell{fill:#fff;stroke:#9ca3af;stroke-width:3}
    .salt-fill{fill:url(#saltPattern);opacity:.95}
    .level-water{fill:#bfdbfe;opacity:.45}
    .status-ring-bg{fill:none;stroke:#e2e8f0;stroke-width:10}
    .status-ring{fill:none;stroke:#3b82f6;stroke-width:10;stroke-linecap:round;transform:rotate(-90deg);transform-origin:750px 446px}
    .style-technical .canvas{background:transparent;border:1px solid rgba(148,163,184,.28);border-radius:10px}
    .style-technical .value-card{border-radius:6px;box-shadow:none;background:var(--card-background-color,#fff)}
    .style-technical .value-compact{border-radius:4px;box-shadow:none}
    .style-compact .header{font-size:1rem;padding-top:10px}.style-compact .shell{padding:4px 7px 9px}.style-compact .canvas{min-height:310px}.style-compact .metric-value{font-size:.86rem}.style-compact .metric-label{font-size:.61rem}.style-compact .value-card{padding:5px 8px;min-width:100px}.style-compact .value-compact{padding:4px 6px}
    @media(max-width:520px){.canvas{min-height:420px;aspect-ratio:8/7.6}.metric{max-width:160px}.value-card{min-width:92px;padding:6px 8px}.value-compact{padding:4px 6px}.metric-label{font-size:.61rem}.metric-value{font-size:.82rem}}
  `;
}

function diagramSvg(hass, config, lang) {
  const flow = numState(hass, config.flow_entity) || 0;
  const flowActive = flow > 0.001;
  const flowDuration = Math.max(.75, Math.min(2.4, 2.1 - Math.min(flow, 3) * .35));
  const rawStep = usableState(hass, config.regeneration_step_entity) ? getState(hass, config.regeneration_step_entity).state : "";
  let step = normalizeRegenStep(rawStep);
  const activeEntity = config.regeneration_active_entity ? boolishActive(hass, config.regeneration_active_entity) : false;
  const regenActive = activeEntity || (step !== "none" && step !== "unknown") || (step === "unknown" && Boolean(rawStep));
  if (!regenActive && !rawStep) step = "none";
  const pct = saltPercent(hass, config);
  const saltY = pct === null ? 584 : 584 - (pct / 100) * 126;
  const saltH = pct === null ? 0 : 584 - saltY;
  const progress = Math.max(0, Math.min(100, numState(hass, config.regeneration_progress_entity) ?? 0));
  const circ = 2 * Math.PI * 48;
  const dash = circ * progress / 100;
  const klass = `${flowActive ? "flow-on" : ""} ${regenActive ? "regen-active" : ""} regen-${step} anim-${config.animation_mode || "subtle"}`;
  return `<svg class="diagram ${klass}" style="--flow-duration:${flowDuration}s" viewBox="0 0 1000 720" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs>
      <linearGradient id="waterGradient" x1="0" x2="1"><stop offset="0" stop-color="#cfe8fb"/><stop offset=".55" stop-color="#6bb7e8"/><stop offset="1" stop-color="#2998d5"/></linearGradient>
      <linearGradient id="resinGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eaf4ff"/><stop offset=".55" stop-color="#cbdcf5"/><stop offset="1" stop-color="#aec8ea"/></linearGradient>
      <pattern id="saltPattern" width="24" height="18" patternUnits="userSpaceOnUse"><rect width="24" height="18" fill="#f8fafc"/><ellipse cx="6" cy="7" rx="6" ry="3" fill="#fff" stroke="#cbd5e1" stroke-width="1.2"/><ellipse cx="18" cy="12" rx="6" ry="3" fill="#fff" stroke="#cbd5e1" stroke-width="1.2"/></pattern>
      <clipPath id="saltClip"><rect x="162" y="458" width="270" height="126" rx="10"/></clipPath>
      <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#0f172a" flood-opacity=".10"/></filter>
    </defs>

    <path class="pipe" d="M0 136 H300 C330 136 345 154 365 154 H465 C490 154 505 136 540 136 H1000"/>
    <path class="pipe-edge" d="M0 124 H300 C330 124 345 142 365 142 H465 C490 142 505 124 540 124 H1000"/>
    <path class="pipe-edge" d="M0 148 H300 C330 148 345 166 365 166 H465 C490 166 505 148 540 148 H1000"/>
    <path class="pipe-water" d="M0 136 H300 C330 136 345 154 365 154 H465 C490 154 505 136 540 136 H1000"/>

    <g filter="url(#softShadow)">
      <rect class="valve" x="318" y="116" width="48" height="74" rx="12"/>
      <rect class="valve" x="466" y="116" width="48" height="74" rx="12"/>
      <rect class="valve" x="356" y="96" width="120" height="70" rx="28"/>
      <rect x="375" y="64" width="29" height="42" rx="7" fill="#737b85"/><rect x="427" y="64" width="29" height="42" rx="7" fill="#737b85"/>
      <rect x="369" y="57" width="40" height="11" rx="4" fill="#8b929a"/><rect x="421" y="57" width="40" height="11" rx="4" fill="#8b929a"/>
    </g>

    <rect class="cabinet" x="130" y="190" width="340" height="430" rx="24" filter="url(#softShadow)"/>
    <path d="M150 240 Q300 212 450 240" fill="none" stroke="#b0b6bd" stroke-width="3"/>
    <path d="M150 250 H450" fill="none" stroke="#d1d5db" stroke-width="2"/>

    <rect class="resin" x="260" y="242" width="100" height="270" rx="48"/>
    <rect x="279" y="270" width="62" height="212" rx="30" fill="#b9cff0" opacity=".35"/>
    <path class="regen-path" d="M310 258 V488"/>
    <path class="regen-path" d="M296 488 V258" opacity=".35"/>
    <path d="M342 168 C342 218 310 225 310 258" fill="none" stroke="#cbdcf5" stroke-width="16" stroke-linecap="round"/>
    <path d="M490 168 C490 206 375 212 352 260" fill="none" stroke="#cbdcf5" stroke-width="16" stroke-linecap="round"/>

    <rect class="salt-shell" x="162" y="446" width="270" height="150" rx="16"/>
    <rect class="level-water" x="162" y="536" width="270" height="48" rx="10" clip-path="url(#saltClip)"/>
    ${pct === null ? "" : `<rect class="salt-fill" x="162" y="${saltY.toFixed(1)}" width="270" height="${saltH.toFixed(1)}" clip-path="url(#saltClip)"/>`}
    <path class="salt-fill-stream" d="M205 430 V476" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" opacity="0"/>

    <g transform="translate(750 446)">
      <circle class="status-ring-bg" cx="0" cy="0" r="48"/>
      ${usableState(hass, config.regeneration_progress_entity) ? `<circle class="status-ring" cx="0" cy="0" r="48" stroke-dasharray="${dash.toFixed(1)} ${(circ-dash).toFixed(1)}"/>` : ""}
      <circle cx="0" cy="0" r="34" fill="${regenActive ? "#e0f2fe" : "#f1f5f9"}" stroke="${regenActive ? "#38bdf8" : "#cbd5e1"}" stroke-width="2"/>
      <path d="M-14 -4 A18 18 0 1 1 -2 17" fill="none" stroke="${regenActive ? "#0284c7" : "#64748b"}" stroke-width="5" stroke-linecap="round"/><path d="M-15 -14 V-3 H-4" fill="none" stroke="${regenActive ? "#0284c7" : "#64748b"}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>`;
}

function overlayHtml(hass, config, lang) {
  const rawStep = usableState(hass, config.regeneration_step_entity) ? getState(hass, config.regeneration_step_entity).state : "";
  const step = normalizeRegenStep(rawStep);
  const regenFallbackEntity = !config.regeneration_step_entity && config.regeneration_active_entity ? config.regeneration_active_entity : null;
  const toneFor = (key) => {
    if (key === "regeneration") return step === "none" ? "gray" : "blue";
    if (key === "last_error") {
      const v = `${getState(hass, config.last_error_entity)?.state || ""}`.toLowerCase();
      return /(kein|none|no error|ok)/.test(v) ? "green" : "red";
    }
    if (key === "salt_level") {
      const pct = saltPercent(hass, config);
      return pct !== null && pct < 20 ? "amber" : "blue";
    }
    return "blue";
  };
  const customValues = {
    regeneration: rawStep ? localizedRegenStep(lang, step, rawStep) : (regenFallbackEntity ? (boolishActive(hass, regenFallbackEntity) ? tr(lang,"regen_unknown") : tr(lang,"no_regeneration")) : null),
    regeneration_progress: usableState(hass, config.regeneration_progress_entity) ? formatEntity(hass, config.regeneration_progress_entity, lang, { decimals:0 }) : null,
    manual_regeneration: config.manual_regeneration_entity ? tr(lang,"press") : null
  };
  return POSITION_DEFS.map((def) => {
    if (def[0] === "regeneration" && regenFallbackEntity && !config.regeneration_step_entity) {
      const shadow = {...config, regeneration_step_entity: regenFallbackEntity};
      return pill(shadow, hass, lang, def, customValues.regeneration, toneFor("regeneration"));
    }
    return pill(config, hass, lang, def, customValues[def[0]] ?? null, toneFor(def[0]));
  }).join("");
}

class PenguWaterSoftenerCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:"open"});
  }
  static getConfigElement() { return document.createElement("pengu-water-softener-card-editor"); }
  static getStubConfig() {
    return { language:"auto", integration_profile:"auto", visual_style:"modern", value_style:"text", animation_mode:"subtle", tap_action:"more-info" };
  }
  setConfig(config) { if (!config) throw new Error("Invalid configuration"); this._config = normalizeConfig(config); this._render(); }
  set hass(hass) { this._hass = hass; this._render(); }
  connectedCallback(){ this._render(); }
  getCardSize(){ return 6; }
  _render(){
    if (!this.shadowRoot || !this._config) return;
    const lang = resolveLanguage(this._hass, this._config);
    const title = this._config.title || tr(lang,"title_default");
    const style = ["modern","technical","compact"].includes(this._config.visual_style) ? this._config.visual_style : "modern";
    const tap = this._config.tap_action === "none" ? "tap-none" : "";
    this.shadowRoot.innerHTML = `<style>${styles()}</style><ha-card><div class="root style-${style} ${tap}"><div class="header">${esc(title)}</div><div class="shell"><div class="canvas">${diagramSvg(this._hass,this._config,lang)}<div class="overlay">${overlayHtml(this._hass,this._config,lang)}${!hasAnyUsableEntity(this._hass,this._config) ? `<div class="empty-note">${esc(tr(lang,"no_data_preview"))}</div>` : ""}</div></div></div></div></ha-card>`;
    this._bindInteractions();
  }
  _bindInteractions(){
    if (this._config.tap_action === "none") return;
    this.shadowRoot?.querySelectorAll("[data-entity-id]").forEach((el) => el.addEventListener("click", (ev) => {
      ev.preventDefault(); ev.stopPropagation();
      const entityId = el.getAttribute("data-entity-id");
      if (!entityId) return;
      this.dispatchEvent(new CustomEvent("hass-more-info", {detail:{entityId}, bubbles:true, composed:true}));
    }));
  }
}

class PenguWaterSoftenerCardEditor extends HTMLElement {
  constructor(){ super(); this.attachShadow({mode:"open"}); this._config = normalizeConfig({}); }
  set hass(hass){ this._hass = hass; if (!this.shadowRoot?.hasChildNodes()) this._render(); else this._assignPickers(); }
  setConfig(config){ const next = normalizeConfig(config || {}); const changed = JSON.stringify(next) !== JSON.stringify(this._config); this._config = next; if (changed || !this.shadowRoot?.hasChildNodes()) this._render(); }
  _fields(group, lang){ return ENTITY_GROUPS[group].map((key) => [key, tr(lang,key)]); }
  _positionItems(lang){
    return POSITION_DEFS.filter(([key,entityKey]) => this._config[entityKey] || (key === "regeneration" && this._config.regeneration_active_entity)).map(([key,entityKey,labelKey,x,y]) => ({key, entityKey, label: this._config[`custom_${key}`] || tr(lang,labelKey), x, y}));
  }
  _posValue(key, axis, fallback){ const n=Number(this._config[`pos_${key}_${axis}`]); return Number.isFinite(n)?Math.max(3,Math.min(97,n)):fallback; }
  _render(){
    if (!this.shadowRoot) return;
    const lang = resolveLanguage(this._hass,this._config);
    const fieldGrid = (group) => this._fields(group,lang).map(([key,label]) => `<div class="field"><label>${esc(label)}</label><ha-entity-picker data-key="${key}" allow-custom-entity></ha-entity-picker></div>`).join("");
    const items = this._positionItems(lang);
    this.shadowRoot.innerHTML = `<style>
      :host{display:block;font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif);color:var(--primary-text-color)}
      .editor{display:grid;gap:14px;padding:4px 0}.panel{border:1px solid rgba(148,163,184,.28);border-radius:14px;padding:14px;background:var(--card-background-color,#fff)}.panel-title{font-weight:750;font-size:.95rem;margin-bottom:12px}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.field{display:flex;flex-direction:column;gap:6px;min-width:0}.field label{font-size:.78rem;font-weight:650;color:var(--secondary-text-color,#64748b)}input[type=text],input[type=number],select{width:100%;box-sizing:border-box;min-height:42px;padding:9px 10px;border:1px solid rgba(148,163,184,.42);border-radius:10px;background:var(--card-background-color,#fff);color:var(--primary-text-color)}.hint{margin-top:10px;font-size:.72rem;color:var(--secondary-text-color,#64748b);line-height:1.4}.position-canvas{position:relative;width:100%;aspect-ratio:10/6.8;min-height:260px;border-radius:14px;border:1px dashed rgba(148,163,184,.55);background:linear-gradient(180deg,rgba(248,250,252,.9),rgba(241,245,249,.75));overflow:hidden;touch-action:none}.drag-chip{position:absolute;transform:translate(-50%,-50%);padding:7px 10px;border:1px solid #bfdbfe;border-radius:10px;background:#fff;box-shadow:0 3px 8px rgba(15,23,42,.08);color:#334155;font-size:.72rem;font-weight:650;cursor:grab;user-select:none;touch-action:none;white-space:nowrap}.drag-chip:active{cursor:grabbing;box-shadow:0 6px 18px rgba(15,23,42,.16)}button.reset,button.profile-auto{margin-top:10px;border:1px solid rgba(148,163,184,.4);border-radius:9px;background:var(--card-background-color,#fff);color:var(--primary-text-color);padding:8px 11px;cursor:pointer}.mini-hint{margin-top:6px;font-size:.69rem;color:var(--secondary-text-color,#64748b);line-height:1.35}@media(max-width:620px){.grid{grid-template-columns:1fr}}
    </style><div class="editor">
      <div class="panel"><div class="panel-title">${esc(tr(lang,"general"))}</div><div class="grid">
        <div class="field"><label>${esc(tr(lang,"language"))}</label><select data-key="language"><option value="auto" ${this._config.language==="auto"?"selected":""}>${esc(tr(lang,"auto"))}</option><option value="de" ${this._config.language==="de"?"selected":""}>${esc(tr(lang,"german"))}</option><option value="en" ${this._config.language==="en"?"selected":""}>${esc(tr(lang,"english"))}</option></select></div>
        <div class="field"><label>${esc(tr(lang,"integration_profile"))}</label><select data-key="integration_profile"><option value="auto" ${this._config.integration_profile==="auto"?"selected":""}>${esc(tr(lang,"profile_auto"))}</option><option value="gruenbeck_softliq" ${this._config.integration_profile==="gruenbeck_softliq"?"selected":""}>${esc(tr(lang,"profile_gruenbeck"))}</option></select><div class="mini-hint">${esc(this._config.integration_profile==="gruenbeck_softliq"?tr(lang,"profile_help_gruenbeck"):tr(lang,"profile_help_auto"))}</div>${this._config.integration_profile==="gruenbeck_softliq"?`<button class="profile-auto" type="button" id="autoAssignProfile">${esc(tr(lang,"auto_assign_profile"))}</button><div class="mini-hint" id="profileAssignStatus"></div>`:""}</div>
        <div class="field"><label>${esc(tr(lang,"title"))}</label><input type="text" data-key="title" value="${esc(this._config.title||"")}" placeholder="${esc(tr(lang,"title_placeholder"))}"></div>
      </div></div>

      <div class="panel"><div class="panel-title">${esc(tr(lang,"appearance"))}</div><div class="grid">
        <div class="field"><label>${esc(tr(lang,"visual_style"))}</label><select data-key="visual_style"><option value="modern" ${this._config.visual_style==="modern"?"selected":""}>${esc(tr(lang,"style_modern"))}</option><option value="technical" ${this._config.visual_style==="technical"?"selected":""}>${esc(tr(lang,"style_technical"))}</option><option value="compact" ${this._config.visual_style==="compact"?"selected":""}>${esc(tr(lang,"style_compact"))}</option></select></div>
        <div class="field"><label>${esc(tr(lang,"value_style"))}</label><select data-key="value_style"><option value="text" ${this._config.value_style==="text"?"selected":""}>${esc(tr(lang,"value_style_text"))}</option><option value="compact" ${this._config.value_style==="compact"?"selected":""}>${esc(tr(lang,"value_style_compact"))}</option><option value="card" ${this._config.value_style==="card"?"selected":""}>${esc(tr(lang,"value_style_card"))}</option></select><div class="mini-hint">${esc(tr(lang,"value_style_hint"))}</div></div>
        <div class="field"><label>${esc(tr(lang,"animation_mode"))}</label><select data-key="animation_mode"><option value="off" ${this._config.animation_mode==="off"?"selected":""}>${esc(tr(lang,"animation_off"))}</option><option value="subtle" ${this._config.animation_mode==="subtle"?"selected":""}>${esc(tr(lang,"animation_subtle"))}</option><option value="normal" ${this._config.animation_mode==="normal"?"selected":""}>${esc(tr(lang,"animation_normal"))}</option></select></div>
        <div class="field"><label>${esc(tr(lang,"tap_action"))}</label><select data-key="tap_action"><option value="more-info" ${this._config.tap_action!=="none"?"selected":""}>${esc(tr(lang,"tap_more_info"))}</option><option value="none" ${this._config.tap_action==="none"?"selected":""}>${esc(tr(lang,"tap_none"))}</option></select></div>
      </div></div>

      <div class="panel"><div class="panel-title">${esc(tr(lang,"primary_values"))}</div><div class="grid">${fieldGrid("primary")}</div></div>
      <div class="panel"><div class="panel-title">${esc(tr(lang,"regeneration"))}</div><div class="grid">${fieldGrid("regeneration")}</div></div>
      <div class="panel"><div class="panel-title">${esc(tr(lang,"consumption"))}</div><div class="grid">${fieldGrid("consumption")}</div></div>
      <div class="panel"><div class="panel-title">${esc(tr(lang,"diagnostics"))}</div><div class="grid">${fieldGrid("diagnostics")}</div></div>
      <div class="panel"><div class="panel-title">${esc(tr(lang,"controls"))}</div><div class="grid">${fieldGrid("controls")}</div></div>

      <div class="panel"><div class="panel-title">${esc(tr(lang,"salt_level_settings"))}</div><div class="grid">
        <div class="field"><label>${esc(tr(lang,"salt_level_mode"))}</label><select data-key="salt_level_mode"><option value="auto" ${this._config.salt_level_mode==="auto"?"selected":""}>${esc(tr(lang,"level_auto"))}</option><option value="fill_height" ${this._config.salt_level_mode==="fill_height"?"selected":""}>${esc(tr(lang,"level_fill_height"))}</option><option value="distance_top" ${this._config.salt_level_mode==="distance_top"?"selected":""}>${esc(tr(lang,"level_distance_top"))}</option></select></div>
        <div class="field"><label>${esc(tr(lang,"salt_level_max"))}</label><input type="number" step="any" min="0" data-key="salt_level_max" value="${esc(this._config.salt_level_max ?? "")}"></div>
        <div class="field"><label>${esc(tr(lang,"salt_level_max_unit"))}</label><select data-key="salt_level_max_unit"><option value="auto" ${this._config.salt_level_max_unit==="auto"?"selected":""}>${esc(tr(lang,"auto"))}</option>${["mm","cm","m","g","kg","ml","L","m³"].map(u=>`<option value="${u}" ${this._config.salt_level_max_unit===u?"selected":""}>${u}</option>`).join("")}</select></div>
      </div><div class="hint">${esc(tr(lang,"salt_level_max_hint"))}</div></div>

      <div class="panel"><div class="panel-title">${esc(tr(lang,"label_positions"))}</div><div class="position-canvas" id="positionCanvas">${items.map(i=>`<div class="drag-chip" data-position-key="${i.key}" style="left:${this._posValue(i.key,"x",i.x)}%;top:${this._posValue(i.key,"y",i.y)}%">${esc(i.label)}</div>`).join("")}</div><button class="reset" type="button" id="resetPositions">${esc(tr(lang,"reset_positions"))}</button><div class="hint">${esc(tr(lang,"drag_labels_hint"))}</div></div>
    </div>`;
    this._bind(); this._drag(); this._assignPickers();
  }
  _assignPickers(){
    this.shadowRoot?.querySelectorAll("ha-entity-picker").forEach((picker)=>{ const key=picker.dataset.key; picker.hass=this._hass; picker.value=this._config[key]||""; picker.requestUpdate?.(); });
  }
  _bind(){
    this.shadowRoot?.querySelectorAll("input[data-key],select[data-key]").forEach((el)=>{
      const evName = el.tagName === "SELECT" ? "change" : "input";
      el.addEventListener(evName,()=>{ const key=el.dataset.key; let value=el.value; if(el.type==="number" && value!=="") value=Number(value); this._update(key,value); });
    });
    this.shadowRoot?.querySelectorAll("ha-entity-picker").forEach((picker)=>{
      picker.addEventListener("value-changed",(ev)=>{
        const value = ev.detail?.value ?? picker.value ?? "";
        this._update(picker.dataset.key,value);
      });
      // Some Home Assistant versions also emit a native change event. Only use it
      // as a non-empty fallback so it cannot erase the value just selected above.
      picker.addEventListener("change",(ev)=>{
        const value = ev.detail?.value ?? ev.target?.value;
        if (typeof value === "string" && value && value !== this._config[picker.dataset.key]) this._update(picker.dataset.key,value);
      });
    });
    this.shadowRoot?.getElementById("autoAssignProfile")?.addEventListener("click",()=>this._autoAssignProfile());
    this.shadowRoot?.getElementById("resetPositions")?.addEventListener("click",()=>{
      const next={...this._config}; Object.keys(next).filter(k=>/^pos_.*_[xy]$/.test(k)).forEach(k=>delete next[k]); this._config=next; this._emit(); this._render();
    });
  }
  _drag(){
    this.shadowRoot?.querySelectorAll(".drag-chip").forEach((chip)=>chip.addEventListener("pointerdown",(ev)=>{
      ev.preventDefault(); const canvas=chip.closest(".position-canvas"); const key=chip.dataset.positionKey; if(!canvas||!key)return;
      const move=(e)=>{ const r=canvas.getBoundingClientRect(); const x=Math.max(3,Math.min(97,((e.clientX-r.left)/r.width)*100)); const y=Math.max(3,Math.min(97,((e.clientY-r.top)/r.height)*100)); chip.style.left=`${x}%`;chip.style.top=`${y}%`;chip.dataset.x=x.toFixed(1);chip.dataset.y=y.toFixed(1); };
      const stop=(e)=>{ move(e); chip.releasePointerCapture?.(e.pointerId); chip.removeEventListener("pointermove",move);chip.removeEventListener("pointerup",stop);chip.removeEventListener("pointercancel",stop); this._config={...this._config,[`pos_${key}_x`]:Number(chip.dataset.x),[`pos_${key}_y`]:Number(chip.dataset.y)};this._emit(); };
      chip.setPointerCapture?.(ev.pointerId);chip.addEventListener("pointermove",move);chip.addEventListener("pointerup",stop);chip.addEventListener("pointercancel",stop);
    }));
  }
  _update(key,value){
    const next={...this._config};
    if(value===""||value===null||value===undefined||Number.isNaN(value)) delete next[key]; else next[key]=value;
    this._config=normalizeConfig(next);
    this._emit();
    // Do not rebuild the complete editor after an entity-picker change. Replacing
    // the picker while its value-changed event is still being handled can cause
    // Home Assistant to restore the previous value. Only refresh the drag area.
    if (key.endsWith("_entity")) this._refreshPositions();
    else if(["language","integration_profile","visual_style","value_style","salt_level_mode","salt_level_max_unit"].includes(key)) this._render();
  }
  _refreshPositions(){
    const canvas=this.shadowRoot?.getElementById("positionCanvas");
    if(!canvas)return;
    const lang=resolveLanguage(this._hass,this._config);
    canvas.innerHTML=this._positionItems(lang).map(i=>`<div class="drag-chip" data-position-key="${i.key}" style="left:${this._posValue(i.key,"x",i.x)}%;top:${this._posValue(i.key,"y",i.y)}%">${esc(i.label)}</div>`).join("");
    this._drag();
  }
  _autoAssignProfile(){
    if(this._config.integration_profile!=="gruenbeck_softliq" || !this._hass)return;
    const next={...this._config};
    let count=0;
    Object.keys(GRUENBECK_PROFILE_HINTS).forEach((key)=>{
      if(next[key])return;
      const found=findProfileEntity(this._hass,key);
      if(found){ next[key]=found; count+=1; }
    });
    this._config=normalizeConfig(next);
    this._emit();
    this._render();
    const lang=resolveLanguage(this._hass,this._config);
    const status=this.shadowRoot?.getElementById("profileAssignStatus");
    if(status) status.textContent=count?`${tr(lang,"auto_assign_done")}: ${count}`:tr(lang,"auto_assign_none");
  }
  _emit(){ this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:true,composed:true})); }
}

if (!customElements.get("pengu-water-softener-card")) customElements.define("pengu-water-softener-card", PenguWaterSoftenerCard);
if (!customElements.get("pengu-water-softener-card-editor")) customElements.define("pengu-water-softener-card-editor", PenguWaterSoftenerCardEditor);

window.customCards = window.customCards || [];
if (!window.customCards.some((c)=>c.type==="pengu-water-softener-card")) {
  window.customCards.push({
    type:"pengu-water-softener-card",
    name:"Pengu Water Softener Card",
    preview:true,
    description:"Visual water-softener card with floating values, flow, hardness, salt level, capacity and regeneration animation.",
    documentationURL:"https://github.com/Borderlane-HA/Pengu-Water-Softener-Home-Assistant-Card",
    getEntitySuggestion:(hass,entityId)=>{
      const s=hass?.states?.[entityId]; if(!s)return null;
      const n=`${s.attributes?.friendly_name||entityId}`.toLowerCase();
      let config={type:"custom:pengu-water-softener-card"};
      if(/(durchfluss|flow)/.test(n)) config.flow_entity=entityId;
      else if(/(rohwasser.*härte|rohwasser.*haerte|raw.*hardness)/.test(n)) config.raw_hardness_entity=entityId;
      else if(/(weichwasser.*härte|weichwasser.*haerte|ziel.*härte|ziel.*haerte|target.*hardness|soft.*hardness)/.test(n)) config.target_hardness_entity=entityId;
      else if(/(salz.*reich|salt.*range)/.test(n)) config.salt_range_entity=entityId;
      else if(/(salz.*stand|salt.*level|füllstand|fuellstand)/.test(n)) config.salt_level_entity=entityId;
      else if(/(restkapaz|remaining.*capacity)/.test(n)) config.remaining_capacity_entity=entityId;
      else if(/(regeneration.*schritt|regeneration.*step)/.test(n)) config.regeneration_step_entity=entityId;
      else return null;
      return {config};
    }
  });
}
console.info(`%c PENGU-WATER-SOFTENER %c ${PENGU_WATER_VERSION} `,"color:white;background:#0284c7;font-weight:700;","color:#0284c7;background:white;font-weight:700;");
