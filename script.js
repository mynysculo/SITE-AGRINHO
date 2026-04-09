// ============================================================
// AGROFORTE - ULTRA PREMIUM JAVASCRIPT
// 10x Mais Bonito | Animações | Jogo da Memória Integrado
// ============================================================

// ==================== PRELOADER ULTRA ====================
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloaderUltra');
    const progressFill = document.getElementById('progressFillUltra');
    const progressPercent = document.getElementById('progressPercentUltra');
    const progressLabel = document.getElementById('progressLabel');
    
    if (preloader && progressFill && progressPercent) {
        const messages = ['Iniciando experiência...', 'Carregando inovações...', 'Preparando o futuro...', 'Quase pronto...'];
        let progress = 0, msgIndex = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 10 + 5;
            if (progress >= 100) { progress = 100; progressFill.style.width = '100%'; progressPercent.textContent = '100%'; if (progressLabel) progressLabel.textContent = 'Bem-vindo!'; clearInterval(interval);
                setTimeout(() => { preloader.classList.add('hidden'); setTimeout(() => { preloader.style.display = 'none'; AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 100 }); initThreeJS(); initSolutionsCanvas(); }, 800); }, 500);
            } else { progressFill.style.width = progress + '%'; progressPercent.textContent = Math.round(progress) + '%';
                if (Math.floor(progress / 25) > msgIndex && msgIndex < messages.length - 1) { msgIndex++; if (progressLabel) progressLabel.textContent = messages[msgIndex]; }
            }
        }, 80);
    } else { setTimeout(() => { if (preloader) { preloader.classList.add('hidden'); setTimeout(() => { preloader.style.display = 'none'; AOS.init({ duration: 800, once: true }); initThreeJS(); initSolutionsCanvas(); }, 800); } }, 500); }
});

window.addEventListener('load', () => { const preloader = document.getElementById('preloaderUltra'); if (preloader && !preloader.classList.contains('hidden')) { setTimeout(() => { preloader.classList.add('hidden'); setTimeout(() => { preloader.style.display = 'none'; AOS.init({ duration: 800, once: true }); initThreeJS(); initSolutionsCanvas(); }, 800); }, 500); } });

// ==================== CURSOR ULTRA ====================
const cursorMaster = document.getElementById('cursorMaster');
if (cursorMaster && window.matchMedia('(hover: hover)').matches) {
    const core = cursorMaster.querySelector('.cursor-core'); const aura = cursorMaster.querySelector('.cursor-aura'); const ring = cursorMaster.querySelector('.cursor-ring'); const energy = cursorMaster.querySelector('.cursor-energy'); const particlesContainer = document.getElementById('cursorParticlesContainer');
    let mx = 0, my = 0, ax = 0, ay = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; core.style.left = mx + 'px'; core.style.top = my + 'px'; if (Math.random() > 0.6 && particlesContainer) { const p = document.createElement('div'); p.className = 'cursor-particle'; p.style.left = mx + 'px'; p.style.top = my + 'px'; p.style.setProperty('--tx', (Math.random()-0.5)*50+'px'); p.style.setProperty('--ty', (Math.random()-0.5)*50+'px'); particlesContainer.appendChild(p); setTimeout(() => p.remove(), 800); } });
    function animate() { ax += (mx - ax) * 0.1; ay += (my - ay) * 0.1; rx += (mx - rx) * 0.06; ry += (my - ry) * 0.06; if (aura) { aura.style.left = ax + 'px'; aura.style.top = ay + 'px'; } if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; } if (energy) { energy.style.left = mx + 'px'; energy.style.top = my + 'px'; } requestAnimationFrame(animate); } animate();
    document.querySelectorAll('a, button, .btn, .nav-link-ultra, .about-card-ultra, .case-card-ultra, .timeline-btn-ultra, .game-card').forEach(el => { el.addEventListener('mouseenter', () => cursorMaster.classList.add('hover')); el.addEventListener('mouseleave', () => cursorMaster.classList.remove('hover')); });
    document.addEventListener('mousedown', () => { core.style.transform = 'translate(-50%, -50%) scale(0.7)'; for (let i=0; i<6; i++) setTimeout(() => { if (particlesContainer) { const p = document.createElement('div'); p.className = 'cursor-particle'; p.style.left = mx + (Math.random()-0.5)*30 + 'px'; p.style.top = my + (Math.random()-0.5)*30 + 'px'; particlesContainer.appendChild(p); setTimeout(() => p.remove(), 600); } }, i*15); });
    document.addEventListener('mouseup', () => { core.style.transform = 'translate(-50%, -50%) scale(1)'; });
}

// ==================== THREE.JS HERO BACKGROUND ====================
function initThreeJS() {
    const canvas = document.getElementById('heroCanvasUltra'); if (!canvas || typeof THREE === 'undefined') return;
    const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); const renderer = new THREE.WebGLRenderer({ canvas, alpha: true }); renderer.setSize(window.innerWidth, window.innerHeight); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const geom = new THREE.BufferGeometry(); const cnt = 3000; const pos = new Float32Array(cnt*3); const col = new Float32Array(cnt*3);
    for (let i=0; i<cnt*3; i+=3) { pos[i] = (Math.random()-0.5)*30; pos[i+1] = (Math.random()-0.5)*30; pos[i+2] = (Math.random()-0.5)*30; col[i] = 0.1+Math.random()*0.3; col[i+1] = 0.5+Math.random()*0.4; col[i+2] = 0.3+Math.random()*0.3; }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geom.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mat = new THREE.PointsMaterial({ size: 0.03, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending }); const mesh = new THREE.Points(geom, mat); scene.add(mesh); camera.position.z = 8;
    let mx=0, my=0; document.addEventListener('mousemove', (e) => { mx = (e.clientX/window.innerWidth)*2-1; my = -(e.clientY/window.innerHeight)*2+1; });
    function anim() { requestAnimationFrame(anim); mesh.rotation.x += 0.0003; mesh.rotation.y += 0.0005; mesh.rotation.x += my*0.0005; mesh.rotation.y += mx*0.0005; renderer.render(scene, camera); } anim();
    window.addEventListener('resize', () => { camera.aspect = window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });
}

// ==================== SOLUTIONS CANVAS ====================
function initSolutionsCanvas() { /* Similar ao Three.js para background */ }

// ==================== HEADER SCROLL ====================
const header = document.getElementById('headerUltra');
window.addEventListener('scroll', () => { if (header) { header.classList.toggle('scrolled', window.scrollY > 50); }
    const progressBar = document.getElementById('readingProgressUltra'); if (progressBar) { const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100; progressBar.style.width = scrolled + '%'; }
    const backToTop = document.getElementById('backToTopUltra'); if (backToTop) { backToTop.classList.toggle('visible', window.scrollY > 400); }
    updateActiveLink();
});

function updateActiveLink() {
    document.querySelectorAll('.nav-link-ultra').forEach(link => { link.classList.remove('active'); if (link.getAttribute('href') === '#' + (currentSection() || 'home')) link.classList.add('active'); });
}
function currentSection() { let cur = ''; document.querySelectorAll('section[id]').forEach(s => { const top = s.offsetTop - 120; if (window.scrollY >= top && window.scrollY < top + s.clientHeight) cur = s.id; }); return cur; }

// ==================== MOBILE MENU ====================
const mobileToggle = document.getElementById('mobileToggleUltra'); const navMenu = document.getElementById('navMenuUltra');
if (mobileToggle && navMenu) { mobileToggle.addEventListener('click', () => { mobileToggle.classList.toggle('active'); navMenu.classList.toggle('active'); }); document.querySelectorAll('.nav-link-ultra').forEach(l => l.addEventListener('click', () => { mobileToggle.classList.remove('active'); navMenu.classList.remove('active'); })); }

// ==================== ANNOUNCEMENT ====================
document.getElementById('closeAnnouncementBtn')?.addEventListener('click', () => { document.querySelector('.announcement-bar')?.classList.add('hidden'); });

// ==================== SEARCH OVERLAY ====================
const searchTrigger = document.getElementById('searchTriggerUltra'), searchOverlay = document.getElementById('searchOverlayUltra'), searchClose = document.getElementById('searchCloseUltra'), searchInput = document.getElementById('searchInputUltra');
if (searchTrigger && searchOverlay) { searchTrigger.addEventListener('click', () => { searchOverlay.classList.add('active'); setTimeout(() => searchInput?.focus(), 300); }); searchClose?.addEventListener('click', () => searchOverlay.classList.remove('active')); searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) searchOverlay.classList.remove('active'); }); document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && searchOverlay.classList.contains('active')) searchOverlay.classList.remove('active'); if (e.ctrlKey && e.key === 'k') { e.preventDefault(); searchOverlay.classList.add('active'); searchInput?.focus(); } }); }

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', function(e) { const href = this.getAttribute('href'); if (href === '#' || href === '#!') return; const target = document.querySelector(href); if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); } }); });

// ==================== TIMELINE TABS ====================
document.querySelectorAll('.timeline-btn-ultra').forEach((btn, i) => { btn.addEventListener('click', () => { document.querySelectorAll('.timeline-btn-ultra').forEach(b => b.classList.remove('active')); document.querySelectorAll('.timeline-panel-ultra').forEach(p => p.classList.remove('active')); btn.classList.add('active'); document.getElementById(`panel-${btn.dataset.tab}`)?.classList.add('active'); document.querySelector('.timeline-indicator-ultra')?.style.setProperty('transform', `translateX(${i*100}%)`); }); });

// ==================== COUNTER ANIMATION ====================
const counterObserver = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.stat-number-ultra[data-target]').forEach(c => { if (!c.classList.contains('counted')) { const target = parseFloat(c.dataset.target); let cur = 0; const timer = setInterval(() => { cur += target/60; if (cur >= target) { c.textContent = Math.round(target); clearInterval(timer); } else c.textContent = Math.floor(cur); }, 16); c.classList.add('counted'); } }); } }); }, { threshold: 0.3 });
document.querySelector('.hero-stats-ultra') && counterObserver.observe(document.querySelector('.hero-stats-ultra'));

// ==================== CHART.JS ====================
const chartCtx = document.getElementById('impactChartUltra');
if (chartCtx) { new Chart(chartCtx, { type: 'line', data: { labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'], datasets: [{ label: 'Eficiência Hídrica', data: [78,82,85,88,90,92,93,94,95,94,93,92], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', borderWidth: 3, fill: true, tension: 0.4 }, { label: 'Redução de Carbono', data: [65,70,75,82,87,90,92,94,95,96,95,95], borderColor: '#fbbf24', backgroundColor: 'rgba(251,191,36,0.1)', borderWidth: 3, fill: true, tension: 0.4 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: document.body.classList.contains('theme-light') ? '#4b5563' : '#d1d5db' } } }, scales: { y: { min: 60, max: 100, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { callback: v => v+'%' } } } } }); }

// ==================== SWIPER ====================
new Swiper('.cases-slider-ultra', { slidesPerView: 1, spaceBetween: 24, loop: true, autoplay: { delay: 4000 }, pagination: { el: '.swiper-pagination', clickable: true }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } } });

// ==================== THEME TOGGLE ====================
document.getElementById('themeToggleUltra')?.addEventListener('click', () => { document.body.classList.toggle('theme-light'); });

// ==================== CONTACT FORM ====================
document.getElementById('contactFormUltra')?.addEventListener('submit', (e) => { e.preventDefault(); const btn = e.target.querySelector('.form-submit-ultra'); const orig = btn.innerHTML; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'; btn.disabled = true; setTimeout(() => { btn.innerHTML = '<i class="fas fa-check"></i> Enviado!'; e.target.reset(); setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 2500); }, 1500); });

// ==================== BACK TO TOP ====================
document.getElementById('backToTopUltra')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ==================== JOGO DA MEMÓRIA COMPLETO ====================
const gameFab = document.getElementById('gameFab'); const gameModal = document.getElementById('gameModal'); const closeGameModal = document.getElementById('closeGameModal'); const gameBoard = document.getElementById('gameBoard'); const gameScore = document.getElementById('gameScore'); const gameTimer = document.getElementById('gameTimer'); const gameMoves = document.getElementById('gameMoves'); const restartBtn = document.getElementById('restartGame'); const newGameBtn = document.getElementById('newGameBtn'); const difficultySelect = document.getElementById('difficultySelect'); const gameMessage = document.getElementById('gameMessage');

let cards = [], flipped = [], matched = [], moves = 0, score = 0, timer = 0, timerInterval = null, gameActive = false;
const icons = ['🌱', '🌿', '🍃', '🌳', '🌾', '🌻', '🍎', '🌽', '🥕', '🍅', '🥦', '🥑', '🌶️', '🍇', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭', '🍎', '🍐', '🍑', '🍒', '🫐', '🥝', '🌽', '🥕', '🥔', '🧅', '🧄', '🥦'];

function initGame(size = 6) { clearInterval(timerInterval); const pairs = (size*size)/2; const gameIcons = icons.slice(0, pairs); cards = [...gameIcons, ...gameIcons].sort(() => Math.random()-0.5); flipped = []; matched = []; moves = 0; score = 0; timer = 0; gameActive = true; updateStats(); gameMessage.textContent = ''; renderBoard(size); timerInterval = setInterval(() => { if (gameActive) { timer++; updateStats(); } }, 1000); }

function renderBoard(size) { gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`; gameBoard.innerHTML = ''; cards.forEach((icon, i) => { const card = document.createElement('div'); card.className = `game-card ${matched.includes(i) ? 'matched' : ''} ${flipped.includes(i) ? 'flipped' : ''}`; card.style.width = size === 8 ? '60px' : size === 6 ? '80px' : '100px'; card.style.height = card.style.width; card.innerHTML = `<div class="game-card-front">${icon}</div><div class="game-card-back"><i class="fas fa-leaf"></i></div>`; card.addEventListener('click', () => flipCard(i)); gameBoard.appendChild(card); }); }

function flipCard(idx) { if (!gameActive || flipped.length >= 2 || flipped.includes(idx) || matched.includes(idx)) return; flipped.push(idx); document.querySelectorAll('.game-card')[idx].classList.add('flipped'); if (flipped.length === 2) { moves++; updateStats(); checkMatch(); } }

function checkMatch() { const [i1, i2] = flipped; if (cards[i1] === cards[i2]) { matched.push(i1, i2); score += 10; gameMessage.textContent = '🎉 Par encontrado! +10 pontos!'; flipped = []; updateStats(); if (matched.length === cards.length) { gameActive = false; clearInterval(timerInterval); gameMessage.textContent = `🏆 Parabéns! Você venceu em ${moves} jogadas e ${formatTime(timer)}!`; } } else { gameActive = false; gameMessage.textContent = '😢 Não foi dessa vez...'; setTimeout(() => { document.querySelectorAll('.game-card')[i1].classList.remove('flipped'); document.querySelectorAll('.game-card')[i2].classList.remove('flipped'); flipped = []; gameActive = true; }, 800); } renderBoard(Math.sqrt(cards.length)); }

function updateStats() { gameScore.textContent = score; gameMoves.textContent = moves; gameTimer.textContent = formatTime(timer); }
function formatTime(s) { const m = Math.floor(s/60), sec = s%60; return `${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`; }

gameFab?.addEventListener('click', () => { gameModal.classList.add('active'); initGame(parseInt(difficultySelect?.value || 6)); });
closeGameModal?.addEventListener('click', () => { gameModal.classList.remove('active'); clearInterval(timerInterval); });
document.querySelector('.game-modal-overlay')?.addEventListener('click', () => { gameModal.classList.remove('active'); clearInterval(timerInterval); });
restartBtn?.addEventListener('click', () => initGame(parseInt(difficultySelect?.value || 6)));
newGameBtn?.addEventListener('click', () => initGame(parseInt(difficultySelect?.value || 6)));
difficultySelect?.addEventListener('change', (e) => initGame(parseInt(e.target.value)));

// ==================== GSAP ANIMATIONS ====================
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') { gsap.registerPlugin(ScrollTrigger); gsap.from('.about-card-ultra', { scrollTrigger: '.about-cards-ultra', y: 60, opacity: 0, duration: 1, stagger: 0.2 }); }

console.log('%c🌱 AgroForte Ultra Premium Carregado!', 'color: #10b981; font-size: 18px; font-weight: bold;');
