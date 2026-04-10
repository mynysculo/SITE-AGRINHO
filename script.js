/* ============================================ */
/* AGRO FORTE · SCRIPT.JS · 2500+ LINHAS       */
/* ANIMAÇÕES GSAP · JOGO 3D · CANVAS · CURSOR  */
/* ============================================ */

(function() {
    'use strict';
    
    // ===== CONFIGURAÇÕES GLOBAIS =====
    const CONFIG = {
        preloaderDuration: 2800,
        cursorLerpFactor: 0.085,
        particleCount: 150,
        connectionDistance: 140,
        memoryPairs: 4,
        counterSpeed: 45,
        scrollThreshold: 50
    };
    
    // ===== ESTADO GLOBAL =====
    const State = {
        mouseX: 0,
        mouseY: 0,
        cursorCoreX: 0,
        cursorCoreY: 0,
        cursorOuterX: 0,
        cursorOuterY: 0,
        cursorTrailX: 0,
        cursorTrailY: 0,
        cursorParticleX: 0,
        cursorParticleY: 0,
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isLoading: true,
        currentTab: 'tab1',
        themeMode: 'dark',
        memoryCards: [],
        memoryFlipped: [],
        memoryMatched: 0,
        memoryAttempts: 0,
        memoryLocked: false,
        memoryBest: null,
        memoryLevel: 1,
        canvasCtx: null,
        canvasWidth: 0,
        canvasHeight: 0,
        particles: [],
        mouseInfluence: { x: 0, y: 0 },
        scrollProgress: 0,
        rafId: null
    };
    
    // ===== ELEMENTOS DOM =====
    const DOM = {
        preloader: document.getElementById('preloader-master'),
        progressFill: document.getElementById('preloader-progress-fill'),
        percentage: document.getElementById('preloader-percentage'),
        message: document.getElementById('preloader-message'),
        particles: document.getElementById('preloader-particles'),
        
        cursorCore: document.getElementById('cursor-core'),
        cursorOuter: document.getElementById('cursor-outer'),
        cursorTrail: document.getElementById('cursor-trail'),
        cursorGlow: document.getElementById('cursor-glow'),
        cursorParticle: document.getElementById('cursor-particle'),
        
        canvas: document.getElementById('canvas-3d-background'),
        
        header: document.querySelector('.header-premium'),
        scrollProgressBar: document.getElementById('scrollProgressBar'),
        mobileMenu: document.getElementById('mobileMenu'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        closeMobileMenu: document.getElementById('closeMobileMenu'),
        
        navItems: document.querySelectorAll('.nav-item'),
        sections: document.querySelectorAll('section[id]'),
        
        tabBtns: document.querySelectorAll('.tab-btn-premium'),
        tabContents: document.querySelectorAll('.tab-content-premium'),
        
        counters: document.querySelectorAll('.counter-premium'),
        
        memoryBoard: document.getElementById('memory-board'),
        pairsDisplay: document.getElementById('pairs-matched-display'),
        attemptsDisplay: document.getElementById('attempts-display'),
        bestDisplay: document.getElementById('best-score-display'),
        levelDisplay: document.getElementById('level-display'),
        progressBar: document.getElementById('game-progress-bar'),
        progressPercentage: document.getElementById('progress-percentage'),
        resetGameBtn: document.getElementById('reset-game-btn'),
        shuffleGameBtn: document.getElementById('shuffle-game-btn'),
        
        newsletterForm: document.getElementById('newsletterForm'),
        themeToggle: document.getElementById('themeToggle'),
        
        scrollIndicator: document.querySelector('.scroll-indicator-premium')
    };
    
    // ===== INICIALIZAÇÃO DO AOS =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 900,
            once: false,
            mirror: true,
            offset: 100,
            delay: 0,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            anchorPlacement: 'top-bottom'
        });
    }
    
    // ===== INICIALIZAÇÃO DO GSAP SCROLLTRIGGER =====
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animação do globo no scroll
        gsap.to('.globe-3d-premium', {
            scrollTrigger: {
                trigger: '.hero-masterpiece',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5
            },
            rotateY: 360,
            rotateX: 15,
            scale: 0.7,
            opacity: 0.5,
            ease: 'none'
        });
        
        // Animação dos cards de métricas
        gsap.from('.metric-card-premium', {
            scrollTrigger: {
                trigger: '.metrics-grid-premium',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.2)'
        });
        
        // Animação dos cases
        gsap.from('.case-card-premium', {
            scrollTrigger: {
                trigger: '.cases-grid',
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            y: 80,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out'
        });
    }
    
    // ===== PRELOADER CINEMATOGRÁFICO =====
    function initPreloader() {
        if (!DOM.preloader) return;
        
        // Criar partículas flutuantes no preloader
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'preloader-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 5 + 2}px;
                height: ${particle.style.width};
                background: hsl(${80 + Math.random() * 40}, 70%, 60%);
                border-radius: 50%;
                box-shadow: 0 0 15px #8bc34a;
                left: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 10 + 8}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            DOM.particles.appendChild(particle);
        }
        
        // Adicionar keyframe dinâmico
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0% { transform: translateY(100vh) translateX(-20px) rotate(0deg); opacity: 0; }
                10% { opacity: 0.8; }
                90% { opacity: 0.8; }
                100% { transform: translateY(-100vh) translateX(20px) rotate(720deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        const messages = [
            'Preparando o solo...',
            'Plantando as sementes...',
            'Regenerando ecossistemas...',
            'Nutrindo a terra...',
            'Conectando com a natureza...',
            'Cultivando o futuro...',
            'Colhendo sustentabilidade...',
            'Florescendo ideias...',
            'Germinando inovação...',
            'Brotando esperança...'
        ];
        
        let progress = 0;
        let messageIndex = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 3.5 + 1.2;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                setTimeout(() => {
                    DOM.preloader.style.opacity = '0';
                    DOM.preloader.style.visibility = 'hidden';
                    
                    setTimeout(() => {
                        DOM.preloader.style.display = 'none';
                        State.isLoading = false;
                        startHeroAnimations();
                        initCountersAnimation();
                    }, 1400);
                }, 300);
            }
            
            DOM.progressFill.style.width = progress + '%';
            DOM.percentage.textContent = Math.round(progress) + '%';
            
            const newMessageIndex = Math.floor(progress / 10);
            if (newMessageIndex < messages.length && newMessageIndex !== messageIndex) {
                messageIndex = newMessageIndex;
                DOM.message.textContent = messages[messageIndex];
                DOM.message.style.animation = 'none';
                setTimeout(() => DOM.message.style.animation = '', 10);
            }
        }, 30);
    }
    
    function startHeroAnimations() {
        // Animações adicionais pós-carregamento
        document.querySelectorAll('.title-line-inner').forEach((el, i) => {
            el.style.animation = 'none';
            setTimeout(() => {
                el.style.animation = `titleReveal 1.2s cubic-bezier(0.77,0,0.175,1) ${0.1 + i * 0.15}s forwards`;
            }, 10);
        });
    }
    
    // ===== CURSOR CUSTOMIZADO AVANÇADO =====
    function initCustomCursor() {
        if (State.isMobile) {
            document.body.style.cursor = 'auto';
            if (DOM.cursorCore) DOM.cursorCore.style.display = 'none';
            if (DOM.cursorOuter) DOM.cursorOuter.style.display = 'none';
            if (DOM.cursorTrail) DOM.cursorTrail.style.display = 'none';
            if (DOM.cursorGlow) DOM.cursorGlow.style.display = 'none';
            if (DOM.cursorParticle) DOM.cursorParticle.style.display = 'none';
            return;
        }
        
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);
        
        // Hover em elementos interativos
        const hoverElements = document.querySelectorAll('a, button, .memory-card-premium, .nav-item, .tab-btn-premium, .metric-card-premium, .case-card-premium, .social-link, .orbit-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
                createCursorParticles(5);
            });
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
        
        animateCursor();
    }
    
    function onMouseMove(e) {
        State.mouseX = e.clientX;
        State.mouseY = e.clientY;
        
        if (DOM.cursorCore) {
            DOM.cursorCore.style.left = State.mouseX + 'px';
            DOM.cursorCore.style.top = State.mouseY + 'px';
        }
        
        if (DOM.cursorGlow) {
            DOM.cursorGlow.style.left = State.mouseX + 'px';
            DOM.cursorGlow.style.top = State.mouseY + 'px';
        }
        
        // Atualizar influência do mouse para o canvas
        if (State.canvasWidth && State.canvasHeight) {
            State.mouseInfluence.x = (e.clientX / State.canvasWidth) * 2 - 1;
            State.mouseInfluence.y = (e.clientY / State.canvasHeight) * 2 - 1;
        }
    }
    
    function onMouseDown() {
        document.body.classList.add('cursor-click');
        createCursorParticles(8);
    }
    
    function onMouseUp() {
        document.body.classList.remove('cursor-click');
    }
    
    function onMouseLeave() {
        if (DOM.cursorCore) DOM.cursorCore.style.opacity = '0';
        if (DOM.cursorOuter) DOM.cursorOuter.style.opacity = '0';
        if (DOM.cursorTrail) DOM.cursorTrail.style.opacity = '0';
        if (DOM.cursorGlow) DOM.cursorGlow.style.opacity = '0';
    }
    
    function onMouseEnter() {
        if (DOM.cursorCore) DOM.cursorCore.style.opacity = '1';
        if (DOM.cursorOuter) DOM.cursorOuter.style.opacity = '1';
        if (DOM.cursorTrail) DOM.cursorTrail.style.opacity = '1';
        if (DOM.cursorGlow) DOM.cursorGlow.style.opacity = '1';
    }
    
    function createCursorParticles(count) {
        if (!DOM.cursorParticle) return;
        
        for (let i = 0; i < count; i++) {
            const particle = DOM.cursorParticle.cloneNode();
            particle.style.opacity = '1';
            particle.style.left = State.mouseX + (Math.random() - 0.5) * 30 + 'px';
            particle.style.top = State.mouseY + (Math.random() - 0.5) * 30 + 'px';
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 500);
        }
    }
    
    function animateCursor() {
        if (State.isMobile) return;
        
        // Outer ring com lag suave
        State.cursorOuterX += (State.mouseX - State.cursorOuterX) * CONFIG.cursorLerpFactor;
        State.cursorOuterY += (State.mouseY - State.cursorOuterY) * CONFIG.cursorLerpFactor;
        
        if (DOM.cursorOuter) {
            DOM.cursorOuter.style.left = State.cursorOuterX + 'px';
            DOM.cursorOuter.style.top = State.cursorOuterY + 'px';
        }
        
        // Trail com mais lag
        State.cursorTrailX += (State.mouseX - State.cursorTrailX) * (CONFIG.cursorLerpFactor * 0.35);
        State.cursorTrailY += (State.mouseY - State.cursorTrailY) * (CONFIG.cursorLerpFactor * 0.35);
        
        if (DOM.cursorTrail) {
            DOM.cursorTrail.style.left = State.cursorTrailX + 'px';
            DOM.cursorTrail.style.top = State.cursorTrailY + 'px';
        }
        
        requestAnimationFrame(animateCursor);
    }
    
    // ===== CANVAS 3D BACKGROUND COM PARTÍCULAS =====
    function initCanvas3D() {
        if (!DOM.canvas) return;
        
        const ctx = DOM.canvas.getContext('2d');
        State.canvasCtx = ctx;
        
        function resizeCanvas() {
            State.canvasWidth = window.innerWidth;
            State.canvasHeight = window.innerHeight;
            DOM.canvas.width = State.canvasWidth;
            DOM.canvas.height = State.canvasHeight;
            initParticles();
        }
        
        function initParticles() {
            State.particles = [];
            for (let i = 0; i < CONFIG.particleCount; i++) {
                State.particles.push({
                    x: Math.random() * State.canvasWidth,
                    y: Math.random() * State.canvasHeight,
                    vx: (Math.random() - 0.5) * 0.25,
                    vy: (Math.random() - 0.5) * 0.25,
                    size: Math.random() * 3.5 + 1.5,
                    baseSize: Math.random() * 3.5 + 1.5,
                    color: `hsla(${80 + Math.random() * 40}, ${60 + Math.random() * 30}%, ${50 + Math.random() * 30}%, ${0.12 + Math.random() * 0.2})`,
                    angle: Math.random() * Math.PI * 2,
                    angleSpeed: (Math.random() - 0.5) * 0.02
                });
            }
        }
        
        function drawBackground() {
            if (!State.canvasCtx || !State.canvasWidth || !State.canvasHeight) return;
            
            const ctx = State.canvasCtx;
            
            // Limpar canvas com gradiente
            const gradient = ctx.createRadialGradient(
                State.canvasWidth / 2 + State.mouseInfluence.x * 80,
                State.canvasHeight / 2 + State.mouseInfluence.y * 80,
                0,
                State.canvasWidth / 2,
                State.canvasHeight / 2,
                Math.max(State.canvasWidth, State.canvasHeight) / 1.3
            );
            gradient.addColorStop(0, '#030a03');
            gradient.addColorStop(0.5, '#061406');
            gradient.addColorStop(1, '#010301');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, State.canvasWidth, State.canvasHeight);
            
            // Atualizar e desenhar partículas
            State.particles.forEach(p => {
                // Influência do mouse
                const dx = State.mouseX - p.x;
                const dy = State.mouseY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 180) {
                    const force = (180 - dist) / 180;
                    p.vx -= (dx / dist) * force * 0.04;
                    p.vy -= (dy / dist) * force * 0.04;
                    p.size = p.baseSize + force * 2.5;
                } else {
                    p.size = p.baseSize;
                }
                
                // Movimento browniano
                p.vx += (Math.random() - 0.5) * 0.015;
                p.vy += (Math.random() - 0.5) * 0.015;
                
                // Amortecimento
                p.vx *= 0.985;
                p.vy *= 0.985;
                
                // Atualizar posição
                p.x += p.vx;
                p.y += p.vy;
                p.angle += p.angleSpeed;
                
                // Limites com wrap-around suave
                if (p.x < -20) p.x = State.canvasWidth + 20;
                if (p.x > State.canvasWidth + 20) p.x = -20;
                if (p.y < -20) p.y = State.canvasHeight + 20;
                if (p.y > State.canvasHeight + 20) p.y = -20;
                
                // Limitar velocidade
                const maxSpeed = 0.6;
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > maxSpeed) {
                    p.vx = (p.vx / speed) * maxSpeed;
                    p.vy = (p.vy / speed) * maxSpeed;
                }
                
                // Desenhar partícula com glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowColor = '#8bc34a';
                ctx.shadowBlur = 12;
                ctx.fill();
            });
            
            // Desenhar conexões
            ctx.shadowBlur = 0;
            ctx.lineWidth = 0.6;
            
            for (let i = 0; i < State.particles.length; i++) {
                for (let j = i + 1; j < State.particles.length; j++) {
                    const p1 = State.particles[i];
                    const p2 = State.particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < CONFIG.connectionDistance) {
                        const opacity = (1 - dist / CONFIG.connectionDistance) * 0.12;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 195, 74, ${opacity})`;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(drawBackground);
        }
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawBackground();
    }
    
    // ===== JOGO DA MEMÓRIA 3D AVANÇADO =====
    const MemoryGame = {
        icons: ['🌱', '🌽', '💧', '☀️', '🌿', '🍃', '🌾', '🌸', '🌻', '🍎'],
        deck: [],
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        attempts: 0,
        locked: false,
        level: 1,
        
        init() {
            this.loadBestScore();
            this.createDeck();
            this.render();
            this.attachEvents();
            this.updateProgress();
        },
        
        loadBestScore() {
            const saved = localStorage.getItem('agroforte_memory_best_v2');
            State.memoryBest = saved ? parseInt(saved) : null;
            if (DOM.bestDisplay) {
                DOM.bestDisplay.textContent = State.memoryBest || '—';
            }
        },
        
        saveBestScore(score) {
            if (!State.memoryBest || score < State.memoryBest) {
                State.memoryBest = score;
                localStorage.setItem('agroforte_memory_best_v2', score);
                DOM.bestDisplay.textContent = score;
                return true;
            }
            return false;
        },
        
        createDeck() {
            const pairCount = 4 + Math.floor((this.level - 1) / 2);
            const selectedIcons = this.icons.slice(0, pairCount);
            this.deck = [...selectedIcons, ...selectedIcons];
            
            // Adicionar carta coringa se necessário para grid 3x3
            if (this.deck.length < 9) {
                this.deck.push('🌾');
            }
            
            this.shuffle();
        },
        
        shuffle() {
            for (let i = this.deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }
            
            this.cards = this.deck.map((value, index) => ({
                id: index,
                value: value,
                matched: false,
                flipped: false,
                element: null
            }));
        },
        
        render() {
            if (!DOM.memoryBoard) return;
            
            DOM.memoryBoard.innerHTML = '';
            
            this.cards.forEach((card, index) => {
                const cardEl = document.createElement('div');
                cardEl.className = 'memory-card-premium';
                if (card.matched) cardEl.classList.add('matched');
                if (card.flipped) cardEl.classList.add('flipped');
                
                const content = document.createElement('div');
                content.className = 'card-content';
                content.textContent = card.value;
                
                cardEl.appendChild(content);
                cardEl.dataset.index = index;
                
                // Efeito 3D no hover
                cardEl.addEventListener('mousemove', (e) => {
                    if (card.matched || card.flipped) return;
                    const rect = cardEl.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 8;
                    const rotateY = (centerX - x) / 8;
                    cardEl.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.98)`;
                });
                
                cardEl.addEventListener('mouseleave', () => {
                    if (!card.matched && !card.flipped) {
                        cardEl.style.transform = '';
                    }
                });
                
                cardEl.addEventListener('click', (e) => this.handleClick(e, index));
                
                DOM.memoryBoard.appendChild(cardEl);
                card.element = cardEl;
            });
            
            this.updateStats();
            this.updateProgress();
        },
        
        handleClick(e, index) {
            if (this.locked) return;
            
            const card = this.cards[index];
            if (card.matched || card.flipped) return;
            if (this.flippedCards.length === 2) return;
            
            // Feedback tátil visual
            const cardEl = e.currentTarget;
            cardEl.style.transform = 'scale(0.92)';
            setTimeout(() => {
                if (cardEl && !card.matched) {
                    cardEl.style.transform = '';
                }
            }, 150);
            
            card.flipped = true;
            this.flippedCards.push(index);
            this.render();
            
            if (this.flippedCards.length === 2) {
                this.attempts++;
                this.updateStats();
                this.checkMatch();
            }
        },
        
        checkMatch() {
            this.locked = true;
            
            const [idx1, idx2] = this.flippedCards;
            const card1 = this.cards[idx1];
            const card2 = this.cards[idx2];
            
            const isMatch = card1.value === card2.value && card1.value !== '🌾';
            
            if (isMatch) {
                card1.matched = true;
                card2.matched = true;
                this.matchedPairs++;
                this.flippedCards = [];
                this.locked = false;
                this.render();
                
                // Efeito de partículas no match
                this.celebrateMatch(card1.element, card2.element);
                
                const totalPairs = Math.floor(this.deck.filter(c => c !== '🌾').length / 2);
                
                if (this.matchedPairs === totalPairs) {
                    const isNewRecord = this.saveBestScore(this.attempts);
                    
                    setTimeout(() => {
                        let message = `🎉 Parabéns! ${this.attempts} tentativas! 🌍`;
                        if (isNewRecord) message = `🏆 NOVO RECORDE! ${this.attempts} tentativas! 🏆`;
                        
                        this.showNotification(message, 'success');
                        
                        // Avançar de nível
                        if (this.level < 3) {
                            this.level++;
                            if (DOM.levelDisplay) DOM.levelDisplay.textContent = this.level;
                        }
                    }, 300);
                }
            } else {
                setTimeout(() => {
                    card1.flipped = false;
                    card2.flipped = false;
                    this.flippedCards = [];
                    this.locked = false;
                    this.render();
                }, 700);
            }
        },
        
        celebrateMatch(el1, el2) {
            [el1, el2].forEach(el => {
                // Criar partículas
                for (let i = 0; i < 6; i++) {
                    const particle = document.createElement('div');
                    particle.style.cssText = `
                        position: absolute;
                        width: 8px;
                        height: 8px;
                        background: #cddc39;
                        border-radius: 50%;
                        left: 50%;
                        top: 50%;
                        pointer-events: none;
                        z-index: 100;
                        box-shadow: 0 0 15px #8bc34a;
                        animation: matchParticle 0.6s ease-out forwards;
                        transform: translate(-50%, -50%) rotate(${i * 60}deg) translateY(-20px);
                    `;
                    el.appendChild(particle);
                    setTimeout(() => particle.remove(), 600);
                }
            });
            
            // Adicionar estilo da animação se não existir
            if (!document.getElementById('match-particle-style')) {
                const style = document.createElement('style');
                style.id = 'match-particle-style';
                style.textContent = `
                    @keyframes matchParticle {
                        0% { opacity: 1; transform: translate(-50%, -50%) rotate(0deg) translateY(0); }
                        100% { opacity: 0; transform: translate(-50%, -50%) rotate(0deg) translateY(-40px); }
                    }
                `;
                document.head.appendChild(style);
            }
        },
        
        updateStats() {
            const totalPairs = Math.floor(this.deck.filter(c => c !== '🌾').length / 2);
            if (DOM.pairsDisplay) {
                DOM.pairsDisplay.textContent = `${this.matchedPairs}/${totalPairs}`;
            }
            if (DOM.attemptsDisplay) {
                DOM.attemptsDisplay.textContent = this.attempts;
            }
            if (DOM.levelDisplay) {
                DOM.levelDisplay.textContent = this.level;
            }
        },
        
        updateProgress() {
            const totalPairs = Math.floor(this.deck.filter(c => c !== '🌾').length / 2);
            const progress = totalPairs > 0 ? (this.matchedPairs / totalPairs) * 100 : 0;
            
            if (DOM.progressBar) {
                DOM.progressBar.style.width = progress + '%';
            }
            if (DOM.progressPercentage) {
                DOM.progressPercentage.textContent = Math.round(progress) + '%';
            }
        },
        
        reset() {
            this.matchedPairs = 0;
            this.attempts = 0;
            this.flippedCards = [];
            this.locked = false;
            this.level = 1;
            this.createDeck();
            this.render();
            if (DOM.levelDisplay) DOM.levelDisplay.textContent = '1';
            this.showNotification('🔄 Jogo reiniciado! Boa sorte!', 'info');
        },
        
        shuffleOnly() {
            if (this.locked) return;
            this.flippedCards = [];
            this.locked = false;
            
            // Resetar flipped cards
            this.cards.forEach(c => { if (!c.matched) c.flipped = false; });
            
            // Embaralhar apenas as não combinadas
            const unmatched = this.cards.filter(c => !c.matched);
            for (let i = unmatched.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [unmatched[i].value, unmatched[j].value] = [unmatched[j].value, unmatched[i].value];
            }
            
            this.render();
            this.showNotification('🃏 Cartas embaralhadas!', 'info');
        },
        
        showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 120px;
                right: 30px;
                background: ${type === 'success' ? 'linear-gradient(135deg, #2e7d32, #1b5e20)' : 'linear-gradient(135deg, #1b5e20, #0a1f0a)'};
                color: white;
                padding: 16px 28px;
                border-radius: 50px;
                font-weight: 600;
                box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 25px #4caf50;
                border: 1px solid #8bc34a;
                z-index: 10000;
                animation: slideInRight 0.4s ease;
                backdrop-filter: blur(15px);
                font-size: 0.95rem;
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.4s ease';
                setTimeout(() => notification.remove(), 400);
            }, 2800);
        },
        
        attachEvents() {
            if (DOM.resetGameBtn) {
                DOM.resetGameBtn.addEventListener('click', () => this.reset());
            }
            if (DOM.shuffleGameBtn) {
                DOM.shuffleGameBtn.addEventListener('click', () => this.shuffleOnly());
            }
        }
    };
    
    // Adicionar estilos de animação para notificações
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(100px); }
        }
    `;
    document.head.appendChild(notificationStyle);
    
    // ===== SISTEMA DE TABS =====
    function initTabs() {
        DOM.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                DOM.tabBtns.forEach(b => b.classList.remove('active'));
                DOM.tabContents.forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                const targetTab = document.getElementById(tabId);
                if (targetTab) {
                    targetTab.classList.add('active');
                    State.currentTab = tabId;
                }
            });
        });
    }
    
    // ===== CONTADORES ANIMADOS =====
    function initCountersAnimation() {
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const suffix = counter.textContent.replace(/[0-9.-]/g, '').trim();
            let current = 0;
            const increment = target / CONFIG.counterSpeed;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + (suffix ? ' ' + suffix : '');
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.round(current) + (suffix ? ' ' + suffix : '');
                }
            }, 20);
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    if (!counter.classList.contains('counted')) {
                        counter.classList.add('counted');
                        animateCounter(counter);
                    }
                }
            });
        }, { threshold: 0.3 });
        
        DOM.counters.forEach(counter => observer.observe(counter));
    }
    
    // ===== NAVEGAÇÃO SUAVE E ATIVA =====
    function initNavigation() {
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Fechar menu mobile
                    if (DOM.mobileMenu) {
                        DOM.mobileMenu.classList.remove('active');
                    }
                }
            });
        });
        
        // Atualizar link ativo e barra de progresso
        window.addEventListener('scroll', () => {
            // Barra de progresso
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            if (DOM.scrollProgressBar) {
                DOM.scrollProgressBar.style.width = scrollPercent + '%';
            }
            
            // Link ativo
            let current = '';
            
            DOM.sections.forEach(section => {
                const sectionTop = section.offsetTop - 200;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    current = section.getAttribute('id');
                }
            });
            
            DOM.navItems.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href && href.substring(1) === current) {
                    link.classList.add('active');
                }
            });
            
            // Header efeito
            if (DOM.header) {
                if (scrollY > 50) {
                    DOM.header.style.background = 'rgba(3, 12, 3, 0.45)';
                    DOM.header.style.backdropFilter = 'blur(35px) saturate(180%)';
                } else {
                    DOM.header.style.background = 'rgba(3, 12, 3, 0.3)';
                }
            }
            
            // Esconder scroll indicator
            if (DOM.scrollIndicator && scrollY > 150) {
                DOM.scrollIndicator.style.opacity = '0';
                DOM.scrollIndicator.style.pointerEvents = 'none';
            } else if (DOM.scrollIndicator) {
                DOM.scrollIndicator.style.opacity = '1';
            }
        });
    }
    
    // ===== MENU MOBILE =====
    function initMobileMenu() {
        if (DOM.mobileMenuBtn) {
            DOM.mobileMenuBtn.addEventListener('click', () => {
                DOM.mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
        
        if (DOM.closeMobileMenu) {
            DOM.closeMobileMenu.addEventListener('click', () => {
                DOM.mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        // Fechar ao clicar no backdrop
        const backdrop = document.querySelector('.mobile-menu-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', () => {
                DOM.mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        // Fechar ao clicar em links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                DOM.mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // ===== NEWSLETTER FORM =====
    function initNewsletter() {
        if (DOM.newsletterForm) {
            DOM.newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = DOM.newsletterForm.querySelector('input[type="email"]').value;
                
                MemoryGame.showNotification(`🌱 Obrigado, ${email}! Em breve você receberá nossas novidades sustentáveis.`, 'success');
                DOM.newsletterForm.reset();
            });
        }
    }
    
    // ===== THEME TOGGLE =====
    function initThemeToggle() {
        if (DOM.themeToggle) {
            let clickCount = 0;
            DOM.themeToggle.addEventListener('click', () => {
                clickCount++;
                
                // Rotação
                DOM.themeToggle.style.transform = `rotate(${clickCount * 360}deg)`;
                
                // Easter egg
                if (clickCount === 5) {
                    MemoryGame.showNotification('🌍 Você ativou o modo Natureza Suprema!', 'success');
                    document.body.style.animation = 'ambientBreathing 3s ease-in-out';
                    
                    // Adicionar classe especial
                    document.body.classList.add('nature-mode');
                }
            });
        }
    }
    
    // ===== EFEITO PARALLAX NOS ELEMENTOS =====
    function initParallax() {
        const globe = document.querySelector('.globe-3d-premium');
        const orbitItems = document.querySelectorAll('.orbit-item');
        
        if (globe) {
            document.addEventListener('mousemove', (e) => {
                const moveX = (e.clientX - window.innerWidth / 2) * 0.003;
                const moveY = (e.clientY - window.innerHeight / 2) * 0.003;
                
                globe.style.transform = `translateY(0) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
            });
        }
        
        // Animar orbit items com velocidades diferentes
        orbitItems.forEach((item, index) => {
            const speed = item.getAttribute('data-speed') || 1;
            item.style.animationDuration = `${4 / speed}s`;
        });
    }
    
    // ===== ANIMAÇÕES DE HOVER 3D NOS CARDS =====
    function initCardHoverEffects() {
        const cards = document.querySelectorAll('.metric-card-premium, .case-card-premium, .tab-visual-premium');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
                
                // Efeito de brilho
                const glow = card.querySelector('.metric-glow') || document.createElement('div');
                if (!card.querySelector('.metric-glow')) {
                    glow.className = 'metric-glow';
                    glow.style.cssText = `
                        position: absolute;
                        inset: 0;
                        background: radial-gradient(circle at ${x}px ${y}px, rgba(139, 195, 74, 0.15), transparent 70%);
                        border-radius: inherit;
                        pointer-events: none;
                        opacity: 0;
                        transition: opacity 0.3s;
                    `;
                    card.style.position = 'relative';
                    card.appendChild(glow);
                }
                glow.style.opacity = '1';
                glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(139, 195, 74, 0.2), transparent 70%)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                const glow = card.querySelector('.metric-glow');
                if (glow) glow.style.opacity = '0';
            });
        });
    }
    
    // ===== INICIALIZAÇÃO PRINCIPAL =====
    function init() {
        console.log('%c🌍 AGRO FORTE · O FUTURO É SUSTENTÁVEL', 'font-size: 22px; font-weight: bold; color: #8bc34a; text-shadow: 0 0 15px #4caf50;');
        console.log('%c✨ Interface cinematográfica carregada! 6000+ linhas de puro design.', 'font-size: 14px; color: #a5d6a7;');
        
        initPreloader();
        
        if (!State.isMobile) {
            initCustomCursor();
        } else {
            document.body.style.cursor = 'auto';
        }
        
        initCanvas3D();
        initTabs();
        initNavigation();
        initMobileMenu();
        initNewsletter();
        initThemeToggle();
        initParallax();
        initCardHoverEffects();
        
        MemoryGame.init();
        
        // Fallback do preloader
        setTimeout(() => {
            if (State.isLoading && DOM.preloader) {
                DOM.preloader.style.opacity = '0';
                DOM.preloader.style.visibility = 'hidden';
                setTimeout(() => {
                    DOM.preloader.style.display = 'none';
                    State.isLoading = false;
                    startHeroAnimations();
                    initCountersAnimation();
                }, 1000);
            }
        }, 5000);
    }
    
    // Iniciar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
