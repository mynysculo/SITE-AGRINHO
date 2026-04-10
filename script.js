/* ============================================
   AGRO FORTE · JAVASCRIPT MASTER · 2000+ LINHAS
   ANIMAÇÕES · JOGO 3D · CURSOR · CANVAS · TABS
   ============================================ */

(function() {
    'use strict';
    
    // ===== CONFIGURAÇÕES GLOBAIS =====
    const CONFIG = {
        preloaderDuration: 2500,
        cursorLerpFactor: 0.08,
        particleCount: 120,
        globeRotationSpeed: 0.001,
        counterSpeed: 50,
        memoryPairs: 4
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
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isLoading: true,
        currentTab: 'tab1',
        memoryCards: [],
        memoryFlipped: [],
        memoryMatched: 0,
        memoryAttempts: 0,
        memoryLocked: false,
        memoryBest: null
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
        
        canvas: document.getElementById('canvas-3d-background'),
        
        header: document.querySelector('.header-premium'),
        mobileMenu: document.querySelector('.mobile-menu-premium'),
        mobileMenuBtn: document.querySelector('.mobile-menu-btn-premium'),
        closeMobileMenu: document.querySelector('.close-mobile-menu'),
        
        navItems: document.querySelectorAll('.nav-item'),
        sections: document.querySelectorAll('section[id]'),
        
        tabBtns: document.querySelectorAll('.tab-btn-premium'),
        tabContents: document.querySelectorAll('.tab-content-premium'),
        
        counters: document.querySelectorAll('.counter-premium'),
        
        memoryBoard: document.getElementById('memory-board'),
        pairsDisplay: document.getElementById('pairs-matched-display'),
        attemptsDisplay: document.getElementById('attempts-display'),
        bestDisplay: document.getElementById('best-score-display'),
        resetGameBtn: document.getElementById('reset-game-btn'),
        
        swiperContainer: document.querySelector('.swiper-premium'),
        
        newsletterForm: document.getElementById('newsletter-form'),
        themeToggle: document.querySelector('.theme-toggle-premium'),
        
        scrollIndicator: document.querySelector('.scroll-indicator-premium')
    };
    
    // ===== INICIALIZAÇÃO DO AOS =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 120,
            delay: 0,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
    }
    
    // ===== INICIALIZAÇÃO DO SWIPER =====
    if (typeof Swiper !== 'undefined' && DOM.swiperContainer) {
        new Swiper('.swiper-premium', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 1.5,
                slideShadows: false
            }
        });
    }
    
    // ===== PRELOADER CINEMATOGRÁFICO =====
    function initPreloader() {
        if (!DOM.preloader) return;
        
        // Criar partículas flutuantes
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.className = 'preloader-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 12 + 6) + 's';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.width = (Math.random() * 5 + 2) + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = `hsl(${80 + Math.random() * 40}, 70%, 60%)`;
            DOM.particles.appendChild(particle);
        }
        
        const messages = [
            'Preparando o solo...',
            'Plantando as sementes...',
            'Regenerando ecossistemas...',
            'Nutrindo a terra...',
            'Conectando com a natureza...',
            'Cultivando o futuro...',
            'Colhendo sustentabilidade...',
            'Florescendo ideias...'
        ];
        
        let progress = 0;
        let messageIndex = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 4 + 1.5;
            
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
                    }, 1400);
                }, 300);
            }
            
            DOM.progressFill.style.width = progress + '%';
            DOM.percentage.textContent = Math.round(progress) + '%';
            
            const newMessageIndex = Math.floor(progress / 12.5);
            if (newMessageIndex < messages.length && newMessageIndex !== messageIndex) {
                messageIndex = newMessageIndex;
                DOM.message.textContent = messages[messageIndex];
            }
        }, 35);
    }
    
    function startHeroAnimations() {
        // Animações adicionais após carregamento
        document.querySelectorAll('.title-line-inner').forEach((el, i) => {
            el.style.animationDelay = `${0.1 + i * 0.15}s`;
        });
    }
    
    // ===== CURSOR CUSTOMIZADO AVANÇADO =====
    function initCustomCursor() {
        if (State.isMobile) {
            document.body.style.cursor = 'auto';
            return;
        }
        
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        
        // Hover em elementos interativos
        const hoverElements = document.querySelectorAll('a, button, .memory-card-premium, .nav-item, .tab-btn-premium, .metric-card-premium, .case-card-premium, .social-link');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
        
        // Esconder cursor ao sair da janela
        document.addEventListener('mouseleave', () => {
            DOM.cursorCore.style.opacity = '0';
            DOM.cursorOuter.style.opacity = '0';
            DOM.cursorTrail.style.opacity = '0';
            DOM.cursorGlow.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            DOM.cursorCore.style.opacity = '1';
            DOM.cursorOuter.style.opacity = '1';
            DOM.cursorTrail.style.opacity = '1';
            DOM.cursorGlow.style.opacity = '1';
        });
        
        animateCursor();
    }
    
    function onMouseMove(e) {
        State.mouseX = e.clientX;
        State.mouseY = e.clientY;
        
        DOM.cursorCore.style.left = State.mouseX + 'px';
        DOM.cursorCore.style.top = State.mouseY + 'px';
        
        DOM.cursorGlow.style.left = State.mouseX + 'px';
        DOM.cursorGlow.style.top = State.mouseY + 'px';
    }
    
    function onMouseDown() {
        document.body.classList.add('cursor-click');
    }
    
    function onMouseUp() {
        document.body.classList.remove('cursor-click');
    }
    
    function animateCursor() {
        if (State.isMobile) return;
        
        // Outer ring com lag suave (efeito elástico)
        State.cursorOuterX += (State.mouseX - State.cursorOuterX) * CONFIG.cursorLerpFactor;
        State.cursorOuterY += (State.mouseY - State.cursorOuterY) * CONFIG.cursorLerpFactor;
        
        DOM.cursorOuter.style.left = State.cursorOuterX + 'px';
        DOM.cursorOuter.style.top = State.cursorOuterY + 'px';
        
        // Trail com mais lag
        State.cursorTrailX += (State.mouseX - State.cursorTrailX) * (CONFIG.cursorLerpFactor * 0.4);
        State.cursorTrailY += (State.mouseY - State.cursorTrailY) * (CONFIG.cursorLerpFactor * 0.4);
        
        DOM.cursorTrail.style.left = State.cursorTrailX + 'px';
        DOM.cursorTrail.style.top = State.cursorTrailY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    // ===== CANVAS 3D BACKGROUND =====
    function initCanvas3D() {
        if (!DOM.canvas) return;
        
        const ctx = DOM.canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouseInfluence = { x: 0, y: 0 };
        
        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            DOM.canvas.width = width;
            DOM.canvas.height = height;
            initParticles();
        }
        
        function initParticles() {
            particles = [];
            for (let i = 0; i < CONFIG.particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 4 + 1.5,
                    baseSize: Math.random() * 4 + 1.5,
                    color: `hsla(${80 + Math.random() * 40}, ${60 + Math.random() * 30}%, ${50 + Math.random() * 30}%, ${0.15 + Math.random() * 0.25})`,
                    originalX: 0,
                    originalY: 0
                });
            }
        }
        
        function drawBackground() {
            if (!ctx || !width || !height) return;
            
            ctx.clearRect(0, 0, width, height);
            
            // Gradiente de fundo dinâmico
            const gradient = ctx.createRadialGradient(
                width / 2 + mouseInfluence.x * 50, 
                height / 2 + mouseInfluence.y * 50, 
                0,
                width / 2, 
                height / 2, 
                Math.max(width, height) / 1.5
            );
            gradient.addColorStop(0, '#061406');
            gradient.addColorStop(0.5, '#0a1a0a');
            gradient.addColorStop(1, '#020a02');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            
            // Atualizar e desenhar partículas
            particles.forEach(p => {
                // Movimento com influência do mouse
                const dx = State.mouseX - p.x;
                const dy = State.mouseY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 200) {
                    const force = (200 - dist) / 200;
                    p.vx -= (dx / dist) * force * 0.05;
                    p.vy -= (dy / dist) * force * 0.05;
                    p.size = p.baseSize + force * 3;
                } else {
                    p.size = p.baseSize;
                }
                
                // Aplicar velocidade com amortecimento
                p.vx *= 0.98;
                p.vy *= 0.98;
                p.x += p.vx;
                p.y += p.vy;
                
                // Limites com bounce suave
                if (p.x < 0) { p.x = 0; p.vx *= -0.5; }
                if (p.x > width) { p.x = width; p.vx *= -0.5; }
                if (p.y < 0) { p.y = 0; p.vy *= -0.5; }
                if (p.y > height) { p.y = height; p.vy *= -0.5; }
                
                // Adicionar movimento browniano suave
                p.vx += (Math.random() - 0.5) * 0.02;
                p.vy += (Math.random() - 0.5) * 0.02;
                
                // Limitar velocidade
                const maxSpeed = 0.8;
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > maxSpeed) {
                    p.vx = (p.vx / speed) * maxSpeed;
                    p.vy = (p.vy / speed) * maxSpeed;
                }
                
                // Desenhar partícula
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                
                // Adicionar glow
                ctx.shadowColor = '#8bc34a';
                ctx.shadowBlur = 15;
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            
            // Desenhar conexões entre partículas próximas
            ctx.strokeStyle = 'rgba(139, 195, 74, 0.06)';
            ctx.lineWidth = 0.8;
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        
                        const opacity = (1 - dist / 130) * 0.15;
                        ctx.strokeStyle = `rgba(139, 195, 74, ${opacity})`;
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(drawBackground);
        }
        
        // Atualizar influência do mouse
        document.addEventListener('mousemove', (e) => {
            mouseInfluence.x = (e.clientX / width) * 2 - 1;
            mouseInfluence.y = (e.clientY / height) * 2 - 1;
        });
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawBackground();
    }
    
    // ===== JOGO DA MEMÓRIA 3D =====
    const MemoryGame = {
        icons: ['🌱', '🌽', '💧', '☀️', '🌿', '🍃', '🌾', '🌸'],
        deck: [],
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        attempts: 0,
        locked: false,
        
        init() {
            this.loadBestScore();
            this.createDeck();
            this.render();
            this.attachEvents();
        },
        
        loadBestScore() {
            const saved = localStorage.getItem('agroforte_memory_best');
            State.memoryBest = saved ? parseInt(saved) : null;
            if (DOM.bestDisplay) {
                DOM.bestDisplay.textContent = State.memoryBest || '—';
            }
        },
        
        saveBestScore(score) {
            if (!State.memoryBest || score < State.memoryBest) {
                State.memoryBest = score;
                localStorage.setItem('agroforte_memory_best', score);
                DOM.bestDisplay.textContent = score;
                return true;
            }
            return false;
        },
        
        createDeck() {
            const selectedIcons = this.icons.slice(0, 4);
            this.deck = [...selectedIcons, ...selectedIcons, '🌾'];
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
                
                cardEl.addEventListener('click', (e) => this.handleClick(e, index));
                
                DOM.memoryBoard.appendChild(cardEl);
                card.element = cardEl;
            });
            
            this.updateStats();
        },
        
        handleClick(e, index) {
            if (this.locked) return;
            
            const card = this.cards[index];
            if (card.matched || card.flipped) return;
            if (this.flippedCards.length === 2) return;
            
            // Efeito sonoro visual (vibração suave)
            if (e.target.style) {
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    if (e.target.style) e.target.style.transform = '';
                }, 150);
            }
            
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
                
                // Efeito de confete visual
                this.celebrateMatch(card1.element, card2.element);
                
                if (this.matchedPairs === 4) {
                    const isNewRecord = this.saveBestScore(this.attempts);
                    
                    setTimeout(() => {
                        const message = isNewRecord 
                            ? `🎉 NOVO RECORDE! ${this.attempts} tentativas! 🌟` 
                            : `🎉 Parabéns! Você completou em ${this.attempts} tentativas! 🌍`;
                        
                        this.showNotification(message, 'success');
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
                el.style.animation = 'none';
                setTimeout(() => {
                    el.style.animation = 'globePulse 0.6s ease';
                }, 10);
            });
        },
        
        updateStats() {
            if (DOM.pairsDisplay) {
                DOM.pairsDisplay.textContent = `${this.matchedPairs}/4`;
            }
            if (DOM.attemptsDisplay) {
                DOM.attemptsDisplay.textContent = this.attempts;
            }
        },
        
        reset() {
            this.matchedPairs = 0;
            this.attempts = 0;
            this.flippedCards = [];
            this.locked = false;
            this.createDeck();
            this.render();
            this.showNotification('🔄 Jogo reiniciado! Boa sorte!', 'info');
        },
        
        showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 120px;
                right: 30px;
                background: ${type === 'success' ? 'linear-gradient(135deg, #2e7d32, #1b5e20)' : 'linear-gradient(135deg, #1b5e20, #0a1f0a)'};
                color: white;
                padding: 18px 30px;
                border-radius: 60px;
                font-weight: 600;
                box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px #4caf50;
                border: 1px solid #8bc34a;
                z-index: 10000;
                animation: slideInRight 0.4s ease;
                backdrop-filter: blur(20px);
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.4s ease';
                setTimeout(() => notification.remove(), 400);
            }, 3000);
        },
        
        attachEvents() {
            if (DOM.resetGameBtn) {
                DOM.resetGameBtn.addEventListener('click', () => this.reset());
            }
        }
    };
    
    // Adicionar animações CSS dinâmicas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(100px); }
        }
    `;
    document.head.appendChild(style);
    
    // ===== SISTEMA DE TABS =====
    function initTabs() {
        DOM.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                DOM.tabBtns.forEach(b => b.classList.remove('active'));
                DOM.tabContents.forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                document.getElementById(tabId).classList.add('active');
                
                State.currentTab = tabId;
            });
        });
    }
    
    // ===== CONTADORES ANIMADOS =====
    function initCounters() {
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const suffix = counter.textContent.replace(/[0-9]/g, '').trim();
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
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
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
                    
                    // Fechar menu mobile se aberto
                    if (DOM.mobileMenu) {
                        DOM.mobileMenu.classList.remove('active');
                    }
                }
            });
        });
        
        // Atualizar link ativo
        window.addEventListener('scroll', () => {
            let current = '';
            
            DOM.sections.forEach(section => {
                const sectionTop = section.offsetTop - 250;
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
            
            // Header efeito de scroll
            if (DOM.header) {
                if (scrollY > 50) {
                    DOM.header.style.background = 'rgba(3, 15, 3, 0.5)';
                } else {
                    DOM.header.style.background = 'rgba(3, 15, 3, 0.35)';
                }
            }
            
            // Esconder scroll indicator
            if (DOM.scrollIndicator && scrollY > 100) {
                DOM.scrollIndicator.style.opacity = '0';
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
            });
        }
        
        if (DOM.closeMobileMenu) {
            DOM.closeMobileMenu.addEventListener('click', () => {
                DOM.mobileMenu.classList.remove('active');
            });
        }
        
        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (DOM.mobileMenu && DOM.mobileMenu.classList.contains('active')) {
                if (!DOM.mobileMenu.contains(e.target) && !DOM.mobileMenuBtn.contains(e.target)) {
                    DOM.mobileMenu.classList.remove('active');
                }
            }
        });
    }
    
    // ===== NEWSLETTER FORM =====
    function initNewsletter() {
        if (DOM.newsletterForm) {
            DOM.newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = DOM.newsletterForm.querySelector('input[type="email"]').value;
                
                MemoryGame.showNotification(`🌱 Obrigado, ${email}! Em breve você receberá nossas novidades.`, 'success');
                DOM.newsletterForm.reset();
            });
        }
    }
    
    // ===== THEME TOGGLE (EASTER EGG) =====
    function initThemeToggle() {
        if (DOM.themeToggle) {
            let clickCount = 0;
            DOM.themeToggle.addEventListener('click', () => {
                clickCount++;
                
                // Rotação suave
                DOM.themeToggle.style.transform = `rotate(${clickCount * 360}deg)`;
                
                // Easter egg: 5 cliques
                if (clickCount === 5) {
                    MemoryGame.showNotification('🌍 Você descobriu o modo natureza! A terra agradece!', 'success');
                    document.body.style.animation = 'ambientBreathing 3s ease-in-out';
                }
            });
        }
    }
    
    // ===== EFEITO PARALLAX NO GLOBO =====
    function initParallax() {
        const globe = document.querySelector('.globe-3d-premium');
        if (!globe) return;
        
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
            
            globe.style.transform = `translateY(0) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
        });
    }
    
    // ===== ANIMAÇÕES DE HOVER NOS CARDS =====
    function initCardHoverEffects() {
        const cards = document.querySelectorAll('.metric-card-premium, .case-card-premium, .tab-visual-premium');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
    
    // ===== INICIALIZAÇÃO PRINCIPAL =====
    function init() {
        console.log('%c🌍 AGRO FORTE · O FUTURO É SUSTENTÁVEL', 'font-size: 20px; font-weight: bold; color: #8bc34a; text-shadow: 0 0 10px #4caf50;');
        console.log('%c✨ Interface cinematográfica carregada com sucesso!', 'font-size: 14px; color: #a5d6a7;');
        
        initPreloader();
        
        if (!State.isMobile) {
            initCustomCursor();
        } else {
            document.body.style.cursor = 'auto';
        }
        
        initCanvas3D();
        initTabs();
        initCounters();
        initNavigation();
        initMobileMenu();
        initNewsletter();
        initThemeToggle();
        initParallax();
        initCardHoverEffects();
        
        MemoryGame.init();
        
        // Remover preloader se travar (fallback)
        setTimeout(() => {
            if (State.isLoading && DOM.preloader) {
                DOM.preloader.style.opacity = '0';
                DOM.preloader.style.visibility = 'hidden';
                setTimeout(() => {
                    DOM.preloader.style.display = 'none';
                    State.isLoading = false;
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
