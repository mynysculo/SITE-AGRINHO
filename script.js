(function(){
    "use strict";

    // Preloader
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.progress-bar');
    let width = 0;
    const interval = setInterval(() => {
        width += 5;
        if (progressBar) progressBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => preloader.style.display = 'none', 800);
            }, 200);
        }
    }, 30);

    // Cursor customizado
    const dot = document.querySelector('[data-cursor-dot]');
    const outline = document.querySelector('[data-cursor-outline]');
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX, posY = e.clientY;
        if (dot) { dot.style.left = `${posX}px`; dot.style.top = `${posY}px`; }
        if (outline) { 
            outline.style.left = `${posX}px`; 
            outline.style.top = `${posY}px`;
            outline.animate({ left: `${posX}px`, top: `${posY}px` }, {duration: 500, fill: "forwards"});
        }
    });

    // Partículas canvas
    const canvas = document.getElementById('background-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        function resize() { width = window.innerWidth; height = window.innerHeight; canvas.width = width; canvas.height = height; }
        window.addEventListener('resize', resize); resize();
        function drawParticles() {
            ctx.clearRect(0,0,width,height);
            ctx.fillStyle = '#8bc34a20';
            for(let i=0;i<50;i++) {
                ctx.beginPath();
                ctx.arc(Math.random()*width, Math.random()*height, 2, 0, Math.PI*2);
                ctx.fill();
            }
            requestAnimationFrame(drawParticles);
        }
        drawParticles();
    }

    // Jogo da Memória (3x3)
    const boardEl = document.getElementById('memory-board');
    const pairsSpan = document.getElementById('pairs-matched');
    const attemptsSpan = document.getElementById('attempt-count');
    const bestSpan = document.getElementById('best-score');
    let icons = ['🌱','🌽','💧','☀️'];
    let deck = [...icons, ...icons, '🌾']; // 9 cartas
    let cards = [], flipped = [], matchedPairs = 0, attempts = 0, lock = false, best = localStorage.getItem('agroBest') || '-';
    if(bestSpan) bestSpan.textContent = best;

    function shuffle(arr) { for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }
    function initGame() {
        deck = shuffle(deck);
        cards = deck.map((val, i) => ({ id: i, value: val, matched: false, flipped: false }));
        matchedPairs = 0; attempts = 0; flipped = []; lock = false;
        updateStats(); render();
    }
    function render() {
        boardEl.innerHTML = '';
        cards.forEach((c, i) => {
            const card = document.createElement('div'); card.className = 'memory-card';
            card.dataset.id = i; card.textContent = c.flipped || c.matched ? c.value : '🌿';
            if(c.matched) card.classList.add('matched');
            else if(c.flipped) card.classList.add('flipped');
            card.addEventListener('click', () => handleClick(i));
            boardEl.appendChild(card);
        });
    }
    function handleClick(idx) {
        if(lock) return; const card = cards[idx]; if(card.matched || card.flipped || flipped.length===2) return;
        card.flipped = true; flipped.push(idx); render();
        if(flipped.length === 2) {
            attempts++; updateStats(); lock = true;
            const [a,b] = flipped; const ca=cards[a], cb=cards[b];
            if(ca.value === cb.value && ca.value !== '🌾') {
                ca.matched = cb.matched = true; matchedPairs++; flipped = []; lock = false; render(); updateStats();
                if(matchedPairs === 4) {
                    if(attempts < best || best==='-') { localStorage.setItem('agroBest', attempts); bestSpan.textContent = attempts; }
                }
            } else {
                setTimeout(() => { ca.flipped = cb.flipped = false; flipped = []; lock = false; render(); }, 800);
            }
        }
    }
    function updateStats() { pairsSpan.textContent = `${matchedPairs}/4`; attemptsSpan.textContent = attempts; }
    document.getElementById('reset-game').addEventListener('click', initGame);
    initGame();

    // Tabs e outras animações ...
})();
