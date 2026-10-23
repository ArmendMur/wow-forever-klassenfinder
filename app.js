/**
 * WoW Forever - DPS Klassen-Finder Logik & Interaktion
 */

// Sound Engine mit Web Audio API (funktioniert 100% offline ohne externe MP3s)
class SoundEngine {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  play(type) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    switch (type) {
      case "click":
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, t);
        osc.frequency.exponentialRampToValueAtTime(880, t + 0.05);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
        osc.start(t);
        osc.stop(t + 0.05);
        break;

      case "select":
        osc.type = "triangle";
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.exponentialRampToValueAtTime(640, t + 0.1);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        osc.start(t);
        osc.stop(t + 0.1);
        break;

      case "fanfare":
        [261.63, 329.63, 392.00, 523.25].forEach((freq, idx) => {
          const o = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          o.type = "triangle";
          o.frequency.setValueAtTime(freq, t + idx * 0.08);
          g.gain.setValueAtTime(0.15, t + idx * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.4);
          o.connect(g);
          g.connect(this.ctx.destination);
          o.start(t + idx * 0.08);
          o.stop(t + idx * 0.08 + 0.4);
        });
        break;

      case "slash":
      case "cleave":
      case "backstab":
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150, t);
        osc.frequency.exponentialRampToValueAtTime(40, t + 0.12);
        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
        osc.start(t);
        osc.stop(t + 0.12);
        break;

      case "execute":
      case "crush":
      case "hammer":
        osc.type = "triangle";
        osc.frequency.setValueAtTime(120, t);
        osc.frequency.exponentialRampToValueAtTime(30, t + 0.22);
        gain.gain.setValueAtTime(0.28, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
        osc.start(t);
        osc.stop(t + 0.22);
        break;

      case "fire":
      case "explosion":
        osc.type = "square";
        osc.frequency.setValueAtTime(200, t);
        osc.frequency.exponentialRampToValueAtTime(30, t + 0.25);
        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.start(t);
        osc.stop(t + 0.25);
        break;

      case "ice":
      case "shatter":
        osc.type = "sine";
        osc.frequency.setValueAtTime(900, t);
        osc.frequency.exponentialRampToValueAtTime(1600, t + 0.15);
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        osc.start(t);
        osc.stop(t + 0.15);
        break;

      case "lightning":
      case "shock":
      case "windfury":
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(300, t);
        osc.frequency.linearRampToValueAtTime(800, t + 0.05);
        osc.frequency.linearRampToValueAtTime(100, t + 0.15);
        gain.gain.setValueAtTime(0.22, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        osc.start(t);
        osc.stop(t + 0.15);
        break;

      case "bow":
      case "bow_volley":
        osc.type = "sine";
        osc.frequency.setValueAtTime(550, t);
        osc.frequency.exponentialRampToValueAtTime(150, t + 0.08);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
        osc.start(t);
        osc.stop(t + 0.08);
        break;

      default:
        osc.type = "sine";
        osc.frequency.setValueAtTime(500, t);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        osc.start(t);
        osc.stop(t + 0.1);
        break;
    }
  }
}

const sounds = new SoundEngine();

// App State
const state = {
  currentView: "quiz", // "quiz", "browse", "duel"
  quizIndex: 0,
  quizAnswers: {}, // questionId -> optionIndex
  activeFilter: "all",
  searchQuery: "",
  duelSpec1: "fury",
  duelSpec2: "combat"
};

// DOM References
const dom = {
  navTabs: document.querySelectorAll(".tab-btn"),
  views: {
    quiz: document.getElementById("view-quiz"),
    browse: document.getElementById("view-browse"),
    duel: document.getElementById("view-duel")
  },
  soundToggleBtn: document.getElementById("sound-toggle-btn"),
  soundIcon: document.getElementById("sound-icon"),

  // Quiz DOM
  quizScreen: document.getElementById("quiz-screen"),
  resultsScreen: document.getElementById("results-screen"),
  quizStepText: document.getElementById("quiz-step-text"),
  quizPercentText: document.getElementById("quiz-percent-text"),
  progressFill: document.getElementById("progress-fill"),
  questionTitle: document.getElementById("question-title"),
  questionSubtitle: document.getElementById("question-subtitle"),
  optionsGrid: document.getElementById("options-grid"),
  btnPrev: document.getElementById("btn-prev"),
  btnNext: document.getElementById("btn-next"),

  // Results DOM
  winnerSpotlight: document.getElementById("winner-spotlight"),
  runnersContainer: document.getElementById("runners-container"),
  btnShareDiscord: document.getElementById("btn-share-discord"),
  btnRestartQuiz: document.getElementById("btn-restart-quiz"),

  // Browse DOM
  filterBtns: document.querySelectorAll(".filter-btn"),
  catalogSearch: document.getElementById("catalog-search"),
  catalogGrid: document.getElementById("catalog-grid"),

  // Duel DOM
  duelSelect1: document.getElementById("duel-select-1"),
  duelSelect2: document.getElementById("duel-select-2"),
  duelResultWrap: document.getElementById("duel-result-wrap"),

  // Modal
  specModal: document.getElementById("spec-modal"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalBody: document.getElementById("modal-body"),

  // Toast
  toast: document.getElementById("toast")
};

// Initialisierung
function initApp() {
  initBackgroundParticles();
  initNavigation();
  initSoundToggle();
  renderQuizQuestion();
  initBrowseView();
  initDuelView();
  initModal();
  initBeginnerGuide();
}

function initBeginnerGuide() {
  const toggleBtn = document.getElementById("btn-toggle-guide-results");
  const content = document.getElementById("guide-content-results");
  const arrow = document.getElementById("guide-arrow");
  if (toggleBtn && content) {
    toggleBtn.addEventListener("click", () => {
      sounds.play("click");
      const isHidden = content.classList.toggle("hidden");
      if (arrow) arrow.textContent = isHidden ? "▼" : "▲";
    });
  }
}

// Background Particles Canvas
function initBackgroundParticles() {
  const canvas = document.getElementById("particles-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    size: Math.random() * 2.2 + 0.8,
    speedY: -Math.random() * 0.4 - 0.1,
    speedX: (Math.random() - 0.5) * 0.25,
    opacity: Math.random() * 0.6 + 0.2,
    color: Math.random() > 0.4 ? "#d4a742" : "#8c6a21"
  }));

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y < 0) {
        p.y = h;
        p.x = Math.random() * w;
      }
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }
  animate();
}

// Navigation zwischen den 3 Views
function initNavigation() {
  dom.navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      sounds.play("click");
      const targetView = tab.dataset.view;
      switchView(targetView);
    });
  });
}

function switchView(viewName) {
  state.currentView = viewName;
  dom.navTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });
  Object.keys(dom.views).forEach((v) => {
    dom.views[v].classList.toggle("hidden", v !== viewName);
  });

  if (viewName === "browse") {
    renderBrowseGrid();
  } else if (viewName === "duel") {
    renderDuel();
  }
}

// Sound Button
function initSoundToggle() {
  dom.soundToggleBtn.addEventListener("click", () => {
    const isEnabled = sounds.toggle();
    dom.soundIcon.textContent = isEnabled ? "🔊" : "🔇";
    dom.soundToggleBtn.title = isEnabled ? "Sound: An" : "Sound: Aus";
    if (isEnabled) sounds.play("select");
  });
}

// ==========================================================================
// QUIZ ENGINE
// ==========================================================================

function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[state.quizIndex];
  const total = QUIZ_QUESTIONS.length;
  const currentNum = state.quizIndex + 1;
  const progressPercent = Math.round((currentNum / total) * 100);

  dom.quizStepText.textContent = `FRAGE ${currentNum} VON ${total}`;
  dom.quizPercentText.textContent = `${progressPercent}%`;
  dom.progressFill.style.width = `${progressPercent}%`;

  dom.questionTitle.textContent = q.title;
  dom.questionSubtitle.textContent = q.subtitle;

  dom.optionsGrid.innerHTML = "";
  const selectedOpt = state.quizAnswers[q.id];

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `option-btn ${selectedOpt === idx ? "selected" : ""}`;
    btn.innerHTML = `
      <div class="option-icon">${opt.icon}</div>
      <div class="option-content">
        <div class="option-text">${opt.text}</div>
        <div class="option-hint">${opt.hint}</div>
      </div>
    `;

    btn.addEventListener("click", () => {
      sounds.play("select");
      state.quizAnswers[q.id] = idx;
      renderQuizQuestion();
    });

    dom.optionsGrid.appendChild(btn);
  });

  dom.btnPrev.disabled = state.quizIndex === 0;
  const hasSelected = selectedOpt !== undefined;
  dom.btnNext.disabled = !hasSelected;

  if (state.quizIndex === total - 1) {
    dom.btnNext.innerHTML = `<span>Auswertung anzeigen ⚔️</span>`;
  } else {
    dom.btnNext.innerHTML = `<span>Weiter</span> <span>→</span>`;
  }
}

// Sanftes Hochscrollen zur aktuellen Frage oder den Ergebnissen (besonders wichtig für Smartphones)
function scrollToQuizTop() {
  requestAnimationFrame(() => {
    const target = dom.quizScreen;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + rect.top;
    window.scrollTo({
      top: Math.max(0, absoluteTop - 20),
      behavior: "smooth"
    });
  });
}

function scrollToResultsTop() {
  requestAnimationFrame(() => {
    const target = dom.resultsScreen;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + rect.top;
    window.scrollTo({
      top: Math.max(0, absoluteTop - 20),
      behavior: "smooth"
    });
  });
}

dom.btnPrev.addEventListener("click", () => {
  sounds.play("click");
  if (state.quizIndex > 0) {
    state.quizIndex--;
    renderQuizQuestion();
    scrollToQuizTop();
  }
});

dom.btnNext.addEventListener("click", () => {
  const currentQ = QUIZ_QUESTIONS[state.quizIndex];
  if (state.quizAnswers[currentQ.id] === undefined) return;

  if (state.quizIndex < QUIZ_QUESTIONS.length - 1) {
    sounds.play("click");
    state.quizIndex++;
    renderQuizQuestion();
    scrollToQuizTop();
  } else {
    // Quiz fertig -> Auswertung berechnen
    sounds.play("fanfare");
    calculateAndShowResults();
    scrollToResultsTop();
  }
});

// Match-Berechnung: Mathematisch präzise und fair auf alle 10 Fragen abgestimmt
function calculateAndShowResults() {
  const scores = {};
  WOW_SPECS.forEach((spec) => {
    scores[spec.id] = 0;
  });

  // Antworten gewichten
  QUIZ_QUESTIONS.forEach((q) => {
    const chosenIndex = state.quizAnswers[q.id];
    if (chosenIndex !== undefined) {
      const option = q.options[chosenIndex];
      if (option && option.weights) {
        Object.entries(option.weights).forEach(([key, val]) => {
          // Prüfen ob es eine Klassen-Id oder direkte Spec-Id ist
          if (scores[key] !== undefined) {
            scores[key] += val;
          } else {
            // Wenn key eine Klasse ist (z.B. "warrior"), addiere zu all ihren Specs
            WOW_SPECS.filter((s) => s.classId === key).forEach((s) => {
              scores[s.id] += val;
            });
          }
        });
      }
    }
  });

  // Berechne die maximal erreichbaren Punkte jeder Spec über alle 10 Fragen
  const maxPossible = {};
  WOW_SPECS.forEach((spec) => {
    maxPossible[spec.id] = 0;
  });
  QUIZ_QUESTIONS.forEach((q) => {
    WOW_SPECS.forEach((spec) => {
      let maxVal = 0;
      q.options.forEach((opt) => {
        let val = 0;
        if (opt.weights) {
          if (opt.weights[spec.id] !== undefined) val += opt.weights[spec.id];
          if (opt.weights[spec.classId] !== undefined) val += opt.weights[spec.classId];
        }
        if (val > maxVal) maxVal = val;
      });
      maxPossible[spec.id] += maxVal;
    });
  });

  // Rangliste sortieren: Normalisierte Übereinstimmung (Fit-Ratio)
  const ranked = WOW_SPECS.map((spec) => {
    const rawScore = scores[spec.id] || 0;
    const maxScore = maxPossible[spec.id] || 1;
    // Verhältnis der erzielten Punkte zum Maximum der Spezialisierung
    const fitRatio = Math.max(0, rawScore) / maxScore;
    // Saubere, reproduzierbare Prozentangabe (100% Fit = 98%, 0% = 35%)
    const percentage = Math.min(98, Math.max(25, Math.round(35 + fitRatio * 63)));

    return {
      spec,
      score: rawScore,
      maxScore,
      fitRatio,
      percentage
    };
  }).sort((a, b) => {
    if (b.percentage !== a.percentage) return b.percentage - a.percentage;
    return b.score - a.score;
  });

  // Feine Abstufung bei exaktem Punkte-Gleichstand für schöne Darstellung
  ranked.forEach((item, index) => {
    if (index > 0 && item.percentage >= ranked[index - 1].percentage) {
      item.percentage = Math.max(25, ranked[index - 1].percentage - 1);
    }
  });

  renderResultsScreen(ranked);
}

function renderResultsScreen(ranked) {
  dom.quizScreen.classList.add("hidden");
  dom.resultsScreen.classList.remove("hidden");

  const winner = ranked[0];
  const spec = winner.spec;
  const wowClass = WOW_CLASSES[spec.classId];

  // Winner Card bauen
  dom.winnerSpotlight.innerHTML = `
    <div class="winner-card" style="--card-class-color: ${wowClass.color}; border-color: ${wowClass.color};">
      <div class="winner-header">
        <div class="winner-info">
          <div class="class-crest" style="border-color: ${wowClass.color}; color: ${wowClass.color};">
            ${wowClass.icon}
          </div>
          <div class="winner-names">
            <h3 style="color: ${wowClass.color};">${spec.name}</h3>
            <div class="archetype-label">${spec.archetype} • <span style="color: #fff;">${wowClass.name}</span></div>
          </div>
        </div>
        <div class="match-badge">
          <div class="match-percent">${winner.percentage}%</div>
          <div class="match-label">Match Score</div>
        </div>
      </div>

      <div class="winner-body">
        <div class="winner-main-info">
          <div class="winner-motto">„${spec.motto}“</div>
          <p class="winner-description">${spec.vibe}</p>

          <div class="pro-con-grid">
            <div class="pro-list">
              <h4>Vorteile</h4>
              <ul>
                ${spec.pros.map((p) => `<li>${p}</li>`).join("")}
              </ul>
            </div>
            <div class="con-list">
              <h4>Nachteile</h4>
              <ul>
                ${spec.cons.map((c) => `<li>${c}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>

        <div class="stats-column">
          <h4>Klassen-Eigenschaften</h4>
          ${renderStatBar("💥 Wuchtige Einzelschläge", spec.stats.burst, "#e04b4b")}
          ${renderStatBar("⏱️ Gleichmäßiger Dauerschaden", spec.stats.sustain, "#d4a742")}
          ${renderStatBar("🌪️ Mehrere Monster gleichzeitig", spec.stats.aoe, "#c9653b")}
          ${renderStatBar("🛡️ Hilfe & Stärkung für Freunde", spec.stats.utility, "#3bc965")}
          ${renderStatBar("❤️ Zähigkeit (Hält viel aus)", spec.stats.survivability, "#a865d4")}
        </div>
      </div>
    </div>
  `;

  // Runner Ups (Plätze 2 bis 4)
  const runners = ranked.slice(1, 4);
  dom.runnersContainer.innerHTML = `
    <div class="runners-grid">
      ${runners
        .map((item) => {
          const s = item.spec;
          const c = WOW_CLASSES[s.classId];
          return `
          <div class="runner-card" style="border-left: 3px solid ${c.color};">
            <div>
              <div class="runner-top">
                <div class="runner-title">
                  <h4 style="color: ${c.color};">${s.name}</h4>
                  <div class="class-name">${c.name} • ${s.role}</div>
                </div>
                <div class="runner-match">${item.percentage}%</div>
              </div>
              <div class="runner-desc">${s.archetype}</div>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px;">„${s.motto}“</p>
            </div>
            <button type="button" class="runner-btn" data-spec-id="${s.id}">
              Details ansehen →
            </button>
          </div>
        `;
        })
        .join("")}
    </div>
  `;

  // Event Listener für Runner Up Details
  dom.runnersContainer.querySelectorAll(".runner-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.specId;
      openSpecModal(targetId);
    });
  });

  // Discord Share Button
  dom.btnShareDiscord.onclick = () => {
    const text = `⚔️ Mein WoW Forever DPS-Match:\n🏆 **${spec.name}** (${winner.percentage}% Match) - *${spec.archetype}*\n„${spec.motto}“\n\nAlternativen:\n${runners.map((r) => `• ${r.spec.name} (${r.percentage}%)`).join("\n")}\n\nFinde deine Klasse im WoW Forever Klassen-Kompass!`;
    navigator.clipboard.writeText(text).then(() => {
      sounds.play("fanfare");
      showToast("📋 Ergebnis in die Zwischenablage kopiert! (Bereit für Discord)");
    });
  };

  // Quiz Neustart
  dom.btnRestartQuiz.onclick = () => {
    sounds.play("click");
    state.quizIndex = 0;
    state.quizAnswers = {};
    dom.resultsScreen.classList.add("hidden");
    dom.quizScreen.classList.remove("hidden");
    renderQuizQuestion();
    scrollToQuizTop();
  };
}

function renderStatBar(label, value, color) {
  return `
    <div class="stat-row">
      <div class="stat-label-wrap">
        <span>${label}</span>
        <span style="font-weight: 700; color: #fff;">${value}%</span>
      </div>
      <div class="stat-track">
        <div class="stat-bar" style="width: ${value}%; background: ${color};"></div>
      </div>
    </div>
  `;
}

// ==========================================================================
// BROWSE / CATALOG VIEW
// ==========================================================================

function initBrowseView() {
  dom.filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sounds.play("click");
      dom.filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeFilter = btn.dataset.filter;
      renderBrowseGrid();
    });
  });

  dom.catalogSearch.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderBrowseGrid();
  });
}

function renderBrowseGrid() {
  dom.catalogGrid.innerHTML = "";

  const filtered = WOW_SPECS.filter((spec) => {
    const c = WOW_CLASSES[spec.classId];
    // Filter prüfen (Hybrid wie der WoW Forever Überlebens-Jäger erscheint in Nah- und Fernkampf)
    if (state.activeFilter === "melee" && spec.rangeType !== "melee" && spec.rangeType !== "hybrid") return false;
    if (state.activeFilter === "ranged" && spec.rangeType !== "ranged" && spec.rangeType !== "hybrid") return false;
    if (state.activeFilter === "plate" && c.armorShort !== "Platte") return false;
    if (state.activeFilter === "mail" && c.armorShort !== "Kette") return false;
    if (state.activeFilter === "leather" && c.armorShort !== "Leder") return false;
    if (state.activeFilter === "cloth" && c.armorShort !== "Stoff") return false;

    // Suche prüfen
    if (state.searchQuery) {
      const hay = (spec.name + " " + c.name + " " + spec.theme + " " + spec.tags.join(" ")).toLowerCase();
      if (!hay.includes(state.searchQuery)) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    dom.catalogGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        Keine Spezialisierungen für diese Suche gefunden.
      </div>
    `;
    return;
  }

  filtered.forEach((spec) => {
    const c = WOW_CLASSES[spec.classId];
    const card = document.createElement("div");
    card.className = "spec-catalog-card";
    card.style.setProperty("--card-class-color", c.color);

    card.innerHTML = `
      <div>
        <div class="catalog-card-header">
          <div class="catalog-card-title">
            <h3 style="color: ${c.color};">${spec.name}</h3>
            <div class="class-sub" style="color: var(--text-muted);">${c.name} • ${c.armor}</div>
          </div>
          <div style="font-size: 1.5rem;">${c.icon}</div>
        </div>

        <div class="catalog-motto">„${spec.motto}“</div>

        <div class="spec-mini-stats">
          <div class="mini-stat-item">
            <div class="mini-num">${spec.stats.burst}%</div>
            <div class="mini-label">Einzelschlag</div>
          </div>
          <div class="mini-stat-item">
            <div class="mini-num">${spec.stats.sustain}%</div>
            <div class="mini-label">Dauertempo</div>
          </div>
          <div class="mini-stat-item">
            <div class="mini-num">${spec.stats.survivability}%</div>
            <div class="mini-label">Zähigkeit</div>
          </div>
        </div>
      </div>

      <div class="catalog-card-footer">
        <span style="font-size: 0.76rem; color: var(--gold-light);">🎮 ${spec.apm}</span>
        <button type="button" class="btn-details">Details ansehen →</button>
      </div>
    `;

    card.addEventListener("click", () => {
      sounds.play("click");
      openSpecModal(spec.id);
    });

    dom.catalogGrid.appendChild(card);
  });
}

// ==========================================================================
// HEAD-TO-HEAD DUEL VIEW
// ==========================================================================

function initDuelView() {
  // Dropdowns befüllen
  [dom.duelSelect1, dom.duelSelect2].forEach((sel) => {
    sel.innerHTML = "";
    WOW_SPECS.forEach((spec) => {
      const c = WOW_CLASSES[spec.classId];
      const opt = document.createElement("option");
      opt.value = spec.id;
      opt.textContent = `${spec.name} (${c.name})`;
      sel.appendChild(opt);
    });
  });

  dom.duelSelect1.value = state.duelSpec1;
  dom.duelSelect2.value = state.duelSpec2;

  dom.duelSelect1.addEventListener("change", (e) => {
    sounds.play("select");
    state.duelSpec1 = e.target.value;
    renderDuel();
  });

  dom.duelSelect2.addEventListener("change", (e) => {
    sounds.play("select");
    state.duelSpec2 = e.target.value;
    renderDuel();
  });

  renderDuel();
}

function renderDuel() {
  const s1 = WOW_SPECS.find((s) => s.id === state.duelSpec1) || WOW_SPECS[0];
  const s2 = WOW_SPECS.find((s) => s.id === state.duelSpec2) || WOW_SPECS[1];
  const c1 = WOW_CLASSES[s1.classId];
  const c2 = WOW_CLASSES[s2.classId];

  dom.duelResultWrap.innerHTML = `
    <div class="duel-grid-split">
      <!-- Kämpfer 1 -->
      <div class="duel-fighter-card" style="border-top: 3px solid ${c1.color};">
        <div style="font-size: 2rem; margin-bottom: 4px;">${c1.icon}</div>
        <h3 class="fighter-title" style="color: ${c1.color};">${s1.name}</h3>
        <div class="fighter-meta">
          <span class="tag-chip">${c1.name}</span>
          <span class="tag-chip">${c1.armor}</span>
          <span class="tag-chip">${s1.role}</span>
        </div>
        <div class="winner-motto" style="font-size: 0.92rem; margin-bottom: 16px;">„${s1.motto}“</div>

        <div style="margin-bottom: 20px;">
          ${renderStatBar("💥 Wuchtige Einzelschläge", s1.stats.burst, "#e04b4b")}
          ${renderStatBar("⏱️ Gleichmäßiger Dauerschaden", s1.stats.sustain, "#d4a742")}
          ${renderStatBar("🌪️ Mehrere Monster gleichzeitig", s1.stats.aoe, "#c9653b")}
          ${renderStatBar("🛡️ Hilfe & Stärkung für Freunde", s1.stats.utility, "#3bc965")}
          ${renderStatBar("❤️ Zähigkeit (Hält viel aus)", s1.stats.survivability, "#a865d4")}
        </div>
      </div>

      <!-- Kämpfer 2 -->
      <div class="duel-fighter-card" style="border-top: 3px solid ${c2.color};">
        <div style="font-size: 2rem; margin-bottom: 4px;">${c2.icon}</div>
        <h3 class="fighter-title" style="color: ${c2.color};">${s2.name}</h3>
        <div class="fighter-meta">
          <span class="tag-chip">${c2.name}</span>
          <span class="tag-chip">${c2.armor}</span>
          <span class="tag-chip">${s2.role}</span>
        </div>
        <div class="winner-motto" style="font-size: 0.92rem; margin-bottom: 16px;">„${s2.motto}“</div>

        <div style="margin-bottom: 20px;">
          ${renderStatBar("💥 Wuchtige Einzelschläge", s2.stats.burst, "#e04b4b")}
          ${renderStatBar("⏱️ Gleichmäßiger Dauerschaden", s2.stats.sustain, "#d4a742")}
          ${renderStatBar("🌪️ Mehrere Monster gleichzeitig", s2.stats.aoe, "#c9653b")}
          ${renderStatBar("🛡️ Hilfe & Stärkung für Freunde", s2.stats.utility, "#3bc965")}
          ${renderStatBar("❤️ Zähigkeit (Hält viel aus)", s2.stats.survivability, "#a865d4")}
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// MODAL DIALOG FÜR SPEC DETAILS
// ==========================================================================

function initModal() {
  dom.modalCloseBtn.addEventListener("click", closeModal);
  dom.specModal.addEventListener("click", (e) => {
    if (e.target === dom.specModal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dom.specModal.classList.contains("active")) {
      closeModal();
    }
  });
}

function openSpecModal(specId) {
  const spec = WOW_SPECS.find((s) => s.id === specId);
  if (!spec) return;
  const c = WOW_CLASSES[spec.classId];

  dom.modalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
      <div style="font-size: 2.2rem; background: rgba(0,0,0,0.5); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid ${c.color};">
        ${c.icon}
      </div>
      <div>
        <h3 style="font-family: var(--font-heading); font-size: 1.6rem; color: ${c.color}; line-height: 1.1;">${spec.name}</h3>
        <div style="color: var(--text-muted); font-size: 0.9rem;">${c.name} • ${spec.role} • ${c.armor}</div>
      </div>
    </div>

    <div class="winner-motto" style="margin-bottom: 16px;">„${spec.motto}“</div>
    <p style="color: var(--text-main); margin-bottom: 20px; font-size: 0.95rem;">${spec.vibe}</p>

    <div class="pro-con-grid" style="margin-bottom: 20px;">
      <div class="pro-list">
        <h4>Vorteile</h4>
        <ul>${spec.pros.map((p) => `<li>${p}</li>`).join("")}</ul>
      </div>
      <div class="con-list">
        <h4>Nachteile</h4>
        <ul>${spec.cons.map((co) => `<li>${co}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="stats-column" style="margin-top: 14px;">
      <h4>Klassen-Eigenschaften</h4>
      ${renderStatBar("💥 Wuchtige Einzelschläge", spec.stats.burst, "#e04b4b")}
      ${renderStatBar("⏱️ Gleichmäßiger Dauerschaden", spec.stats.sustain, "#d4a742")}
      ${renderStatBar("🌪️ Mehrere Monster gleichzeitig", spec.stats.aoe, "#c9653b")}
      ${renderStatBar("🛡️ Hilfe & Stärkung für Freunde", spec.stats.utility, "#3bc965")}
      ${renderStatBar("❤️ Zähigkeit (Hält viel aus)", spec.stats.survivability, "#a865d4")}
    </div>
  `;

  dom.specModal.classList.add("active");
}

function closeModal() {
  sounds.play("click");
  dom.specModal.classList.remove("active");
}

function showToast(message) {
  const msgEl = document.getElementById("toast-msg");
  if (msgEl) {
    msgEl.textContent = message;
  } else {
    dom.toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  }
  dom.toast.classList.add("show");
  setTimeout(() => {
    dom.toast.classList.remove("show");
  }, 3500);
}

// Start beim Laden
document.addEventListener("DOMContentLoaded", initApp);
