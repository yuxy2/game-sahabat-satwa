// ===== APP STATE =====
let currentSection = 'beranda';
let currentAnimal = null;
let currentAudio = null;
let quizState = { current: 0, score: 0, answered: false, questions: [] };
let chatAnimal = null;

// ===== NAVIGATION =====
function navigateTo(section, skipPush) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + section)?.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === section);
  });
  currentSection = section;
  document.querySelector('.nav-links')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (section === 'kuis' && quizState.questions.length === 0) initQuiz();
  if (section === 'chat' && !chatAnimal) selectChatAnimal(ANIMALS[0].id);
}

function showAnimalDetail(id) {
  currentAnimal = ANIMALS.find(a => a.id === id);
  if (!currentAnimal) return;
  renderDetail();
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-detail').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== RENDER FUNCTIONS =====
function renderAnimalGrid() {
  const grid = document.getElementById('animal-grid');
  grid.innerHTML = ANIMALS.map(a => `
    <div class="animal-card" onclick="showAnimalDetail('${a.id}')" id="card-${a.id}">
      <div class="animal-card-img-wrap">
        <img class="animal-card-img" src="${a.image}" alt="${a.name}" loading="lazy">
        <span class="animal-card-status status-${a.statusClass}">${a.status}</span>
      </div>
      <div class="animal-card-body">
        <h3>${a.name}</h3>
        <p class="latin">${a.latin}</p>
        <p class="location">${a.location}</p>
      </div>
      <button class="card-audio-btn" onclick="event.stopPropagation();playAudio('${a.audio}',this)" title="Dengarkan narasi">🔊</button>
    </div>
  `).join('');
}

function renderDetail() {
  const a = currentAnimal;
  const d = document.getElementById('detail-content');
  d.innerHTML = `
    <button class="detail-back" onclick="navigateTo('jelajah')">← Kembali ke Daftar Satwa</button>
    <div class="detail-layout">
      <div class="detail-image-wrap">
        <img src="${a.image}" alt="${a.name}">
        <button class="detail-audio-btn" onclick="playAudio('${a.audio}',this)">🔊 Dengarkan Narasi</button>
      </div>
      <div class="detail-info">
        <h1>${a.name}</h1>
        <p class="latin">${a.latin}</p>
        <div class="detail-meta">
          <span class="meta-tag meta-habitat">🌿 ${a.location}</span>
          <span class="meta-tag meta-status-${a.statusClass}">⚠️ ${a.status}</span>
          <span class="meta-tag meta-populasi">📊 ${a.populasi}</span>
        </div>
        <div class="detail-tabs">
          <button class="detail-tab active" onclick="switchTab('deskripsi',this)">📖 Deskripsi</button>
          <button class="detail-tab" onclick="switchTab('fakta',this)">🌟 Fakta Unik</button>
          <button class="detail-tab" onclick="switchTab('konservasi',this)">💚 Konservasi</button>
        </div>
        <div class="detail-tab-content active" id="tab-deskripsi">
          <p>${a.deskripsi}</p>
          <p><strong>Habitat:</strong> ${a.habitat}</p>
        </div>
        <div class="detail-tab-content" id="tab-fakta">
          <ul class="fact-list">${a.fakta.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>
        <div class="detail-tab-content" id="tab-konservasi">
          <p style="margin-bottom:16px;font-weight:700;color:var(--primary-dark)">Apa yang bisa kamu lakukan untuk membantu ${a.name}?</p>
          <ul class="conservation-tips">${a.konservasi.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
  `;
}

function switchTab(tab, btn) {
  document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.detail-tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

// ===== AUDIO =====
function playAudio(file, btn) {
  if (currentAudio) { currentAudio.pause(); currentAudio = null; document.querySelectorAll('.playing').forEach(b => b.classList.remove('playing')); }
  const audio = new Audio(file);
  currentAudio = audio;
  btn?.classList.add('playing');
  audio.play().catch(() => {});
  audio.onended = () => { btn?.classList.remove('playing'); currentAudio = null; };
}

// ===== SOUND EFFECTS (Web Audio API Synthesizer) =====
function playSfx(type) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (type === 'correct') {
      const playTone = (freq, time, duration) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);
        gainNode.gain.setValueAtTime(0, time);
        gainNode.gain.linearRampToValueAtTime(0.12, time + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);
        osc.start(time);
        osc.stop(time + duration);
      };
      const now = audioCtx.currentTime;
      playTone(523.25, now, 0.15); // C5
      playTone(659.25, now + 0.08, 0.25); // E5
      playTone(783.99, now + 0.16, 0.4); // G5
    } else if (type === 'wrong') {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.type = 'triangle';
      const now = audioCtx.currentTime;
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(80, now + 0.35);
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.15, now + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    }
  } catch (e) {
    console.error('AudioContext not supported:', e);
  }
}

// ===== QUIZ =====
function initQuiz() {
  const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
  quizState = { current: 0, score: 0, answered: false, questions: shuffled.slice(0, 10) };
  renderQuiz();
}

function renderQuiz() {
  const q = quizState;
  const container = document.getElementById('quiz-content');
  if (q.current >= q.questions.length) { renderQuizResult(container); return; }
  const item = q.questions[q.current];
  const animal = ANIMALS.find(a => a.id === item.image);
  container.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(q.current/q.questions.length)*100}%"></div></div>
      <span class="quiz-progress-text">${q.current+1}/${q.questions.length}</span>
    </div>
    <div class="quiz-card">
      <h3>Pertanyaan ${q.current+1}</h3>
      ${animal ? `<img class="quiz-image" src="${animal.image}" alt="${animal.name}">` : ''}
      <p class="quiz-question">${item.question}</p>
      <div class="quiz-options">
        ${item.options.map((o,i) => `<button class="quiz-option" onclick="answerQuiz(${i})" id="qopt-${i}">${o}</button>`).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
    </div>
  `;
  quizState.answered = false;
}

function answerQuiz(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const item = quizState.questions[quizState.current];
  const correct = idx === item.answer;
  if (correct) {
    quizState.score++;
    playSfx('correct');
  } else {
    playSfx('wrong');
  }
  document.querySelectorAll('.quiz-option').forEach((b,i) => {
    b.disabled = true;
    if (i === item.answer) b.classList.add('correct');
    if (i === idx && !correct) b.classList.add('wrong');
  });
  const fb = document.getElementById('quiz-feedback');
  fb.className = `quiz-feedback show ${correct ? 'correct' : 'wrong'}`;
  fb.innerHTML = correct
    ? `✅ Benar! ${item.explanation}`
    : `❌ Salah! Jawaban yang benar: <strong>${item.options[item.answer]}</strong>. ${item.explanation}`;
  setTimeout(() => { quizState.current++; renderQuiz(); }, 2500);
}

function renderQuizResult(container) {
  const s = quizState.score, t = quizState.questions.length;
  const pct = Math.round((s/t)*100);
  let grade, msg, cls, stars;
  if (pct >= 90) { grade='Luar Biasa!'; msg='Kamu benar-benar Sahabat Satwa sejati! 🏆'; cls='score-excellent'; stars='⭐⭐⭐⭐⭐'; }
  else if (pct >= 70) { grade='Hebat!'; msg='Pengetahuanmu tentang satwa sangat bagus! 🎉'; cls='score-good'; stars='⭐⭐⭐⭐'; }
  else if (pct >= 50) { grade='Cukup Baik!'; msg='Terus belajar tentang satwa Indonesia ya! 💪'; cls='score-ok'; stars='⭐⭐⭐'; }
  else { grade='Ayo Belajar Lagi!'; msg='Jelajahi halaman satwa untuk menambah pengetahuanmu! 📚'; cls='score-poor'; stars='⭐⭐'; }
  container.innerHTML = `
    <div class="quiz-result">
      <div class="score-circle ${cls}">${s}/${t}</div>
      <div class="stars">${stars}</div>
      <h2>${grade}</h2>
      <p>${msg}</p>
      <p style="color:var(--text-light);margin-bottom:32px">Skor: ${pct}%</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="initQuiz()">🔄 Main Lagi</button>
        <button class="btn btn-outline" onclick="navigateTo('jelajah')">📖 Jelajahi Satwa</button>
      </div>
    </div>
  `;
}

// ===== CHAT (Simulated AI) =====
const CHAT_RESPONSES = {
  default: [
    "Hai! Aku {name}. Tanyakan apa saja tentang aku ya! 😊",
    "Senang bertemu kamu! Mau tahu apa tentang kehidupanku?",
    "Halo teman! Aku akan menjawab pertanyaanmu sebaik mungkin! 🌿"
  ],
  habitat: [
    "Aku tinggal di {habitat} Tempat tinggalku sangat indah! 🌳",
    "Rumahku ada di {location}. Di sana aku merasa aman dan nyaman! 🏡"
  ],
  makanan: [
    "Sebagai {name}, aku punya makanan favoritku sendiri! Di habitat alami, aku mencari makan setiap hari untuk bertahan hidup. 🍃",
    "Makan adalah salah satu aktivitas utamaku. Di alam liar, aku harus pandai mencari makanan sendiri! 🌿"
  ],
  ancaman: [
    "Sayangnya, keberadaanku terancam 😢 Saat ini statusku {status} dan populasiku sekitar {populasi}. Tolong bantu jaga aku ya!",
    "Aku butuh bantuanmu! Status konservasiku {status}. Perburuan dan kerusakan habitat adalah ancaman terbesarku. 💔"
  ],
  fakta: [
    "Mau tahu fakta seru? {fakta} Keren kan? 🌟",
    "Ini fakta unik tentangku: {fakta} 😮"
  ],
  konservasi: [
    "Kamu bisa membantuku! {konservasi} Terima kasih sudah peduli! 💚",
    "Caramu membantu: {konservasi} Setiap tindakan kecil berarti besar untukku! 🙏"
  ],
  salam: [
    "Hai juga! Senang sekali kamu mau ngobrol denganku! Aku {name} dari {location}! 😄",
    "Halo teman baru! Aku {name}. Yuk kenalan lebih dekat! 🤗"
  ]
};

function detectIntent(msg) {
  const m = msg.toLowerCase();
  if (/halo|hai|hi|hey|salam|assalam|selamat/.test(m)) return 'salam';
  if (/habitat|rumah|tinggal|hidup di|tempat/.test(m)) return 'habitat';
  if (/makan|makanan|diet|mangsa/.test(m)) return 'makanan';
  if (/ancam|bahaya|punah|terancam|musuh|predator/.test(m)) return 'ancaman';
  if (/fakta|unik|menarik|keren|spesial/.test(m)) return 'fakta';
  if (/konservasi|lindung|bantu|selamat|jaga|tolong/.test(m)) return 'konservasi';
  return 'default';
}

function getChatResponse(intent, animal) {
  const pool = CHAT_RESPONSES[intent] || CHAT_RESPONSES.default;
  let resp = pool[Math.floor(Math.random() * pool.length)];
  resp = resp.replace(/{name}/g, animal.name)
    .replace(/{habitat}/g, animal.habitat)
    .replace(/{location}/g, animal.location)
    .replace(/{status}/g, animal.status)
    .replace(/{populasi}/g, animal.populasi)
    .replace(/{fakta}/g, animal.fakta[Math.floor(Math.random() * animal.fakta.length)])
    .replace(/{konservasi}/g, animal.konservasi[Math.floor(Math.random() * animal.konservasi.length)]);
  return resp;
}

function selectChatAnimal(id) {
  chatAnimal = ANIMALS.find(a => a.id === id);
  document.querySelectorAll('.chat-animal-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.id === id);
  });
  const header = document.getElementById('chat-header');
  header.innerHTML = `
    <img class="chat-avatar" src="${chatAnimal.image}" alt="${chatAnimal.name}">
    <div class="chat-header-info"><h4>${chatAnimal.name}</h4><p>Siap menjawab pertanyaanmu!</p></div>
  `;
  const msgs = document.getElementById('chat-messages');
  msgs.innerHTML = '';
  addChatMsg('bot', `Hai! 👋 Aku ${chatAnimal.name} dari ${chatAnimal.location}. Tanyakan apa saja tentang aku! Misalnya: habitat, fakta unik, atau bagaimana cara membantuku. 😊`);
}

function addChatMsg(type, text) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `chat-msg ${type}`;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function sendChat() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg || !chatAnimal) return;
  input.value = '';
  addChatMsg('user', msg);
  // Typing indicator
  const msgs = document.getElementById('chat-messages');
  const typing = document.createElement('div');
  typing.className = 'chat-msg bot typing';
  typing.innerHTML = '<div class="dots"><span></span><span></span><span></span></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;
  setTimeout(() => {
    typing.remove();
    const intent = detectIntent(msg);
    const response = getChatResponse(intent, chatAnimal);
    addChatMsg('bot', response);
  }, 800 + Math.random() * 700);
}

function renderChatSelectors() {
  const container = document.getElementById('chat-selectors');
  container.innerHTML = ANIMALS.map(a =>
    `<button class="chat-animal-btn" data-id="${a.id}" onclick="selectChatAnimal('${a.id}')">${a.name}</button>`
  ).join('');
}

// ===== STATS =====
function renderStats() {
  const kritis = ANIMALS.filter(a => a.statusClass === 'kritis').length;
  const rentan = ANIMALS.filter(a => a.statusClass === 'rentan').length;
  document.getElementById('stat-total').textContent = ANIMALS.length;
  document.getElementById('stat-kritis').textContent = kritis;
  document.getElementById('stat-rentan').textContent = rentan;
  document.getElementById('stat-pulau').textContent = new Set(ANIMALS.map(a => a.location.split(',')[0].split('(')[0].trim())).size;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderAnimalGrid();
  renderChatSelectors();
  renderStats();

  // Nav links
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); navigateTo(a.dataset.section); });
  });

  // Hamburger
  document.getElementById('nav-hamburger')?.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
  });

  // Navbar scroll
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 10);
  });

  // Chat input enter
  document.getElementById('chat-input')?.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendChat();
  });

  navigateTo('beranda');
});
