(function() {
    'use strict';

    // --- TELA DE CARREGAMENTO (FIX) ---
    const loader = document.getElementById('loading-screen');
    window.addEventListener('load', () => {
        if (loader) {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            setTimeout(() => loader.style.display = 'none', 600);
        }
    });
    // fallback: se já carregou rápido
    setTimeout(() => { if(loader) { loader.style.opacity = '0'; loader.style.visibility = 'hidden'; } }, 200);

    // --- SCROLL SUAVE & ATUALIZA LINK ATIVO ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollY >= sectionTop) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active-link');
        });
    });

    // --- JOGO DA MEMÓRIA (3x3) TEMA AGROFORTE ---
    const board = document.getElementById('memory-board');
    const pairsSpan = document.getElementById('pairs-matched');
    const attemptsSpan = document.getElementById('attempt-count');
    const resetBtn = document.getElementById('reset-game');

    const ICONS = ['🌱', '🌽', '💧', '☀️']; // 4 pares
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let attempts = 0;
    let lockBoard = false;

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function initGame() {
        // Criar array com pares: 4 ícones *2 = 8 cartas + 1 curinga? Precisamos 9 cartas. Vamos usar 4 pares + 1 carta coringa (neutra)
        let deck = [];
        ICONS.forEach(icon => { deck.push(icon, icon); }); // 8 cartas
        deck.push('🌾'); // carta coringa (não forma par, apenas decora)
        deck = shuffleArray(deck);
        
        cards = deck.map((value, index) => ({
            id: index,
            value: value,
            matched: false,
            flipped: false,
            element: null
        }));

        matchedPairs = 0;
        attempts = 0;
        flippedCards = [];
        lockBoard = false;
        updateStats();
        renderBoard();
    }

    function renderBoard() {
        if (!board) return;
        board.innerHTML = '';
        cards.forEach((card, idx) => {
            const cardEl = document.createElement('div');
            cardEl.className = 'memory-card';
            cardEl.dataset.id = idx;
            cardEl.dataset.value = card.value;
            cardEl.textContent = ''; // verso
            cardEl.addEventListener('click', () => onCardClick(idx));
            card.element = cardEl;
            board.appendChild(cardEl);
            
            // Aplicar estado persistente
            if (card.matched) {
                cardEl.classList.add('matched');
                cardEl.textContent = card.value;
            } else if (card.flipped) {
                cardEl.classList.add('flipped');
                cardEl.textContent = card.value;
            } else {
                cardEl.textContent = '🌿'; // verso estilizado
            }
            cards[idx].element = cardEl;
        });
    }

    function onCardClick(index) {
        const card = cards[index];
        if (!card || lockBoard) return;
        if (card.matched) return;
        if (flippedCards.length === 2) return;
        if (flippedCards.includes(index)) return;
        
        // Flip card
        card.flipped = true;
        card.element.classList.add('flipped');
        card.element.textContent = card.value;
        flippedCards.push(index);
        
        if (flippedCards.length === 2) {
            attempts++;
            updateStats();
            checkMatch();
        }
    }

    function checkMatch() {
        const [idxA, idxB] = flippedCards;
        const cardA = cards[idxA];
        const cardB = cards[idxB];
        const isMatch = (cardA.value === cardB.value) && (cardA.value !== '🌾'); // coringa não combina
        
        lockBoard = true;
        
        if (isMatch) {
            cardA.matched = true;
            cardB.matched = true;
            cardA.element.classList.add('matched');
            cardB.element.classList.add('matched');
            matchedPairs++;
            updateStats();
            
            flippedCards = [];
            lockBoard = false;
            
            if (matchedPairs === 4) {
                setTimeout(() => alert('🌱 Parabéns! Você encontrou todos os pares sustentáveis! 🌍'), 100);
            }
        } else {
            setTimeout(() => {
                cardA.flipped = false;
                cardB.flipped = false;
                cardA.element.classList.remove('flipped');
                cardB.element.classList.remove('flipped');
                cardA.element.textContent = '🌿';
                cardB.element.textContent = '🌿';
                
                flippedCards = [];
                lockBoard = false;
            }, 800);
        }
        // Se uma das cartas for a coringa, não trava match
        if (!isMatch) {
            // já tratado
        }
    }

    function updateStats() {
        if (pairsSpan) pairsSpan.textContent = `${matchedPairs}/4`;
        if (attemptsSpan) attemptsSpan.textContent = attempts;
    }

    // Reset externo
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            initGame();
        });
    }

    // Iniciar jogo ao carregar
    initGame();

    // Pequena correção: se alguma carta coringa virar sozinha? já tratado.
    // Borda extra: evitar clique enquanto animação.
})();
