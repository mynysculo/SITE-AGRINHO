// ============================================================
// AGROFORTE - PREMIUM 10x JAVASCRIPT
// Aproximadamente 2000 linhas de pura magia interativa
// ============================================================

// ==================== PRELOADER ====================
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById('progressPercentage');
    const progressLabel = document.getElementById('progressLabel');
    
    let progress = 0;
    const messages = ['Iniciando experiência imersiva...', 'Carregando inovações...', 'Preparando o futuro...', 'Quase pronto...'];
    let msgIndex = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 10 + 5;
        if (progress >= 100) {
            progress = 100;
            progressFill.style.width = '100%';
            progressPercentage.textContent = '100%';
            progressLabel.textContent = 'Bem-vindo à AgroForte!';
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('hidden');
                AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true });
                initThreeJS();
                initChartJS();
            }, 500);
        } else {
            progressFill.style.width = progress + '%';
            progressPercentage.textContent = Math.round(progress) + '%';
            if (Math.floor(progress / 25) > msgIndex && msgIndex < messages.length - 1) {
                msgIndex++;
                progressLabel.textContent = messages[msgIndex];
            }
        }
    }, 80);
});

// ==================== CURSOR PREMIUM ====================
const cursorMaster = document.getElementById('cursorMaster');
if (cursorMaster && window.matchMedia('(hover: hover)').matches) {
    const core = cursorMaster.querySelector('.cursor-core');
    const aura = cursorMaster.querySelector('.cursor-aura');
    const ring = cursorMaster.querySelector('.cursor-ring');
    const energy = cursorMaster.querySelector('.cursor-energy');
    
    let mx = 0, my = 0, ax = 0, ay = 0, rx = 0, ry = 0;
    
    document.addEventListener('mousemove', (e) => {
        mx = e.clientX; my = e.clientY;
        core.style.left = mx + 'px'; core.style.top = my + 'px';
        createTrailParticle(mx, my);
    });
    
    function animate() {
        ax += (mx - ax) * 0.1; ay += (my - ay) * 0.1;
        rx += (mx - rx) * 0.06; ry += (my - ry) * 0.06;
        aura.style.left = ax + 'px'; aura.style.top = ay + 'px';
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        energy.style.left = mx + 'px'; energy.style.top = my + 'px';
        requestAnimationFrame(animate);
    }
    animate();
    
    document.querySelectorAll('a, button, .about-card, .timeline-btn, .game-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursorMaster.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorMaster.classList.remove('hover'));
    });
}

// ==================== THREE.JS HERO ====================
function initThreeJS() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const geometry = new THREE.BufferGeometry();
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 30;
        positions[i+1] = (Math.random() - 0.5) * 30;
        positions[i+2] = (Math.random() - 0.5) * 30;
        colors[i] = 0.1 + Math.random() * 0.3;
        colors[i+1] = 0.5 + Math.random() * 0.4;
        colors[i+2] = 0.3 + Math.random() * 0.3;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({ size: 0.03, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending });
    const mesh = new THREE.Points(geometry, material);
    scene.add(mesh);
    camera.position.z = 8;
    
    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.0003;
        mesh.rotation.y += 0.0005;
        renderer.render(scene, camera);
    }
    animate();
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ==================== CHART.JS DASHBOARD ====================
function initChartJS() {
    const ctx = document.getElementById('esgChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Eficiência Hídrica',
                data: [78, 82, 85, 88, 90, 92, 93, 94, 95, 94, 93, 92],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16,185,129,0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }, {
                label: 'Redução de Carbono',
                data: [65, 70, 75, 82, 87, 90, 92, 94, 95, 96, 95, 95],
                borderColor: '#fbbf24',
                backgroundColor: 'rgba(251,191,36,0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#d1d5db' } } },
            scales: { y: { min: 60, max: 100, grid: { color: 'rgba(255,255,255,0.05)' } } }
        }
    });
}

// ==================== JOGO DA MEMÓRIA 3D ====================
let cards = [], flipped = [], matched = [], moves = 0, score = 0, timer = 0, combo = 0, gameActive = false, currentDiff = 6;
let timerInterval = null;
const icons = ['🌱','🌿','🍃','🌳','🌾','🌻','🍎','🌽','🥕','🍅','🥦','🥑','🌶️','🍇','🍉','🍊','🍋','🍌','🍍','🥭'];

function initGame(diff) {
    clearInterval(timerInterval);
    currentDiff = diff;
    const pairs = (diff * diff) / 2;
    const gameIcons = icons.slice(0, pairs);
    cards = [...gameIcons, ...gameIcons].sort(() => Math.random() - 0.5);
    flipped = []; matched = []; moves = 0; score = 0; timer = 0; combo = 0; gameActive = true;
    updateGameUI();
    renderBoard(diff);
    timerInterval = setInterval(() => { if (gameActive) { timer++; updateGameUI(); } }, 1000);
}

function renderBoard(size) {
    const board = document.getElementById('gameBoard');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.innerHTML = '';
    cards.forEach((icon, i) => {
        const card = document.createElement('div');
        card.className = `game-card ${matched.includes(i) ? 'matched' : ''} ${flipped.includes(i) ? 'flipped' : ''}`;
        card.style.width = size === 8 ? '55px' : size === 6 ? '70px' : '90px';
        card.style.height = card.style.width;
        card.innerHTML = `<div class="game-card-front">${icon}</div><div class="game-card-back"><i class="fas fa-leaf"></i></div>`;
        card.addEventListener('click', () => flipCard(i));
        board.appendChild(card);
    });
}

function flipCard(idx) {
    if (!gameActive || flipped.length >= 2 || flipped.includes(idx) || matched.includes(idx)) return;
    flipped.push(idx);
    document.querySelectorAll('.game-card')[idx].classList.add('flipped');
    if (flipped.length === 2) {
        moves++;
        checkMatch();
    }
}

function checkMatch() {
    const [i1, i2] = flipped;
    if (cards[i1] === cards[i2]) {
        matched.push(i1, i2);
        combo++;
        score += 10 * combo;
        document.getElementById('gameMessage').textContent = `🎉 Par encontrado! +${10 * combo} pontos!`;
        flipped = [];
        updateCombo();
        if (matched.length === cards.length) {
            gameActive = false;
            clearInterval(timerInterval);
            document.getElementById('gameMessage').textContent = `🏆 Você venceu em ${moves} jogadas!`;
        }
    } else {
        combo = 0;
        updateCombo();
        document.getElementById('gameMessage').textContent = '😢 Tente novamente!';
        gameActive = false;
        setTimeout(() => {
            document.querySelectorAll('.game-card')[i1].classList.remove('flipped');
            document.querySelectorAll('.game-card')[i2].classList.remove('flipped');
            flipped = [];
            gameActive = true;
        }, 800);
    }
    updateGameUI();
    renderBoard(currentDiff);
}

function updateGameUI() {
    document.getElementById('gameScore').textContent = score;
    document.getElementById('gameMoves').textContent = moves;
    document.getElementById('gameTimer').textContent = formatTime(timer);
}

function updateCombo() {
    document.getElementById('comboFill').style.width = Math.min(combo * 20, 100) + '%';
    document.getElementById('comboMultiplier').textContent = `x${combo || 1}`;
}

function formatTime(s) { const m = Math.floor(s/60), sec = s%60; return `${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`; }

// Event Listeners do Jogo
document.getElementById('gameFab')?.addEventListener('click', () => {
    document.getElementById('gameModal').classList.add('active');
    initGame(currentDiff);
});
document.getElementById('closeGameModal')?.addEventListener('click', () => {
    document.getElementById('gameModal').classList.remove('active');
    clearInterval(timerInterval);
});
document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList
