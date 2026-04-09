// ============================================================
// AGROFORTE - FUTURO SUSTENTÁVEL - JAVASCRIPT PREMIUM
// Animações Cinematográficas | Zero Bugs | Performance Otimizada
// ============================================================

// ==================== PRELOADER PREMIUM ====================
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const progressFill = document.getElementById('progressFillPremium');
    const progressPercent = document.getElementById('progressPercentage');
    const statusText = document.querySelector('.status-text');
    
    if (preloader && progressFill && progressPercent) {
        const messages = [
            'Conectando com a natureza...',
            'Carregando inovações sustentáveis...',
            'Preparando experiência premium...',
            'Quase pronto...'
        ];
        
        let progress = 0;
        let messageIndex = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 8 + 3;
            
            if (progress >= 100) {
                progress = 100;
                progressFill.style.width = '100%';
                progressPercent.textContent = '100%';
                if (statusText) statusText.textContent = 'Bem-vindo à AgroForte!';
                clearInterval(interval);
                
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    setTimeout(() => {
                        preloader.style.display = 'none';
                        // Iniciar animações AOS
                        AOS.init({
                            duration: 800,
                            easing: 'ease-out-cubic',
                            once: true,
                            offset: 100,
                            delay: 100
                        });
                    }, 800);
                }, 500);
            } else {
                progressFill.style.width = progress + '%';
                progressPercent.textContent = Math.round(progress) + '%';
                
                if (Math.floor(progress / 25) > messageIndex && messageIndex < messages.length - 1) {
                    messageIndex++;
                    if (statusText) statusText.textContent = messages[messageIndex];
                }
            }
        }, 80);
    } else {
        // Fallback se elementos não existirem
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                    AOS.init({
                        duration: 800,
                        easing: 'ease-out-cubic',
                        once: true,
                        offset: 100,
                        delay: 100
                    });
                }, 800);
            }
        }, 500);
    }
});

// Garantir que preloader suma mesmo se algo falhar
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader && !preloader.classList.contains('hidden')) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
                AOS.init({
                    duration: 800,
                    easing: 'ease-out-cubic',
                    once: true,
                    offset: 100,
                    delay: 100
                });
            }, 800);
        }, 300);
    }
});

// ==================== CURSOR CINEMATOGRÁFICO ====================
const cursorCore = document.getElementById('cursorCore');
const cursorAura = document.getElementById('cursorAura');
const cursorRing = document.getElementById('cursorRing');
const cursorGlow = document.getElementById('cursorGlow');
const cursorParticles = document.getElementById('cursorParticles');

if (cursorCore && cursorAura && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let auraX = 0, auraY = 0;
    let ringX = 0, ringY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorCore.style.left = mouseX + 'px';
        cursorCore.style.top = mouseY + 'px';
        
        // Partículas ocasionais
        if (Math.random() > 0.7) {
            createParticle(mouseX, mouseY);
        }
    });
    
    function animateCursors() {
        auraX += (mouseX - auraX) * 0.1;
        auraY += (mouseY - auraY) * 0.1;
        ringX += (mouseX - ringX) * 0.06;
        ringY += (mouseY - ringY) * 0.06;
        
        if (cursorAura) {
            cursorAura.style.left = auraX + 'px';
            cursorAura.style.top = auraY + 'px';
        }
        if (cursorRing) {
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
        }
        if (cursorGlow) {
            cursorGlow.style.left = mouseX + 'px';
            cursorGlow.style.top = mouseY + 'px';
        }
        
        requestAnimationFrame(animateCursors);
    }
    animateCursors();
    
    function createParticle(x, y) {
        if (!cursorParticles) return;
        
        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 60 + 'px');
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 60 + 'px');
        
        cursorParticles.appendChild(particle);
        
        setTimeout(() => particle.remove(), 800);
    }
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .btn, .nav-link-premium, .tab-btn, .about-card-3d, .testimonial-card-premium, .social-link-premium, .megamenu-tab-btn, .timeline-nav-btn');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorCore?.classList.add('hover');
            cursorAura?.classList.add('hover');
            cursorRing?.classList.add('hover');
            cursorGlow?.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorCore?.classList.remove('hover');
            cursorAura?.classList.remove('hover');
            cursorRing?.classList.remove('hover');
            cursorGlow?.classList.remove('hover');
        });
    });
    
    // Efeito de clique
    document.addEventListener('mousedown', () => {
        cursorCore.style.transform = 'translate(-50%, -50%) scale(0.7)';
        cursorAura.style.transform = 'translate(-50%, -50%) scale(0.8)';
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createParticle(mouseX + (Math.random() - 0.5) * 40, mouseY + (Math.random() - 0.5) * 40);
            }, i * 20);
        }
    });
    
    document.addEventListener('mouseup', () => {
        cursorCore.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorAura.style.transform = 'translate(-50%, -50%) scale(1)';
    });
}

// ==================== HEADER SCROLL ====================
const header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (header) {
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Reading Progress
    const progressBar = document.getElementById('readingProgress');
    if (progressBar) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    }
    
    // Back to Top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (scrollTop > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    // Atualizar link ativo
    updateActiveLink();
    
    lastScrollTop = scrollTop;
});

// ==================== ACTIVE LINK UPDATE ====================
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link-premium');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        const scrollPos = window.pageYOffset;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// ==================== MOBILE MENU ====================
const mobileToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenuPremium');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-link-premium').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== TOP ANNOUNCEMENT ====================
const closeAnnouncement = document.getElementById('closeAnnouncement');
const topAnnouncement = document.querySelector('.top-announcement');

if (closeAnnouncement && topAnnouncement) {
    closeAnnouncement.addEventListener('click', () => {
        topAnnouncement.classList.add('hidden');
        setTimeout(() => {
            topAnnouncement.style.display = 'none';
        }, 300);
    });
}

// Inicializar Swiper do Anúncio
const announcementSwiper = new Swiper('#announcementSlider', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    speed: 600
});

// ==================== SEARCH OVERLAY ====================
const searchTrigger = document.getElementById('searchTrigger');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

if (searchTrigger && searchOverlay && searchClose) {
    searchTrigger.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        if (searchInput) {
            setTimeout(() => searchInput.focus(), 300);
        }
    });
    
    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
    
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            searchOverlay.classList.add('active');
            if (searchInput) searchInput.focus();
        }
    });
}

// ==================== MEGA MENU TABS ====================
const megaTabBtns = document.querySelectorAll('.megamenu-tab-btn');
const megaTabPanes = document.querySelectorAll('.megatab-pane');

megaTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-megatab');
        
        megaTabBtns.forEach(b => b.classList.remove('active'));
        megaTabPanes.forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const targetPane = document.getElementById(`megatab-${tabId}`);
        if (targetPane) targetPane.classList.add('active');
    });
});

// ==================== TIMELINE TABS (SOLUTIONS) ====================
const timelineBtns = document.querySelectorAll('.timeline-nav-btn');
const timelinePanels = document.querySelectorAll('.timeline-panel');
const timelineIndicator = document.querySelector('.timeline-indicator');

timelineBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const era = btn.getAttribute('data-era');
        
        timelineBtns.forEach(b => b.classList.remove('active'));
        timelinePanels.forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const targetPanel = document.getElementById(`panel-${era}`);
        if (targetPanel) targetPanel.classList.add('active');
        
        if (timelineIndicator) {
            timelineIndicator.style.transform = `translateX(${index * 100}%)`;
        }
    });
});

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target, isFloat = false) {
    let current = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = isFloat ? target.toFixed(1) : Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
        }
    }, stepTime);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number-premium[data-target]');
            counters.forEach(counter => {
                if (!counter.classList.contains('counted')) {
                    const target = parseFloat(counter.getAttribute('data-target'));
                    animateCounter(counter, target, target % 1 !== 0);
                    counter.classList.add('counted');
                }
            });
        }
    });
}, { threshold: 0.3 });

const heroStats = document.querySelector('.hero-stats-premium');
if (heroStats) counterObserver.observe(heroStats);

// ==================== CHART.JS DASHBOARD ====================
const chartCanvas = document.getElementById('esgDashboardChart');
if (chartCanvas) {
    new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [
                {
                    label: 'Eficiência Hídrica',
                    data: [78, 82, 85, 88, 90, 92, 93, 94, 95, 94, 93, 92],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 8
                },
                {
                    label: 'Redução de Carbono',
                    data: [65, 70, 75, 82, 87, 90, 92, 94, 95, 96, 95, 95],
                    borderColor: '#fbbf24',
                    backgroundColor: 'rgba(251, 191, 36, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#fbbf24',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 8
                },
                {
                    label: 'Índice ESG Geral',
                    data: [72, 76, 80, 85, 89, 91, 93, 94, 95, 95, 94, 94],
                    borderColor: '#059669',
                    backgroundColor: 'rgba(5, 150, 105, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#059669',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: { family: 'Inter', size: 12 },
                        color: document.body.classList.contains('theme-dark') ? '#d1d5db' : '#4b5563'
                    }
                },
                tooltip: {
                    backgroundColor: '#1f2937',
                    titleColor: '#fff',
                    bodyColor: '#d1d5db',
                    borderColor: '#10b981',
                    borderWidth: 1,
                    padding: 12
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 60,
                    max: 100,
                    grid: { color: 'rgba(0,0,0,0.05)' },
                    ticks: { callback: (value) => value + '%' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
}

// ==================== DASHBOARD PERIOD BUTTONS ====================
const dashboardBtns = document.querySelectorAll('.dashboard-btn');
dashboardBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        dashboardBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const period = btn.getAttribute('data-period');
        // Aqui você pode atualizar os dados do gráfico conforme o período
        console.log(`Período selecionado: ${period}`);
    });
});

// ==================== TESTIMONIALS SWIPER ====================
const testimonialsSwiper = new Swiper('.testimonials-carousel-premium', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// ==================== VIDEO MODAL ====================
const watchDemoBtn = document.getElementById('watchDemoBtn');
const playFeaturedBtn = document.getElementById('playFeaturedVideo');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const videoFrame = document.getElementById('videoFrame');
const modalOverlay = document.querySelector('.modal-overlay');

function openVideoModal(videoUrl) {
    if (videoModal && videoFrame) {
        videoFrame.src = videoUrl;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeVideoModal() {
    if (videoModal && videoFrame) {
        videoModal.classList.remove('active');
        videoFrame.src = '';
        document.body.style.overflow = '';
    }
}

if (watchDemoBtn) {
    watchDemoBtn.addEventListener('click', () => {
        openVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1');
    });
}

if (playFeaturedBtn) {
    playFeaturedBtn.addEventListener('click', () => {
        openVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1');
    });
}

if (closeModal) {
    closeModal.addEventListener('click', closeVideoModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeVideoModal);
}

if (videoModal) {
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideoModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal?.classList.contains('active')) {
        closeVideoModal();
    }
});

// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('theme-dark');
        
        // Atualizar cores do gráfico se existir
        const chart = Chart.getChart('esgDashboardChart');
        if (chart) {
            chart.options.plugins.legend.labels.color = document.body.classList.contains('theme-dark') ? '#d1d5db' : '#4b5563';
            chart.update();
        }
    });
}

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactFormPremium');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.form-submit-premium');
        const originalContent = submitBtn.innerHTML;
        
        submitBtn.classList.add('loading');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado com sucesso!';
            submitBtn.style.background = '#059669';
            
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }, 2000);
    });
}

// ==================== BACK TO TOP ====================
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== THREE.JS HERO BACKGROUND ====================
const heroCanvas = document.getElementById('heroCanvas');
if (heroCanvas && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Criar partículas
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 20;
        posArray[i + 1] = (Math.random() - 0.5) * 20;
        posArray[i + 2] = (Math.random() - 0.5) * 20;
        
        colorArray[i] = 0.1 + Math.random() * 0.3;
        colorArray[i + 1] = 0.5 + Math.random() * 0.4;
        colorArray[i + 2] = 0.3 + Math.random() * 0.3;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.03,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 5;
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
    
    function animate() {
        requestAnimationFrame(animate);
        
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;
        
        particlesMesh.rotation.x += mouseY * 0.001;
        particlesMesh.rotation.y += mouseX * 0.001;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ==================== GSAP SCROLL ANIMATIONS ====================
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax no Hero
    gsap.to('.hero-content-premium', {
        y: 100,
        opacity: 0.5,
        scrollTrigger: {
            trigger: '.hero-premium',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Animar cards na seção About
    gsap.from('.about-card-3d', {
        scrollTrigger: {
            trigger: '.about-cards-premium',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });
}

// ==================== INICIALIZAÇÃO FINAL ====================
console.log('%c🚀 AgroForte - Experiência Premium Carregada!', 'color: #10b981; font-size: 16px; font-weight: bold;');
console.log('%c🌱 Cultivando o equilíbrio entre produção e natureza', 'color: #059669; font-size: 14px;');

// Ativar AOS após tudo carregado
setTimeout(() => {
    AOS.refresh();
}, 100);

// Smooth scroll para links internos adicionais
document.querySelectorAll('.footer-links-premium a, .megamenu-col a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});
