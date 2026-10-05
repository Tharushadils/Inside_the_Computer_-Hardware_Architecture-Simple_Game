/**
 * PC BUILDER: HARDWARE CHALLENGE
 * Grade 7 Interactive Computer Hardware Assembly Simulation Game
 * Built with HTML5, CSS3, and Vanilla JavaScript
 */

// ==========================================================================
// 1. DATA: HARDWARE COMPONENTS, CLUES, ANALOGIES & SVG GRAPHICS
// ==========================================================================

const HARDWARE_DATABASE = {
  cpu: {
    id: 'cpu',
    name: 'CPU (Processor)',
    category: 'Central Processing Unit',
    clues: {
      1: 'I am the "Brain" of the computer. I execute instructions, perform math calculations, and coordinate system operations.',
      2: 'I process billions of instructions per second and fit into the center LGA socket on the motherboard.',
      3: 'I compute data using billions of microscopic transistors and require thermal cooling paste.'
    },
    analogy: '🧠 The Central Brain / Master Chef of the computer who coordinates and executes every task.',
    functionDesc: 'The Central Processing Unit (CPU) interprets and executes instructions from hardware and software programs.',
    specs: {
      'Cores / Threads': '8 Cores / 16 Threads',
      'Clock Speed': '3.8 GHz Base / 5.1 GHz Boost',
      'Socket Type': 'LGA 1700 Square Socket',
      'Power / TDP': '125 Watts'
    },
    targetZone: 'zone-cpu',
    isDistractor: false,
    svg: `<svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect x="5" y="5" width="70" height="70" rx="6" fill="#1b2a3a" stroke="#00e5ff" stroke-width="2"/>
      <polygon points="6,6 18,6 6,18" fill="#ffd700"/>
      <rect x="16" y="16" width="48" height="48" rx="3" fill="#2c3e50" stroke="#b0c4de" stroke-width="1.8"/>
      <rect x="22" y="22" width="36" height="36" rx="2" fill="#34495e"/>
      <text x="40" y="38" fill="#ffffff" font-family="'Orbitron', sans-serif" font-size="7.5" font-weight="bold" text-anchor="middle">CPU CORE</text>
      <text x="40" y="49" fill="#00e5ff" font-family="'JetBrains Mono', monospace" font-size="6.5" font-weight="bold" text-anchor="middle">4.8 GHz</text>
      <circle cx="22" cy="10" r="1.5" fill="#ffd700"/><circle cx="32" cy="10" r="1.5" fill="#ffd700"/><circle cx="42" cy="10" r="1.5" fill="#ffd700"/><circle cx="52" cy="10" r="1.5" fill="#ffd700"/><circle cx="62" cy="10" r="1.5" fill="#ffd700"/>
      <circle cx="22" cy="70" r="1.5" fill="#ffd700"/><circle cx="32" cy="70" r="1.5" fill="#ffd700"/><circle cx="42" cy="70" r="1.5" fill="#ffd700"/><circle cx="52" cy="70" r="1.5" fill="#ffd700"/><circle cx="62" cy="70" r="1.5" fill="#ffd700"/>
    </svg>`
  },

  ram: {
    id: 'ram',
    name: 'RAM (DDR5 Memory Sticks)',
    category: 'Primary Fast Memory',
    clues: {
      1: 'I temporarily hold open apps, browser tabs, and active files so the CPU can access them instantly. When power turns off, my data is erased!',
      2: 'I am high-speed memory modules installed in long vertical slots right next to the processor.',
      3: 'I provide ultra-low latency volatile workspace measured in Gigabytes (GB) to prevent system bottlenecks.'
    },
    analogy: '📋 The Kitchen Counter / Desk Workspace where active work is kept for quick hands-on access.',
    functionDesc: 'Random Access Memory (RAM) provides super-fast read and write storage for running programs and active operating system processes.',
    specs: {
      'Capacity': '16GB (2 x 8GB Dual-Channel)',
      'Speed': 'DDR5 5600 MHz',
      'Form Factor': '288-pin DIMM',
      'Volatility': 'Volatile (Erased on shutdown)'
    },
    targetZone: 'zone-ram',
    isDistractor: false,
    svg: `<svg viewBox="0 0 80 80" width="100%" height="100%">
      <!-- Stick 1 -->
      <rect x="15" y="8" width="20" height="64" rx="3" fill="#0d2818" stroke="#00e676" stroke-width="1.8"/>
      <rect x="18" y="14" width="14" height="44" rx="2" fill="#143622"/>
      <rect x="20" y="18" width="10" height="8" rx="1" fill="#050a07" stroke="#1f5335"/>
      <rect x="20" y="28" width="10" height="8" rx="1" fill="#050a07" stroke="#1f5335"/>
      <rect x="20" y="38" width="10" height="8" rx="1" fill="#050a07" stroke="#1f5335"/>
      <rect x="20" y="48" width="10" height="8" rx="1" fill="#050a07" stroke="#1f5335"/>
      <rect x="17" y="66" width="16" height="4" fill="#ffd700"/>
      <rect x="16" y="9" width="18" height="3" rx="1" fill="#00e5ff"/>

      <!-- Stick 2 -->
      <rect x="45" y="8" width="20" height="64" rx="3" fill="#0d2818" stroke="#00e676" stroke-width="1.8"/>
      <rect x="48" y="14" width="14" height="44" rx="2" fill="#143622"/>
      <rect x="50" y="18" width="10" height="8" rx="1" fill="#050a07" stroke="#1f5335"/>
      <rect x="50" y="28" width="10" height="8" rx="1" fill="#050a07" stroke="#1f5335"/>
      <rect x="50" y="38" width="10" height="8" rx="1" fill="#050a07" stroke="#1f5335"/>
      <rect x="50" y="48" width="10" height="8" rx="1" fill="#050a07" stroke="#1f5335"/>
      <rect x="47" y="66" width="16" height="4" fill="#ffd700"/>
      <rect x="46" y="9" width="18" height="3" rx="1" fill="#00e5ff"/>
    </svg>`
  },

  cooler: {
    id: 'cooler',
    name: 'CPU Cooler (Heatsink & Fan)',
    category: 'Thermal Cooling System',
    clues: {
      1: 'I prevent the CPU from overheating by pulling thermal heat away through metal pipes and blowing it out with a fan.',
      2: 'I mount directly on top of the processor socket to maintain safe operating temperatures.',
      3: 'I utilize direct-contact copper heatpipes and aluminum cooling fin arrays with dynamic PWM fan airflow.'
    },
    analogy: '❄️ The Air Conditioner / Radiator keeping the hot processor chip from overheating under pressure.',
    functionDesc: 'The CPU cooler transfers intense heat away from the processor using conductive metal fins and forced airflow.',
    specs: {
      'Fan Airflow': '68 CFM High Static Pressure',
      'Fan Speed': '800 - 2000 RPM (PWM)',
      'Heatpipes': '4x Direct-Contact Copper',
      'Noise': '22 dBA Whisper Silent'
    },
    targetZone: 'zone-cooler',
    isDistractor: false,
    svg: `<svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect x="8" y="8" width="64" height="64" rx="8" fill="#122336" stroke="#00e5ff" stroke-width="2"/>
      <circle cx="14" cy="14" r="3" fill="#d97706"/>
      <circle cx="66" cy="14" r="3" fill="#d97706"/>
      <circle cx="14" cy="66" r="3" fill="#d97706"/>
      <circle cx="66" cy="66" r="3" fill="#d97706"/>
      <circle cx="40" cy="40" r="24" fill="#091422" stroke="#2979ff" stroke-width="2"/>
      <path d="M40 40 Q55 26 55 16" stroke="#00e5ff" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M40 40 Q54 55 64 55" stroke="#00e5ff" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M40 40 Q25 54 25 64" stroke="#00e5ff" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M40 40 Q26 25 16 25" stroke="#00e5ff" stroke-width="4" stroke-linecap="round" fill="none"/>
      <circle cx="40" cy="40" r="9" fill="#1b2a4a" stroke="#00e5ff" stroke-width="1.8"/>
      <circle cx="40" cy="40" r="3.5" fill="#00e676"/>
    </svg>`
  },

  storage: {
    id: 'storage',
    name: 'NVMe M.2 SSD Storage',
    category: 'Permanent Flash Storage',
    clues: {
      1: 'I save your operating system, games, homework, and photos permanently—even when the computer is turned off!',
      2: 'I am a super-fast solid-state flash drive with zero moving parts that screws directly onto the motherboard.',
      3: 'I provide persistent non-volatile NAND flash storage with lightning read speeds over 7,000 MB/s.'
    },
    analogy: '📚 The Filing Cabinet / Bookshelf where all your books, documents, and games are stored permanently.',
    functionDesc: 'Solid State Drives (SSDs) store files, operating system files, and software permanently using high-speed NAND flash memory.',
    specs: {
      'Capacity': '1,000 GB (1 Terabyte)',
      'Read Speed': '7,450 MB/s (PCIe Gen 4)',
      'Technology': '3D TLC NAND Flash',
      'Form Factor': 'M.2 2280 Board'
    },
    targetZone: 'zone-storage',
    isDistractor: false,
    svg: `<svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect x="6" y="24" width="68" height="32" rx="3" fill="#0a2318" stroke="#00e676" stroke-width="1.8"/>
      <rect x="6" y="32" width="6" height="16" fill="#ffd700"/>
      <circle cx="68" cy="40" r="4" fill="#0a2318" stroke="#ffd700" stroke-width="1.2"/>
      <circle cx="68" cy="40" r="2" fill="#091422"/>
      <rect x="18" y="28" width="20" height="24" rx="2" fill="#111827" stroke="#374151"/>
      <text x="28" y="42" fill="#9ca3af" font-family="'JetBrains Mono', monospace" font-size="5.5" font-weight="bold" text-anchor="middle">NAND</text>
      <rect x="42" y="28" width="20" height="24" rx="2" fill="#111827" stroke="#374151"/>
      <text x="52" y="42" fill="#9ca3af" font-family="'JetBrains Mono', monospace" font-size="5.5" font-weight="bold" text-anchor="middle">1TB</text>
      <rect x="14" y="33" width="3.5" height="14" fill="#ffd700" opacity="0.9"/>
    </svg>`
  },

  gpu: {
    id: 'gpu',
    name: 'GPU (Graphics Card)',
    category: '3D Graphics & Video Processor',
    clues: {
      1: 'I render 3D visuals, high-frame-rate video games, and send graphical video signals to your monitor.',
      2: 'I install into the long horizontal PCIe x16 slot on the motherboard and have twin cooling fans.',
      3: 'I feature thousands of parallel shader cores dedicated to 3D matrix math and visual rendering.'
    },
    analogy: '🎨 The Master 3D Artist / Movie Cinema Projector that paints millions of colored pixels every second.',
    functionDesc: 'The Graphics Processing Unit (GPU) accelerates rendering of 2D/3D graphics, animations, video playback, and monitor output.',
    specs: {
      'VRAM': '12GB GDDR6X Memory',
      'Interface': 'PCIe 5.0 x16 Connector',
      'Video Outputs': '3x DisplayPort, 1x HDMI',
      'Cooling': 'Twin Axial Wind-Force Fans'
    },
    targetZone: 'zone-gpu',
    isDistractor: false,
    svg: `<svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect x="3" y="14" width="4" height="52" rx="1.5" fill="#cbd5e1" stroke="#94a3b8"/>
      <rect x="6" y="18" width="68" height="44" rx="5" fill="#182334" stroke="#ff1744" stroke-width="1.8"/>
      <circle cx="26" cy="40" r="13" fill="#0b1320" stroke="#00e5ff" stroke-width="1.3"/>
      <circle cx="26" cy="40" r="4" fill="#ff1744"/>
      <line x1="26" y1="29" x2="26" y2="51" stroke="#00e5ff" stroke-width="2"/>
      <line x1="15" y1="40" x2="37" y2="40" stroke="#00e5ff" stroke-width="2"/>
      <circle cx="54" cy="40" r="13" fill="#0b1320" stroke="#00e5ff" stroke-width="1.3"/>
      <circle cx="54" cy="40" r="4" fill="#ff1744"/>
      <line x1="54" y1="29" x2="54" y2="51" stroke="#00e5ff" stroke-width="2"/>
      <line x1="43" y1="40" x2="65" y2="40" stroke="#00e5ff" stroke-width="2"/>
      <rect x="18" y="62" width="38" height="5" fill="#ffd700" rx="1"/>
    </svg>`
  },

  psu: {
    id: 'psu',
    name: 'Power Supply Unit (PSU)',
    category: 'Electrical Power Converter',
    clues: {
      1: 'I convert dangerous high-voltage AC electricity from the wall socket into safe, clean DC power for all components.',
      2: 'I sit in the bottom chassis shroud with a heavy transformer and a large cooling intake fan.',
      3: 'I supply regulated +12V, +5V, and +3.3V power rails with 80-Plus Gold electrical efficiency.'
    },
    analogy: '⚡ The Heart / Power Plant of the computer pumping necessary electrical energy into every single part.',
    functionDesc: 'The Power Supply Unit (PSU) converts alternating current (AC) wall power into stable direct current (DC) power for PC components.',
    specs: {
      'Wattage': '850 Watts Continuous',
      'Efficiency': '80-PLUS Gold Certified',
      'Cables': 'Fully Modular DC Ribbon Cables',
      'Cooling': '120mm Fluid-Dynamic Fan'
    },
    targetZone: 'zone-psu',
    isDistractor: false,
    svg: `<svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect x="7" y="14" width="66" height="52" rx="4" fill="#0f1928" stroke="#2979ff" stroke-width="1.8"/>
      <circle cx="35" cy="40" r="17" fill="#070c14" stroke="#486581" stroke-width="1.5"/>
      <circle cx="35" cy="40" r="11" fill="none" stroke="#2979ff" stroke-width="1" stroke-dasharray="3,3"/>
      <circle cx="35" cy="40" r="5" fill="#ffd700"/>
      <rect x="56" y="20" width="12" height="40" rx="1.5" fill="#1c2d42"/>
      <text x="62" y="32" fill="#ffd700" font-family="'Orbitron', sans-serif" font-size="5" font-weight="bold" text-anchor="middle">850W</text>
      <text x="62" y="44" fill="#00e676" font-family="'Orbitron', sans-serif" font-size="4" font-weight="bold" text-anchor="middle">GOLD</text>
      <rect x="11" y="20" width="5" height="12" fill="#000" stroke="#444"/>
    </svg>`
  },

  // DISTRACTOR ITEMS (External Peripherals that do not go inside the chassis)
  distractor_keyboard: {
    id: 'distractor_keyboard',
    name: 'USB Gaming Keyboard',
    category: 'External Input Device',
    analogy: '⌨️ An external keyboard used to type letters and game controls from outside the PC.',
    functionDesc: 'An external input peripheral. It connects to the outside USB ports, NOT inside the computer chassis!',
    targetZone: null,
    isDistractor: true,
    svg: `<svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect x="8" y="22" width="64" height="36" rx="4" fill="#141d2b" stroke="#ffab00" stroke-width="1.8"/>
      <rect x="13" y="27" width="8" height="6" rx="1" fill="#2d3d54"/>
      <rect x="23" y="27" width="8" height="6" rx="1" fill="#2d3d54"/>
      <rect x="33" y="27" width="8" height="6" rx="1" fill="#2d3d54"/>
      <rect x="43" y="27" width="8" height="6" rx="1" fill="#2d3d54"/>
      <rect x="53" y="27" width="12" height="6" rx="1" fill="#00e5ff"/>
      <rect x="13" y="36" width="10" height="6" rx="1" fill="#2d3d54"/>
      <rect x="26" y="36" width="8" height="6" rx="1" fill="#2d3d54"/>
      <rect x="37" y="36" width="8" height="6" rx="1" fill="#2d3d54"/>
      <rect x="48" y="36" width="17" height="6" rx="1" fill="#2d3d54"/>
      <rect x="22" y="45" width="34" height="6" rx="1" fill="#00e676"/>
    </svg>`
  },

  distractor_mouse: {
    id: 'distractor_mouse',
    name: 'Optical Gaming Mouse',
    category: 'External Pointer Device',
    analogy: '🖱️ Pointing device used to move cursor and click on buttons on your screen.',
    functionDesc: 'An external pointing device that plugs into rear USB ports, not inside the PC casing!',
    targetZone: null,
    isDistractor: true,
    svg: `<svg viewBox="0 0 80 80" width="100%" height="100%">
      <path d="M26 30 Q26 15 40 15 Q54 15 54 30 L54 50 Q54 65 40 65 Q26 65 26 50 Z" fill="#141d2b" stroke="#ffab00" stroke-width="1.8"/>
      <line x1="40" y1="16" x2="40" y2="36" stroke="#2979ff" stroke-width="1.8"/>
      <rect x="37" y="22" width="6" height="12" rx="2" fill="#00e5ff"/>
      <path d="M28 50 Q40 60 52 50" stroke="#00e676" stroke-width="2" fill="none"/>
    </svg>`
  },

  distractor_speaker: {
    id: 'distractor_speaker',
    name: 'Desktop Audio Speaker',
    category: 'External Sound Output',
    analogy: '🔊 Sound device that converts audio electrical signals into sound waves for your ears.',
    functionDesc: 'An external audio peripheral. It sits on top of your computer desk, not inside the case!',
    targetZone: null,
    isDistractor: true,
    svg: `<svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect x="18" y="12" width="44" height="56" rx="5" fill="#121b28" stroke="#ffab00" stroke-width="1.8"/>
      <circle cx="40" cy="28" r="8" fill="#080e18" stroke="#2979ff" stroke-width="1.5"/>
      <circle cx="40" cy="28" r="3.5" fill="#00e5ff"/>
      <circle cx="40" cy="50" r="14" fill="#080e18" stroke="#00e676" stroke-width="1.5"/>
      <circle cx="40" cy="50" r="6" fill="#ffd700"/>
    </svg>`
  }
};

// Logical Assembly Sequence
const ASSEMBLY_SEQUENCE = ['cpu', 'ram', 'cooler', 'storage', 'gpu', 'psu'];

// ==========================================================================
// 2. AUDIO SYNTHESIZER ENGINE (Web Audio API - 100% Local, Zero External Files)
// ==========================================================================

class AudioSynthEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, volume = 0.2) {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playTone error', e);
    }
  }

  playClick() {
    this.playTone(800, 'triangle', 0.05, 0.15);
  }

  playPickup() {
    this.playTone(520, 'sine', 0.08, 0.15);
  }

  playSnapSuccess() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    // Harmonic Chord (C5 - E5 - G5)
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.25, 0.2);
      }, idx * 60);
    });
  }

  playError() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    this.playTone(220, 'sawtooth', 0.2, 0.25);
    setTimeout(() => {
      this.playTone(180, 'sawtooth', 0.25, 0.25);
    }, 120);
  }

  playPsuClick() {
    this.playTone(350, 'square', 0.1, 0.3);
  }

  playPowerSurge() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    // Fan spin up sweep tone
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 1.2);

    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 1.5);
  }

  playBiosBeep() {
    this.playTone(987.77, 'sine', 0.18, 0.3); // High B5 clean POST beep
  }

  playVictoryFanfare() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.35, 0.25);
      }, idx * 120);
    });
  }
}

// ==========================================================================
// 3. MAIN GAME STATE & CONTROLLER
// ==========================================================================

class GameController {
  constructor() {
    this.audio = new AudioSynthEngine();
    
    // Core Game State
    this.level = 1;
    this.phase = 'assembly'; // 'assembly' | 'case' | 'cabling' | 'boot' | 'victory'
    this.score = 0;
    this.hintsRemaining = 3;
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.countdownSeconds = 180; // For Level 3 Challenge
    
    // Assembly State
    this.installedParts = new Set();
    this.currentMissionStepIndex = 0;
    this.selectedPartId = null;
    
    // Cabling & Power State
    this.connectedCables = new Set(); // 'cable-power', 'cable-display', 'cable-keyboard', 'cable-mouse'
    this.psuSwitchOn = false;
    this.pcPoweredOn = false;
    
    // Statistics for Victory Screen
    this.stats = {
      totalAttempts: 0,
      correctAttempts: 0,
      hintsUsed: 0,
      startTime: 0,
      completionTimeStr: '00:00'
    };

    // Initialize Canvas Particle Background
    this.initBackgroundParticles();

    // Bind DOM & Events
    this.cacheDomElements();
    this.bindEvents();
    this.loadSavedScores();
  }

  cacheDomElements() {
    // Screens
    this.screenTitle = document.getElementById('screen-title');
    this.screenIntro = document.getElementById('screen-intro');
    this.screenGameplay = document.getElementById('screen-gameplay');
    this.screenVictory = document.getElementById('screen-victory');

    // Stage Views
    this.viewAssembly = document.getElementById('view-assembly');
    this.viewCaseClose = document.getElementById('view-case-close');
    this.viewCabling = document.getElementById('view-cabling');
    this.viewBoot = document.getElementById('view-boot');

    // Steppers
    this.stepAssembly = document.getElementById('step-assembly');
    this.stepCase = document.getElementById('step-case');
    this.stepCables = document.getElementById('step-cables');
    this.stepPower = document.getElementById('step-power');
    this.stepLine1 = document.getElementById('step-line-1');
    this.stepLine2 = document.getElementById('step-line-2');
    this.stepLine3 = document.getElementById('step-line-3');

    // HUD Elements
    this.hudScore = document.getElementById('hud-score');
    this.hudTimer = document.getElementById('hud-timer');
    this.timerLabel = document.getElementById('timer-label');
    this.hintBadge = document.getElementById('hint-badge');
    this.currentLevelName = document.getElementById('current-level-name');

    // Mission Clue Bar
    this.missionStepTag = document.getElementById('mission-step-tag');
    this.missionClueText = document.getElementById('mission-clue-text');

    // Parts Tray & Inspector
    this.partsTrayContainer = document.getElementById('parts-tray-container');
    this.trayCountTag = document.getElementById('tray-count-tag');
    this.inspectorPreviewBox = document.getElementById('inspector-preview-box');
    this.inspectName = document.getElementById('inspect-name');
    this.inspectType = document.getElementById('inspect-type');
    this.inspectDesc = document.getElementById('inspect-desc');
    this.inspectSpecs = document.getElementById('inspect-specs');
    this.checklistProgressText = document.getElementById('checklist-progress-text');

    // Modals
    this.modalHowToPlay = document.getElementById('modal-how-to-play');
    this.modalEncyclopedia = document.getElementById('modal-encyclopedia');
    this.encyclopediaContent = document.getElementById('encyclopedia-content');

    // Toast
    this.toastEl = document.getElementById('feedback-toast');
    this.toastIcon = document.getElementById('toast-icon');
    this.toastTitle = document.getElementById('toast-title');
    this.toastMsg = document.getElementById('toast-msg');

    // Sound Icons
    this.soundIconOn = document.getElementById('sound-icon-on');
    this.soundIconOff = document.getElementById('sound-icon-off');

    // Boot Components
    this.btnPsuSwitch = document.getElementById('btn-psu-switch');
    this.psuSwitchStatus = document.getElementById('psu-switch-status');
    this.btnPcPower = document.getElementById('btn-pc-power');
    this.powerLedIndicator = document.getElementById('power-led-indicator');
    this.monitorPowerLed = document.getElementById('monitor-power-led');
    this.stateScreenOff = document.getElementById('state-screen-off');
    this.stateScreenBios = document.getElementById('state-screen-bios');
    this.stateScreenOsLoad = document.getElementById('state-screen-os-load');
    this.stateScreenOsDesktop = document.getElementById('state-screen-os-desktop');
    this.biosLogLines = document.getElementById('bios-log-lines');
    this.bootFan1 = document.getElementById('boot-fan-1');
    this.bootFan2 = document.getElementById('boot-fan-2');
    this.bootRamGlow = document.getElementById('boot-ram-glow');
    this.chassisFanTop = document.getElementById('chassis-fan-top');
    this.chassisFanRear = document.getElementById('chassis-fan-rear');
    this.gStep1 = document.getElementById('g-step-1');
    this.gStep2 = document.getElementById('g-step-2');
    this.gStep3 = document.getElementById('g-step-3');

    // Side panel in Case Closing stage
    this.draggableSidePanel = document.getElementById('draggable-side-panel');
    this.btnSnapCaseClose = document.getElementById('btn-snap-case-close');
  }

  bindEvents() {
    // Sound Toggle Button
    document.getElementById('btn-sound-toggle').addEventListener('click', () => {
      this.toggleSound();
    });

    // Level Cards Selector on Title Screen
    document.querySelectorAll('.level-card').forEach(card => {
      card.addEventListener('click', (e) => {
        document.querySelectorAll('.level-card').forEach(c => c.classList.remove('active'));
        const target = e.currentTarget;
        target.classList.add('active');
        this.level = parseInt(target.getAttribute('data-level'), 10);
        this.audio.playClick();
      });
    });

    // Start Game Button
    document.getElementById('btn-start-game').addEventListener('click', () => {
      this.audio.playClick();
      this.showIntroScreen();
    });

    // Continue from Intro Dialogue
    document.getElementById('btn-dialogue-continue').addEventListener('click', () => {
      this.audio.playClick();
      this.startWorkshopGame();
    });

    // Modals buttons
    document.getElementById('btn-how-to-play').addEventListener('click', () => {
      this.audio.playClick();
      this.openHowToPlayModal();
    });
    document.getElementById('btn-close-how-modal').addEventListener('click', () => {
      this.audio.playClick();
      this.modalHowToPlay.classList.remove('active');
    });
    document.getElementById('btn-how-got-it').addEventListener('click', () => {
      this.audio.playClick();
      this.modalHowToPlay.classList.remove('active');
    });

    // Encyclopedia Buttons
    const openEncy = () => {
      this.audio.playClick();
      this.openEncyclopediaModal('cpu');
    };
    document.getElementById('btn-encyclopedia').addEventListener('click', openEncy);
    document.getElementById('btn-hardware-guide-title').addEventListener('click', openEncy);
    document.getElementById('btn-victory-encyclopedia').addEventListener('click', openEncy);

    document.getElementById('btn-close-encyclopedia-modal').addEventListener('click', () => {
      this.audio.playClick();
      this.modalEncyclopedia.classList.remove('active');
    });
    document.getElementById('btn-close-encyclopedia-bottom').addEventListener('click', () => {
      this.audio.playClick();
      this.modalEncyclopedia.classList.remove('active');
    });

    // Encyclopedia Tab switching
    document.querySelectorAll('.ency-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.ency-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const tabKey = e.currentTarget.getAttribute('data-tab');
        this.renderEncyclopediaTab(tabKey);
        this.audio.playClick();
      });
    });

    // Hint Button
    document.getElementById('btn-hint').addEventListener('click', () => {
      this.useHint();
    });

    // Restart Level Button
    document.getElementById('btn-restart').addEventListener('click', () => {
      this.audio.playClick();
      if (confirm('Restart current level and assembly progress?')) {
        this.startWorkshopGame();
      }
    });

    // HUD Logo -> Return to Main Menu
    document.getElementById('hud-logo-btn').addEventListener('click', () => {
      this.audio.playClick();
      this.returnToTitleScreen();
    });

    // Victory Screen Buttons
    document.getElementById('btn-next-level').addEventListener('click', () => {
      this.audio.playClick();
      if (this.level < 2) {
        this.level++;
      } else {
        this.level = 1;
      }
      this.startWorkshopGame();
    });

    document.getElementById('btn-replay-level').addEventListener('click', () => {
      this.audio.playClick();
      this.startWorkshopGame();
    });

    document.getElementById('btn-victory-menu').addEventListener('click', () => {
      this.audio.playClick();
      this.returnToTitleScreen();
    });

    // Side panel install in Case Closing stage
    this.btnSnapCaseClose.addEventListener('click', () => {
      this.closeChassisPanel();
    });
    this.draggableSidePanel.addEventListener('click', () => {
      this.closeChassisPanel();
    });

    // PSU Rocker Switch
    this.btnPsuSwitch.addEventListener('click', () => {
      this.togglePsuSwitch();
    });

    // Front PC Power Button
    this.btnPcPower.addEventListener('click', () => {
      this.pressPcPowerButton();
    });

    // Setup Motherboard Drop Zones for Drag & Drop
    this.initMotherboardDropZones();

    // Setup Cabling Drag & Drop
    this.initCablingDragAndDrop();
  }

  // ========================================================================
  // 4. SCREEN NAVIGATION & PROGRESS MANAGEMENT
  // ========================================================================

  switchScreen(screenEl) {
    [this.screenTitle, this.screenIntro, this.screenGameplay, this.screenVictory].forEach(s => {
      s.classList.remove('active');
    });
    screenEl.classList.add('active');
  }

  switchStageView(viewEl, stepEl, completedLines = []) {
    [this.viewAssembly, this.viewCaseClose, this.viewCabling, this.viewBoot].forEach(v => {
      v.classList.remove('active');
    });
    viewEl.classList.add('active');

    // Update Phase Stepper UI
    [this.stepAssembly, this.stepCase, this.stepCables, this.stepPower].forEach(s => {
      s.classList.remove('active');
    });
    stepEl.classList.add('active');

    // Update Completed lines
    this.stepLine1.classList.toggle('completed', completedLines.includes(1));
    this.stepLine2.classList.toggle('completed', completedLines.includes(2));
    this.stepLine3.classList.toggle('completed', completedLines.includes(3));
  }

  showIntroScreen() {
    this.switchScreen(this.screenIntro);

    const charRoleNames = {
      1: 'Level 1: Hardware Explorer',
      2: 'Level 2: PC Builder'
    };
    this.currentLevelName.textContent = charRoleNames[this.level] || 'Level 1: Explorer';

    const dialogueText = document.getElementById('dialogue-text');
    if (this.level === 1) {
      dialogueText.textContent = '"Hi! Welcome to the Computer Hardware Lab. I have the computer open and parts laid out. Read the mission clues to identify where each internal component belongs!"';
    } else {
      dialogueText.textContent = '"Welcome to PC Builder! Now we have external peripherals on the bench too. Assemble the internal parts, close the chassis, connect the rear cables, and power up the system!"';
    }
  }

  returnToTitleScreen() {
    this.clearIntervalTimer();
    this.switchScreen(this.screenTitle);
    this.loadSavedScores();
  }

  startWorkshopGame() {
    this.switchScreen(this.screenGameplay);
    this.phase = 'assembly';
    this.installedParts.clear();
    this.connectedCables.clear();
    this.currentMissionStepIndex = 0;
    this.selectedPartId = null;
    this.psuSwitchOn = false;
    this.pcPoweredOn = false;
    this.hintsRemaining = this.level === 1 ? 3 : 2;
    this.hintBadge.textContent = this.hintsRemaining;

    // Reset Stats
    this.stats.totalAttempts = 0;
    this.stats.correctAttempts = 0;
    this.stats.hintsUsed = 0;
    this.stats.startTime = Date.now();

    // Reset Stepper & Sockets
    this.switchStageView(this.viewAssembly, this.stepAssembly, []);
    this.resetAllSockets();
    this.resetCables();
    this.resetBootState();

    // Populate Parts Tray based on Level
    this.renderPartsTray();

    // Update Mission Clue & Checklists
    this.updateMissionClue();
    this.updateChecklistUI();

    // Start Timer
    this.startTimer();

    // Show initial toast
    this.showToast('Workshop Ready!', 'Drag parts to the motherboard sockets.', 'success');
  }

  // ========================================================================
  // 5. TIMER & SCORING SYSTEM
  // ========================================================================

  startTimer() {
    this.clearIntervalTimer();
    this.timerLabel.textContent = 'TIME';
    this.timerSeconds = 0;
    this.updateTimerDisplay(this.timerSeconds);

    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      this.updateTimerDisplay(this.timerSeconds);
    }, 1000);
  }

  clearIntervalTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    this.hudTimer.textContent = formatted;
    this.stats.completionTimeStr = formatted;
  }

  addScore(points) {
    this.score += points;
    this.hudScore.textContent = this.score;
  }

  deductScore(points) {
    this.score = Math.max(0, this.score - points);
    this.hudScore.textContent = this.score;
  }

  useHint() {
    if (this.hintsRemaining <= 0) {
      this.audio.playError();
      this.showToast('No Hints Left', 'Try inspecting parts to read their specs!', 'error');
      return;
    }

    this.hintsRemaining--;
    this.stats.hintsUsed++;
    this.hintBadge.textContent = this.hintsRemaining;
    this.audio.playClick();

    // Highlight current required socket
    const requiredPartId = ASSEMBLY_SEQUENCE[this.currentMissionStepIndex];
    if (requiredPartId && HARDWARE_DATABASE[requiredPartId]) {
      const targetZoneId = HARDWARE_DATABASE[requiredPartId].targetZone;
      const zoneEl = document.getElementById(targetZoneId);
      if (zoneEl) {
        zoneEl.classList.add('highlight-hint');
        setTimeout(() => {
          zoneEl.classList.remove('highlight-hint');
        }, 3500);
      }
      this.showToast('Hint Activated', `Look for the highlighted socket: ${HARDWARE_DATABASE[requiredPartId].name}`, 'success');
    }
  }

  // ========================================================================
  // 6. HARDWARE PARTS TRAY & INSPECTION
  // ========================================================================

  renderPartsTray() {
    this.partsTrayContainer.innerHTML = '';

    // Core parts
    let partsList = [...ASSEMBLY_SEQUENCE];

    // Add distractors based on level
    if (this.level === 1) {
      partsList.push('distractor_keyboard', 'distractor_mouse');
    } else if (this.level === 2) {
      partsList.push('distractor_keyboard', 'distractor_mouse', 'distractor_speaker');
      partsList = partsList.sort(() => Math.random() - 0.5);
    } else {
      partsList.push('distractor_keyboard', 'distractor_mouse', 'distractor_speaker');
      partsList = partsList.sort(() => Math.random() - 0.5);
    }

    this.trayCountTag.textContent = `${partsList.length} Items`;

    partsList.forEach(partKey => {
      const data = HARDWARE_DATABASE[partKey];
      if (!data) return;

      const card = document.createElement('div');
      card.className = `part-item-card ${data.isDistractor ? 'distractor' : ''}`;
      card.id = `tray-item-${data.id}`;
      card.setAttribute('draggable', 'true');
      card.setAttribute('data-part-id', data.id);

      card.innerHTML = `
        <div class="part-thumb-svg">${data.svg}</div>
        <div class="part-meta">
          <div class="part-title">${data.name}</div>
          <div class="part-category">${data.category}</div>
          ${data.isDistractor ? '<div class="part-distractor-tag">⚠ External Peripheral</div>' : ''}
        </div>
      `;

      // Click to inspect part details & analogy
      card.addEventListener('click', () => {
        this.inspectPart(data.id);
      });

      // Drag events
      card.addEventListener('dragstart', (e) => {
        this.audio.playPickup();
        e.dataTransfer.setData('text/plain', data.id);
        card.classList.add('dragging');
        this.inspectPart(data.id);
      });

      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));
      });

      this.partsTrayContainer.appendChild(card);
    });
  }

  inspectPart(partId) {
    const data = HARDWARE_DATABASE[partId];
    if (!data) return;

    this.selectedPartId = partId;
    this.inspectorPreviewBox.innerHTML = data.svg;
    this.inspectName.textContent = data.name;
    this.inspectType.textContent = data.category.toUpperCase();
    this.inspectDesc.textContent = `${data.functionDesc} \n\n${data.analogy}`;

    this.inspectSpecs.innerHTML = '';
    if (data.specs) {
      Object.entries(data.specs).forEach(([k, v]) => {
        const row = document.createElement('div');
        row.className = 'spec-item';
        row.innerHTML = `<span class="k">${k}:</span><span class="v">${v}</span>`;
        this.inspectSpecs.appendChild(row);
      });
    }
  }

  // ========================================================================
  // 7. MOTHERBOARD DROP ZONES & ASSEMBLY INTERACTION
  // ========================================================================

  initMotherboardDropZones() {
    const zones = document.querySelectorAll('.motherboard-board .drop-zone, .psu-shroud-bay .drop-zone');

    zones.forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('drag-over');
      });

      zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
      });

      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        const draggedPartId = e.dataTransfer.getData('text/plain');
        this.handlePartDrop(draggedPartId, zone);
      });
    });
  }

  handlePartDrop(partId, zoneEl) {
    this.stats.totalAttempts++;
    const partData = HARDWARE_DATABASE[partId];

    if (!partData) return;

    // Check if distractor
    if (partData.isDistractor) {
      this.deductScore(25);
      this.audio.playError();
      this.showToast('External Peripheral!', `${partData.name} connects outside the PC casing via cables, not inside the case!`, 'error');
      return;
    }

    // Check if target zone matches
    const expectedZoneId = partData.targetZone;
    if (zoneEl.id !== expectedZoneId) {
      this.deductScore(20);
      this.audio.playError();
      this.showToast('Incorrect Placement!', `${partData.name} does not belong in this socket. Inspect its shape and function!`, 'error');
      return;
    }

    // Check logical installation sequence (e.g. CPU before cooler)
    if (partId === 'cooler' && !this.installedParts.has('cpu')) {
      this.audio.playError();
      this.showToast('Prerequisite Missing!', 'The CPU Processor must be inside the socket before the cooling fan is mounted on top.', 'error');
      return;
    }

    // Success: Install Component!
    this.installComponent(partId, zoneEl);
  }

  installComponent(partId, zoneEl) {
    this.installedParts.add(partId);
    this.stats.correctAttempts++;
    this.addScore(150);
    this.audio.playSnapSuccess();

    // Mark Drop Zone as Installed
    zoneEl.classList.remove('highlight-hint');
    zoneEl.classList.add('installed');
    const slotId = `slot-${partId}`;
    const slotEl = document.getElementById(slotId);
    if (slotEl) {
      slotEl.innerHTML = HARDWARE_DATABASE[partId].svg;
    }

    // Gray out tray card
    const trayCard = document.getElementById(`tray-item-${partId}`);
    if (trayCard) {
      trayCard.classList.add('installed');
    }

    // Enable CPU Cooler mount if CPU was just installed
    if (partId === 'cpu') {
      const coolerZone = document.getElementById('zone-cooler');
      if (coolerZone) coolerZone.classList.add('active-target');
    }

    // Feedback Toast
    this.showToast('Component Installed!', `${HARDWARE_DATABASE[partId].name} is firmly secured into place.`, 'success');

    // Advance Mission Step Index
    if (ASSEMBLY_SEQUENCE[this.currentMissionStepIndex] === partId) {
      this.currentMissionStepIndex++;
      while (
        this.currentMissionStepIndex < ASSEMBLY_SEQUENCE.length &&
        this.installedParts.has(ASSEMBLY_SEQUENCE[this.currentMissionStepIndex])
      ) {
        this.currentMissionStepIndex++;
      }
    }

    this.updateMissionClue();
    this.updateChecklistUI();

    // Check if all internal parts are installed
    if (this.installedParts.size >= ASSEMBLY_SEQUENCE.length) {
      setTimeout(() => {
        this.advanceToCaseClosingStage();
      }, 900);
    }
  }

  updateMissionClue() {
    if (this.currentMissionStepIndex < ASSEMBLY_SEQUENCE.length) {
      const nextPartId = ASSEMBLY_SEQUENCE[this.currentMissionStepIndex];
      const data = HARDWARE_DATABASE[nextPartId];
      
      this.missionStepTag.textContent = `MISSION CLUE: PART ${this.installedParts.size + 1} OF ${ASSEMBLY_SEQUENCE.length}`;
      this.missionClueText.textContent = `"${data.clues[this.level]}"`;
    } else {
      this.missionStepTag.textContent = 'ALL INTERNAL HARDWARE SECURED!';
      this.missionClueText.textContent = 'Proceed to close the computer chassis side panel.';
    }
  }

  updateChecklistUI() {
    this.checklistProgressText.textContent = `${this.installedParts.size} / ${ASSEMBLY_SEQUENCE.length}`;
    document.querySelectorAll('.check-item').forEach(li => {
      const partKey = li.getAttribute('data-part');
      if (this.installedParts.has(partKey)) {
        li.classList.add('done');
      } else {
        li.classList.remove('done');
      }
    });
  }

  resetAllSockets() {
    document.querySelectorAll('.drop-zone').forEach(z => {
      z.classList.remove('installed', 'highlight-hint', 'drag-over');
    });
    document.querySelectorAll('.installed-slot').forEach(s => {
      s.innerHTML = '';
    });
    const coolerZone = document.getElementById('zone-cooler');
    if (coolerZone) coolerZone.classList.remove('active-target');
  }

  // ========================================================================
  // 8. STAGE 2: CHASSIS SIDE PANEL CLOSING
  // ========================================================================

  advanceToCaseClosingStage() {
    this.phase = 'case';
    this.audio.playSnapSuccess();
    this.showToast('Stage 1 Complete!', 'Now slide the tempered glass side panel into place.', 'success');
    this.switchStageView(this.viewCaseClose, this.stepCase, [1]);
    this.stepAssembly.classList.add('completed');
  }

  closeChassisPanel() {
    this.audio.playSnapSuccess();
    this.draggableSidePanel.classList.add('closed');
    this.addScore(100);
    this.showToast('Chassis Locked!', 'Tempered glass secured with thumb screws.', 'success');

    setTimeout(() => {
      this.advanceToCablingStage();
    }, 1000);
  }

  // ========================================================================
  // 9. STAGE 3: EXTERNAL CABLING PUZZLE
  // ========================================================================

  advanceToCablingStage() {
    this.phase = 'cabling';
    this.switchStageView(this.viewCabling, this.stepCables, [1, 2]);
    this.stepCase.classList.add('completed');
    this.showToast('Stage 3: Cabling', 'Drag HDMI, USB, and Power cables to the rear I/O panel.', 'success');
  }

  initCablingDragAndDrop() {
    const cableItems = document.querySelectorAll('.cable-plug-item');
    const portSlots = document.querySelectorAll('.port-slot:not(.mobo-display-disabled)');

    cableItems.forEach(cable => {
      cable.addEventListener('dragstart', (e) => {
        this.audio.playPickup();
        const cableType = cable.getAttribute('data-cable-type');
        e.dataTransfer.setData('text/plain', cableType);
      });
    });

    portSlots.forEach(port => {
      port.addEventListener('dragover', (e) => {
        e.preventDefault();
        port.classList.add('drag-over');
      });

      port.addEventListener('dragleave', () => {
        port.classList.remove('drag-over');
      });

      port.addEventListener('drop', (e) => {
        e.preventDefault();
        port.classList.remove('drag-over');
        const cableType = e.dataTransfer.getData('text/plain');
        this.handleCableConnect(cableType, port);
      });
    });
  }

  handleCableConnect(cableType, portEl) {
    if (portEl.classList.contains('connected')) {
      return; // Port already in use
    }

    const acceptedRule = portEl.getAttribute('data-accepts');
    this.stats.totalAttempts++;

    // Universal USB matching: any USB port accepts either keyboard or mouse!
    const isUsbMatch = (acceptedRule === 'usb' && (cableType === 'cable-keyboard' || cableType === 'cable-mouse'));
    const isDirectMatch = (cableType === acceptedRule);

    if (!isUsbMatch && !isDirectMatch) {
      this.deductScore(15);
      this.audio.playError();
      this.showToast('Wrong Port!', 'Look at the connector shape and matching port type.', 'error');
      return;
    }

    // Success: Plug In Cable
    this.connectedCables.add(cableType);
    this.stats.correctAttempts++;
    this.addScore(100);
    this.audio.playSnapSuccess();

    portEl.classList.add('connected');
    const statusEl = portEl.querySelector('.port-status');
    const deviceName = cableType === 'cable-keyboard' ? 'KEYBOARD' : 
                      (cableType === 'cable-mouse' ? 'MOUSE' : 
                      (cableType === 'cable-display' ? 'HDMI DISPLAY' : 'POWER CORD'));
    if (statusEl) statusEl.textContent = `${deviceName} ✓`;

    const cableItem = document.getElementById(cableType);
    if (cableItem) cableItem.classList.add('connected');

    this.showToast('Cable Connected!', `${deviceName} plugged in successfully.`, 'success');

    // Check if all 4 cables are connected
    if (this.connectedCables.size >= 4) {
      setTimeout(() => {
        this.advanceToBootStage();
      }, 1000);
    }
  }

  resetCables() {
    document.querySelectorAll('.cable-plug-item').forEach(c => c.classList.remove('connected'));
    document.querySelectorAll('.port-slot').forEach(p => {
      p.classList.remove('connected');
      const st = p.querySelector('.port-status');
      if (st) st.textContent = 'UNCONNECTED';
    });
  }

  // ========================================================================
  // 10. STAGE 4: POWER-ON & OPERATING SYSTEM BOOT SEQUENCE
  // ========================================================================

  advanceToBootStage() {
    this.phase = 'boot';
    this.switchStageView(this.viewBoot, this.stepPower, [1, 2, 3]);
    this.stepCables.classList.add('completed');
    this.showToast('Stage 4: Power & Boot', 'Turn on PSU Master Rocker, then press the PC Power Button!', 'success');
    this.updateBootGuideSteps(1);
  }

  togglePsuSwitch() {
    this.psuSwitchOn = !this.psuSwitchOn;
    this.audio.playPsuClick();

    if (this.psuSwitchOn) {
      this.btnPsuSwitch.classList.add('on');
      this.psuSwitchStatus.textContent = 'STATUS: ON [ I ] (Standby Ready)';
      this.psuSwitchStatus.style.color = 'var(--green-cyber)';
      this.btnPcPower.disabled = false;
      this.powerLedIndicator.classList.add('on');
      this.updateBootGuideSteps(2);
      this.showToast('PSU Active!', 'Main electrical power supplied. Now press the Front PC Power Button.', 'success');
    } else {
      this.btnPsuSwitch.classList.remove('on');
      this.psuSwitchStatus.textContent = 'STATUS: OFF [ O ]';
      this.psuSwitchStatus.style.color = 'var(--text-muted)';
      this.btnPcPower.disabled = true;
      this.powerLedIndicator.classList.remove('on');
      this.updateBootGuideSteps(1);
    }
  }

  pressPcPowerButton() {
    if (!this.psuSwitchOn) {
      this.audio.playError();
      this.showToast('No Power!', 'Flip the PSU Master Switch to [ I ] first!', 'error');
      return;
    }

    if (this.pcPoweredOn) return;
    this.pcPoweredOn = true;

    // Power surge sound & fans start spinning
    this.audio.playPowerSurge();
    this.btnPcPower.disabled = true;
    this.bootFan1.classList.add('spinning');
    this.bootFan2.classList.add('spinning');
    this.chassisFanTop.classList.add('spinning');
    this.chassisFanRear.classList.add('spinning');
    this.bootRamGlow.classList.add('active');

    this.updateBootGuideSteps(3);

    // Turn ON the monitor power status LED
    if (this.monitorPowerLed) this.monitorPowerLed.classList.add('on');

    // Power on monitor display screen and start BIOS POST
    this.startBootSequenceAnimation();
  }

  startBootSequenceAnimation() {
    // Switch from dark powered-off screen to BIOS screen
    setTimeout(() => {
      this.audio.playBiosBeep();
      if (this.stateScreenOff) this.stateScreenOff.classList.remove('active');
      if (this.stateScreenBios) this.stateScreenBios.classList.add('active');
      this.typeBiosLines();
    }, 800);
  }

  typeBiosLines() {
    const lines = [
      '> CYBER-UEFI Boot Sequence Initialized...',
      '> Checking Memory: 16384 MB DDR5 @ 5600MHz -> [ OK ]',
      '> Checking CPU: 8-Core Intel/AMD Processor @ 4.80GHz -> [ OK ]',
      '> Checking Primary Drive: 1TB NVMe M.2 SSD -> [ OK ]',
      '> Checking PCIe Graphics: Dedicated DirectX 12 GPU -> [ OK ]',
      '> Hardware Diagnostics Passed (100% Health)',
      '> Loading Quantum OS Kernel...'
    ];

    this.biosLogLines.innerHTML = '';
    let lineIdx = 0;

    const interval = setInterval(() => {
      if (lineIdx < lines.length) {
        const p = document.createElement('p');
        p.textContent = lines[lineIdx];
        this.biosLogLines.appendChild(p);
        this.audio.playClick();
        lineIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          this.showOsLoadScreen();
        }, 1000);
      }
    }, 450);
  }

  showOsLoadScreen() {
    if (this.stateScreenBios) this.stateScreenBios.classList.remove('active');
    if (this.stateScreenOsLoad) this.stateScreenOsLoad.classList.add('active');

    setTimeout(() => {
      this.showOsDesktopScreen();
    }, 2000);
  }

  showOsDesktopScreen() {
    if (this.stateScreenOsLoad) this.stateScreenOsLoad.classList.remove('active');
    if (this.stateScreenOsDesktop) this.stateScreenOsDesktop.classList.add('active');
    this.audio.playVictoryFanfare();
    this.addScore(300);

    setTimeout(() => {
      this.finishGame();
    }, 3000);
  }

  updateBootGuideSteps(stepNum) {
    [this.gStep1, this.gStep2, this.gStep3].forEach((g, idx) => {
      g.classList.remove('active', 'completed');
      if (idx + 1 < stepNum) g.classList.add('completed');
      if (idx + 1 === stepNum) g.classList.add('active');
    });
  }

  resetBootState() {
    this.psuSwitchOn = false;
    this.pcPoweredOn = false;
    this.btnPsuSwitch.classList.remove('on');
    this.btnPcPower.disabled = true;
    this.powerLedIndicator.classList.remove('on');
    if (this.monitorPowerLed) this.monitorPowerLed.classList.remove('on');
    this.bootFan1.classList.remove('spinning');
    this.bootFan2.classList.remove('spinning');
    this.chassisFanTop.classList.remove('spinning');
    this.chassisFanRear.classList.remove('spinning');
    this.bootRamGlow.classList.remove('active');

    // Monitor is strictly dark and powered OFF initially
    [this.stateScreenOff, this.stateScreenBios, this.stateScreenOsLoad, this.stateScreenOsDesktop].forEach(s => {
      if (s) s.classList.remove('active');
    });
    if (this.stateScreenOff) this.stateScreenOff.classList.add('active');
    this.updateBootGuideSteps(1);
  }

  // ========================================================================
  // 11. VICTORY & RESULTS MODAL
  // ========================================================================

  finishGame() {
    this.clearIntervalTimer();
    this.phase = 'victory';
    this.stepPower.classList.add('completed');
    this.switchScreen(this.screenVictory);

    // Calculate accuracy
    const total = Math.max(1, this.stats.totalAttempts);
    const accuracy = Math.round((this.stats.correctAttempts / total) * 100);

    // Star rating
    let stars = '★★★';
    let starCount = 3;
    if (accuracy < 75 || this.stats.hintsUsed >= 3) {
      stars = '★☆☆';
      starCount = 1;
    } else if (accuracy < 90 || this.stats.hintsUsed >= 1) {
      stars = '★★☆';
      starCount = 2;
    }

    document.getElementById('v-score').textContent = this.score;
    document.getElementById('v-time').textContent = this.stats.completionTimeStr;
    document.getElementById('v-accuracy').textContent = `${accuracy}%`;
    document.getElementById('v-stars').textContent = stars;

    // Save to LocalStorage
    this.saveScore(this.level, this.score, starCount);
  }

  saveScore(level, score, stars) {
    try {
      const bestKey = `pc_builder_best_score_lvl_${level}`;
      const bestStarsKey = `pc_builder_stars_lvl_${level}`;

      const prevBest = parseInt(localStorage.getItem(bestKey) || '0', 10);
      if (score > prevBest) {
        localStorage.setItem(bestKey, score);
      }

      const prevStars = parseInt(localStorage.getItem(bestStarsKey) || '0', 10);
      if (stars > prevStars) {
        localStorage.setItem(bestStarsKey, stars);
      }
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }

  loadSavedScores() {
    try {
      let maxScore = 0;
      let totalStars = 0;

      for (let l = 1; l <= 2; l++) {
        const s = parseInt(localStorage.getItem(`pc_builder_best_score_lvl_${l}`) || '0', 10);
        const star = parseInt(localStorage.getItem(`pc_builder_stars_lvl_${l}`) || '0', 10);
        if (s > maxScore) maxScore = s;
        totalStars += star;
      }

      const bestScoreEl = document.getElementById('title-best-score');
      const bestStarsEl = document.getElementById('title-stars');
      if (bestScoreEl) bestScoreEl.textContent = maxScore;
      if (bestStarsEl) bestStarsEl.textContent = `${totalStars} / 6`;
    } catch (e) {
      console.warn('LocalStorage load failed', e);
    }
  }

  // ========================================================================
  // 12. ENCYCLOPEDIA & HOW TO PLAY MODALS
  // ========================================================================

  openHowToPlayModal() {
    this.modalHowToPlay.classList.add('active');
  }

  openEncyclopediaModal(tabKey = 'cpu') {
    this.modalEncyclopedia.classList.add('active');
    document.querySelectorAll('.ency-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-tab') === tabKey);
    });
    this.renderEncyclopediaTab(tabKey);
  }

  renderEncyclopediaTab(tabKey) {
    if (tabKey === 'motherboard') {
      this.encyclopediaContent.innerHTML = `
        <div class="ency-part-graphic">
          <svg viewBox="0 0 100 100" width="90" height="90">
            <rect x="5" y="5" width="90" height="90" rx="6" fill="#0d2838" stroke="#00e5ff" stroke-width="2"/>
            <path d="M15 20 h30 v25 h20 M75 20 v40 h-20 M20 75 h30 v-20" stroke="#00e5ff" stroke-width="1.5" fill="none"/>
            <rect x="25" y="25" width="24" height="24" rx="2" fill="#1b3d54" stroke="#ffab00"/>
            <rect x="58" y="20" width="4" height="34" rx="1" fill="#00e676"/>
            <rect x="18" y="62" width="50" height="8" rx="2" fill="#ff1744"/>
          </svg>
        </div>
        <div class="ency-part-info">
          <h3>The Motherboard (Main Circuit Board)</h3>
          <div class="ency-analogy-box">
            🏙️ <strong>Real-World Analogy:</strong> The City Road Highway & Foundation connecting every building, house, and power plant together.
          </div>
          <p>The motherboard is the master printed circuit board (PCB) that physically and electrically connects the CPU, RAM, GPU, storage drives, and power supply. It contains copper data traces (buses) to transport binary signals at high speeds.</p>
        </div>
      `;
      return;
    }

    const data = HARDWARE_DATABASE[tabKey];
    if (!data) return;

    this.encyclopediaContent.innerHTML = `
      <div class="ency-part-graphic">${data.svg}</div>
      <div class="ency-part-info">
        <h3>${data.name}</h3>
        <div class="ency-analogy-box">
          ${data.analogy}
        </div>
        <p><strong>Primary Function:</strong> ${data.functionDesc}</p>
        <div class="ency-specs-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; font-size: 11px; margin-top: 6px;">
          ${Object.entries(data.specs || {}).map(([k, v]) => `<div><span style="color: var(--text-muted);">${k}:</span> <span style="color: var(--cyan-glow); font-weight: 600;">${v}</span></div>`).join('')}
        </div>
      </div>
    `;
  }

  // ========================================================================
  // 13. TOAST NOTIFICATIONS & SOUND TOGGLE
  // ========================================================================

  showToast(title, msg, type = 'success') {
    this.toastTitle.textContent = title;
    this.toastMsg.textContent = msg;
    this.toastEl.className = `feedback-toast show ${type}`;
    this.toastIcon.textContent = type === 'success' ? '✓' : '!';

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastEl.classList.remove('show');
    }, 3200);
  }

  toggleSound() {
    this.audio.enabled = !this.audio.enabled;
    if (this.audio.enabled) {
      this.soundIconOn.classList.remove('hidden');
      this.soundIconOff.classList.add('hidden');
      this.audio.playClick();
      this.showToast('Sound Enabled', 'Audio feedback and fan sounds turned ON.', 'success');
    } else {
      this.soundIconOn.classList.add('hidden');
      this.soundIconOff.classList.remove('hidden');
      this.showToast('Muted', 'Audio muted.', 'success');
    }
  }

  // ========================================================================
  // 14. BACKGROUND PARTICLE CANVAS (Cyber Dust Effect)
  // ========================================================================

  initBackgroundParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    const particles = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00e5ff';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }
}

// ==========================================================================
// 15. BOOTSTRAP APPLICATION ON DOM READY
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  window.pcGame = new GameController();
});
