/**
 * WoW Forever - DPS Spezialisierungen & Klassen-Datenbank (Stand: WoW Forever 2026)
 * 100% Einsteigerfreundlich für neue Spieler ohne WoW-Vorkenntnisse.
 * Fokus: Die 9 Original-Klassen von Azeroth mit allen offiziellen WoW Forever Modernisierungen
 * Nur DPS-Spezialisierungen (20 Spezialisierungen)
 */

const WOW_CLASSES = {
  warrior: {
    id: "warrior",
    name: "Krieger",
    icon: "⚔️",
    color: "#C79C6E",
    armor: "Plattenrüstung (Schwerer Stahlpanzer)",
    armorShort: "Platte",
    resource: "Wut (Wächst beim Zuschlagen)",
    lore: "Der klassische Nahkämpfer in schwerer Rüstung. Stürzt sich direkt vor die Monster, heilt sich in WoW Forever nach jedem Sieg mit 'Siegesrausch' und wird immer gefährlicher, je länger der Kampf tobt.",
    specs: ["fury", "arms"]
  },
  rogue: {
    id: "rogue",
    name: "Schurke",
    icon: "🗡️",
    color: "#FFF569",
    armor: "Lederrüstung (Leicht & beweglich)",
    armorShort: "Leder",
    resource: "Energie & Kombopunkte (Bleiben beim Zielwechsel erhalten!)",
    lore: "Meister des Schleichens, der Klingen und der Gifte. Kann sich unsichtbar anschleichen, Feinde betäuben und behält in WoW Forever seine gesammelten Kombopunkte selbst dann, wenn er mitten im Kampf das Ziel wechselt.",
    specs: ["combat", "assassination", "subtlety"]
  },
  mage: {
    id: "mage",
    name: "Magier",
    icon: "❄️",
    color: "#69CCF0",
    armor: "Stoffrobe (Leichte Zaubergewänder)",
    armorShort: "Stoff",
    resource: "Mana (Zauberkraft)",
    lore: "Der klassische Zauberer. Schleudert Eislanzen, riesige Sofort-Feuerbälle oder Arkanschläge, stellt kostenlose Verpflegung her und öffnet Reise-Portale für die ganze Gruppe.",
    specs: ["frost_mage", "fire_mage", "arcane_mage"]
  },
  warlock: {
    id: "warlock",
    name: "Hexenmeister",
    icon: "🔥",
    color: "#9482C9",
    armor: "Stoffrobe (Dunkle Gewänder)",
    armorShort: "Stoff",
    resource: "Mana & Seelen (Dunkle Zauberkraft)",
    lore: "Düsterer Beschwörer mit treuen Dämonen-Begleitern. Verflucht Gegner über Zeit, stärkt das Team mit dämonischen Pakten und holt Freunde per Beschwörungs-Portal direkt zu sich.",
    specs: ["affliction", "destruction", "demonology"]
  },
  hunter: {
    id: "hunter",
    name: "Jäger",
    icon: "🏹",
    color: "#ABD473",
    armor: "Kettenrüstung (Solider Schutz)",
    armorShort: "Kette",
    resource: "Mana (Ausdauer für Schüsse & Fallen)",
    lore: "Meister der Wildnis: Kämpft in WoW Forever wahlweise mit treuem Tierbegleiter, als einsamer Scharfschütze ganz ohne Tier für Extra-Schaden oder als explosiver Nahkampf- & Fallen-Jäger.",
    specs: ["beastmastery", "marksmanship", "survival"]
  },
  druid: {
    id: "druid",
    name: "Druide",
    icon: "🐾",
    color: "#FF7D0A",
    armor: "Lederrüstung (Naturleder)",
    armorShort: "Leder",
    resource: "Energie, Wut & Mana (Je nach Tiergestalt)",
    lore: "Der Verwandlungskünstler der Natur. Kämpft als flinke Raubkatze mit Krallen oder als kosmische Mondkin-Eule mit Sternenlasern und stärkt seine Gruppe mit mächtigen Crit-Auren.",
    specs: ["feral_dps", "balance"]
  },
  shaman: {
    id: "shaman",
    name: "Schamane",
    icon: "⚡",
    color: "#0070DE",
    armor: "Kettenrüstung (Schützender Panzer)",
    armorShort: "Kette",
    resource: "Mana (Sturm- & Elementarmacht)",
    lore: "Bändiger von Blitzen, Lava und Stürmen. Stellt magische Totem-Pfähle auf, die alle Freunde enorm verstärken, und entfesselt in WoW Forever Lavaeruptionen und Windfury-Mehrfachschläge.",
    specs: ["enhancement", "elemental"]
  },
  paladin: {
    id: "paladin",
    name: "Paladin",
    icon: "✨",
    color: "#F58CBA",
    armor: "Plattenrüstung (Heiliger Ritterpanzer)",
    armorShort: "Platte",
    resource: "Mana (Heilige Kraft)",
    lore: "Der edle Ritter des Lichts. Dank 'Heiliger Stoß' und dauerhaften Siegeln in WoW Forever ein vollwertiger, wuchtiger Nahkämpfer mit den stärksten Schutz-Blasen und Team-Segen im Spiel.",
    specs: ["retribution"]
  },
  priest: {
    id: "priest",
    name: "Priester",
    icon: "👁️",
    color: "#FFFFFF",
    textColor: "#333333",
    armor: "Stoffrobe (Geweihte Kutten)",
    armorShort: "Stoff",
    resource: "Mana (Geistige Energie)",
    lore: "Als Schattenpriester hüllt er sich in eine dunkle Schattengestalt, schmilzt gegnerische Gedanken mit telepathischen Angriffen und heilt seine Gruppe automatisch durch seinen verursachten Schaden.",
    specs: ["shadow_priest"]
  }
};

const WOW_SPECS = [
  // --- KRIEGER ---
  {
    id: "fury",
    classId: "warrior",
    name: "Furor-Krieger",
    role: "Nahkampf (Direkt am Monster)",
    rangeType: "melee",
    damageType: "Physische Treffer (2 Waffen)",
    theme: "Der wilde Berserker",
    motto: "Zwei Waffen in den Händen, Siegesrausch zünden und im Dauer-Rausch alles kurz und klein schlagen.",
    archetype: "Der Unaufhaltsame Fleischwolf",
    complexity: "Mittel (Leicht verständlich, actionreich)",
    apm: "Schnell (Viele Schläge nacheinander)",
    stats: {
      burst: 86,
      sustain: 95,
      aoe: 84,
      utility: 56,
      survivability: 82
    },
    pros: [
      "Einer der absolut stärksten Dauerschaden-Kämpfer im gesamten Spiel",
      "Neu in WoW Forever: 'Siegesrausch' heilt dich nach jedem besiegten Gegner sofort und hält dich im Schwung",
      "Befreit sich mit Berserkerwut selbst aus Verlangsamungen und rast mit erhöhtem Tempo übers Feld"
    ],
    cons: [
      "Braucht gute Waffen in beiden Händen, um sein volles Potenzial auszuschöpfen",
      "Erzeugt durch den hohen Schaden viel Aufmerksamkeit bei den Monstern",
      "Kämpft immer direkt an vorderster Front mitten im Getümmel"
    ],
    vibe: "Perfekt für dich, wenn du mitten ins Getümmel willst, zwei Waffen gleichzeitig schwingen möchtest und den direkten, unbändigen Schlagabtausch liebst.",
    realityCheck: "Dank des neuen Siegesrauschs in WoW Forever spielt sich der Furor-Krieger auch alleine deutlich flüssiger und ist in Gruppen eine absolute Schadens-Maschine.",
    miniRotation: [
      { name: "Blutdurst", desc: "Wuchtiger Schlag, der hohen Schaden verursacht und dich im Kampf heilt", sound: "slash" },
      { name: "Wirbelwind", desc: "Du wirbelst im Kreis und triffst bis zu 4 Monster um dich herum", sound: "cleave" },
      { name: "Hinrichten", desc: "Schlägt angeschlagene Monster mit maximaler Wucht sofort nieder", sound: "execute" }
    ],
    tags: ["Nahkampf", "Zwei Waffen", "Viel Action", "Siegesrausch", "Berserker"]
  },
  {
    id: "arms",
    classId: "warrior",
    name: "Waffen-Krieger",
    role: "Nahkampf (Direkt am Monster)",
    rangeType: "melee",
    damageType: "Physische Treffer (Riesige Zweihandwaffe)",
    theme: "Der Meister-Schwertkämpfer",
    motto: "Ein einziger gewaltiger Schwung mit der Zweihandaxt spaltet gleich zwei Gegner auf einmal.",
    archetype: "Der Taktische Waffenmeister",
    complexity: "Mittel (Flüssige Zweihand-Kombo)",
    apm: "Ausgeglichen (Gezielte Schläge)",
    stats: {
      burst: 92,
      sustain: 85,
      aoe: 84,
      utility: 68,
      survivability: 80
    },
    pros: [
      "Gewaltige, wuchtige Einzelschläge mit der größten Zweihand-Waffe im Spiel",
      "In WoW Forever modernisiert: 'Zerschmettern' bremst deine normalen Waffenschwünge nicht mehr aus!",
      "Halbiert gegnerische Heilung mit 'Tödlicher Stoß' und trifft per 'Weitreichende Stöße' zwei Ziele zugleich"
    ],
    cons: [
      "Schlägt bedachter und rhythmischer zu als der rasende Furor-Krieger",
      "Nutzt verschiedene Kampfhaltungen für optimale Konter-Angriffe",
      "Abhängig von einer starken Zweihandwaffe"
    ],
    vibe: "Für dich, wenn du die größte Axt oder das größte Schwert im Spiel tragen und mit kalkulierten, schweren Schwüngen Feinde fällen willst.",
    realityCheck: "Durch das verbesserte 'Zerschmettern' und 'Siegesrausch' in WoW Forever ein extrem starker Zweihand-Ritter für Bosskämpfe und Duelle.",
    miniRotation: [
      { name: "Sturmangriff", desc: "Stürmt blitzschnell auf den Gegner zu und betäubt ihn kurz", sound: "charge" },
      { name: "Tödlicher Stoß", desc: "Schwerer Zweihandhieb, der enormen Schaden macht und Heilung halbiert", sound: "crush" },
      { name: "Zerschmettern", desc: "Lässt die Zweihandwaffe ohne Schwungverlust direkt nochmal einschlagen", sound: "cleave" }
    ],
    tags: ["Nahkampf", "Große Zweihandwaffe", "Starke Einzelschläge", "Gegner-Schwächung"]
  },

  // --- SCHURKE ---
  {
    id: "combat",
    classId: "rogue",
    name: "Kampf-Schurke",
    role: "Nahkampf (Direkt am Monster)",
    rangeType: "melee",
    damageType: "Physische Treffer (2 Schwerter, Äxte oder Streitkolben)",
    theme: "Der geschickte Duellant",
    motto: "Klingenwirbel anwerfen, Turbomodus zünden und Monster im Sekundentakt zersäbeln.",
    archetype: "Der Rhythmus-Schlächter",
    complexity: "Einfach (Sehr gut für Einsteiger)",
    apm: "Schnell (Pausenloses Angreifen)",
    stats: {
      burst: 76,
      sustain: 88,
      aoe: 76,
      utility: 48,
      survivability: 64
    },
    pros: [
      "Neu in WoW Forever: Kombopunkte bleiben beim Zielwechsel erhalten & Äxte werden voll unterstützt!",
      "Sehr leicht zu lernen: Punkte aufbauen, Tempo-Buff aktivieren und mit Klingenwirbel 2 Ziele gleichzeitig treffen",
      "Sehr verlässlich durch hohes Ausweichen, Entrinnen und direkten Frontalkampf ohne Stellungs-Zwang"
    ],
    cons: [
      "Kämpft meist offen von Angesicht zu Angesicht statt lange im Schatten zu schleichen",
      "Du solltest deinen Tempobuff 'Zerhäckseln' regelmäßig aktiv halten",
      "Weniger Gruppen-Stärkungszauber als Schamanen oder Paladine"
    ],
    vibe: "Wenn du einen schnellen Nahkämpfer mit zwei Klingen (Schwerter, Äxte oder Kolben) spielen willst, der unkompliziert ist und konstant hohen Schaden liefert.",
    realityCheck: "Dank erhaltener Kombopunkte beim Zielwechsel in WoW Forever noch flüssiger und einer der angenehmsten Nahkämpfer überhaupt.",
    miniRotation: [
      { name: "Finsterer Stoß", desc: "Schneller Hieb von vorne, der dir Kombopunkte zum Aufladen einbringt", sound: "slash" },
      { name: "Zerhäckseln", desc: "Abschluss-Angriff: Lässt dich für die nächsten Sekunden blitzschnell zuschlagen", sound: "buff" },
      { name: "Klingenwirbel", desc: "Erhöht dein Tempo und trifft automatisch einen zweiten Gegner mit voller Kraft", sound: "cleave" }
    ],
    tags: ["Nahkampf", "Schwerter & Äxte", "Einfach zu lernen", "Turbotempo", "Starker Dauerschaden"]
  },
  {
    id: "assassination",
    classId: "rogue",
    name: "Meucheln-Schurke",
    role: "Nahkampf (Dolche & Gifte)",
    rangeType: "melee",
    damageType: "Dolche & Tödliche Gifte",
    theme: "Der tödliche Giftmischer",
    motto: "Mit beiden Dolchen gleichzeitig zustechen und tödliche Gifte durch die Adern jagen.",
    archetype: "Der Tödliche Giftmischer",
    complexity: "Einfach - Mittel",
    apm: "Schnell",
    stats: {
      burst: 92,
      sustain: 86,
      aoe: 48,
      utility: 45,
      survivability: 58
    },
    pros: [
      "Highlight in WoW Forever: 'Verstümmeln' lässt dich mit beiden Dolchen gleichzeitig zustechen – auch von vorne!",
      "Tödliche Gifte skalieren in WoW Forever deutlich stärker mit deiner Ausrüstung",
      "Gewaltige kritische Treffer und sofortige Kombopunkt-Aufladung"
    ],
    cons: [
      "Benötigt zwingend zwei schnelle Dolche als Waffen",
      "Gegen große Monstergruppen schwächer als gegen einzelne Bosse",
      "Trägt leichte Lederrüstung – sollte Treffer lieber durch Ausweichen oder Tarnung meiden"
    ],
    vibe: "Du willst mit zwei giftgetränkten Dolchen aus dem Schatten treten und Gegner mit gezielten Doppelstichen und starken Giften niederstrecken.",
    realityCheck: "Durch 'Verstümmeln' musst du in WoW Forever nicht mehr krampfhaft hinter dem Monster stehen – ein riesiger Komfort-Gewinn!",
    miniRotation: [
      { name: "Verstümmeln", desc: "Sticht gleichzeitig mit beiden Dolchen zu und verursacht Bonus-Schaden auf Vergiftete", sound: "backstab" },
      { name: "Kaltblütigkeit", desc: "Garantiert dir zu 100%, dass dein nächster Angriff ein gigantischer Krit-Treffer wird", sound: "buff" },
      { name: "Ausweiden", desc: "Verbraucht deine Kombopunkte für einen massiven finalen Todesschlag", sound: "execute" }
    ],
    tags: ["Nahkampf", "Zwei Dolche", "Verstümmeln", "Tödliche Gifte", "Hoher Burst"]
  },
  {
    id: "subtlety",
    classId: "rogue",
    name: "Täuschungs-Schurke",
    role: "Nahkampf (Schleicher & Trickser)",
    rangeType: "melee",
    damageType: "Physisch & Schattentricks",
    theme: "Der Meister der Schatten & Betäubung",
    motto: "Du siehst mich nicht, du rührst dich nicht – ich betäube dich und verschwinde wieder.",
    archetype: "Der Meister der Schatten & Kontrolle",
    complexity: "Anspruchsvoll (Timing von Betäubungen)",
    apm: "Schnell",
    stats: {
      burst: 86,
      sustain: 72,
      aoe: 45,
      utility: 58,
      survivability: 62
    },
    pros: [
      "Der absolute König der Kontrolle: Kann Gegner sekundenlang handlungsunfähig halten",
      "'Blutsturz' verstärkt den Schaden der gesamten Gruppe auf dem Ziel, während Kombopunkte beim Zielwechsel erhalten bleiben",
      "Kann dank 'Vorbereitung' alle Flucht-, Sprint- und Tarnungs-Tricks sofort zurücksetzen"
    ],
    cons: [
      "Macht im langen Bosskampf etwas weniger reinen Dauerschaden als Kampf- oder Meucheln-Schurken",
      "Erfordert Übersicht und gutes Timing für deine Kontroll-Fähigkeiten",
      "Wenig Flächenschaden gegen große Monstergruppen"
    ],
    vibe: "Du willst der gerissenste Spieler auf dem Feld sein, Feinde aus dem Nichts überfallen, lähmen und niemals gefasst werden.",
    realityCheck: "In Duellen und auf dem Schlachtfeld absolut gefürchtet – und dank verbessertem Blutsturz in WoW Forever auch in Dungeons ein gern gesehener Helfer.",
    miniRotation: [
      { name: "Fieser Trick", desc: "Schlägt aus der Tarnung zu und betäubt das Ziel für 4 Sekunden", sound: "stun" },
      { name: "Blutsturz", desc: "Schneller Hieb, der das Ziel für alle Angriffe verwundbarer macht", sound: "slash" },
      { name: "Vorbereitung", desc: "Setzt sofort die Abklingzeit all deiner Flucht- und Tarnungs-Tricks zurück", sound: "magic" }
    ],
    tags: ["Nahkampf", "Unsichtbarkeit", "Gegner lähmen", "Flucht-Tricks", "Duell-Meister"]
  },

  // --- MAGIER ---
  {
    id: "frost_mage",
    classId: "mage",
    name: "Frost-Magier",
    role: "Fernkampf (Zauberer aus der Distanz)",
    rangeType: "ranged",
    damageType: "Eismagie (Kälte, Eislanze & Kontrolle)",
    theme: "Der Eismeister",
    motto: "Der Gegner friert ein, Eisige Finger leuchten auf und meine Eislanze zerschmettert ihn.",
    archetype: "Der Unantastbare Eismeister",
    complexity: "Einfach (Sehr gut für Einsteiger)",
    apm: "Gemütlich - Ausgeglichen",
    stats: {
      burst: 82,
      sustain: 82,
      aoe: 98,
      utility: 90,
      survivability: 78
    },
    pros: [
      "Neu in WoW Forever: 'Eisige Finger' & 'Eislanze' sorgen auch gegen Bosse für starke Sofort-Treffer!",
      "Maximale Sicherheit: Friert Gegner am Boden fest, verlangsamt ganze Gruppen mit Blizzard und überlebt alles im Eisblock",
      "Zaubert kostenloses Essen, Wasser und Reise-Portale in alle großen Städte für seine Freunde"
    ],
    cons: [
      "Trägt nur leichte Stoffroben – man hält Abstand, statt Schläge einzustecken",
      "Nach sehr intensiven Kämpfen füllt man seine Zauberkraft kurz mit herbeigezaubertem Wasser auf",
      "Etwas weniger reiner Explosions-Schaden als der Feuer-Magier"
    ],
    vibe: "Du willst aus sicherer Distanz zaubern, Feinde festfrieren, mit Eislanzen beschießen und deiner ganzen Gruppe praktische Portale & Snacks bieten.",
    realityCheck: "In WoW Forever dank 'Eislanze' und 'Eisige Finger' nicht mehr nur sicher, sondern auch im Bosskampf richtig schlagkräftig!",
    miniRotation: [
      { name: "Frostblitz", desc: "Schießt einen Eiszapfen ab, der Schaden macht und das Monster stark verlangsamt", sound: "ice" },
      { name: "Eislanze", desc: "Sofort-Eissplitter ohne Zauberzeit, der bei gefrorenen Zielen dreifachen Schaden anrichtet", sound: "shatter" },
      { name: "Blizzard", desc: "Lässt einen eisigen Schneesturm auf eine ganze Gruppe von Gegnern herabregnen", sound: "ice_storm" }
    ],
    tags: ["Fernkampf", "Sicher für Einsteiger", "Eislanze & Einfrieren", "Portale & Essen", "Flächenschaden-König"]
  },
  {
    id: "fire_mage",
    classId: "mage",
    name: "Feuer-Magier",
    role: "Fernkampf (Zauberer aus der Distanz)",
    rangeType: "ranged",
    damageType: "Feuermagie (Explosionen & Brand)",
    theme: "Der feurige Pyromane",
    motto: "Kampfeshitze löst aus – und mein riesiger Pyroschlag fliegt sofort ohne Wartezeit ins Ziel!",
    archetype: "Der Apokalyptische Pyromane",
    complexity: "Mittel",
    apm: "Ausgeglichen - Schnell",
    stats: {
      burst: 95,
      sustain: 90,
      aoe: 88,
      utility: 80,
      survivability: 52
    },
    pros: [
      "Highlight in WoW Forever: 'Kampfeshitze' lässt dich nach kritischen Treffern einen riesigen Pyroschlag sofort ohne Zauberzeit abfeuern!",
      "Neuer 'Frostfeuerblitz' hilft selbst gegen Monster, die früher gegen reines Feuer resistent waren",
      "Brennende 'Zündung' lässt deine kritischen Treffer gewaltig nachbrennen"
    ],
    cons: [
      "Weniger Verlangsamungs-Schutz als beim reinen Frost-Magier",
      "Macht so viel explosiven Schaden, dass der Beschützer (Tank) der Gruppe gut aufpassen muss",
      "Leichte Stoffrüstung verzeiht wenige Fehler im Nahkampf"
    ],
    vibe: "Du liebst gigantische Explosionen, willst maximale Zerstörungskraft sehen und freust dich jedes Mal, wenn dein Sofort-Pyroschlag aufleuchtet.",
    realityCheck: "Dank 'Kampfeshitze' und 'Frostfeuerblitz' in WoW Forever von Anfang an in jedem Dungeon und Raid ein absolutes Feuerwerk.",
    miniRotation: [
      { name: "Feuerball / Frostfeuerblitz", desc: "Mächtiges Flammen-Geschoss, das das Ziel zusätzlich in Brand setzt", sound: "fire" },
      { name: "Feuerschlag", desc: "Sofortige Flammenexplosion auf Knopfdruck ohne Zauberzeit", sound: "fire" },
      { name: "Kampfeshitze: Pyroschlag", desc: "Nach kritischen Treffern fliegt ein riesiger Feuerbrocken sofort ohne Wartezeit los!", sound: "explosion" }
    ],
    tags: ["Fernkampf", "Feuer & Explosionen", "Sofort-Pyroschlag", "Riesenschaden", "Actionreich"]
  },
  {
    id: "arcane_mage",
    classId: "mage",
    name: "Arkan-Magier",
    role: "Fernkampf (Zauberer aus der Distanz)",
    rangeType: "ranged",
    damageType: "Arkane Zauberkraft (Purer Zauberdruck)",
    theme: "Die pure Glaskanone",
    motto: "Arkanschlag aufladen, Arkane Macht zünden und eine pfeilschnelle Geschosssalve abfeuern!",
    archetype: "Der Blitzschnelle Sofort-Zerstörer",
    complexity: "Mittel (Mana-Management)",
    apm: "Ausgeglichen",
    stats: {
      burst: 98,
      sustain: 76,
      aoe: 80,
      utility: 85,
      survivability: 54
    },
    pros: [
      "Neu in WoW Forever: Eigener Hauptzauber 'Arkanschlag' + 'Geschosssalve' für rasant schnelle Arkane Geschosse!",
      "Der höchste Kurzzeit-Schaden im Spiel dank 'Arkane Macht' (+30% Schaden) und 'Geistesgegenwart' (Sofort-Zauber)",
      "Kann Zauberkraft im Kampf mit 'Hervorrufung' schnell wieder aufladen"
    ],
    cons: [
      "Verbraucht bei maximaler Aufladung von Arkanschlag sehr viel Zauberkraft (Mana)",
      "Man muss sein Mana klug einteilen, damit einem bei langen Kämpfen nicht die Puste ausgeht",
      "Wenig eigene Rüstung (Stoffrobe)"
    ],
    vibe: "Du willst pure magische Energie entfesseln, Zauber im Turbotempo kanalisieren und Gegner in wenigen Sekunden ausradieren.",
    realityCheck: "In WoW Forever endlich eine vollwertige, eigenständige Spezialisierung mit 'Arkanschlag' statt nur ein Unterstützungs-Baum!",
    miniRotation: [
      { name: "Arkanschlag", desc: "Steigert mit jedem Zauber deinen Arkan-Schaden weiter nach oben", sound: "magic" },
      { name: "Arkane Macht", desc: "Verstärkt all deine Zauber für kurze Zeit um gewaltige 30%", sound: "buff" },
      { name: "Geschosssalve", desc: "Feuert eine pfeilschnelle Salve arkaner Energiestrahlen auf das Ziel ab", sound: "explosion" }
    ],
    tags: ["Fernkampf", "Arkanschlag", "Höchster Sofort-Burst", "Geschosssalve", "Glaskanone"]
  },

  // --- HEXENMEISTER ---
  {
    id: "affliction",
    classId: "warlock",
    name: "Gebrechen-Hexenmeister",
    role: "Fernkampf (Flüche & Lebensraub)",
    rangeType: "ranged",
    damageType: "Schatten & Flüche (Schaden über Zeit)",
    theme: "Der Meister der Flüche & Lebensdieb",
    motto: "Verfluche das Monster, sauge ihm die Lebenskraft aus und schau zu, wie es langsam zerfällt.",
    archetype: "Der Verderbnis-Architekt",
    complexity: "Einfach - Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 64,
      sustain: 92,
      aoe: 72,
      utility: 82,
      survivability: 76
    },
    pros: [
      "Neu in WoW Forever: Neue Schatten-Kanalisierungen ('Qual' & 'Hoffnung entziehen') und kein Verdrängen deiner Flüche mehr in Gruppen!",
      "Endlose Ausdauer: Saugt Gegnern Leben ab und wandelt es in Zauberkraft um – fast nie Trinkpausen nötig!",
      "Kann mehrere Monster gleichzeitig verfluchen und mit Furcht panisch weglaufen lassen"
    ],
    cons: [
      "Der Schaden baut sich über einige Sekunden auf, statt in der ersten Sekunde zu explodieren",
      "Sehr kleine Monster sterben manchmal schon, bevor alle Flüche durchgetickt sind",
      "Erfordert einen Blick auf die Laufzeit deiner aktiven Flüche"
    ],
    vibe: "Du willst keinen Hektik-Stress: Du belegst Monster mit dunklen Flüchen, heilst dich durch ihren Schmerz und bist praktisch unverwüstlich.",
    realityCheck: "Da Flüche in WoW Forever bei Bossen nicht mehr vom Limit verdrängt werden, ist der Gebrechen-Hexer im Team wie auch solo überragend.",
    miniRotation: [
      { name: "Verderbnis & Pein", desc: "Belegt das Ziel mit dunklen Flüchen, die sekündlich stärker an ihm nagen", sound: "curse" },
      { name: "Qual / Blutsauger", desc: "Kanalisiert dunkle Schmerzen, entzieht dem Monster Leben und heilt dich", sound: "drain" },
      { name: "Aderlass", desc: "Wandelt deine reichlich geheilte Lebenskraft sofort in frisches Mana um", sound: "magic" }
    ],
    tags: ["Fernkampf", "Flüche & Schaden über Zeit", "Lebensraub", "Nie Trinkpausen", "Dämonen-Partner"]
  },
  {
    id: "destruction",
    classId: "warlock",
    name: "Zerstörungs-Hexenmeister",
    role: "Fernkampf (Dunkle Artillerie)",
    rangeType: "ranged",
    damageType: "Schatten & Höllenfeuer",
    theme: "Der dunkle Chaos-Kanonier",
    motto: "Schwarze Magie, Schattenblitze und grünes Höllenfeuer, die Feinde in Stücke reißen.",
    archetype: "Der Dunkle Chaos-Kanonier",
    complexity: "Einfach - Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 94,
      sustain: 88,
      aoe: 86,
      utility: 78,
      survivability: 65
    },
    pros: [
      "Brachiale Schattenblitz- und Feuer-Einschläge mit spektakulären kritischen Treffern",
      "'Feuersbrunst' zündet sofortigen Explosionsschaden, ohne deinen Feuerbrand komplett zu verschwenden",
      "Bringt Gesundheitssteine ('Hexer-Bonbons') und Beschwörungs-Portale für die ganze Gruppe mit"
    ],
    cons: [
      "Kein Eisblock wie beim Magier – dein Dämon und Gesundheitsstein sind deine Lebensversicherung",
      "Hoher Schadensausstoß zieht schnell die Wut der Monster auf sich",
      "Stoffrüstung bietet wenig Schutz gegen direkte Schwerthiebe"
    ],
    vibe: "Wenn du düstere Dämonenmagie liebst, aber statt langsamen Flüchen lieber gewaltige schwarze Blitze und Höllenfeuer schleudern willst.",
    realityCheck: "Ein finsterer Artillerie-Magier mit Dämonen-Begleiter, der sowohl sofortigen Wumms als auch starken Dauerschaden liefert.",
    miniRotation: [
      { name: "Feuerbrand", desc: "Entzündet den Feind mit loderndem Höllenfeuer", sound: "fire" },
      { name: "Feuersbrunst", desc: "Lässt das Feuer auf dem Feind sofort mit einem gewaltigen Knall explodieren", sound: "explosion" },
      { name: "Schattenblitz", desc: "Mächtiger Strahl aus finsterer Schattenenergie für hohen Einzelschaden", sound: "shadowbolt" }
    ],
    tags: ["Fernkampf", "Schattenblitze", "Dunkle Explosionen", "Hoher Wumms", "Team-Portale"]
  },
  {
    id: "demonology",
    classId: "warlock",
    name: "Dämonologie-Hexenmeister",
    role: "Fernkampf (Dämonenmeister)",
    rangeType: "ranged",
    damageType: "Dämonenbegleiter & Schatten",
    theme: "Der unsterbliche Dämonenpakt",
    motto: "Mein Dämon schluckt meinen Schaden und stärkt mit jedem Treffer die Zauberkraft meiner ganzen Gruppe!",
    archetype: "Der Dämonische Paktmeister",
    complexity: "Einfach (Sehr zäh & fehlerverzeihend)",
    apm: "Gemütlich",
    stats: {
      burst: 72,
      sustain: 82,
      aoe: 70,
      utility: 92,
      survivability: 90
    },
    pros: [
      "Highlight in WoW Forever: 'Dämonischer Pakt' – kritische Treffer deines Dämons erhöhen die Zaubermacht der gesamten Gruppe!",
      "Fast unzerstörbar: Durch 'Seelenverbindung' fängt dein Dämon einen großen Teil deines Schadens ab",
      "Vielseitige Dämonendiener für jede Situation plus Gesundheitssteine & Beschwörungs-Portale"
    ],
    cons: [
      "Dein persönlicher Zauberschaden ist etwas gleichmäßiger als beim reinen Zerstörungs-Hexer",
      "Du musst deinen Dämon am Leben halten, damit seine Boni aktiv bleiben",
      "Weniger plötzliche Sofort-Explosionen"
    ],
    vibe: "Du willst mächtige Dämonen befehligen, wie eine unzerstörbare Festung über das Schlachtfeld schreiten und alle Zauberer in deinem Team stärken.",
    realityCheck: "Dank des neuen 'Dämonischen Pakts' in WoW Forever nicht nur extrem sicher für Einsteiger, sondern auch in jeder Gruppe heiß begehrt!",
    miniRotation: [
      { name: "Seelenverbindung", desc: "Leitet erlittenen Schaden direkt auf deinen treuen Dämon um", sound: "buff" },
      { name: "Dämonischer Pakt", desc: "Die Angriffe deines Dämons stärken automatisch die Zauberkraft deiner Freunde", sound: "magic" },
      { name: "Schattenblitz", desc: "Feuert sichere Schattengeschosse aus dem Schutz deines Dämons ab", sound: "shadowbolt" }
    ],
    tags: ["Fernkampf", "Dämonendiener", "Dämonischer Pakt (Team-Buff)", "Extrem zäh", "Sehr sicher"]
  },

  // --- JÄGER ---
  {
    id: "beastmastery",
    classId: "hunter",
    name: "Tierherrschaft-Jäger",
    role: "Fernkampf mit Tierbegleiter",
    rangeType: "ranged",
    damageType: "Tierbisse & Pfeilschüsse",
    theme: "Der beste Freund aller Tiere",
    motto: "Mein Tier wird riesig und rot, hält alle Gegner auf Abstand und ich schieße entspannt aus der Ferne.",
    archetype: "Der Unbeschwerte Safari-König",
    complexity: "Sehr Einfach (Die leichteste Klasse für Einsteiger)",
    apm: "Gemütlich",
    stats: {
      burst: 70,
      sustain: 88,
      aoe: 60,
      utility: 68,
      survivability: 82
    },
    pros: [
      "Die mit Abstand einfachste und entspannteste Spezialisierung für komplette Neulinge",
      "In WoW Forever erbt dein Tier noch mehr Stärke von deiner Ausrüstung und hält in Bosskämpfen viel mehr aus",
      "'Zorn des Wildtiers' lässt dein Tier rot aufglühen und unaufhaltsam auf Feinde losgehen"
    ],
    cons: [
      "Dein Tier möchte gelegentlich gefüttert werden, damit es bei bester Laune bleibt",
      "Ein großer Teil deines Schadens hängt davon ab, dass dein Tier aktiv am Gegner dranbleibt",
      "Weniger Flächenschaden gegen riesige Monstergruppen als ein Magier"
    ],
    vibe: "Du willst völlig stressfrei Azeroth erkunden, dir wilde Bären, Wölfe oder Raubkatzen zähmen und gemütlich aus der Distanz feuern.",
    realityCheck: "Der absolute Goldstandard für Tierfreunde und Einsteiger – und dank verbesserter Tier-Skalierung in WoW Forever bis ins Endspiel stark.",
    miniRotation: [
      { name: "Mal des Jägers", desc: "Markiert das Monster für alle Schützen sichtbar für Extra-Schaden", sound: "buff" },
      { name: "Zorn des Wildtiers", desc: "Verwandelt dein Tier in eine unaufhaltsame rote Bestie mit +50% Schaden", sound: "roar" },
      { name: "Gezielter & Auto-Schuss", desc: "Feuert zielsicher Pfeile aus sicherer Entfernung ab, während dein Tier kämpft", sound: "bow" }
    ],
    tags: ["Fernkampf", "Starker Tierbegleiter", "Einfachste Klasse überhaupt", "Sehr gemütlich", "Pfeil & Bogen"]
  },
  {
    id: "marksmanship",
    classId: "hunter",
    name: "Treffsicherheit-Jäger",
    role: "Fernkampf (Scharfschütze)",
    rangeType: "ranged",
    damageType: "Physische Weitschüsse (Bogen/Gewehr)",
    theme: "Der Meister-Scharfschütze",
    motto: "Als Einsamer Wolf ohne Tier aus 41 Metern anvisieren – ein gezielter Schuss und das Ziel fällt!",
    archetype: "Der Tödliche Scharfschütze",
    complexity: "Mittel (Schussrhythmus & Positionierung)",
    apm: "Ausgeglichen",
    stats: {
      burst: 92,
      sustain: 88,
      aoe: 78,
      utility: 72,
      survivability: 65
    },
    pros: [
      "Highlight in WoW Forever: Mit 'Einsamer Wolf' kannst du komplett OHNE Tier spielen und machst dafür ~20% mehr Scharfschützen-Schaden!",
      "Die höchste Reichweite im gesamten Spiel (bis zu 41 Meter Entfernung!)",
      "'Aura des Volltreffers' erhöht automatisch die Angriffskraft deiner gesamten Gruppe"
    ],
    cons: [
      "Wenn du ohne Tier ('Einsamer Wolf') spielst, musst du Feinde selbst mit Fallen und Verlangsamung auf Abstand halten",
      "Für die stärksten Schüsse bleibt man kurz ruhig stehen, um sauber zu zielen",
      "Weniger Nahkampf-Abwehr als der Überlebens-Jäger"
    ],
    vibe: "Du willst als klassischer Bogenschütze oder Scharfschütze aus maximaler Distanz zielen – auf Wunsch ganz alleine ohne Tierbegleiter für maximale Durchschlagskraft!",
    realityCheck: "Das neue 'Einsamer Wolf'-Talent in WoW Forever erfüllt endlich den Traum vieler Spieler: ein reiner Bogenschütze mit riesigen Schadenszahlen!",
    miniRotation: [
      { name: "Gezielter Schuss", desc: "Präziser Scharfschützen-Schuss mit gewaltiger Durchschlagskraft", sound: "bow" },
      { name: "Mehrfachschuss", desc: "Feuert eine Pfeilsalve ab, die sofort 3 Monster auf einmal trifft", sound: "bow_volley" },
      { name: "Eiskältefalle", desc: "Friert heranstürmende Gegner am Boden fest, damit du wieder auf Distanz kommst", sound: "trap" }
    ],
    tags: ["Fernkampf", "Einsamer Wolf (Ohne Tier möglich)", "Größte Reichweite", "Scharfschütze", "Team-Aura"]
  },
  {
    id: "survival",
    classId: "hunter",
    name: "Überlebens-Jäger",
    role: "Nahkampf & Fallen-Hybrid",
    rangeType: "hybrid",
    damageType: "Nahkampfklingen, Explosiv-Fallen & Schüsse",
    theme: "Der explosive Waldläufer-Klingenmeister",
    motto: "Mit Klingen und explosiven Fallen mitten ins Gefecht – einer der stärksten Schadens-Kämpfer in WoW Forever!",
    archetype: "Der Explosive Waldläufer-Assassine",
    complexity: "Mittel - Anspruchsvoll (Actionreiches Fallen- & Nahkampf-Spiel)",
    apm: "Schnell",
    stats: {
      burst: 86,
      sustain: 92,
      aoe: 82,
      utility: 74,
      survivability: 80
    },
    pros: [
      "Massives WoW Forever Highlight: Komplett modernisiert als actionreicher Nahkampf- & Fallen-Jäger mit Top-Tier-Schaden!",
      "Kombiniert wuchtige Nahkampfhiebe (Raptorstoß & Mungobiss) mit explosiven Feuerfallen direkt im Kampf",
      "Extrem wehrhaft durch hohes Ausweichen, Gegenangriffe und bewegliches Hin-und-Her-Springen"
    ],
    cons: [
      "Spielt sich viel aktiver und näher am Feind als ein gemütlicher Fernkampf-Jäger",
      "Erfordert Lust auf Bewegung und das geschickte Platzieren von Fallen",
      "Nichts für Spieler, die nur still an einer Stelle stehen und Pfeile schießen wollen"
    ],
    vibe: "Du willst wie ein agiler Waldläufer (wie Aragorn oder Rexxar) mit scharfen Klingen und explosiven Fallen direkt am Feind kämpfen und ganz oben im Schaden mitmischen!",
    realityCheck: "In WoW Forever vom einstigen Nischen-Talentbaum zu einer der spannendsten und stärksten DPS-Spezialisierungen im ganzen Spiel aufgestiegen!",
    miniRotation: [
      { name: "Raptorstoß & Mungobiss", desc: "Schnelle, harte Nahkampfhiebe mit deinen Klingen direkt am Monster", sound: "slash" },
      { name: "Sprengfalle", desc: "Legt mitten im Gefecht eine explosive Feuerfalle unter die Füße der Feinde", sound: "explosion" },
      { name: "Gegenangriff", desc: "Kontert nach dem Ausweichen sofort und nagelt den Gegner am Boden fest", sound: "crush" }
    ],
    tags: ["Nahkampf & Hybrid", "Top-Schaden in WoW Forever", "Explosive Fallen", "Waldläufer-Stil", "Sehr agil"]
  },

  // --- DRUIDE ---
  {
    id: "feral_dps",
    classId: "druid",
    name: "Wilder Kampf / Katze (Feral)",
    role: "Nahkampf (Raubkatzen-Gestalt)",
    rangeType: "melee",
    damageType: "Krallenhiebe & Blutungen",
    theme: "Die schleichende Raubkatze",
    motto: "Als Raubkatze anschleichen, mit Ur-Biss zerfleischen und dem Team +3% Extra-Crits schenken.",
    archetype: "Der Formwandler-Virtuose",
    complexity: "Mittel (Flüssige Katzen-Kombos)",
    apm: "Schnell",
    stats: {
      burst: 82,
      sustain: 88,
      aoe: 62,
      utility: 92,
      survivability: 88
    },
    pros: [
      "Neu in WoW Forever: Bekommt 'Zerfleischen / Ur-Biss', skaliert direkt mit Waffenschaden und braucht kein stressiges Dauer-Gestaltwechseln mehr!",
      "'Rudelführer'-Aura schenkt allen Nahkämpfern und Jägern in deiner Gruppe +3% kritische Trefferchance",
      "Unglaublich flexibel: Kann im Notfall sofort zum Bären werden, Freunde im Kampf wiederbeleben oder heilen"
    ],
    cons: [
      "Du kämpfst dauerhaft in deiner Raubkatzen-Gestalt, sodass man deine Rüstung im Kampf nicht sieht",
      "Gegen sehr große Monstergruppen etwas weniger Flächenschaden als ein Magier",
      "Du solltest deine Blutungseffekte auf dem Boss im Auge behalten"
    ],
    vibe: "Du suchst eine flinke Raubkatze, die schleichen kann, tiefe Krallen-Blutungen reißt und dank WoW Forever endlich flüssig ohne veraltete Gestaltwechsel-Tricks spielbar ist.",
    realityCheck: "In WoW Forever wurden die alten Katzen-Probleme komplett behoben: Deine Waffen machen dich direkt stärker und die Rotation läuft butterweich!",
    miniRotation: [
      { name: "Zerfleischen (Ur-Biss)", desc: "Neuer Krallenhieb in WoW Forever, der alle Blutungen auf dem Ziel verstärkt", sound: "claw" },
      { name: "Schreddern", desc: "Wuchtiger Prankenhieb für schnelle Kombopunkte", sound: "slash" },
      { name: "Zerfetzen", desc: "Reißt tiefe Wunden, die dem Gegner über Zeit massiven Blutungsschaden zufügen", sound: "bleed" }
    ],
    tags: ["Nahkampf", "Raubkatzen-Gestalt", "Rudelführer (+3% Crit)", "Ur-Biss & Blutungen", "Sehr vielseitig"]
  },
  {
    id: "balance",
    classId: "druid",
    name: "Gleichgewicht / Eule (Balance)",
    role: "Fernkampf (Mondkin-Gestalt)",
    rangeType: "ranged",
    damageType: "Astrale Mond- & Naturzauber",
    theme: "Die kultige Mondkin-Eule",
    motto: "Kosmische Laser von oben, Gratis-Zauber durch Klarsicht und +3% Zauber-Crit für alle Freunde!",
    archetype: "Das Kultige Mondkin",
    complexity: "Einfach - Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 82,
      sustain: 82,
      aoe: 80,
      utility: 92,
      survivability: 72
    },
    pros: [
      "Highlight in WoW Forever: Das alte Mana-Problem ist gelöst! 'Omen der Klarsicht' schenkt dir regelmäßig kostenlose Zauber",
      "Deine Zeit-Zauber (Mondfeuer & Insektenschwarm) können in WoW Forever kritisch treffen und 'Zorn' schlägt viel härter ein",
      "'Aura des Mondkins' gibt allen Zauberern im Team +3% Crit, plus Wiederbelebung mitten im Bosskampf!"
    ],
    cons: [
      "Man kämpft in der kultigen, dicken Federeulen-Gestalt statt in normaler Rüstung",
      "Große Sternenfeuer-Zauber haben eine spürbare Zauberzeit, in der man stehen bleiben muss",
      "Weniger Sofort-Fluchtzauber bei Stille-Effekten als ein Magier"
    ],
    vibe: "Du willst als kultige Mondkin-Eule kosmische Sternenlaser und Naturzorn abfeuern, ohne wie früher ständig ohne Mana dazustehen.",
    realityCheck: "In WoW Forever ist der alte Spitzname 'Oomkin' Geschichte: Die Eule hat ausdauerndes Mana, starken Schaden und wird von jeder Zauberer-Gruppe geliebt!",
    miniRotation: [
      { name: "Mondfeuer", desc: "Sofortiger Mondstrahl gefolgt von brennendem Sternenlicht, das kritisch treffen kann", sound: "moonfire" },
      { name: "Zorn & Sternenfeuer", desc: "Schnelle Naturgeschosse im Wechsel mit wuchtigen kosmischen Sternenlasern", sound: "starfire" },
      { name: "Hurrikan", desc: "Beschwört ein Gewitter herab, das ganze Gegnergruppen unter Blitzen begräbt", sound: "storm" }
    ],
    tags: ["Fernkampf", "Mondkin-Eule", "Kein Mana-Problem mehr", "Team-Crit-Aura", "Kampf-Wiederbelebung"]
  },

  // --- SCHAMANE ---
  {
    id: "enhancement",
    classId: "shaman",
    name: "Verstärker-Schamane",
    role: "Nahkampf (Sturm- & Totemkrieger)",
    rangeType: "melee",
    damageType: "Waffenhiebe, Windfury & Sofort-Blitze",
    theme: "Der Donnergott mit Windfury",
    motto: "Windfury schlägt dreifach ein und meine Waffe entlädt sofortige Blitze mitten im Nahkampf!",
    archetype: "Der Donnernde Totem-Krieger",
    complexity: "Mittel",
    apm: "Ausgeglichen - Schnell",
    stats: {
      burst: 95,
      sustain: 84,
      aoe: 72,
      utility: 98,
      survivability: 78
    },
    pros: [
      "Neu in WoW Forever: Nahkampftreffer laden deine Magie auf, sodass du Blitzschläge sofort ohne Zauberzeit mitten im Schlagabtausch abfeuern kannst!",
      "Das legendäre 'Windfury-Totem' lässt die Waffen deiner ganzen Gruppe mehrfach zuschlagen – jeder Nahkämpfer liebt dich",
      "Kann sowohl mit einer wuchtigen Zweihandwaffe als auch mit zwei Waffen gespielt werden"
    ],
    cons: [
      "Kein direkter Ansturm-Sprung wie der Krieger – du näherst dich im schnellen Geisterwolf",
      "Du achtest neben dem Zuschlagen auch darauf, dass deine Totems in Reichweite der Gruppe stehen",
      "Trägt Kettenrüstung statt schwerer Platte"
    ],
    vibe: "Du willst ein echter Sturm-Krieger sein, bei dem Schwerthiebe und krachende Blitze verschmelzen und dessen Totems die ganze Gruppe in einen Kampfrausch versetzen.",
    realityCheck: "Dank den neuen Sofort-Blitz-Aufladungen in WoW Forever hat der Verstärker-Schamane keine Wartepausen mehr und liefert konstanten, spektakulären Schaden.",
    miniRotation: [
      { name: "Sturmschlag", desc: "Wuchtiger Waffenangriff, der das Ziel für deine Blitz- und Erdschocks verwundbar macht", sound: "hammer" },
      { name: "Windfury-Mehrfachschlag", desc: "Deine Waffe entlädt wirbelnde Extra-Schläge mit enormer Angriffskraft", sound: "windfury" },
      { name: "Sofort-Blitzschlag", desc: "Aufgeladene Sturm-Energie feuert einen Blitz ohne Wartezeit direkt ins Ziel", sound: "lightning" }
    ],
    tags: ["Nahkampf", "Windfury-Legende", "Sofort-Blitze", "Totem-Gott", "Bester Team-Partner"]
  },
  {
    id: "elemental",
    classId: "shaman",
    name: "Elementar-Schamane",
    role: "Fernkampf (Blitze & Lava)",
    rangeType: "ranged",
    damageType: "Blitze, Kettenblitze & Lavaeruption",
    theme: "Das wandelnde Gewitter",
    motto: "Flammenschock drauf, Lavaeruption für einen garantierten Krit-Treffer hinterher und Kettenblitze durch die Reihen jagen!",
    archetype: "Der Wandelnde Blitzableiter",
    complexity: "Einfach - Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 96,
      sustain: 82,
      aoe: 88,
      utility: 95,
      survivability: 76
    },
    pros: [
      "Highlight in WoW Forever: Bekommt 'Lavaeruption' (garantierter kritischer Treffer auf brennende Ziele!) sowie 'Wasserschild' für entspanntes Mana",
      "'Blitz-Überladung' feuert regelmäßig völlig kostenlos einen zweiten Blitz direkt hinterher",
      "Stellt mächtige Totems für die Gruppe auf und trägt schützende Kettenrüstung plus Schild"
    ],
    cons: [
      "Für Blitzschlag und Lavaeruption muss man beim Zaubern kurz stehen bleiben",
      "Man sollte seine Totems beim Weiterlaufen immer wieder neu aufstellen",
      "Weniger Flucht-Sprünge als ein Magier (nutzt stattdessen das Erdbindungs-Totem)"
    ],
    vibe: "Du willst wie ein Wettergott glühende Lava und überspringende Kettenblitze schleudern, während deine Totems das gesamte Team stärken.",
    realityCheck: "Mit 'Lavaeruption' und 'Wasserschild' gehört der Elementar-Schamane in WoW Forever zu den befriedigendsten und ausdauerndsten Zauberern überhaupt!",
    miniRotation: [
      { name: "Flammenschock", desc: "Verbrennt das Ziel sofort und bereitet es für deine Lavaeruption vor", sound: "fire" },
      { name: "Lavaeruption", desc: "Schleudert flüssiges Magma, das auf brennenden Zielen garantiert kritisch einschlägt!", sound: "explosion" },
      { name: "Kettenblitz", desc: "Elektrisierender Blitz, der von Feind zu Feind überspringt", sound: "lightning" }
    ],
    tags: ["Fernkampf", "Lavaeruption & Kettenblitz", "Wasserschild", "Thor-Gefühl", "Totem-Support"]
  },

  // --- PALADIN ---
  {
    id: "retribution",
    classId: "paladin",
    name: "Vergeltung-Paladin",
    role: "Nahkampf (Heiliger Ritter)",
    rangeType: "melee",
    damageType: "Heiliges Licht & 2-Hand-Waffe",
    theme: "Der unerschütterliche Kreuzritter",
    motto: "Heiliger Stoß, dauerhafte Licht-Siegel und die legendäre Unverwundbarkeits-Blase!",
    archetype: "Der Unerschütterliche Rächer",
    complexity: "Einfach (Aktiv, wuchtig & fehlerverzeihend)",
    apm: "Ausgeglichen",
    stats: {
      burst: 88,
      sustain: 82,
      aoe: 76,
      utility: 96,
      survivability: 95
    },
    pros: [
      "Massives Upgrade in WoW Forever: Bekommt 'Heiliger Stoß' als aktiven Waffenhieb und deine Siegel verschwinden beim Richturteil nicht mehr!",
      "Quasi unsterblich dank Plattenrüstung, Selbstheilung und der 12-Sekunden-'Gottesschild-Blase' (komplette Unverwundbarkeit)",
      "Bringt die besten Gruppen-Segen im Spiel mit (Segen der Könige, Segen der Macht) sowie 'Weihe' gegen Monstergruppen"
    ],
    cons: [
      "Hat keinen direkten Ansturm-Sprung – läuft zu Fuß oder auf dem Streitross in den Kampf",
      "Weniger Schleich- oder Überraschungstricks als ein Schurke",
      "Etwas ruhigeres Angriffstempo mit einer schweren Zweihandwaffe"
    ],
    vibe: "Du willst einen edlen Ritter in glänzender Plattenrüstung spielen, der seine Freunde beschützt, niemals stirbt und in WoW Forever endlich aktiv mit heiligen Schlägen austeilt.",
    realityCheck: "Vorbei sind die alten Zeiten, in denen Paladine nur zuschauen konnten: Mit 'Heiliger Stoß' und dauerhaften Siegeln bist du in WoW Forever ein vollwertiger, starker Nahkämpfer!",
    miniRotation: [
      { name: "Heiliger Stoß", desc: "Aktiver Zweihand-Angriff in WoW Forever, der sofortigen heiligen Waffenschaden verursacht", sound: "hammer" },
      { name: "Richturteil", desc: "Entlädt heilige Energie auf den Feind, ohne dein aktives Siegel zu beenden", sound: "execute" },
      { name: "Weihe & Gottesschild", desc: "Verbrennt Feinde am Boden mit heiligem Licht oder macht dich 12 Sek. unverwundbar", sound: "magic" }
    ],
    tags: ["Nahkampf", "Plattenrüstung", "Heiliger Stoß", "Komplett unverwundbar", "Beste Team-Segen"]
  },

  // --- PRIESTER ---
  {
    id: "shadow_priest",
    classId: "priest",
    name: "Schatten-Priester",
    role: "Fernkampf (Schattenzauber)",
    rangeType: "ranged",
    damageType: "Schatten & Gedankenkontrolle",
    theme: "Der düstere Psycho-Schmelzer",
    motto: "Schattengestalt aktivieren, gegnerische Gedanken schmelzen und mein Team durch meinen Schaden heilen!",
    archetype: "Der Düstere Seelenschmelzer",
    complexity: "Einfach - Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 82,
      sustain: 82,
      aoe: 45,
      utility: 90,
      survivability: 72
    },
    pros: [
      "In WoW Forever deutlich verbesserte Mana-Ausdauer, stärkere Schilde und kein Limit-Problem mehr für deine Schattenzauber!",
      "'Vampirumarmung' heilt deine gesamte Gruppe automatisch um einen Teil des Schadens, den du am Monster verursachst",
      "Steigert den Schattenschaden der Gruppe um 15% und hält durch 'Schattengestalt' und 'Machtwort: Schild' viel aus"
    ],
    cons: [
      "Wenig Flächenschaden, wenn sehr viele kleine Monster gleichzeitig angreifen",
      "Während Schattengestalt aktiv ist, nutzt man keine direkten weißen Heilzauber (man heilt stattdessen über Vampirumarmung)",
      "Keine Teleport-Sprünge – hält Feinde mit Furcht-Schrei und Verlangsamung auf Distanz"
    ],
    vibe: "Du willst geheimnisvolle Schattenmagie wirken, in violetter Geistergestalt schweben, im 1-gegen-1 unschlagbar sein und dein Team passiv durch deinen Schaden heilen.",
    realityCheck: "Dank der verbesserten Mana-Regeneration in WoW Forever geht dem Schattenpriester auch in langen Bosskämpfen nicht mehr die Puste aus!",
    miniRotation: [
      { name: "Schattenwort: Schmerz", desc: "Belegt den Feind mit anhaltenden dunklen Schmerzen über Zeit", sound: "curse" },
      { name: "Gedankenschlag", desc: "Wuchtiger telepathischer Einschlag direkt in den Geist des Ziels", sound: "explosion" },
      { name: "Gedankenschinden", desc: "Kanalisierter Schattenstrahl, der das Ziel schädigt und stark verlangsamt", sound: "drain" }
    ],
    tags: ["Fernkampf", "Schattengestalt", "Team heilen durch Schaden", "Bessere Mana-Ausdauer", "Duell-Monster"]
  }
];

// Die 10 durchdachten, 100% anfängerfreundlichen Fragen – angepasst an den offiziellen WoW Forever (2026) Stand
const QUIZ_QUESTIONS = [
  {
    id: "range_position",
    title: "1. Wo willst du im Kampf stehen?",
    subtitle: "Stell dir vor, du kämpfst gegen ein riesiges Monster...",
    options: [
      {
        text: "Direkt davor mit der Waffe in der Hand! Ich will dem Monster ins Gesicht schauen und den Schlagabtausch spüren.",
        hint: "Nahkampf – Action pur mit Klingen, Äxten, Streitkolben oder explosiven Fallen mitten im Geschehen.",
        icon: "⚔️",
        weights: {
          fury: 4, arms: 4, combat: 4, assassination: 4, subtlety: 3, feral_dps: 4, enhancement: 4, retribution: 4, survival: 4,
          frost_mage: -4, fire_mage: -4, arcane_mage: -4, affliction: -4, destruction: -4, demonology: -3, marksmanship: -4, beastmastery: -3, balance: -4, elemental: -4, shadow_priest: -4
        }
      },
      {
        text: "In sicherer Entfernung mit Pfeil & Bogen oder mächtigen Zaubersprüchen! Ich behalte den Überblick.",
        hint: "Fernkampf – du feuerst aus bis zu 40 Metern Distanz, bevor das Monster dich erreicht.",
        icon: "🏹",
        weights: {
          frost_mage: 4, fire_mage: 4, arcane_mage: 4, affliction: 4, destruction: 4, demonology: 4, marksmanship: 4, beastmastery: 4, balance: 4, elemental: 4, shadow_priest: 4, survival: 2,
          fury: -4, arms: -4, combat: -4, assassination: -4, subtlety: -3, feral_dps: -4, enhancement: -4, retribution: -4
        }
      },
      {
        text: "Aus dem Verborgenen oder per Überraschungs-Manöver! Ich schleiche mich an, lege Fallen und schlage taktisch zu.",
        hint: "Schleicher, Waldläufer & Attentäter – du bestimmst, wann und wie der Kampf beginnt.",
        icon: "👤",
        weights: {
          subtlety: 5, assassination: 5, feral_dps: 4, survival: 4, combat: 3,
          fury: -1, retribution: -2
        }
      }
    ]
  },
  {
    id: "damage_style",
    title: "2. Welches Schlag-Gefühl macht dir am meisten Spaß?",
    subtitle: "Wie stellst du dir deinen perfekten Treffer vor?",
    options: [
      {
        text: "Wuchtige Riesenschläge! Ein einzelner Treffer, Feuerball oder Lava-Einschlag soll den Gegner sofort erschüttern.",
        hint: "Riesige Einzeltreffer – Zweihandhiebe, Heiliger Stoß, Gezielter Schuss oder Lavaeruption.",
        icon: "💥",
        weights: {
          arms: 5, destruction: 5, arcane_mage: 5, elemental: 5, enhancement: 4, fire_mage: 4, marksmanship: 4, retribution: 4,
          affliction: -3, beastmastery: -1
        }
      },
      {
        text: "Ein schneller Wirbelsturm! Rasend schnelle Hiebe, Doppelstiche und explosive Kombos ohne eine Sekunde Pause.",
        hint: "Hohes Angriffstempo – pausenlose Treffer mit zwei Waffen, Krallen oder Nahkampf-Fallen.",
        icon: "🌪️",
        weights: {
          fury: 5, combat: 5, survival: 4, feral_dps: 4, assassination: 4, enhancement: 3,
          arcane_mage: -2
        }
      },
      {
        text: "Flüche, Gifte & Blutungen! Ich belege das Monster mit dunkler Magie oder Krallenwunden, die es stetig zerfressen.",
        hint: "Schaden über Zeit – du schwächst den Feind Sekunde für Sekunde unaufhaltsam.",
        icon: "☣️",
        weights: {
          affliction: 5, shadow_priest: 5, assassination: 4, feral_dps: 3, demonology: 3, balance: 3,
          fury: -3, arms: -3, arcane_mage: -3
        }
      },
      {
        text: "Einfrieren, Fallen & Kontrolle! Das Monster soll festfrieren, in Fallen tappen oder betäubt werden.",
        hint: "Volle Kontrolle – Eislanzen auf gefrorene Gegner, Betäubungen oder Spreng- & Eisfallen.",
        icon: "❄️",
        weights: {
          frost_mage: 5, subtlety: 4, survival: 4, beastmastery: 3, shadow_priest: 2,
          fury: -2, fire_mage: -1
        }
      }
    ]
  },
  {
    id: "combat_flow",
    title: "3. Wie soll sich das Kämpfen im Spielablauf für dich anfühlen?",
    subtitle: "Jede Klasse hat in WoW Forever ihren eigenen Rhythmus beim Angreifen.",
    options: [
      {
        text: "Immer mitten rein! Pausenlose Nahkampf-Action – nach jedem Sieg direkt weiterstürmen und mit voller Kraft draufhalten.",
        hint: "Direkter Schlagabtausch – Siegesrausch, Heiliger Stoß, Windfury oder Waldläufer-Klingen.",
        icon: "💢",
        weights: {
          fury: 5, arms: 5, enhancement: 4, retribution: 4, survival: 4, feral_dps: 2,
          frost_mage: -3, affliction: -3, marksmanship: -3
        }
      },
      {
        text: "Schnell zuschlagen, Kombopunkte aufbauen (die in WoW Forever beim Zielwechsel bleiben!) und mit einem Finisher krönen!",
        hint: "Kombos & Energie – Verstümmeln, Krallenhiebe und kraftvolle Abschluss-Angriffe.",
        icon: "⚡",
        weights: {
          combat: 5, assassination: 5, subtlety: 5, feral_dps: 5,
          warrior: -2, mage: -2
        }
      },
      {
        text: "Mächtige Zauber & Sofort-Effekte entfesseln! Wenn etwas aufleuchtet, fliegt sofort ein riesiger Pyroschlag, Blitz oder Laser los.",
        hint: "Moderne Zauberkunst – Kampfeshitze, Lavaeruption, Eislanze, Arkanschlag oder Sternenfeuer.",
        icon: "✨",
        weights: {
          frost_mage: 4, fire_mage: 4, arcane_mage: 4, destruction: 4, affliction: 3, elemental: 4, shadow_priest: 4, balance: 4,
          fury: -4, arms: -4, combat: -4, assassination: -4
        }
      },
      {
        text: "Mein treuer Tierbegleiter oder Dämon fängt vorne alle Schläge ab, während ich sicher aus der zweiten Reihe angreife.",
        hint: "Begleiter-Meister – dein Bär, Wolf oder Dämon hält dir zuverlässig den Rücken frei.",
        icon: "🐺",
        weights: {
          beastmastery: 5, demonology: 5, affliction: 2, survival: 2,
          fury: -3, rogue: -3, mage: -2
        }
      }
    ]
  },
  {
    id: "preferred_weapons",
    title: "4. Welche Bewaffnung liegt dir optisch und spielerisch am besten?",
    subtitle: "Wie soll dein Charakter ausgerüstet in die Schlacht ziehen?",
    options: [
      {
        text: "Zwei einhändige Klingen gleichzeitig (z.B. zwei Schwerter, Äxte oder giftige Dolche)!",
        hint: "Dual-Wield – doppelt so viele Treffer für Berserker, Schurken, Überlebens-Jäger oder Schamanen.",
        icon: "🗡️",
        weights: {
          fury: 5, combat: 5, assassination: 5, survival: 4, enhancement: 4, subtlety: 4,
          arms: -3, retribution: -3, frost_mage: -3, marksmanship: -3
        }
      },
      {
        text: "Eine einzige massive Zweihandwaffe (riesiges Großschwert, Streitaxt oder heiliger Kriegshammer)!",
        hint: "2-Hand-Waffe – gewaltige Schwünge für Waffen-Krieger, Paladine, Schamanen oder Waldläufer.",
        icon: "🪓",
        weights: {
          arms: 5, retribution: 5, enhancement: 4, survival: 3,
          fury: -3, combat: -3, assassination: -4, mage: -3
        }
      },
      {
        text: "Ein edler Bogen oder ein schweres Gewehr für präzise Schüsse aus weiter Distanz!",
        hint: "Fernkampfwaffe – wahlweise mit treuem Tier oder als 'Einsamer Wolf' komplett ohne Tier für +20% Schaden!",
        icon: "🏹",
        weights: {
          marksmanship: 5, beastmastery: 5, survival: 3,
          warrior: -3, rogue: -3, mage: -2
        }
      },
      {
        text: "Ein magischer Zauberstab oder Runenstab, der vor arkaner, elementarer oder dunkler Energie leuchtet!",
        hint: "Zauberfokus – verstärkt deine Feuerbälle, Blitze, Eislanzen und Schattenflüche.",
        icon: "🪄",
        weights: {
          frost_mage: 4, fire_mage: 4, arcane_mage: 4, affliction: 4, destruction: 4, demonology: 4, shadow_priest: 4, balance: 4, elemental: 4,
          warrior: -4, rogue: -4
        }
      },
      {
        text: "Keine normalen Schmiedewaffen – ich verwandle mich lieber direkt in eine Raubkatze oder Mondkin-Eule!",
        hint: "Gestaltwandler – deine Krallen, Reißzähne und kosmischen Naturkräfte sind deine Waffe.",
        icon: "🐾",
        weights: {
          feral_dps: 6, balance: 5,
          warrior: -2, mage: -2
        }
      }
    ]
  },
  {
    id: "combat_scenario",
    title: "5. In welchem Kampf-Szenario willst du die absolute Nummer 1 sein?",
    subtitle: "Wo soll dein Charakter in WoW Forever am hellsten strahlen?",
    options: [
      {
        text: "Im epischen Bosskampf gegen einen einzelnen Riesen-Endgegner!",
        hint: "Boss-Schmelzer – du lieferst höchsten Schaden auf den großen Endgegner.",
        icon: "👑",
        weights: {
          fury: 4, survival: 4, marksmanship: 4, fire_mage: 4, assassination: 4, combat: 4, destruction: 4, arms: 3, feral_dps: 3, affliction: 3
        }
      },
      {
        text: "Wenn eine riesige Monster-Gruppe auf uns einstürmt und gleichzeitig weggemäht werden muss!",
        hint: "Flächenschaden-König – Blizzard, Kettenblitze, Sprengfallen, Weihe oder Klingenwirbel.",
        icon: "💥",
        weights: {
          frost_mage: 5, elemental: 4, fire_mage: 4, destruction: 4, survival: 4, fury: 3, combat: 3, balance: 3, retribution: 3
        }
      },
      {
        text: "In spannenden 1-gegen-1 Duellen und überraschenden Überfällen auf dem Schlachtfeld!",
        hint: "Duell-Champion – im direkten Zweikampf bist du kaum zu bezwingen.",
        icon: "🎯",
        weights: {
          subtlety: 5, shadow_priest: 5, arcane_mage: 4, demonology: 4, affliction: 4, arms: 4, assassination: 4, frost_mage: 3, retribution: 3
        }
      },
      {
        text: "In jedem Teamkampf – weil meine Totems, Segen, Crit-Auren oder mein Dämonischer Pakt alle Freunde massiv verstärken!",
        hint: "Team-Liebling – jede Gruppe reißt sich um dich, weil du alle Mitspieler spürbar stärker machst.",
        icon: "🤝",
        weights: {
          enhancement: 5, retribution: 5, demonology: 5, elemental: 4, balance: 4, feral_dps: 4, shadow_priest: 4, marksmanship: 3
        }
      }
    ]
  },
  {
    id: "group_ego",
    title: "6. Was willst du für deine Freunde im Team sein?",
    subtitle: "Ihr seid gemeinsam in einem Dungeon oder Raid unterwegs...",
    options: [
      {
        text: "Der Schadens-König! Ich will ganz oben auf der Schadensliste stehen und die Monster in Rekordzeit fällen.",
        hint: "Voller Fokus auf maximale Trefferzahlen – in WoW Forever glänzen hier auch Überlebens- & Scharfschützen-Jäger!",
        icon: "🏆",
        weights: {
          fury: 4, survival: 4, marksmanship: 4, fire_mage: 4, assassination: 4, combat: 4, destruction: 4, arms: 3, feral_dps: 3, arcane_mage: 3
        }
      },
      {
        text: "Der gefeierte Team-Verstärker! Ich mache guten Schaden UND schenke meinen Freunden mächtige Auren, Totems oder Zaubermacht-Boni.",
        hint: "Beste Gruppen-Synergie – Windfury-Totems, Segen der Könige, +3% Crit-Auren oder Dämonischer Pakt.",
        icon: "🌟",
        weights: {
          enhancement: 5, retribution: 5, demonology: 5, elemental: 4, feral_dps: 4, balance: 4, shadow_priest: 4, marksmanship: 2,
          fury: -2, combat: -2
        }
      },
      {
        text: "Der clevere Problemlöser! Ich öffne Reise-Portale, verteile Gratis-Essen & Heilsteine, stelle Fallen oder friere Feinde ein.",
        hint: "Praktische Werkzeugkiste – du hast für jede brenzlige Situation den rettenden Trick parat.",
        icon: "🧰",
        weights: {
          frost_mage: 4, arcane_mage: 4, fire_mage: 3, affliction: 4, demonology: 4, destruction: 3, subtlety: 4, survival: 4, beastmastery: 3, marksmanship: 3,
          fury: -2, arms: -1
        }
      }
    ]
  },
  {
    id: "defense_instinct",
    title: "7. Was tust du, wenn ein Monster plötzlich wütend auf DICH zustürmt?",
    subtitle: "Deine Lebensleiste gerät in Gefahr...",
    options: [
      {
        text: "Unverwundbarkeits-Schild aktivieren! Ich lache dem Monster ins Gesicht, während seine Schläge komplett abprallen.",
        hint: "Absolute Immunität – 12-Sekunden-Gottesschild-Blase, Eisblock oder Machtschild.",
        icon: "🛡️",
        weights: {
          retribution: 5, frost_mage: 5, arcane_mage: 4, fire_mage: 3, shadow_priest: 3
        }
      },
      {
        text: "Rauchbombe zünden, Ausweichen oder Totstellen – das Monster schlägt ins Leere!",
        hint: "Entkommen & Kontern – Verschwinden, Entrinnen, Gegenangriff oder Totstellen.",
        icon: "💨",
        weights: {
          subtlety: 5, assassination: 4, combat: 4, survival: 4, marksmanship: 4, beastmastery: 4
        }
      },
      {
        text: "Keinen Schritt zurück! Ich halte voll dagegen, heile mich durch Siegesrausch oder Lebensraub und schlage zurück.",
        hint: "Standhalten – dicke Rüstung, Dämonen-Seelenverbindung oder aktive Selbstheilung im Kampf.",
        icon: "⚔️",
        weights: {
          fury: 4, arms: 4, affliction: 4, demonology: 4, enhancement: 4, retribution: 3, destruction: 3, elemental: 3
        }
      },
      {
        text: "Tierverwandlung oder Temposchub zünden und blitzschnell auf sicheren Abstand sprinten!",
        hint: "Maximale Beweglichkeit – als Gepard, Bär oder per Blinzeln sofort außer Gefahr bringen.",
        icon: "🐾",
        weights: {
          feral_dps: 5, balance: 5, survival: 3, arcane_mage: 2, frost_mage: 2
        }
      }
    ]
  },
  {
    id: "complexity_preference",
    title: "8. Wie viel Lust hast du auf viele Tasten und Timing?",
    subtitle: "Sei ehrlich: Willst du ganz entspannt zocken oder actionreiche Tastenkombinationen meistern?",
    options: [
      {
        text: "Halt es super entspannt! Eine übersichtliche Anzahl Tasten reicht mir völlig – ich will gemütlich und fehlerverzeihend zocken.",
        hint: "Sehr einsteigerfreundlich – kein Hektik-Stress und keine Fingerkrämpfe.",
        icon: "🍺",
        weights: {
          beastmastery: 5, demonology: 4, frost_mage: 4, combat: 4, destruction: 4, retribution: 3, balance: 3,
          subtlety: -4, survival: -2
        }
      },
      {
        text: "Ein gesunder Mittelweg: Eine flüssige Rotation mit coolen Aufleucht-Effekten (Procs) und gutem Rhythmus.",
        hint: "Modernes WoW Forever Spielgefühl – leicht zu lernen, bleibt aber immer spannend.",
        icon: "⚖️",
        weights: {
          fury: 4, arms: 4, assassination: 4, marksmanship: 4, fire_mage: 4, arcane_mage: 4, affliction: 4, elemental: 4, enhancement: 4, shadow_priest: 4, retribution: 4, balance: 4, feral_dps: 4, survival: 3
        }
      },
      {
        text: "Ich will actionreiche Herausforderungen! Fallen & Nahkampf kombinieren, Haltungen wechseln und jede Sekunde optimieren.",
        hint: "Für Ehrgeizige & Action-Fans – hohes Tempo, Kombos und taktische Tiefe.",
        icon: "🎹",
        weights: {
          subtlety: 5, survival: 5, feral_dps: 4, arms: 4, arcane_mage: 3, fire_mage: 2,
          beastmastery: -4, demonology: -2
        }
      }
    ]
  },
  {
    id: "theme_fantasy",
    title: "9. Welcher Heldentyp gefällt dir optisch und thematisch am besten?",
    subtitle: "Die Fantasie und Ausstrahlung deines Charakters in Azeroth.",
    options: [
      {
        text: "Ritter & Waffenmeister: Schwere Stahlrüstung, riesige Schwerter oder Äxte und pure Muskelkraft.",
        hint: "Kein Zauber-Schnickschnack – ehrlicher Stahl und unbändige Kampfkraft.",
        icon: "🛡️",
        weights: {
          fury: 5, arms: 5, combat: 2,
          frost_mage: -4, affliction: -4, shadow_priest: -4
        }
      },
      {
        text: "Schatten & Gesetzlose: Lautlose Schritte, zwei scharfe Klingen, tödliche Gifte und gezielte Stiche.",
        hint: "Assassine & Duellant – flink, gerissen und tödlich.",
        icon: "🗡️",
        weights: {
          assassination: 5, subtlety: 5, combat: 5, feral_dps: 2,
          warrior: -2, mage: -3, retribution: -3
        }
      },
      {
        text: "Waldläufer, Wildnis & Gestaltwandler: Scharfschützen-Bogen, explosive Fallen, treue Tiere, Raubkatze oder Mondkin-Eule.",
        hint: "Jäger & Druiden – Meister der Jagd, der Tierwelt und der Natur.",
        icon: "🐾",
        weights: {
          beastmastery: 5, marksmanship: 5, survival: 5, feral_dps: 5, balance: 5,
          rogue: -2, warlock: -4, mage: -3
        }
      },
      {
        text: "Sturm, Donner & Elemente: Krachende Kettenblitze, glühende Lavaeruptionen, Windfury-Waffen und magische Totems.",
        hint: "Schamanische Urgewalt – verschmilzt Waffenkunst mit den vier Elementen.",
        icon: "⚡",
        weights: {
          enhancement: 6, elemental: 6, balance: 2,
          rogue: -3, warlock: -3, warrior: -2
        }
      },
      {
        text: "Dunkle Mächte & Schatten: Flüche, Dämonendiener, Seelenraub und unheimliche Gedanken-Magie.",
        hint: "Hexenmeister & Schattenpriester – verbotene Magie, die Feinde innerlich zermürbt.",
        icon: "🔮",
        weights: {
          affliction: 5, destruction: 5, demonology: 5, shadow_priest: 5,
          retribution: -5, warrior: -3
        }
      },
      {
        text: "Hohe Zauberkunst: Glühende Pyroschläge, eisige Eislanzen und knisternde Arkanschläge.",
        hint: "Magier – die Meister von Feuer, Frost und Arkaner Macht.",
        icon: "✨",
        weights: {
          frost_mage: 5, fire_mage: 5, arcane_mage: 5,
          warrior: -4, rogue: -3
        }
      },
      {
        text: "Heiliger Kreuzritter: Glänzender Plattenpanzer, göttlicher Hammer, Heiliger Stoß und goldene Licht-Auren.",
        hint: "Paladin – unerschütterlicher Streiter des Lichts.",
        icon: "☀️",
        weights: {
          retribution: 6,
          affliction: -5, shadow_priest: -4, destruction: -4
        }
      }
    ]
  },
  {
    id: "dopamine_moment",
    title: "10. Was gibt dir beim Kämpfen den größten Kick?",
    subtitle: "Welcher Moment zaubert dir beim Zocken das breiteste Grinsen ins Gesicht?",
    options: [
      {
        text: "Der Glücks- & Krit-Jackpot! Wenn Windfury dreifach einschlägt, Lavaeruption kritisch trifft oder ein Sofort-Pyroschlag fliegt.",
        hint: "Spektakuläre Treffer-Explosionen – wenn etwas aufleuchtet und die Lebensleiste des Gegners schmilzt.",
        icon: "🎰",
        weights: {
          enhancement: 5, elemental: 5, fire_mage: 5, arcane_mage: 5, arms: 5, destruction: 4, retribution: 4, marksmanship: 4,
          affliction: -2
        }
      },
      {
        text: "Der Geschwindigkeitsrausch! Wenn meine Waffen, Krallen oder Sprengfallen im Sekundentakt einschlagen und ich nicht zu bremsen bin.",
        hint: "Pausenlose Action-Flut – hohes Angriffstempo und dauerhafter Druck.",
        icon: "⚡",
        weights: {
          fury: 5, combat: 5, survival: 5, feral_dps: 4, assassination: 4,
          arcane_mage: -2
        }
      },
      {
        text: "Die absolute Überlegenheit! Der Gegner tappt in meine Falle, friert fest oder wird betäubt, während ich aus sicherer Position treffe.",
        hint: "Taktische Dominanz – der Feind ist dir und deinen Tricks schutzlos ausgeliefert.",
        icon: "❄️",
        weights: {
          frost_mage: 5, subtlety: 5, survival: 4, beastmastery: 4, marksmanship: 4, affliction: 3,
          fury: -2
        }
      },
      {
        text: "Der Held der Gruppe! Wenn meine Segen, Totems, Crit-Auren, Dämonen-Pakte oder Vampir-Heilung das ganze Team zum Sieg tragen.",
        hint: "Spürbare Team-Macht – du teilst kräftig aus UND machst alle deine Freunde zu Legenden.",
        icon: "🌟",
        weights: {
          shadow_priest: 5, enhancement: 4, feral_dps: 4, balance: 4, retribution: 4, demonology: 4, elemental: 4,
          fury: -2, combat: -2
        }
      }
    ]
  }
];
