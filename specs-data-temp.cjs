/**
 * WoW Forever - DPS Spezialisierungen & Klassen-Datenbank
 * 100% Einsteigerfreundlich für neue Spieler ohne WoW-Vorkenntnisse.
 * Fokus: Die 9 Original-Klassen (Kein Todesritter, Mönch, Dämonenjäger, Rufer)
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
    lore: "Der klassische Nahkämpfer mit dicker Rüstung. Stürzt sich direkt vor die Monster und wird umso gefährlicher, je länger der Kampf dauert.",
    specs: ["fury", "arms"]
  },
  rogue: {
    id: "rogue",
    name: "Schurke",
    icon: "🗡️",
    color: "#FFF569",
    armor: "Lederrüstung (Leicht & beweglich)",
    armorShort: "Leder",
    resource: "Energie & Kombopunkte",
    lore: "Meister des Schleichens und der Gifte. Kann sich unsichtbar anschleichen, Feinde betäuben und schlägt blitzschnell mit zwei Waffen zu.",
    specs: ["combat", "assassination", "subtlety"]
  },
  mage: {
    id: "mage",
    name: "Magier",
    icon: "❄️",
    color: "#69CCF0",
    armor: "Stoffrobe (Kein Rüstungsschutz)",
    armorShort: "Stoff",
    resource: "Mana (Zauberkraft)",
    lore: "Der klassische Zauberer. Kann Feinde tiefkühlen, Feuerbälle schleudern, Portale für Freunde beschwören und kostenloses Essen & Wasser herbeizaubern.",
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
    lore: "Düsterer Zauberer mit treuen Dämonen-Begleitern. Verflucht Gegner über Zeit und kann Freunde mit magischen Portalen direkt zu sich heranteleportieren.",
    specs: ["affliction", "destruction", "demonology"]
  },
  hunter: {
    id: "hunter",
    name: "Jäger",
    icon: "🏹",
    color: "#ABD473",
    armor: "Kettenrüstung (Solider Schutz)",
    armorShort: "Kette",
    resource: "Mana (Ausdauer beim Schießen)",
    lore: "Fernkämpfer mit Bogen oder Gewehr. Zähmt wilde Tiere wie Bären, Wölfe oder Katzen, die die Monster ablenken, während der Jäger aus sicherer Ferne schießt.",
    specs: ["beastmastery", "marksmanship", "survival"]
  },
  druid: {
    id: "druid",
    name: "Druide",
    icon: "🐾",
    color: "#FF7D0A",
    armor: "Lederrüstung (Naturleder)",
    armorShort: "Leder",
    resource: "Energie & Wut (Je nach Tiergestalt)",
    lore: "Der Verwandlungskünstler. Kann sich in eine schleichende Raubkatze, einen dicken Bären oder eine dicke Federeule verwandeln und Freunde im Notfall heilen.",
    specs: ["feral_dps", "balance"]
  },
  shaman: {
    id: "shaman",
    name: "Schamane",
    icon: "⚡",
    color: "#0070DE",
    armor: "Kettenrüstung (Schützender Panzer)",
    armorShort: "Kette",
    resource: "Mana (Geister- & Elementarmacht)",
    lore: "Bändiger von Blitzen und Stürmen. Stellt magische Totem-Pfähle in den Boden, die alle Freunde in der Nähe enorm stärken.",
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
    lore: "Der edle Ritter des Lichts. Kämpft in schwerster Rüstung mit Zweihandwaffe, schützt seine Freunde mit stärkenden Auren und kann sich selbst kurzzeitig komplett unsterblich machen.",
    specs: ["retribution"]
  },
  priest: {
    id: "priest",
    name: "Priester",
    icon: "👁️",
    color: "#FFFFFF",
    textColor: "#333333",
    armor: "Stoffrobe (Kutten)",
    armorShort: "Stoff",
    resource: "Mana (Geistige Energie)",
    lore: "Normalerweise für Heilzauber bekannt, doch als Schattenpriester nimmt er eine geisterhafte Schattengestalt an, schmilzt gegnerische Gedanken und heilt sein Team durch Schaden.",
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
    motto: "Zwei Schwerter in den Händen, blindwütig reinrennen und alles kurz und klein schlagen.",
    archetype: "Der Unaufhaltsame Fleischwolf",
    complexity: "Mittel (Leicht verständlich, actionreich)",
    apm: "Schnell (Viele Klicks nacheinander)",
    stats: {
      burst: 85,
      sustain: 98,
      aoe: 88,
      utility: 50,
      leveling: 60,
      survivability: 70
    },
    pros: [
      "Macht im späteren Spiel mit Freunden den allerhöchsten Schaden von allen Klassen",
      "Rasantes Spielgefühl: Keine langen Zauberzeiten, einfach pausenlos zuschlagen",
      "Tolle 'Hinrichten'-Attacke: Wenn das Monster fast tot ist, explodiert dein Schaden"
    ],
    cons: [
      "Alleine ganz am Anfang etwas zäh – man muss nach schweren Kämpfen oft Essen einpacken",
      "Erzeugt so viel Schaden, dass Monster schnell dich angreifen statt deinen Rüstungs-Freund",
      "Wird erst mit richtig guten Waffen und Ausrüstung so richtig stark"
    ],
    vibe: "Perfekt für dich, wenn du mitten ins Getümmel willst, zwei dicke Waffen tragen möchtest und den direkten, unbändigen Schlagabtausch liebst.",
    realityCheck: "Alleine auf Stufe 1 bis 30 musst du manchmal vorsichtig sein. Aber sobald du bessere Ausrüstung hast, bist du die absolute Schadens-Maschine der Gruppe.",
    miniRotation: [
      { name: "Blutdurst", desc: "Wuchtiger Schlag, der Schaden macht und dich ein kleines Stück heilt", sound: "slash" },
      { name: "Wirbelwind", desc: "Du wirbelst im Kreis und triffst bis zu 4 Monster um dich herum", sound: "cleave" },
      { name: "Hinrichten", desc: "Schlägt Monster mit wenig Leben mit maximaler Wucht sofort nieder", sound: "execute" }
    ],
    tags: ["Nahkampf", "Zwei Waffen", "Viel Action", "Riesenschaden", "Berserker"]
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
    complexity: "Mittel - Anspruchsvoll (Kampfhaltungen)",
    apm: "Ausgeglichen (Gezielte Schläge)",
    stats: {
      burst: 92,
      sustain: 75,
      aoe: 85,
      utility: 72,
      leveling: 75,
      survivability: 65
    },
    pros: [
      "Sehr harte, wuchtige Einzelschläge mit einer riesigen Zweihand-Waffe",
      "Kann gegnerische Heilung mit 'Tödlicher Stoß' halbieren – im Spieler-gegen-Spieler genial",
      "Kann zwei Gegner gleichzeitig mit voller Wucht treffen"
    ],
    cons: [
      "Trifft etwas langsamer als der Furor-Krieger mit zwei Waffen",
      "Erfordert das Wechseln von Kampfhaltungen (z.B. Angriffs-Modus vs. Schutz-Modus)",
      "Wenn ein Schlag daneben geht, muss man kurz auf den nächsten warten"
    ],
    vibe: "Für dich, wenn du die größte Axt oder das größte Schwert im Spiel tragen und mit kalkulierten, schweren Schwüngen Feinde fällen willst.",
    realityCheck: "Fühlt sich an wie ein echter mittelalterlicher Ritter mit Zweihänder. Braucht gutes Rhythmusgefühl beim Schlagen.",
    miniRotation: [
      { name: "Sturmangriff", desc: "Stürmt aus der Ferne blitzschnell auf den Gegner zu und macht ihn kurz baff", sound: "charge" },
      { name: "Tödlicher Stoß", desc: "Zweihandhieb, der enormen Schaden macht und die Heilung des Gegners halbiert", sound: "crush" },
      { name: "Weitreichende Stöße", desc: "Deine nächsten Schwünge treffen automatisch einen zweiten Gegner daneben", sound: "cleave" }
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
    damageType: "Physische Treffer (2 Schwerter/Streitkolben)",
    theme: "Der geschickte Duellant",
    motto: "Klingenwirbel anwerfen, Turbomodus zünden und Monster im Sekundentakt zersäbeln.",
    archetype: "Der Rhythmus-Schlächter",
    complexity: "Einfach (Sehr gut für Einsteiger)",
    apm: "Schnell (Pausenloses Angreifen)",
    stats: {
      burst: 80,
      sustain: 95,
      aoe: 86,
      utility: 68,
      leveling: 85,
      survivability: 78
    },
    pros: [
      "Sehr einfach zu lernen: Schläge sammeln und mit einem starken Abschlussangriff beenden",
      "Super stark beim Kämpfen gegen zwei Monster gleichzeitig dank Klingenwirbel",
      "Sehr verlässlich und stabil beim Alleinespielen durch Ausweichen und Gegenangriffe"
    ],
    cons: [
      "Nutzt Tarnung seltener als die anderen Schurken – kämpft meistens offen von vorne",
      "Du musst deinen Tempobuff 'Zerhäckseln' immer brav aktiv halten",
      "Viele Spieler wollen dieselben Schwerter haben"
    ],
    vibe: "Wenn du einen schnellen Nahkämpfer mit zwei Klingen spielen willst, der unkompliziert ist und in jeder Gruppe für gigantischen Schaden gefeiert wird.",
    realityCheck: "Einer der angenehmsten und unkompliziertesten Nahkämpfer für Einsteiger überhaupt.",
    miniRotation: [
      { name: "Finsterer Stoß", desc: "Schneller Hieb, der dir Kombopunkte zum Aufladen einbringt", sound: "slash" },
      { name: "Zerhäckseln", desc: "Abschluss-Angriff: Lässt dich für die nächsten Sekunden blitzschnell zuschlagen", sound: "buff" },
      { name: "Klingenwirbel", desc: "Trifft automatisch einen zweiten Gegner in deiner Nähe mit voller Kraft", sound: "cleave" }
    ],
    tags: ["Nahkampf", "Zwei Schwerter", "Einfach zu lernen", "Turbotempo", "Top-Schaden"]
  },
  {
    id: "assassination",
    classId: "rogue",
    name: "Meucheln-Schurke",
    role: "Nahkampf (Hinter dem Monster)",
    rangeType: "melee",
    damageType: "Dolche & Tödliche Gifte",
    theme: "Der klassische Meuchelmörder",
    motto: "Lautlos aus dem Schatten anschleichen, Dolch in den Rücken und das Gift erledigt den Rest.",
    archetype: "Der Tödliche Giftmischer",
    complexity: "Mittel (Erfordert Stehen im Rücken)",
    apm: "Ausgeglichen",
    stats: {
      burst: 90,
      sustain: 78,
      aoe: 45,
      utility: 65,
      leveling: 70,
      survivability: 72
    },
    pros: [
      "Riesige Überraschungstreffer mit Dolchen direkt aus der Unsichtbarkeit",
      "Trägt gefährliche Gifte auf die Klingen auf, die Gegner vergiften und verlangsamen",
      "Klassisches Ninja-/Assassinen-Gefühl"
    ],
    cons: [
      "Muss für die stärksten Angriffe hinter dem Gegner stehen (alleine ohne Betäubung knifflig)",
      "Schwach gegen große Gruppen von Monstern (stark gegen Einzelgegner)",
      "Verbraucht seine Energie schnell auf einen Schlag"
    ],
    vibe: "Du willst mit zwei Dolchen schleichen, den Feind überraschen und ihm mit einem gezielten Stich zwischen die Rippen massiven Schaden zufügen.",
    realityCheck: "Wenn du mit Freunden spielst und ein Freund die Monster ablenkt, kannst du dauerhaft von hinten zuschlagen und glänzen.",
    miniRotation: [
      { name: "Hinterhalt", desc: "Mächtiger Eröffnungsstich aus der Unsichtbarkeit in den Rücken", sound: "backstab" },
      { name: "Meucheln", desc: "Schwerer Dolchstich von hinten für riesigen kritischen Schaden", sound: "slash" },
      { name: "Ausweiden", desc: "Verbraucht deine gesammelten Kombopunkte für einen finalen Todesschlag", sound: "execute" }
    ],
    tags: ["Nahkampf", "Dolche", "Schleichen", "Gifte", "Hinterhalt"]
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
      burst: 85,
      sustain: 65,
      aoe: 40,
      utility: 95,
      leveling: 72,
      survivability: 90
    },
    pros: [
      "Der absolute König der Betäubungen: Kann Gegner sekundenlang handlungsunfähig halten",
      "Kann dank 'Vorbereitung' alle seine Tricks und Fluchtzauber sofort zurücksetzen",
      "Kann mitten im Kampf in einer Rauchbombe verschwinden und wieder unsichtbar werden"
    ],
    cons: [
      "Macht im reinen Dauer-Draufschlagen weniger Schaden als der Kampf-Schurke",
      "Erfordert gutes Timing, wann man welche Betäubung einsetzt",
      "Eher spezialisiert auf Duelle und knifflige Situationen"
    ],
    vibe: "Du willst der gerissenste Spieler auf dem Feld sein, Feinde austricksen, lähmen und niemals gefasst werden.",
    realityCheck: "Gegen andere Spieler gefürchtet wie die Pest. Gegen Bossmonster im Team eher der Unterstützer mit Stuns.",
    miniRotation: [
      { name: "Fieser Trick", desc: "Schlägt aus dem Nichts zu und betäubt das Ziel für 4 Sekunden", sound: "stun" },
      { name: "Blutsturz", desc: "Schneller Schlag, der den physischen Schaden auf dem Ziel erhöht", sound: "slash" },
      { name: "Vorbereitung", desc: "Setzt sofort die Abklingzeit all deiner Flucht- und Schutztricks zurück", sound: "magic" }
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
    damageType: "Eismagie (Kälte & Verlangsamung)",
    theme: "Der Eismeister",
    motto: "Der Gegner friert ein, kommt nie an mich heran und stirbt schockgefroren.",
    archetype: "Der Unantastbare Eismeister",
    complexity: "Einfach (Sehr gut für Einsteiger)",
    apm: "Gemütlich - Normal",
    stats: {
      burst: 75,
      sustain: 80,
      aoe: 98,
      utility: 92,
      leveling: 98,
      survivability: 90
    },
    pros: [
      "Die sicherste und gemütlichste Zauberklasse für Einsteiger: Monster kommen kaum an dich ran",
      "Göttlicher Schneesturm: Kann ganze Gruppen von Monstern auf einmal verlangsamen und besiegen",
      "Lebensretter: Eisblock macht dich unantastbar; du kannst Essen, Wasser und Teleport-Portale für Freunde zaubern"
    ],
    cons: [
      "Muss nach mehreren Kämpfen kurz trinken, um seine Zauberkraft (Mana) aufzufüllen",
      "Einzelne Monster sterben etwas langsamer als bei extremen Feuermagiern",
      "Trägt nur Stoffkleidung – wenn ein Monster dich doch erwischt, tut es weh"
    ],
    vibe: "Du willst aus sicherer Distanz zaubern, Feinde festfrieren, dich nie bedroht fühlen und deiner ganzen Gruppe praktische Gefälligkeiten (Portale & Verpflegung) bieten.",
    realityCheck: "Die mit Abstand beliebteste Einsteiger-Klasse für Zauberer. Deine Freunde werden dich für dein Gratis-Wasser und deine Reise-Portale lieben.",
    miniRotation: [
      { name: "Frostblitz", desc: "Schießt einen Eiszapfen ab, der Schaden macht und das Monster verlangsamt", sound: "ice" },
      { name: "Frostnova", desc: "Friert alle Gegner um dich herum fest am Boden fest, damit du weglaufen kannst", sound: "shatter" },
      { name: "Blizzard", desc: "Lässt einen eisigen Schneesturm auf eine Gruppe von Gegnern herabregnen", sound: "ice_storm" }
    ],
    tags: ["Fernkampf", "Sicher für Einsteiger", "Einfrieren", "Portale & Essen", "Große Monstergruppen"]
  },
  {
    id: "fire_mage",
    classId: "mage",
    name: "Feuer-Magier",
    role: "Fernkampf (Zauberer aus der Distanz)",
    rangeType: "ranged",
    damageType: "Feuermagie (Explosionen & Brand)",
    theme: "Der feurige Pyromane",
    motto: "Riesige Feuerbälle, explodierende Crits und ein flammendes Inferno.",
    archetype: "Der Apokalyptische Pyromane",
    complexity: "Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 96,
      sustain: 92,
      aoe: 85,
      utility: 75,
      leveling: 70,
      survivability: 55
    },
    pros: [
      "Spektakuläre, gigantische Feuerbälle und Flammenexplosionen",
      "Feuerbrenneffekt 'Zündung' verstärkt sich bei vielen kritischen Treffern extrem",
      "Macht im späteren Spiel mit Freunden brachialen Schaden"
    ],
    cons: [
      "Viel weniger Schutz als der Frost-Magier – Feinde werden nicht eingefroren",
      "Macht so viel plötzlichen Schaden, dass Monster sofort auf dich zurennen wollen",
      "Einige Feuer-Monster in frühen Raids sind immun gegen Feuer"
    ],
    vibe: "Du liebst gigantische Explosionen, willst maximale Zerstörungskraft sehen und nimmst das Risiko in Kauf, wenn ein Gegner dir zu nahe kommt.",
    realityCheck: "Beim Alleinespielen etwas gefährlicher als Frost, aber optisch und vom Schaden her pure Ekstase.",
    miniRotation: [
      { name: "Feuerball", desc: "Mächtiger geworfener Feuerball, der das Ziel zusätzlich in Brand setzt", sound: "fire" },
      { name: "Feuerschlag", desc: "Sofortige Flammenexplosion auf Knopfdruck ohne Zauberzeit", sound: "fire" },
      { name: "Pyroschlag", desc: "Riesiger apokalyptischer Feuerbrocken für maximalen Bombenschaden", sound: "explosion" }
    ],
    tags: ["Fernkampf", "Feuer & Explosionen", "Riesenschaden", "Hohes Risiko", "Später extrem stark"]
  },
  {
    id: "arcane_mage",
    classId: "mage",
    name: "Arkan-Magier",
    role: "Fernkampf (Zauberer aus der Distanz)",
    rangeType: "ranged",
    damageType: "Arkane Zauberkraft (Purer Zauberdruck)",
    theme: "Die pure Glaskanone",
    motto: "Arkane Macht anwerfen, nächsten Zauber ohne Wartezeit abfeuern – Gegner liegt.",
    archetype: "Der Blitzschnelle Sofort-Zerstörer",
    complexity: "Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 99,
      sustain: 60,
      aoe: 80,
      utility: 80,
      leveling: 65,
      survivability: 60
    },
    pros: [
      "Der höchste Sofort-Schaden im Spiel innerhalb von 3 Sekunden",
      "Kann mit 'Geistesgegenwart' einen riesigen Zauber komplett ohne Zauberzeit sofort abfeuern",
      "Arkane Geschosse treffen den Gegner todsicher ohne Verfehlen"
    ],
    cons: [
      "Verbrennt seine Zauberkraft (Mana) rasend schnell",
      "Bei sehr langen Kämpfen geht einem schnell die Puste aus",
      "Eher spezialisiert auf schnelle Gefechte als auf endlose Bosskämpfe"
    ],
    vibe: "Du willst innerhalb von wenigen Sekunden alles auf eine Karte setzen und ein Monster mit einem gigantischen Sofort-Treffer ausradieren.",
    realityCheck: "Nach 20 Sekunden Kampf bist du leergezaubert, aber das Monster existiert meistens gar nicht mehr.",
    miniRotation: [
      { name: "Arkane Macht", desc: "Verstärkt deinen Zauberschaden für kurze Zeit um gewaltige 30%", sound: "buff" },
      { name: "Geistesgegenwart", desc: "Dein nächster Zauber feuert sofort ohne jegliche Wartezeit ab", sound: "magic" },
      { name: "Instant Pyroschlag", desc: "Fliegender Riesenfeuerball ohne Zauberzeit mitten ins Gesicht", sound: "explosion" }
    ],
    tags: ["Fernkampf", "Sofort-Abschuss", "3-Sekunden-Sieg", "Braucht oft Trinkpausen"]
  },

  // --- HEXENMEISTER ---
  {
    id: "affliction",
    classId: "warlock",
    name: "Gebrechen-Hexenmeister",
    role: "Fernkampf (Flüche & Dämonen)",
    rangeType: "ranged",
    damageType: "Schatten & Flüche (Schaden über Zeit)",
    theme: "Der Meister der Flüche & Lebensdieb",
    motto: "Verfluche das Monster, lauf gemütlich weiter und schau zu, wie es langsam zerfällt.",
    archetype: "Der Verderbnis-Architekt",
    complexity: "Einfach - Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 60,
      sustain: 92,
      aoe: 70,
      utility: 88,
      leveling: 92,
      survivability: 85
    },
    pros: [
      "Endlose Ausdauer: Kann eigenes Leben in Zauberkraft umwandeln und Feinden Leben absaugen – fast nie Trinkpausen nötig!",
      "Kann mehrere Monster gleichzeitig verfluchen und weglaufen, während sie sterben",
      "Furcht-Zauber lässt Monster panisch im Kreis rennen, sodass sie dir nichts tun können"
    ],
    cons: [
      "Der Schaden braucht ein paar Sekunden Zeit, bis die Flüche ihre volle Wirkung entfalten",
      "Schwache Monster sterben manchmal zu schnell, als dass sich alle Flüche lohnen",
      "Muss Seelensplitter von toten Monstern in den Taschen sammeln für Rituale"
    ],
    vibe: "Du willst keinen Hektik-Stress: Du belegst Monster mit Flüchen, saugst ihnen das Leben ab und fühlst dich wie ein unaufhaltsamer dunkler Magier.",
    realityCheck: "Super angenehm beim Alleinespielen, weil du praktisch nie anhalten musst, um dich zu erholen.",
    miniRotation: [
      { name: "Verderbnis", desc: "Dunkler Fluch, der dem Ziel über 18 Sekunden stetig Schaden zufügt", sound: "curse" },
      { name: "Fluch der Pein", desc: "Ein Schmerzfluch, der mit jeder Sekunde immer mehr Schaden anrichtet", sound: "curse" },
      { name: "Blutsauger", desc: "Ein dunkler Strahl, der dem Monster Lebenskraft entzieht und dich heilt", sound: "drain" }
    ],
    tags: ["Fernkampf", "Flüche & Gifte", "Lebensraub", "Nie Trinkpausen", "Dämonen-Partner"]
  },
  {
    id: "destruction",
    classId: "warlock",
    name: "Zerstörungs-Hexenmeister",
    role: "Fernkampf (Dunkle Artillerie)",
    rangeType: "ranged",
    damageType: "Schatten & Höllenfeuer",
    theme: "Der dunkle Chaos-Kanonier",
    motto: "Schwarze Magie, Schattenblitze und Höllenfeuer, die Feinde zerschmettern.",
    archetype: "Der Dunkle Chaos-Kanonier",
    complexity: "Einfach - Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 94,
      sustain: 88,
      aoe: 82,
      utility: 78,
      leveling: 72,
      survivability: 65
    },
    pros: [
      "Sehr harte Schattenblitz-Einschläge mit tollen optischen Effekten",
      "Verbindet die düstere Hexenmeister-Stimmung mit direktem Bombenschaden",
      "Tolle Flächenangriffe mit Höllenfeuer gegen Gegnergruppen"
    ],
    cons: [
      "Keine Schutzbarrieren – Monster wollen gerne direkt zu dir rennen",
      "Verbraucht viel Zauberkraft, sodass du eigenes Leben opfern musst für Mana",
      "Braucht gute Ausrüstung, um richtig zu treffen"
    ],
    vibe: "Wenn du düstere Dämonenmagie liebst, aber statt langsamen Flüchen lieber gewaltige schwarze Blitze schleudern willst.",
    realityCheck: "Fühlt sich an wie ein finsterer Feuermagier mit Dämonen-Begleitern an deiner Seite.",
    miniRotation: [
      { name: "Schattenblitz", desc: "Mächtiger Strahl aus finsterer Schattenenergie für hohen Einzelschaden", sound: "shadowbolt" },
      { name: "Feuerbrand", desc: "Entzündet den Feind mit grünem Höllenfeuer", sound: "fire" },
      { name: "Feuersbrunst", desc: "Lässt das Feuer auf dem Feind sofort mit einem Knall explodieren", sound: "explosion" }
    ],
    tags: ["Fernkampf", "Schattenblitze", "Dunkle Explosionen", "Hoher Wumms"]
  },
  {
    id: "demonology",
    classId: "warlock",
    name: "Dämonologie-Hexenmeister",
    role: "Fernkampf (Dämonenmeister)",
    rangeType: "ranged",
    damageType: "Dämonenbegleiter & Schatten",
    theme: "Der unsterbliche Dämonenpakt",
    motto: "Mein Dämon schluckt 30% meines Schadens – mich kriegt niemand klein.",
    archetype: "Der Dämonische Paktmeister",
    complexity: "Einfach (Sehr zäh & fehlerverzeihend)",
    apm: "Gemütlich",
    stats: {
      burst: 70,
      sustain: 80,
      aoe: 65,
      utility: 85,
      leveling: 88,
      survivability: 96
    },
    pros: [
      "Extrem zäh: Dein Dämon fängt einen Teil deines Schadens ab – du stirbst fast nie!",
      "Vielseitige Dämonendiener: Ein blauer Riese zum Einstecken, eine Sukkubus zum Verführen oder ein Hund gegen Zauberer",
      "Sehr fehlerverzeihend und entspannt für neue Spieler"
    ],
    cons: [
      "Der Schaden ist etwas gleichmäßiger und weniger explosionsartig",
      "Du musst deinen Dämon im Auge behalten, damit er nicht wegläuft",
      "Erfordert ein bisschen Geduld beim Besiegen von Einzelgegnern"
    ],
    vibe: "Du willst diabolische Dämonen befehligen und wie eine unzerstörbare Festung über das Schlachtfeld spazieren.",
    realityCheck: "Eine der sichersten Klassen für absolute Neulinge, weil der Dämon dir die Schläge vom Leib hält.",
    miniRotation: [
      { name: "Seelenverbindung", desc: "Leitet fast ein Drittel deines erlittenen Schadens auf deinen Dämon um", sound: "buff" },
      { name: "Verderbnis", desc: "Schwächt den Feind mit Flüchen, während dein Dämon zuschlägt", sound: "curse" },
      { name: "Schattenblitz", desc: "Sicherer Zauberangriff aus dem Schutz deines Dämons", sound: "shadowbolt" }
    ],
    tags: ["Fernkampf", "Dämonendiener", "Extrem zäh", "Sehr sicher für Neulinge"]
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
    motto: "Mein Tier macht die ganze Drecksarbeit, hält alles ab und ich schieße gechillt hinterher.",
    archetype: "Der Unbeschwerte Safari-König",
    complexity: "Sehr Einfach (Die leichteste Klasse für Einsteiger)",
    apm: "Gemütlich",
    stats: {
      burst: 72,
      sustain: 86,
      aoe: 55,
      utility: 82,
      leveling: 100,
      survivability: 92
    },
    pros: [
      "Die mit Abstand einfachste und entspannteste Klasse für komplette Neulinge",
      "Dein Tier (Bär, Wolf, Katze) fängt alle Schläge ab – Monster kommen fast nie an dich ran",
      "Zorn des Wildtiers: Lässt dein Tier rot glühen, riesig werden und unaufhaltsam wüten"
    ],
    cons: [
      "Du musst dein Tier füttern (z.B. Fleisch oder Fisch kaufen), damit es glücklich bleibt",
      "Du brauchst Pfeile oder Kugeln im Rucksack, die ein wenig Taschenplatz belegen",
      "Wenn du zu nah an einem Monster stehst (unter 5 Meter), musst du einen Schritt zurückgehen"
    ],
    vibe: "Du willst ohne Stress und ohne Sterben Azeroth erkunden, dir dein Lieblingstier zähmen und gemütlich aus der Ferne schießen.",
    realityCheck: "Der absolute Goldstandard für Einsteiger. Wenn du noch nie WoW gespielt hast, machst du hiermit absolut nichts falsch.",
    miniRotation: [
      { name: "Mal des Jägers", desc: "Markiert das Monster mit einem roten Pfeil für Extra-Schaden", sound: "buff" },
      { name: "Zorn des Wildtiers", desc: "Verwandelt dein Tier in eine rasende Bestie mit +50% Schaden", sound: "roar" },
      { name: "Automatischer Schuss", desc: "Feuert zielsicher Pfeile aus sicherer Entfernung ab", sound: "bow" }
    ],
    tags: ["Fernkampf", "Tierbegleiter", "Einfachste Klasse überhaupt", "Sehr gemütlich", "Pfeil & Bogen"]
  },
  {
    id: "marksmanship",
    classId: "hunter",
    name: "Treffsicherheit-Jäger",
    role: "Fernkampf (Scharfschütze)",
    rangeType: "ranged",
    damageType: "Physische Weitschüsse (Bogen/Gewehr)",
    theme: "Der Meister-Scharfschütze",
    motto: "Gezielter Schuss aus über 40 Metern – das Monster liegt, bevor es weiß, woher es kam.",
    archetype: "Der Tödliche Scharfschütze",
    complexity: "Mittel (Auf Schussrhythmus achten)",
    apm: "Ausgeglichen",
    stats: {
      burst: 88,
      sustain: 84,
      aoe: 76,
      utility: 88,
      leveling: 88,
      survivability: 75
    },
    pros: [
      "Die höchste Reichweite im gesamten Spiel (bis zu 41 Meter Entfernung!)",
      "Truppschuss-Aura erhöht automatisch die Angriffskraft all deiner Freunde im Team",
      "Starke Weitschüsse mit gezieltem Schuss und Mehrfachschuss auf mehrere Ziele"
    ],
    cons: [
      "Nahkampf-Zone: Zwischen 5 und 8 Metern kann man weder schießen noch zuschlagen",
      "Man darf nicht mitten im Schuss loslaufen, sonst bricht der Pfeil ab",
      "Benötigt Munitionstaschen im Inventar"
    ],
    vibe: "Du willst als klassischer Bogenschütze oder Scharfschütze agieren, aus maximaler Distanz zielen und dein Team mit Auren unterstützen.",
    realityCheck: "Wer gerne den Überblick behält und Scharfschützen liebt, wird hier sehr glücklich.",
    miniRotation: [
      { name: "Gezielter Schuss", desc: "Konzentrierter Weitschuss mit gewaltiger Durchschlagskraft", sound: "bow" },
      { name: "Mehrfachschuss", desc: "Feuert eine Salve ab, die 3 Monster auf einmal trifft", sound: "bow_volley" },
      { name: "Eiskältefalle", desc: "Legt eine Falle am Boden aus, die den ersten Feind komplett einfriert", sound: "trap" }
    ],
    tags: ["Fernkampf", "Größte Reichweite", "Scharfschütze", "Team-Aura", "Bogen & Gewehr"]
  },
  {
    id: "survival",
    classId: "hunter",
    name: "Überlebens-Jäger",
    role: "Fernkampf & Nahkampf-Fallen",
    rangeType: "hybrid",
    damageType: "Pfeile, Fallen & Nahkampf-Konter",
    theme: "Der schlaue Fährtenleser",
    motto: "Versuch ruhig, an mich heranzukommen – du landest direkt in meiner Falle.",
    archetype: "Der Unbeirrbare Fährtenleser",
    complexity: "Mittel - Anspruchsvoll",
    apm: "Ausgeglichen",
    stats: {
      burst: 70,
      sustain: 72,
      aoe: 70,
      utility: 94,
      leveling: 80,
      survivability: 88
    },
    pros: [
      "Viel zäher als normale Schützen: Weicht Schlägen geschickt aus und kontert",
      "Stärkere Fallen für jede Situation (Feuerfallen, Frostfallen)",
      "Sehr nervig und wehrhaft, wenn Feinde versuchen, dich im Nahkampf anzugreifen"
    ],
    cons: [
      "Macht auf weite Distanz etwas weniger reinen Schaden als der Scharfschütze",
      "Erfordert das Wechseln zwischen Fernkampf und Nahkampf-Tricks",
      "Wird seltener in großen Teams für reinen Rekord-Schaden gewählt"
    ],
    vibe: "Du magst es clever: Wenn Gegner dir zu nahe kommen, weichst du lächelnd aus, legst Fallen und verlangsamst sie.",
    realityCheck: "Ein Nischen-Spec für Spieler, die gerne tricksen und überall überleben wollen.",
    miniRotation: [
      { name: "Sprengfalle", desc: "Feuerfalle am Boden, die beim Auslösen in Flammen aufgeht", sound: "trap" },
      { name: "Flügelstutzen", desc: "Nahkampfhieb mit der Waffe, der das Tempo des Monsters halbiert", sound: "slash" },
      { name: "Gegenangriff", desc: "Nach erfolgreichem Ausweichen: Macht den Feind kurz wehrlos", sound: "crush" }
    ],
    tags: ["Hybrid", "Fallen stellen", "Ausweichen", "Sehr zäh", "Clevere Tricks"]
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
    motto: "In eine Katze verwandeln, anschleichen, Krallen wetzen und dem Team 3% Extra-Crits schenken.",
    archetype: "Der Formwandler-Virtuose",
    complexity: "Anspruchsvoll (Häufiger Gestaltwechsel)",
    apm: "Sehr Schnell",
    stats: {
      burst: 82,
      sustain: 84,
      aoe: 50,
      utility: 92,
      leveling: 88,
      survivability: 82
    },
    pros: [
      "Rudelführer-Aura: Schenkt allen Nahkämpfer-Freunden in deiner Gruppe +3% Chance auf Riesentreffer!",
      "Super vielseitig: Kann bei Gefahr sofort in einen Bären wechseln, Schläge tanken oder Freunde heilen",
      "Schnelles Reisen: Kann sich in einen Geparden verwandeln und ohne Mount super schnell laufen"
    ],
    cons: [
      "Schwierig zu meistern: Für Top-Schaden muss man oft kurz die Gestalt verlassen und neu annehmen",
      "Braucht etwas Übung beim Verwalten von Energie und Kombopunkten",
      "Man sieht meistens seine Raubkatze statt seiner Rüstung"
    ],
    vibe: "Du suchst einen vielseitigen Allrounder, der schleichen kann, Krallenhiebe austeilt und im Notfall immer die passende Tiergestalt parat hat.",
    realityCheck: "Etwas anspruchsvoller zu meistern, aber jeder Nahkämpfer-Freund wird dich für deine Rudelführer-Aura vergöttern.",
    miniRotation: [
      { name: "Schreddern", desc: "Harter Krallenhieb in den Rücken des Feindes", sound: "claw" },
      { name: "Zerfetzen", desc: "Kratzt tiefe Wunden, die das Monster stark bluten lassen", sound: "bleed" },
      { name: "Gestaltwechsel", desc: "Verwandlung neu aktivieren, um sofort frische Energie aufzuladen", sound: "shapeshift" }
    ],
    tags: ["Nahkampf", "Katzen-Gestalt", "Rudelführer (+3% Crit)", "Tierverwandlung", "Sehr vielseitig"]
  },
  {
    id: "balance",
    classId: "druid",
    name: "Gleichgewicht / Eule (Balance)",
    role: "Fernkampf (Mondkin-Gestalt)",
    rangeType: "ranged",
    damageType: "Astrale Mond- & Sonnenzauber",
    theme: "Die kultige Mondkin-Eule",
    motto: "Dicke Eule, dicker Zauber-Crit für befreundete Magier und kosmische Laser von oben.",
    archetype: "Das Kultige Mondkin",
    complexity: "Einfach - Mittel",
    apm: "Gemütlich",
    stats: {
      burst: 82,
      sustain: 68,
      aoe: 75,
      utility: 94,
      leveling: 70,
      survivability: 75
    },
    pros: [
      "Aura des Mondkins: Gibt allen Zauberer-Freunden im Team +3% Chance auf Zauberkrits!",
      "Super Lebensretter: Kann einen gefallenen Freund mitten im Bosskampf wiederbeleben (Battle Rezz)",
      "Kultiger Look: Man spielt eine riesige gefiederte Eule, die tanzen und zaubern kann"
    ],
    cons: [
      "Bekannt als 'Oomkin' (Out of Mana) – verbraucht Zauberkraft sehr schnell und muss viel trinken",
      "Längere Zauberzeit bei großen Sternenfeuer-Angriffen",
      "Man braucht Vorräte an Zaubertränken für lange Kämpfe"
    ],
    vibe: "Du willst als drollige Eule durch die Welt watscheln, Mondstrahlen auf Feinde abfeuern und deine Magier-Freunde mit deiner Crit-Aura glücklich machen.",
    realityCheck: "Deine befreundeten Magier und Hexer werden dich auf Händen tragen, weil du sie spürbar stärker machst.",
    miniRotation: [
      { name: "Mondfeuer", desc: "Sofortiger Mondstrahl gefolgt von brennendem Sternenstaub", sound: "moonfire" },
      { name: "Sternenfeuer", desc: "Wuchtiger kosmischer Zauberlaser von oben herab", sound: "starfire" },
      { name: "Hurrikan", desc: "Kanalisiert ein Unwetter, das herabregnet und Feinde trifft", sound: "storm" }
    ],
    tags: ["Fernkampf", "Mondkin-Eule", "Team-Crit-Aura", "Mitten im Kampf wiederbeleben", "Kultig"]
  },

  // --- SCHAMANE ---
  {
    id: "enhancement",
    classId: "shaman",
    name: "Verstärker-Schamane",
    role: "Nahkampf (Sturm- & Totemkrieger)",
    rangeType: "melee",
    damageType: "Waffenhiebe & Windfury-Blitze",
    theme: "Der Donnergott mit Windfury",
    motto: "Wenn der Windfury-Sound ertönt und drei Schläge gleichzeitig treffen, fliegt der Gegner weg.",
    archetype: "Der Casino-Slot-Donnergott",
    complexity: "Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 98,
      sustain: 72,
      aoe: 65,
      utility: 96,
      leveling: 78,
      survivability: 72
    },
    pros: [
      "Das legendäre Windfury-Totem: Lässt Waffen deiner Freunde magisch mehrfach zuschlagen – Krieger lieben dich!",
      "Gewaltige Glückstreffer: Mit etwas Glück löst deine Waffe 3 Schläge auf einmal aus und vernichtet Gegner sofort",
      "Totems für jede Lebenslage: Schützt vor Furcht, reinigt Gifte und stärkt die Werte"
    ],
    cons: [
      "Glücksabhängig: Wenn der Mehrfachschlag proct, stirbt alles; wenn nicht, wartest du kurz",
      "Man muss auf seine Zauberkraft achten und darf Schockzauber nicht unüberlegt spammen",
      "Kein Sturmangriff – man läuft mit Geisterwolf zu den Gegnern"
    ],
    vibe: "Du willst das unbeschreibliche Gefühl erleben, wenn deine Waffe magisch aufleuchtet, dreimal gleichzeitig zuschlägt und die Schadenszahlen explodieren.",
    realityCheck: "Der absolute Lieblingspartner für alle Krieger und Schurken im Spiel. Stell dein Windfury-Totem hin und alle feiern dich.",
    miniRotation: [
      { name: "Sturmschlag", desc: "Schlägt wuchtig zu und macht das Ziel anfällig für deine Naturschocks", sound: "hammer" },
      { name: "Erdschock", desc: "Schlägt blitzschnell ein, macht Schaden und unterbricht gegnerische Zauber", sound: "shock" },
      { name: "Windfury-Mehrfachschlag", desc: "Deine Waffe entlädt 2 zusätzliche Sofortschläge mit Extra-Schaden", sound: "windfury" }
    ],
    tags: ["Nahkampf", "Windfury-Legende", "Totem-Gott", "Dreifach-Schlag", "Bester Freund für Krieger"]
  },
  {
    id: "elemental",
    classId: "shaman",
    name: "Elementar-Schamane",
    role: "Fernkampf (Blitze & Naturgewalten)",
    rangeType: "ranged",
    damageType: "Blitze, Kettenblitze & Lava",
    theme: "Das wandelnde Gewitter",
    motto: "Kettenblitz schleudern, Schock hinterher – Blitze springen von Feind zu Feind.",
    archetype: "Der Wandelnde Blitzableiter",
    complexity: "Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 96,
      sustain: 68,
      aoe: 88,
      utility: 92,
      leveling: 74,
      survivability: 70
    },
    pros: [
      "Extrem befriedigender Kettenblitz: Der Blitz schlägt ein und springt auf zwei weitere Feinde über",
      "Elementarbeherrschung: Garantiert dir auf Knopfdruck einen 100% kritischen Riesenblitz",
      "Kann gegnerische Zauberer mit Erdschock sofort zum Schweigen bringen"
    ],
    cons: [
      "Ziemlich durstig: Man muss nach harten Kämpfen oft kurz was trinken",
      "Einige Monster in späteren Dungeons haben Resistenzen gegen Naturschaden",
      "Erfordert gutes Stellungsspiel beim Zaubern"
    ],
    vibe: "Du willst wie Thor Blitze aus deinen Fingerspitzen feuern, die von Monster zu Monster springen, und Totems zur Unterstützung aufstellen.",
    realityCheck: "Visuell und vom Sound her einer der coolsten Caster im Spiel. Jeder Kettenblitz fühlt sich mächtig an.",
    miniRotation: [
      { name: "Blitzschlag", desc: "Mächtiger Blitzstrahl auf ein einzelnes Ziel", sound: "lightning" },
      { name: "Kettenblitz", desc: "Elektrisierender Blitz, der auf bis zu 3 Gegner überspringt", sound: "chain_lightning" },
      { name: "Elementarbeherrschung", desc: "Macht deinen nächsten Zauber garantiert zu einem 100% Riesentreffer", sound: "magic" }
    ],
    tags: ["Fernkampf", "Kettenblitz", "Thor-Gefühl", "100% Treffer-Garantie", "Totems"]
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
    motto: "Plattenrüstung, Gottesschild-Blase anwerfen und mit dem Hammer des Lichts zuschlagen.",
    archetype: "Der Unerschütterliche Rächer",
    complexity: "Sehr Einfach (Sehr entspannt zu spielen)",
    apm: "Gemütlich (Wenig Tastenstress)",
    stats: {
      burst: 86,
      sustain: 68,
      aoe: 60,
      utility: 98,
      leveling: 82,
      survivability: 96
    },
    pros: [
      "Quasi unsterblich: Hat die berühmte 'Gottesschild-Blase' (macht dich für 12 Sek komplett unverwundbar!)",
      "Bringt die mächtigsten Team-Buffs im Spiel mit (Segen der Könige, Segen der Macht)",
      "Super entspannte Tastensteuerung – perfekt, wenn du nicht ständig 10 Knöpfe hämmern willst"
    ],
    cons: [
      "Hat keine rasante Schlag-Kombination – der automatische Schlag macht viel der Arbeit",
      "Wird in großen Gruppen vor allem für seine rettenden Buffs und Auren mitgenommen",
      "Macht im reinen Dauer-Draufschlagen etwas weniger Schaden als Krieger oder Schurken"
    ],
    vibe: "Du willst einen edlen, unzerstörbaren Ritter in voller Rüstung spielen, der niemals stirbt, seine Freunde beschützt und mit göttlicher Kraft zuschlägt.",
    realityCheck: "Unglaublich sicher beim Erkunden der Welt. Du kannst in jede Gefahr rennen, deine Blase anwerfen und überleben.",
    miniRotation: [
      { name: "Siegel des Befehls", desc: "Aktiviert heilige Macht auf deiner Waffe für zufällige Zusatz-Lichtschläge", sound: "holy_buff" },
      { name: "Richturteil", desc: "Entlädt die heilige Energie auf das Ziel für direkten Lichtschaden", sound: "judgment" },
      { name: "Gottesschild (Bubble)", desc: "Macht dich für 12 Sekunden komplett immun gegen jeglichen Schaden", sound: "shield" }
    ],
    tags: ["Nahkampf", "Plattenrüstung", "Komplett unverwundbar", "Beste Team-Segen", "Sehr entspannt"]
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
    motto: "Schattengestalt an, Gedankenschlag rein und Feinden das Gesicht schmelzen.",
    archetype: "Der Düstere Seelenschmelzer",
    complexity: "Mittel",
    apm: "Ausgeglichen",
    stats: {
      burst: 84,
      sustain: 80,
      aoe: 40,
      utility: 90,
      leveling: 84,
      survivability: 82
    },
    pros: [
      "Schattengestalt: Cooler durchscheinender violetter Look + nimmt spürbar weniger Schaden von Schlägen",
      "Vampirumarmung: Heilt deine befreundeten Gruppenmitglieder automatisch durch den Schaden, den du machst!",
      "Verstärkt Hexenmeister: Erhöht den Schattenschaden aller befreundeten Hexer im Team um 15%",
      "Im 1-gegen-1-Duell gegen andere Spieler absolut gefürchtet"
    ],
    cons: [
      "Verbraucht bei langen Bosskämpfen viel Zauberkraft (Mana)",
      "Hat kaum Flächenangriffe gegen viele Monster auf einmal",
      "Braucht gutes Einteilen seiner Zaubersprüche"
    ],
    vibe: "Du willst geheimnisvolle, unheimliche Schattenmagie wirken, Feinde geistig zerbrechen und dein Team heilen, indem du Schaden austeilst.",
    realityCheck: "Hexenmeister-Freunde werden dich lieben, weil du ihren Schattenschaden spürbar nach oben katapultierst.",
    miniRotation: [
      { name: "Schattenwort: Schmerz", desc: "Belegt den Feind mit anhaltenden Schattenschmerzen über Zeit", sound: "curse" },
      { name: "Gedankenschlag", desc: "Harter telepathischer Schlag direkt in den Geist des Ziels", sound: "mindblast" },
      { name: "Gedankenschinden", desc: "Kanalisierter Schattenstrahl, der Schaden macht und verlangsamt", sound: "drain" }
    ],
    tags: ["Fernkampf", "Schattengestalt", "Team heilen durch Schaden", "Hexer-Verstärker", "Duell-Monster"]
  }
];

// Die 7 durchdachten, 100% anfängerfreundlichen Fragen OHNE Fachbegriffe
const QUIZ_QUESTIONS = [
  {
    id: "range_position",
    title: "1. Wo willst du im Kampf stehen?",
    subtitle: "Stell dir vor, du kämpfst gegen ein riesiges Monster...",
    options: [
      {
        text: "Direkt davor mit der Waffe in der Hand! Ich will dem Monster ins Gesicht schauen und den Schlagabtausch spüren.",
        hint: "Nahkampf – Action pur, du stehst mitten im Geschehen.",
        icon: "⚔️",
        weights: {
          fury: 4, arms: 4, combat: 4, assassination: 4, subtlety: 3, feral_dps: 4, enhancement: 4, retribution: 3,
          frost_mage: -4, fire_mage: -4, arcane_mage: -4, affliction: -4, destruction: -4, demonology: -3, marksmanship: -4, beastmastery: -3, balance: -4, elemental: -4, shadow_priest: -4
        }
      },
      {
        text: "In sicherer Entfernung mit Pfeil & Bogen oder Zaubersprüchen! Ich behalte den Überblick.",
        hint: "Fernkampf – Monster kommen selten nah an dich heran.",
        icon: "🏹",
        weights: {
          frost_mage: 4, fire_mage: 4, arcane_mage: 4, affliction: 4, destruction: 4, demonology: 4, marksmanship: 4, beastmastery: 4, balance: 4, elemental: 4, shadow_priest: 4,
          fury: -4, arms: -4, combat: -4, assassination: -4, subtlety: -3, feral_dps: -4, enhancement: -4, retribution: -3
        }
      },
      {
        text: "Aus dem Verborgenen! Ich schleiche mich unsichtbar an und schlage überraschend zu.",
        hint: "Schleicher / Attentäter – du bestimmst, wann der Kampf beginnt.",
        icon: "👤",
        weights: {
          subtlety: 5, assassination: 4, combat: 2, feral_dps: 3, survival: 3,
          fury: -1, retribution: -2, frost_mage: 0
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
        text: "Wuchtige Riesenschläge! Ein einzelner Treffer soll so richtig reinhauen und den Gegner erschüttern.",
        hint: "Riesige Einzeltreffer – wenige Schläge, aber brutale Wirkung.",
        icon: "💥",
        weights: {
          arms: 4, destruction: 4, arcane_mage: 5, enhancement: 4, elemental: 4, fire_mage: 3, marksmanship: 3, retribution: 3,
          affliction: -3, beastmastery: -1
        }
      },
      {
        text: "Ein schneller Wirbelsturm! Rasend schnelle Schläge mit zwei Waffen, ohne eine Sekunde Pause.",
        hint: "Maschinengewehr-Tempo – pausenloses Dauerfeuer.",
        icon: "🌪️",
        weights: {
          fury: 5, combat: 5, feral_dps: 4, assassination: 3,
          arms: -2, arcane_mage: -3, retribution: -2
        }
      },
      {
        text: "Flüche & Gifte! Ich belege das Monster mit schädlicher Magie und schaue zu, wie seine Lebensleiste langsam verfällt.",
        hint: "Schaden über Zeit – du schwächst den Feind Schritt für Schritt.",
        icon: "☣️",
        weights: {
          affliction: 5, shadow_priest: 4, feral_dps: 2, fire_mage: 2, survival: 2,
          fury: -3, arms: -3, arcane_mage: -3
        }
      },
      {
        text: "Einfrieren & Verlangsamen! Das Monster soll festfrieren oder so lahm werden, dass es mich gar nicht erreicht.",
        hint: "Volle Kontrolle – sicher und taktisch.",
        icon: "❄️",
        weights: {
          frost_mage: 5, subtlety: 4, survival: 3, beastmastery: 2, shadow_priest: 2,
          fury: -2, fire_mage: -2
        }
      }
    ]
  },
  {
    id: "combat_flow",
    title: "3. Wie soll sich das Kämpfen im Spielablauf für dich anfühlen?",
    subtitle: "Jede Klasse hat einen ganz eigenen Rhythmus beim Angreifen.",
    options: [
      {
        text: "Immer mitten rein! Keine Pausen – je länger ich kämpfe und je mehr ich austeile, desto wilder werde ich.",
        hint: "Aggressiver Rausch – du kommst im Kampf erst so richtig in Schwung (Krieger-Gefühl).",
        icon: "💢",
        weights: {
          fury: 5, arms: 5, feral_dps: 2,
          frost_mage: -3, affliction: -3, marksmanship: -3
        }
      },
      {
        text: "Schnell zuschlagen, Treffer sammeln und dann mit einem gezielten Spezialangriff finishen!",
        hint: "Kombos & Timing – Treffer aufladen und belohnt werden (Schurke & Raubkatze).",
        icon: "⚡",
        weights: {
          combat: 5, assassination: 5, subtlety: 5, feral_dps: 4,
          warrior: -2, mage: -2
        }
      },
      {
        text: "Mächtige Zauber beschwören! Ich will mit Feuerbällen, Frost oder Blitzen die pure Magie entfesseln und das Schlachtfeld beherrschen.",
        hint: "Reine Zauberkunst – gewaltige Zaubersprüche und absolute Kontrolle aus der Ferne (Magier & Zauberer).",
        icon: "✨",
        weights: {
          frost_mage: 3, fire_mage: 3, arcane_mage: 3, elemental: 3, shadow_priest: 3, balance: 3, retribution: 3,
          fury: -4, arms: -4, combat: -4, assassination: -4
        }
      },
      {
        text: "Mein tierischer Begleiter lenkt das Monster ab und fängt die Schläge ab, während ich entspannt angreife.",
        hint: "Tierbegleiter / Minion – dein Partner hält dir den Rücken frei (Jäger & Dämonenmeister).",
        icon: "🐺",
        weights: {
          beastmastery: 5, demonology: 5, marksmanship: 1, affliction: 1,
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
        text: "Zwei einhändige Klingen gleichzeitig (z.B. zwei Schwerter, Äxte oder blitzende Dolche)!",
        hint: "Dual-Wield – doppelt so viele Treffer und rasantes Angriffstempo.",
        icon: "🗡️",
        weights: {
          fury: 5, combat: 5, assassination: 4, enhancement: 3, subtlety: 2,
          arms: -3, retribution: -3, frost_mage: -3, marksmanship: -3
        }
      },
      {
        text: "Eine einzige massive Zweihandwaffe (riesiges Großschwert, Streitaxt oder Kriegshammer)!",
        hint: "2-Hand-Waffe – gewaltige Schwünge mit beiden Händen geführt.",
        icon: "🪓",
        weights: {
          arms: 5, retribution: 5, enhancement: 3,
          fury: -3, combat: -3, rogue: -4, mage: -3
        }
      },
      {
        text: "Ein edler Bogen oder ein schweres Gewehr für Schüsse aus weiter Distanz!",
        hint: "Fernkampfwaffe – Pfeile und Schüsse mit maximaler Reichweite.",
        icon: "🏹",
        weights: {
          marksmanship: 5, beastmastery: 5, survival: 4,
          warrior: -3, rogue: -3, mage: -2
        }
      },
      {
        text: "Ein magischer Zauberstab oder Runenstab, der mit arkaner Energie leuchtet!",
        hint: "Zauberfokus – verstärkt deine magischen Geschosse und Flüche.",
        icon: "🪄",
        weights: {
          frost_mage: 4, fire_mage: 4, arcane_mage: 4, affliction: 4, destruction: 4, demonology: 4, shadow_priest: 4, balance: 3, elemental: 3,
          warrior: -4, rogue: -4
        }
      },
      {
        text: "Keine Schmiedewaffen – meine eigenen Reißzähne, Krallen und Naturkräfte!",
        hint: "Wilde Raubkatze – unverfälschte Tierkräfte der Wildnis.",
        icon: "🐾",
        weights: {
          feral_dps: 6, balance: 2,
          warrior: -2, mage: -2
        }
      }
    ]
  },
  {
    id: "combat_scenario",
    title: "5. In welchem Kampf-Szenario willst du die absolute Nummer 1 sein?",
    subtitle: "Wo soll dein Charakter am hellsten strahlen?",
    options: [
      {
        text: "Im epischen Bosskampf gegen einen einzelnen Riesen-Endgegner!",
        hint: "Single-Target Rekorde – du bringst den großen Endboss zum Schmelzen.",
        icon: "👑",
        weights: {
          fury: 4, combat: 4, fire_mage: 4, marksmanship: 3, destruction: 3, assassination: 3
        }
      },
      {
        text: "Wenn eine riesige Monster-Gruppe auf uns einstürmt und weggemäht werden muss!",
        hint: "Flächenschaden-Gott – ganze Gegnerscharen explodieren auf einen Schlag.",
        icon: "💥",
        weights: {
          frost_mage: 5, elemental: 5, fury: 3, combat: 3, destruction: 3, balance: 2
        }
      },
      {
        text: "In schnellen, gefährlichen 1-gegen-1 Duellen und taktischen Überfällen!",
        hint: "Duell-Meister – im Duell eins gegen eins bist du der Albtraum jedes Feindes.",
        icon: "🎯",
        weights: {
          subtlety: 5, shadow_priest: 5, arcane_mage: 4, demonology: 4, survival: 3, arms: 3
        }
      },
      {
        text: "In jedem Teamkampf – weil meine Auren, Totems und Buffs alle Freunde stärker machen!",
        hint: "Team-Synergie – deine bloße Anwesenheit hebt die ganze Gruppe aufs nächste Level.",
        icon: "🤝",
        weights: {
          enhancement: 5, retribution: 5, balance: 4, feral_dps: 4, shadow_priest: 4, marksmanship: 2
        }
      }
    ]
  },
  {
    id: "group_ego",
    title: "6. Was willst du für deine Freunde im Team sein?",
    subtitle: "Ihr seid gemeinsam in einer Gruppe unterwegs...",
    options: [
      {
        text: "Der Schadens-König! Ich will ganz oben auf der Liste stehen und die Monster am schnellsten besiegen.",
        hint: "Reiner Schadensverursacher – dein Fokus liegt voll auf Treffern.",
        icon: "🏆",
        weights: {
          fury: 4, combat: 4, fire_mage: 4, destruction: 3, arms: 2,
          retribution: -3, balance: -2, survival: -2
        }
      },
      {
        text: "Der geschätzte Unterstützer! Ich bringe Stärkungs-Zauber, Auren oder Totems mit, die meine Freunde viel stärker machen.",
        hint: "Team-Verstärker – deine Freunde werden dich lieben und immer mitnehmen wollen.",
        icon: "🌟",
        weights: {
          enhancement: 5, feral_dps: 4, balance: 4, retribution: 4, shadow_priest: 4, marksmanship: 3,
          fury: -2, combat: -2, destruction: -1
        }
      },
      {
        text: "Der clevere Problemlöser! Ich kann Portale für Freunde öffnen, Snacks herbeizaubern oder Monster für eine Minute einfrieren.",
        hint: "Nützliche Hilfen – voller praktischer Tricks für jede Situation.",
        icon: "🧰",
        weights: {
          frost_mage: 4, affliction: 3, demonology: 3, subtlety: 3, survival: 3, marksmanship: 3,
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
        text: "Unverwundbarkeits-Schild aktivieren! Ich lache dem Monster ins Gesicht, während seine Schläge an mir abprallen.",
        hint: "Absolute Immunität – rettende Zauberblase oder Eisblock schützt dich vor jedem Schaden.",
        icon: "🛡️",
        weights: {
          retribution: 5, frost_mage: 4, demonology: 4, shadow_priest: 2
        }
      },
      {
        text: "Rauchbombe zünden oder Totstellen – ich verschwinde sofort aus dem Sichtfeld!",
        hint: "Entkommen & Verschwinden – das Monster verliert sofort das Interesse an dir.",
        icon: "💨",
        weights: {
          subtlety: 5, combat: 3, assassination: 3, marksmanship: 3, beastmastery: 3, survival: 3
        }
      },
      {
        text: "Keinen Schritt zurück! Ich halte voll dagegen, schlage mit Zähigkeit zurück und heile mich im Kampf.",
        hint: "Standhalten – kein Wegrennen, reine Kampfkraft und Gegendruck.",
        icon: "⚔️",
        weights: {
          fury: 4, arms: 4, affliction: 4, enhancement: 3
        }
      },
      {
        text: "Tierverwandlung oder Temposchub zünden und blitzschnell auf sicheren Abstand sprinten!",
        hint: "Beweglichkeit – im Sprint oder als Gepard entkommen und aus der Distanz weitermachen.",
        icon: "🐾",
        weights: {
          feral_dps: 5, balance: 4, survival: 3, arcane_mage: 2
        }
      }
    ]
  },
  {
    id: "complexity_preference",
    title: "8. Wie viel Lust hast du auf viele Tasten und Timing?",
    subtitle: "Sei ehrlich: Willst du ganz entspannt zocken oder komplexe Tastenkombinationen lernen?",
    options: [
      {
        text: "Halt es super entspannt! 2 bis 3 Tasten reichen mir völlig, ich will gemütlich nebenbei quatschen und zocken.",
        hint: "Sehr einsteigerfreundlich – kein Stress, keine Fingerkrämpfe.",
        icon: "🍺",
        weights: {
          beastmastery: 5, retribution: 4, frost_mage: 3, combat: 3, destruction: 2,
          feral_dps: -5, subtlety: -4, arms: -2
        }
      },
      {
        text: "Ein gesunder Mittelweg: Eine Handvoll cooler Fähigkeiten, die man mit gutem Rhythmus einsetzt.",
        hint: "Mittlerer Anspruch – schnell gelernt, macht lange Spaß.",
        icon: "⚖️",
        weights: {
          fury: 3, arms: 3, marksmanship: 3, fire_mage: 3, affliction: 3, elemental: 3, enhancement: 3, shadow_priest: 3,
          beastmastery: 1
        }
      },
      {
        text: "Ich will meisterhafte Herausforderungen! Viele Tastenkombinationen, Tiergestalten wechseln und das Maximum herausholen.",
        hint: "Für Tüftler & Ehrgeizige – schwerer zu meistern, aber extrem lohnend.",
        icon: "🎹",
        weights: {
          feral_dps: 5, subtlety: 5, arms: 4,
          beastmastery: -4, retribution: -3, frost_mage: -1
        }
      }
    ]
  },
  {
    id: "theme_fantasy",
    title: "9. Welcher Heldentyp gefällt dir optisch und thematisch am besten?",
    subtitle: "Die Fantasie und Ausstrahlung deines Charakters.",
    options: [
      {
        text: "Ritter & Krieger: Schwere Rüstungen, scharfe Schwerter und pure Muskelkraft.",
        hint: "Kein Zauber-Schnickschnack, ehrlicher Stahl und Schilde.",
        icon: "🛡️",
        weights: {
          fury: 5, arms: 5, combat: 2,
          frost_mage: -4, affliction: -4, shadow_priest: -4
        }
      },
      {
        text: "Wilde Natur & Stürme: Begleiter, Pfeil & Bogen, Gestaltwandlung zur Raubkatze oder Blitz-Gewitter.",
        hint: "Naturmächte, wilde Tiere und schamanische Elemente.",
        icon: "🐾",
        weights: {
          enhancement: 4, elemental: 4, beastmastery: 4, feral_dps: 4, balance: 4, marksmanship: 2,
          rogue: -3, warlock: -4
        }
      },
      {
        text: "Dunkle Mächte & Schatten: Flüche, Dämonendiener und geheimnisvolle Schattenmagie.",
        hint: "Verbotene Magie, die Feinde mental zermürbt.",
        icon: "🔮",
        weights: {
          affliction: 5, destruction: 4, demonology: 5, shadow_priest: 5,
          retribution: -5, warrior: -3
        }
      },
      {
        text: "Klassische Zauberei: Glühendes Feuer, eisiger Frost und geheimnisvolle Arkankugeln.",
        hint: "Die Gelehrten der Zauberkunst.",
        icon: "✨",
        weights: {
          frost_mage: 5, fire_mage: 5, arcane_mage: 5,
          warrior: -4, rogue: -3
        }
      },
      {
        text: "Heiliger Kreuzritter: Glänzender Plattenpanzer, göttliches Licht und heilige Vergeltung.",
        hint: "Kämpfer des Lichts, der sich selbst kurz unverwundbar machen kann.",
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
        text: "Der Glücks-Jackpot! Wenn mit einem Mal mehrere Schläge gleichzeitig einschlagen oder ein gigantischer Riesen-Treffer den Feind zerreißt.",
        hint: "Zufällige Mega-Treffer & One-Shots – pures Glücksspiel-Adrenalin (Schamane, Arkan-Magier, Waffen-Krieger).",
        icon: "🎰",
        weights: {
          enhancement: 5, arms: 4, arcane_mage: 5, elemental: 4, destruction: 4, retribution: 3, marksmanship: 3,
          affliction: -2, frost_mage: 0
        }
      },
      {
        text: "Der Geschwindigkeitsrausch! Wenn der Kampf tobt, meine Waffen glühen und mein Angriffstempo explodiert.",
        hint: "Pausenlose Angriffsflut – je länger der Kampf, desto unaufhaltsamer wirst du (Furor-Krieger, Kampf-Schurke, Raubkatze).",
        icon: "⚡",
        weights: {
          fury: 5, combat: 5, feral_dps: 4, fire_mage: 3, assassination: 3,
          arcane_mage: -3, arms: 0
        }
      },
      {
        text: "Die absolute Kontrolle! Das Monster zappelt hilflos am Boden, ist tiefgekühlt oder betäubt und kann mir gar nichts anhaben.",
        hint: "Vollkommene Beherrschung – der Feind ist dir schutzlos ausgeliefert (Frost-Magier, Täuschungs-Schurke, Jäger).",
        icon: "❄️",
        weights: {
          frost_mage: 5, subtlety: 5, survival: 4, beastmastery: 3, shadow_priest: 2,
          fury: -2, fire_mage: -1
        }
      },
      {
        text: "Der Team-Retter! Wenn ich meine Freunde mit mächtigen Auren verstärke oder die Gruppe durch meinen eigenen Schaden heile.",
        hint: "Spürbare Team-Power – du machst nicht nur Schaden, sondern machst deine Freunde zu Legenden (Schattenpriester, Druide, Paladin).",
        icon: "🌟",
        weights: {
          shadow_priest: 5, enhancement: 4, feral_dps: 4, balance: 4, retribution: 4, affliction: 2,
          fury: -2, combat: -2, destruction: -1
        }
      }
    ]
  }
];

module.exports = { WOW_CLASSES, WOW_SPECS, QUIZ_QUESTIONS };