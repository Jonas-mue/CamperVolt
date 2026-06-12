// ================================================
// AMAZON PRODUKT-DATENBANK (erweitert mit Kleinteilen)
// Platzhalter-Links - durch echte Affiliate-Links ersetzen!
// ================================================
const AMAZON_PRODUCTS = {
  // --- POWERSTATIONEN ---
  ecoflow_delta2:     { name:'EcoFlow DELTA 2 (1024 Wh)', icon:'🔋', desc:'Ideal bis ~900 Wh/Tag. 5 Ladearten, App-Steuerung.', price:'ca. 699€', url:'https://www.amazon.de/s?k=EcoFlow+DELTA+2&tag=DEIN-TAG-21', qty:'1x' },
  ecoflow_delta2max:  { name:'EcoFlow DELTA 2 Max (2048 Wh)', icon:'🔋', desc:'Bis 2+ Tage ohne Nachladen. Für Poweruser.', price:'ca. 1.099€', url:'https://www.amazon.de/s?k=EcoFlow+DELTA+2+Max&tag=DEIN-TAG-21', qty:'1x' },
  jackery1000pro:     { name:'Jackery Explorer 1000 Pro', icon:'🔌', desc:'Robust, 1002Wh, 3× 230V Ausgänge.', price:'ca. 749€', url:'https://www.amazon.de/s?k=Jackery+Explorer+1000+Pro&tag=DEIN-TAG-21', qty:'1x' },
  solartasche200:     { name:'EcoFlow 220W faltbares Solarpanel', icon:'☀️', desc:'Plug & Play direkt an Powerstation. Ideal für Schatten-Parken.', price:'ca. 299€', url:'https://www.amazon.de/s?k=EcoFlow+220W+Solarpanel+faltbar&tag=DEIN-TAG-21', qty:'1x' },

  // --- BATTERIEN ---
  lifepo4_100:        { name:'LiFePO4 100 Ah Batterie 12V', icon:'🔋', desc:'Lithium-Eisenphosphat, BMS, Bluetooth. z.B. Liontron oder Enjoybot.', price:'ca. 280€', url:'https://www.amazon.de/s?k=LiFePO4+100Ah+12V+Wohnmobil&tag=DEIN-TAG-21', qty:'1x' },
  lifepo4_150:        { name:'LiFePO4 150 Ah Batterie 12V', icon:'🔋', desc:'Für mittlere bis größere Systeme.', price:'ca. 420€', url:'https://www.amazon.de/s?k=LiFePO4+150Ah+12V&tag=DEIN-TAG-21', qty:'1x' },
  lifepo4_200:        { name:'LiFePO4 200 Ah Batterie 12V', icon:'🔋', desc:'Für mittlere Systeme. 2× 100Ah oder 1× 200Ah-Block.', price:'ca. 520€', url:'https://www.amazon.de/s?k=LiFePO4+200Ah+12V&tag=DEIN-TAG-21', qty:'1x' },
  lifepo4_300:        { name:'LiFePO4 300 Ah Batterie 12V (Set)', icon:'🔋', desc:'Für High-End-Systeme mit hohem Bedarf.', price:'ca. 780€', url:'https://www.amazon.de/s?k=LiFePO4+300Ah+12V&tag=DEIN-TAG-21', qty:'1x' },
  agm_100:            { name:'AGM Batterie 100 Ah 12V', icon:'🔋', desc:'Klassische Bleibatterie, wartungsfrei.', price:'ca. 160€', url:'https://www.amazon.de/s?k=AGM+Batterie+100Ah+12V+Wohnmobil&tag=DEIN-TAG-21', qty:'1x' },
  agm_200:            { name:'AGM Batterie 200 Ah 12V (2x100Ah)', icon:'🔋', desc:'Doppelte Kapazität für AGM-Systeme.', price:'ca. 320€', url:'https://www.amazon.de/s?k=AGM+Batterie+200Ah+12V&tag=DEIN-TAG-21', qty:'2x' },

  // --- LADEQUELLEN ---
  ladebooster_18:     { name:'Victron Orion-Tr Smart 12/12-18A', icon:'⚡', desc:'Isolierter DC/DC Wandler für kleinere Systeme.', price:'ca. 130€', url:'https://www.amazon.de/s?k=Victron+Orion+Smart+18A&tag=DEIN-TAG-21', qty:'1x' },
  ladebooster_30:     { name:'Victron Orion-Tr Smart 12/12-30A', icon:'⚡', desc:'Isolierter DC/DC Wandler. Schont Lima, lädt auch LiFePO4.', price:'ca. 170€', url:'https://www.amazon.de/s?k=Victron+Orion+Smart+30A&tag=DEIN-TAG-21', qty:'1x' },
  mppt_solar_75_15:   { name:'Victron SmartSolar MPPT 75/15', icon:'☀️', desc:'Solarregler für Dachmontage & Solartaschen bis 200W. Bluetooth + App.', price:'ca. 65€', url:'https://www.amazon.de/s?k=Victron+SmartSolar+MPPT+75+15&tag=DEIN-TAG-21', qty:'1x' },
  mppt_solar_100_20:  { name:'Victron SmartSolar MPPT 100/20', icon:'☀️', desc:'Für Anlagen bis 280W. Bluetooth + App.', price:'ca. 90€', url:'https://www.amazon.de/s?k=Victron+SmartSolar+MPPT+100+20&tag=DEIN-TAG-21', qty:'1x' },
  mppt_solar_100_30:  { name:'Victron SmartSolar MPPT 100/30', icon:'☀️', desc:'Für 200–400 Wp Solaranlagen. Perfekt für Mid/High-End.', price:'ca. 110€', url:'https://www.amazon.de/s?k=Victron+SmartSolar+MPPT+100+30&tag=DEIN-TAG-21', qty:'1x' },
  mppt_solar_100_50:  { name:'Victron SmartSolar MPPT 100/50', icon:'☀️', desc:'Für High-End Anlagen über 400Wp.', price:'ca. 180€', url:'https://www.amazon.de/s?k=Victron+SmartSolar+MPPT+100+50&tag=DEIN-TAG-21', qty:'1x' },
  solar_panel_100:    { name:'100 Wp Solarpanel Starr (Mono)', icon:'☀️', desc:'Rigid für Dachmontage. Sehr effizient & langlebig.', price:'ca. 90€', url:'https://www.amazon.de/s?k=100W+Solarpanel+Mono+Wohnmobil&tag=DEIN-TAG-21', qty:'1x' },
  solar_panel_200:    { name:'200 Wp Solarpanel Starr (Mono)', icon:'☀️', desc:'High-Power Dachmontage. Ideal für Vollsysteme.', price:'ca. 160€', url:'https://www.amazon.de/s?k=200W+Solarpanel+Mono+Wohnmobil&tag=DEIN-TAG-21', qty:'1x' },
  flex_panel_100:     { name:'Flexibles Solarpanel 100W (Thin Film)', icon:'☀️', desc:'Zum Aufkleben. Kein Bohren nötig, wiegt nur 1,3 kg.', price:'ca. 80€', url:'https://www.amazon.de/s?k=Flexibles+Solarpanel+100W+Wohnmobil&tag=DEIN-TAG-21', qty:'1x' },
  flex_panel_200:     { name:'2x Flexibles Solarpanel 100W (Set)', icon:'☀️', desc:'Für mehr Leistung bei Höhenbeschränkung.', price:'ca. 150€', url:'https://www.amazon.de/s?k=2x+Flexibles+Solarpanel+100W&tag=DEIN-TAG-21', qty:'2x' },
  anderson_buchse:    { name:'Anderson Stecker-Set (SB50, Außenwand)', icon:'🔌', desc:'Für mobile Solartaschen-Verbindung von außen.', price:'ca. 25€', url:'https://www.amazon.de/s?k=Anderson+Stecker+SB50+Set&tag=DEIN-TAG-21', qty:'1x' },
  cee_einbaubuchse:   { name:'CEE Einbaubuchse 230V mit Deckel', icon:'🔌', desc:'Für Landstrom-Anschluss an der Außenwand.', price:'ca. 18€', url:'https://www.amazon.de/s?k=CEE+Einbaubuchse+230V+Wohnmobil&tag=DEIN-TAG-21', qty:'1x' },
  ladegeraet_230v:    { name:'230V Ladegerät / Netzteil 12V 20A', icon:'🔌', desc:'Lädt die Batterie über Landstrom (z.B. Votronic, CTEK).', price:'ca. 95€', url:'https://www.amazon.de/s?k=230V+Ladegeraet+12V+20A+Wohnmobil&tag=DEIN-TAG-21', qty:'1x' },

  // --- WECHSELRICHTER ---
  wechselrichter_1000: { name:'Renogy 1000W Reiner Sinus Wechselrichter', icon:'🔌', desc:'Für Laptop, kleine Geräte.', price:'ca. 130€', url:'https://www.amazon.de/s?k=Renogy+1000W+Reiner+Sinus+Wechselrichter&tag=DEIN-TAG-21', qty:'1x' },
  wechselrichter_2000: { name:'Renogy 2000W Reiner Sinus Wechselrichter', icon:'🔌', desc:'Für Induktion, Kaffeemaschine & Laptop-Netzteil. Reiner Sinus!', price:'ca. 189€', url:'https://www.amazon.de/s?k=Renogy+2000W+Reiner+Sinus+Wechselrichter&tag=DEIN-TAG-21', qty:'1x' },
  wechselrichter_3000: { name:'Victron Multiplus 12/3000', icon:'🔌', desc:'Wechselrichter/Ladegerät kombiniert. High-End Standard.', price:'ca. 850€', url:'https://www.amazon.de/s?k=Victron+Multiplus+12+3000&tag=DEIN-TAG-21', qty:'1x' },

  // --- ÜBERWACHUNG ---
  shunt:              { name:'Victron SmartShunt 500A', icon:'📊', desc:'Batterie-Monitor. Präzise Anzeige via Bluetooth-App.', price:'ca. 65€', url:'https://www.amazon.de/s?k=Victron+SmartShunt+500A&tag=DEIN-TAG-21', qty:'1x' },

  // --- VERTEILUNG / SCHUTZ ---
  batterie_trennschalter: { name:'Batterie-Trennschalter 12V 250A', icon:'🔴', desc:'Zentraler Hauptschalter zum kompletten Trennen der Anlage.', price:'ca. 22€', url:'https://www.amazon.de/s?k=Batterie+Trennschalter+12V+250A&tag=DEIN-TAG-21', qty:'1x' },
  sicherungshalter_midi: { name:'MIDI-Sicherungshalter mit Sicherung (80-250A)', icon:'🛡️', desc:'Schützt Hauptleitungen direkt am Batterie-Pluspol.', price:'ca. 12€', url:'https://www.amazon.de/s?k=MIDI+Sicherungshalter+Wohnmobil&tag=DEIN-TAG-21', qty:'2-3x' },
  sicherungsverteiler_plus: { name:'Plus-Verteiler / Sammelschiene 12V (mit Sicherungen)', icon:'⚡', desc:'Verteilt die Plus-Leitung auf mehrere Verbraucher mit Einzelabsicherung (z.B. Blue Sea ST-Blade).', price:'ca. 35€', url:'https://www.amazon.de/s?k=Sicherungsverteiler+12V+Wohnmobil&tag=DEIN-TAG-21', qty:'1x' },
  minus_sammelschiene: { name:'Minus-Sammelschiene / Massepunkt', icon:'⚫', desc:'Zentraler Massepunkt für alle Minus-Leitungen.', price:'ca. 15€', url:'https://www.amazon.de/s?k=Minus+Sammelschiene+Wohnmobil&tag=DEIN-TAG-21', qty:'1x' },
  victron_lynx:       { name:'Victron Lynx Distributor (Verteiler)', icon:'⚡', desc:'High-End Verteilerblock mit integrierten Sicherungen.', price:'ca. 130€', url:'https://www.amazon.de/s?k=Victron+Lynx+Distributor&tag=DEIN-TAG-21', qty:'1x' },

  // --- KABEL (Meterware) ---
  kabel_50mm_rot:     { name:'Batteriekabel 50mm² Rot (Meterware)', icon:'🔴', desc:'Hochstrom-Plusleitung für High-End Wechselrichter.', price:'ca. 9€/m', url:'https://www.amazon.de/s?k=Batteriekabel+50mm+rot+Meterware&tag=DEIN-TAG-21', qty:'{m}m' },
  kabel_50mm_schwarz: { name:'Batteriekabel 50mm² Schwarz (Meterware)', icon:'⚫', desc:'Hochstrom-Minusleitung für High-End Wechselrichter.', price:'ca. 9€/m', url:'https://www.amazon.de/s?k=Batteriekabel+50mm+schwarz+Meterware&tag=DEIN-TAG-21', qty:'{m}m' },
  kabel_35mm_rot:     { name:'Batteriekabel 35mm² Rot (Meterware)', icon:'🔴', desc:'Plusleitung Hauptstromkreis (Wechselrichter/Ladebooster).', price:'ca. 6,50€/m', url:'https://www.amazon.de/s?k=Batteriekabel+35mm+rot+Meterware&tag=DEIN-TAG-21', qty:'{m}m' },
  kabel_35mm_schwarz: { name:'Batteriekabel 35mm² Schwarz (Meterware)', icon:'⚫', desc:'Minusleitung Hauptstromkreis.', price:'ca. 6,50€/m', url:'https://www.amazon.de/s?k=Batteriekabel+35mm+schwarz+Meterware&tag=DEIN-TAG-21', qty:'{m}m' },
  kabel_25mm_rot:     { name:'Batteriekabel 25mm² Rot (Meterware)', icon:'🔴', desc:'Plusleitung für Ladebooster-Verbindung zur Starterbatterie.', price:'ca. 4,80€/m', url:'https://www.amazon.de/s?k=Batteriekabel+25mm+rot+Meterware&tag=DEIN-TAG-21', qty:'{m}m' },
  kabel_25mm_schwarz: { name:'Batteriekabel 25mm² Schwarz (Meterware)', icon:'⚫', desc:'Minusleitung für Ladebooster.', price:'ca. 4,80€/m', url:'https://www.amazon.de/s?k=Batteriekabel+25mm+schwarz+Meterware&tag=DEIN-TAG-21', qty:'{m}m' },
  kabel_16mm_rot:     { name:'Batteriekabel 16mm² Rot (Meterware)', icon:'🔴', desc:'Plusleitung für mittlere Verbraucher-Kreise.', price:'ca. 3,20€/m', url:'https://www.amazon.de/s?k=Batteriekabel+16mm+rot+Meterware&tag=DEIN-TAG-21', qty:'{m}m' },
  kabel_16mm_schwarz: { name:'Batteriekabel 16mm² Schwarz (Meterware)', icon:'⚫', desc:'Minusleitung für mittlere Verbraucher-Kreise.', price:'ca. 3,20€/m', url:'https://www.amazon.de/s?k=Batteriekabel+16mm+schwarz+Meterware&tag=DEIN-TAG-21', qty:'{m}m' },
  kabel_6mm_solar:    { name:'Solarkabel 6mm² (Rot+Schwarz, je 1m)', icon:'☀️', desc:'Für die Verbindung von Solarpanel zu MPPT-Regler.', price:'ca. 3,80€/m', url:'https://www.amazon.de/s?k=Solarkabel+6mm+Set&tag=DEIN-TAG-21', qty:'{m}m' },
  kabel_4mm_set:      { name:'KFZ-Kabel 4mm² (Set diverse Farben, 10m)', icon:'🌈', desc:'Für Verbraucher-Verkabelung (Licht, USB, Pumpe etc.).', price:'ca. 22€', url:'https://www.amazon.de/s?k=KFZ+Kabel+4mm+Set+10m&tag=DEIN-TAG-21', qty:'1 Set' },
  kabel_25qmm_set:    { name:'KFZ-Kabel 2,5mm² (Set diverse Farben, 10m)', icon:'🌈', desc:'Für LED-Leuchten, kleine 12V-Verbraucher.', price:'ca. 18€', url:'https://www.amazon.de/s?k=KFZ+Kabel+2.5mm+Set+10m&tag=DEIN-TAG-21', qty:'1 Set' },

  // --- KABELSCHUHE / RINGÖSEN ---
  ringoesen_50mm:     { name:'Kabelschuhe / Ringösen 50mm² (Set)', icon:'🔗', desc:'Passend zu 50mm² Kabeln, M8/M10.', price:'ca. 14€', url:'https://www.amazon.de/s?k=Kabelschuhe+50mm+Ringoesen&tag=DEIN-TAG-21', qty:'1 Set (10 Stk)' },
  ringoesen_35mm:     { name:'Kabelschuhe / Ringösen 35mm² (Set)', icon:'🔗', desc:'Passend zu 35mm² Kabeln, M8.', price:'ca. 12€', url:'https://www.amazon.de/s?k=Kabelschuhe+35mm+Ringoesen&tag=DEIN-TAG-21', qty:'1 Set (10 Stk)' },
  ringoesen_25mm:     { name:'Kabelschuhe / Ringösen 25mm² (Set)', icon:'🔗', desc:'Passend zu 25mm² Kabeln, M6/M8.', price:'ca. 10€', url:'https://www.amazon.de/s?k=Kabelschuhe+25mm+Ringoesen&tag=DEIN-TAG-21', qty:'1 Set (10 Stk)' },
  ringoesen_16mm:     { name:'Kabelschuhe / Ringösen 16mm² (Set)', icon:'🔗', desc:'Passend zu 16mm² Kabeln, M6/M8.', price:'ca. 9€', url:'https://www.amazon.de/s?k=Kabelschuhe+16mm+Ringoesen&tag=DEIN-TAG-21', qty:'1 Set (10 Stk)' },
  flachstecker_set:   { name:'Flachsteckhülsen-Set (div. Größen)', icon:'🔗', desc:'Für 12V-Verbraucher mit Steckanschlüssen (Lüfter, Pumpe, Lampen).', price:'ca. 14€', url:'https://www.amazon.de/s?k=Flachsteckhuelsen+Set+isoliert&tag=DEIN-TAG-21', qty:'1 Set' },

  // --- WERKZEUG ---
  crimpzange_set:     { name:'Crimpzange-Set für Kabelschuhe (Profi)', icon:'🔧', desc:'Für Ringösen 0,5–50mm². Inkl. Wechselbacken. Unverzichtbar für saubere Verbindungen!', price:'ca. 45€', url:'https://www.amazon.de/s?k=Crimpzange+Set+Kabelschuhe+Profi&tag=DEIN-TAG-21', qty:'1x' },
  crimpzange_hydraulisch: { name:'Hydraulische Crimpzange (bis 50mm²)', icon:'🔧', desc:'Für saubere Crimpverbindungen an dicken Batteriekabeln (35-50mm²).', price:'ca. 35€', url:'https://www.amazon.de/s?k=Hydraulische+Crimpzange+50mm&tag=DEIN-TAG-21', qty:'1x' },
  abisolierzange:     { name:'Abisolierzange (automatisch)', icon:'✂️', desc:'Schnelles, sauberes Abisolieren ohne Beschädigung der Litzen.', price:'ca. 18€', url:'https://www.amazon.de/s?k=Abisolierzange+automatisch&tag=DEIN-TAG-21', qty:'1x' },
  schrumpfschlauch_set: { name:'Schrumpfschlauch-Set (diverse Größen)', icon:'🌡️', desc:'Zur Isolierung von Crimpverbindungen. Mit Heißluftpistole erhitzen.', price:'ca. 16€', url:'https://www.amazon.de/s?k=Schrumpfschlauch+Set+Sortiment&tag=DEIN-TAG-21', qty:'1 Set' },
  heissluftpistole:   { name:'Heißluftpistole (für Schrumpfschlauch)', icon:'🔥', desc:'Zum Schrumpfen von Isolierschläuchen an Crimpverbindungen.', price:'ca. 25€', url:'https://www.amazon.de/s?k=Heissluftpistole+kompakt&tag=DEIN-TAG-21', qty:'1x' },
  kabelkanal_set:     { name:'Kabelkanal / Wellrohr Set (gewellt, 10m)', icon:'📏', desc:'Schützt Kabel beim Verlegen vor Scheuern und Feuchtigkeit.', price:'ca. 15€', url:'https://www.amazon.de/s?k=Wellrohr+Kabelschutz+10m&tag=DEIN-TAG-21', qty:'1 Set' },
  kabelbinder_set:    { name:'Kabelbinder-Set (UV-beständig, diverse Längen)', icon:'🔗', desc:'Zur Fixierung und Bündelung der Verkabelung.', price:'ca. 9€', url:'https://www.amazon.de/s?k=Kabelbinder+UV+bestaendig+Set&tag=DEIN-TAG-21', qty:'1 Set' },
  multimeter:         { name:'Digitales Multimeter (KFZ-geeignet)', icon:'📟', desc:'Zum Prüfen von Spannung, Strom und Durchgang bei der Installation.', price:'ca. 25€', url:'https://www.amazon.de/s?k=Digitales+Multimeter+KFZ&tag=DEIN-TAG-21', qty:'1x' },
  durchfuehrung_dach: { name:'Kabeldurchführung Dach (wasserdicht)', icon:'🔘', desc:'Für die wasserdichte Durchführung der Solarkabel ins Fahrzeuginnere.', price:'ca. 14€', url:'https://www.amazon.de/s?k=Kabeldurchfuehrung+Dach+wasserdicht+Wohnmobil&tag=DEIN-TAG-21', qty:'1x' },
  solar_halterung:    { name:'Solarpanel-Halterungsset (für Dachmontage)', icon:'🔩', desc:'Aluminium-Halterungen zur sicheren Befestigung starrer Panels.', price:'ca. 20€', url:'https://www.amazon.de/s?k=Solarpanel+Halterung+Set+Wohnmobil&tag=DEIN-TAG-21', qty:'pro Panel' },
  klebepads_solar:    { name:'Montagekleber für Flex-Solarpanels', icon:'🩹', desc:'Spezialkleber zur dauerhaften Befestigung flexibler Panels.', price:'ca. 18€', url:'https://www.amazon.de/s?k=Montagekleber+Flex+Solarpanel&tag=DEIN-TAG-21', qty:'1 Set' },

  // --- 12V VERBRAUCHER-ZUBEHÖR ---
  usb_steckdose:      { name:'12V USB-Doppelsteckdose (Einbau)', icon:'🔌', desc:'Für USB-C/USB-A Laden von Smartphone & Laptop.', price:'ca. 16€', url:'https://www.amazon.de/s?k=12V+USB+Doppelsteckdose+Einbau&tag=DEIN-TAG-21', qty:'1-2x' },
  laptop_kabel_12v:   { name:'12V Laptop-Ladekabel (USB-C PD)', icon:'💻', desc:'Effizientes Laden ohne Wechselrichter-Verlust.', price:'ca. 30€', url:'https://www.amazon.de/s?k=12V+USB-C+PD+Laptop+Ladekabel&tag=DEIN-TAG-21', qty:'1x' },
  led_lichtleiste:    { name:'12V LED-Lichtleisten Set (warmweiß, dimmbar)', icon:'💡', desc:'Für die Innenbeleuchtung des Camper-Innenraums.', price:'ca. 28€', url:'https://www.amazon.de/s?k=12V+LED+Lichtleiste+dimmbar+Wohnmobil&tag=DEIN-TAG-21', qty:'1 Set' },
  kippschalter_set:   { name:'Kippschalter-Set wasserdicht (beleuchtet)', icon:'🔲', desc:'Für die manuelle Schaltung von Verbrauchern (Licht, Pumpe etc.).', price:'ca. 12€', url:'https://www.amazon.de/s?k=Kippschalter+Set+wasserdicht+beleuchtet&tag=DEIN-TAG-21', qty:'1 Set' },
};

function amazonCard(productKey, meters) {
  const p = AMAZON_PRODUCTS[productKey];
  if (!p) return '';
  let qty = p.qty || '';
  if (meters) qty = qty.replace('{m}', meters);
  return `
    <div class="amazon-card">
      <div class="amazon-card-icon">${p.icon}</div>
      <div class="amazon-card-info">
        <div class="amazon-card-name">${p.name}</div>
        <div class="amazon-card-desc">${p.desc}${qty ? ' · <strong>'+qty+'</strong>' : ''}</div>
      </div>
      <div style="text-align:right; min-width:120px;">
        <div class="amazon-card-price">${p.price}</div>
        <a href="${p.url}" target="_blank" rel="noopener" class="amazon-btn">${t('amazonBtn')}</a>
      </div>
    </div>
  `;
}

// ================================================
// EINKAUFSLISTE GENERATOR
// Erzeugt eine vollständige Liste basierend auf Konfiguration
// inkl. Kabel-Meter, Kabelschuhe, Crimpzange etc.
// Gibt Array von {key, meters} zurück
// ================================================
function buildShoppingList(config) {
  const list = [];
  const add = (key, meters) => list.push({key, meters});

  if (config.mode === 'low') {
    add(config.stationKey);
    if (config.hasSolartasche) {
      add('solartasche200');
      add('mppt_solar_75_15');
      add('anderson_buchse');
    }
    return list; // Powerstation braucht keine Crimp-Tools etc.
  }

  // --- BATTERIE ---
  add(config.battKey);

  // --- HAUPTVERTEILUNG (immer) ---
  add('batterie_trennschalter');
  add('sicherungshalter_midi');
  add('sicherungsverteiler_plus');
  add('minus_sammelschiene');

  // --- LADEBOOSTER ---
  if (config.hasBooster) {
    add('ladebooster_30');
    add('kabel_25mm_rot', 3);
    add('kabel_25mm_schwarz', 3);
    add('ringoesen_25mm');
  }

  // --- SOLAR ---
  if (config.hasSolar) {
    add(config.mpptKey);
    add(config.solarPanelKey);
    add('kabel_6mm_solar', 1.5);
    if (config.solarType === 'mobil') {
      add('anderson_buchse');
    } else if (config.solarType === 'dach_fest') {
      add('solar_halterung');
      add('durchfuehrung_dach');
    } else if (config.solarType === 'dach_klebend') {
      add('klebepads_solar');
      add('durchfuehrung_dach');
    }
  }

  // --- LANDSTROM ---
  if (config.hasLandstrom) {
    add('cee_einbaubuchse');
    add('ladegeraet_230v');
  }

  // --- WECHSELRICHTER ---
  if (config.hasWechselrichter) {
    add(config.wrKey);
    add(config.wrKabelRotKey, config.wrKabelMeter);
    add(config.wrKabelSchwarzKey, config.wrKabelMeter);
    add(config.wrRingoesenKey);
  }

  // --- ÜBERWACHUNG ---
  if (config.controlType === 'shunt') {
    add('shunt');
  }

  // --- ALLGEMEINE VERBRAUCHER-VERKABELUNG ---
  add('kabel_4mm_set');
  add('kabel_25qmm_set');
  add('flachstecker_set');

  if (config.selectedComponents['v_lights']) {
    add('led_lichtleiste');
    add('usb_steckdose');
  }
  if (config.selectedComponents['v_laptop'] && config.laptopCableType === '12v') {
    add('laptop_kabel_12v');
  }
  add('kippschalter_set');

  // --- WERKZEUG (immer für Festeinbau) ---
  add('crimpzange_set');
  if (config.wrKabelMeter && config.wrKabelMeter >= 35) {
    add('crimpzange_hydraulisch');
  }
  add('abisolierzange');
  add('schrumpfschlauch_set');
  add('heissluftpistole');
  add('kabelkanal_set');
  add('kabelbinder_set');
  add('multimeter');

  return list;
}
