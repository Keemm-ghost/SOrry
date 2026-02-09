// NAME = Tsuki (change this later if you want)
const NAME = "Tsuki";

const subText = document.getElementById("subText");
const mainMsg = document.getElementById("mainMsg");
const extraMsg = document.getElementById("extraMsg");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const meter = document.getElementById("meter");
const fill = document.getElementById("fill");
const meterText = document.getElementById("meterText");

const finalBox = document.getElementById("finalBox");
const finalText = document.getElementById("finalText");
const celebrateBtn = document.getElementById("celebrateBtn");

// Replace visible Tsuki safely in text areas
function insertNameEverywhere() {
  // Main paragraph
  mainMsg.innerHTML = `
    You mean a lot to me, <b>${NAME}</b>. I’m not here to give excuses—only to say I care,
    I regret it, and I want to do better.
  `;
}
insertNameEverywhere();

let noClicks = 0;

const apologyLines = [
  "Okay… I understand. But I’m still truly sorry 🥺",
  `I don’t want to lose you, ${NAME}. Please… 💛`,
  "I’ll fix this with actions, not just words 🌷",
  "I hate knowing I hurt you. I’m learning and I’ll do better 🙏",
  "If I could rewind time, I would. But I can only improve from here 💗",
  "I’ll be more careful with your heart… it matters to me 🫶",
  "Just one chance… I’ll prove it, I promise 😭"
];

function updateMeter() {
  meter.setAttribute("aria-hidden", "false");
  const pct = Math.min(100, Math.round((noClicks / apologyLines.length) * 100));
  fill.style.width = pct + "%";
  meterText.textContent = `Forgiveness meter: ${pct}%`;
}

function growYesButton() {
  const scale = 1 + Math.min(0.35, noClicks * 0.05);
  yesBtn.style.transform = `scale(${scale})`;
}

noBtn.addEventListener("click", () => {
  noClicks++;

  const i = Math.min(noClicks - 1, apologyLines.length - 1);
  subText.textContent = apologyLines[i];
  extraMsg.textContent = `Please forgive me, ${NAME}… 🥹`;

  updateMeter();
  growYesButton();

  if (noClicks >= 3) noBtn.textContent = "Still no? 😭";
  if (noClicks >= 6) noBtn.textContent = "Okay okay… 😔";
});

yesBtn.addEventListener("click", () => {
  subText.textContent = "You just made my whole day 🥹";
  extraMsg.textContent = "Thank you for giving me a chance 💛";

  finalText.textContent = `Thank you, ${NAME}. I promise I’ll make it up to you — properly.`;

  finalBox.classList.remove("hidden");

  yesBtn.disabled = true;
  noBtn.disabled = true;

  fill.style.width = "100%";
  meterText.textContent = "Forgiveness meter: 100%";

  popConfetti();
});

celebrateBtn.addEventListener("click", popConfetti);

// ---- Confetti (simple canvas) ----
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let pieces = [];

function popConfetti() {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width;
  const h = canvas.height;

  pieces = Array.from({ length: 180 }, () => ({
    x: Math.random() * w,
    y: -Math.random() * h * 0.2,
    s: (Math.random() * 6 + 3) * dpr,
    vx: (Math.random() - 0.5) * 5 * dpr,
    vy: (Math.random() * 6 + 6) * dpr,
    r: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.2,
    hue: Math.random() * 360
  }));

  const start = performance.now();
  const duration = 2400;

  function frame(now) {
    const t = now - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of pieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = `hsla(${p.hue}, 85%, 75%, 0.9)`;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s);
      ctx.restore();
    }

    pieces = pieces.filter(p => p.y < h + 60);

    if (t < duration && pieces.length) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
