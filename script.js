<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0">
    <title>AGRO FORTE · Revolução Sustentável · O Futuro é Verde</title>
    
    <!-- Fontes Premium - 8 famílias diferentes para tipografia rica -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&family=Outfit:wght@200;300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Clash+Display:wght@400;500;600;700&family=Chillax:wght@300;400;500;600;700&family=Inter+Tight:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Ícones Premium -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css">
    
    <!-- Bibliotecas de Animação -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    
    <!-- CSS Principal - 5000+ linhas -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- ============================================ -->
    <!-- PRELOADER CINEMATOGRÁFICO ULTRA PREMIUM       -->
    <!-- ============================================ -->
    <div id="preloader-master">
        <div class="preloader-particles" id="preloader-particles"></div>
        <div class="preloader-container">
            <div class="preloader-logo-wrapper">
                <div class="preloader-logo-icon">
                    <i class="fas fa-seedling"></i>
                </div>
                <div class="preloader-logo-ring"></div>
                <div class="preloader-logo-ring-2"></div>
                <div class="preloader-title">
                    AGRO<span>FORTE</span>
                </div>
                <div class="preloader-subtitle">REVOLUÇÃO SUSTENTÁVEL</div>
                <div class="preloader-tagline">Tecnologia · Natureza · Futuro</div>
            </div>
            
            <div class="preloader-progress-wrapper">
                <div class="preloader-progress-fill" id="preloader-progress-fill"></div>
                <div class="preloader-progress-glow"></div>
            </div>
            
            <div class="preloader-percentage" id="preloader-percentage">0%</div>
            <div class="preloader-message" id="preloader-message">Preparando o solo...</div>
            
            <div class="preloader-stats">
                <div class="preloader-stat">
                    <span class="stat-label">Carbono</span>
                    <span class="stat-value">-42%</span>
                </div>
                <div class="preloader-stat">
                    <span class="stat-label">Água</span>
                    <span class="stat-value">-60%</span>
                </div>
                <div class="preloader-stat">
                    <span class="stat-label">Biodiv</span>
                    <span class="stat-value">+65%</span>
                </div>
            </div>
        </div>
        
        <!-- Elementos decorativos do preloader -->
        <div class="preloader-decoration">
            <div class="decoration-line"></div>
            <div class="decoration-line"></div>
            <div class="decoration-line"></div>
        </div>
    </div>

    <!-- ============================================ -->
    <!-- CURSOR CUSTOMIZADO 5 CAMADAS                 -->
    <!-- ============================================ -->
    <div id="cursor-core"></div>
    <div id="cursor-outer"></div>
    <div id="cursor-trail"></div>
    <div id="cursor-glow"></div>
    <div id="cursor-particle"></div>

    <!-- ============================================ -->
    <!-- CANVAS 3D BACKGROUND PARTICLE SYSTEM          -->
    <!-- ============================================ -->
    <canvas id="canvas-3d-background"></canvas>
    
    <!-- Overlays de textura e efeitos -->
    <div class="noise-overlay"></div>
    <div class="grain-overlay"></div>
    <div class="vignette-overlay"></div>
    <div class="scanline-overlay"></div>
    <div class="ambient-light"></div>
    <div class="ambient-light-2"></div>

    <!-- ============================================ -->
    <!-- HEADER PREMIUM COM MICROINTERAÇÕES           -->
    <!-- ============================================ -->
    <header class="header-premium" data-aos="fade-down" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
        <div class="header-container">
            <a href="#" class="logo-premium">
                <div class="logo-icon-wrapper">
                    <div class="logo-icon-bg"></div>
                    <div class="logo-icon-bg-2"></div>
                    <div class="logo-icon">
                        <i class="fas fa-tractor"></i>
                    </div>
                    <div class="logo-particles">
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <span class="logo-text-premium">Agro<span>Forte</span></span>
                <span class="logo-badge">5.0</span>
            </a>
            
            <nav class="nav-premium">
                <a href="#home" class="nav-item active">
                    <i class="fas fa-home"></i>
                    <span>Visão Geral</span>
                    <span class="nav-indicator"></span>
                    <span class="nav-hover-effect"></span>
                </a>
                <a href="#tecnologias" class="nav-item">
                    <i class="fas fa-microchip"></i>
                    <span>Tecnologias</span>
                    <span class="nav-indicator"></span>
                    <span class="nav-hover-effect"></span>
                </a>
                <a href="#impacto" class="nav-item">
                    <i class="fas fa-chart-line"></i>
                    <span>Impacto</span>
                    <span class="nav-indicator"></span>
                    <span class="nav-hover-effect"></span>
                </a>
                <a href="#jogo" class="nav-item">
                    <i class="fas fa-gamepad"></i>
                    <span>Jogo Verde</span>
                    <span class="nav-indicator"></span>
                    <span class="nav-hover-effect"></span>
                </a>
                <a href="#cases" class="nav-item">
                    <i class="fas fa-medal"></i>
                    <span>Cases</span>
                    <span class="nav-indicator"></span>
                    <span class="nav-hover-effect"></span>
                </a>
                <a href="#contato" class="nav-item">
                    <i class="fas fa-envelope"></i>
                    <span>Contato</span>
                    <span class="nav-indicator"></span>
                    <span class="nav-hover-effect"></span>
                </a>
            </nav>
            
            <div class="header-actions-premium">
                <button class="theme-toggle-premium" id="themeToggle">
                    <i class="fas fa-leaf"></i>
                    <span class="toggle-tooltip">Modo Natureza</span>
                </button>
                <a href="#contato" class="btn-header">
                    <i class="fas fa-seedling"></i>
                    <span>Começar</span>
                    <span class="btn-glow"></span>
                </a>
                <button class="mobile-menu-btn-premium" id="mobileMenuBtn">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
        
        <!-- Barra de progresso de scroll -->
        <div class="scroll-progress-bar" id="scrollProgressBar"></div>
    </header>

    <!-- ============================================ -->
    <!-- MENU MOBILE PREMIUM                          -->
    <!-- ============================================ -->
    <div class="mobile-menu-premium" id="mobileMenu">
        <div class="mobile-menu-backdrop"></div>
        <div class="mobile-menu-container">
            <div class="mobile-menu-header">
                <div class="mobile-logo">
                    <i class="fas fa-seedling"></i>
                    <span>Agro<span>Forte</span></span>
                </div>
                <button class="close-mobile-menu" id="closeMobileMenu">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <ul class="mobile-nav">
                <li><a href="#home"><i class="fas fa-home"></i> Visão Geral</a></li>
                <li><a href="#tecnologias"><i class="fas fa-microchip"></i> Tecnologias</a></li>
                <li><a href="#impacto"><i class="fas fa-chart-line"></i> Impacto</a></li>
                <li><a href="#jogo"><i class="fas fa-gamepad"></i> Jogo Verde</a></li>
                <li><a href="#cases"><i class="fas fa-medal"></i> Cases de Sucesso</a></li>
                <li><a href="#contato"><i class="fas fa-envelope"></i> Contato</a></li>
            </ul>
            
            <div class="mobile-menu-footer">
                <div class="mobile-social">
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-x-twitter"></i></a>
                </div>
                <p class="mobile-copyright">© 2025 AgroForte · Sustentabilidade</p>
            </div>
        </div>
    </div>

    <!-- ============================================ -->
    <!-- CONTEÚDO PRINCIPAL                           -->
    <!-- ============================================ -->
    <main>
        <!-- ===== HERO SECTION MASTERPIECE ===== -->
        <section id="home" class="hero-masterpiece">
            <!-- Elementos decorativos de fundo -->
            <div class="hero-bg-element hero-bg-1"></div>
            <div class="hero-bg-element hero-bg-2"></div>
            <div class="hero-bg-element hero-bg-3"></div>
            <div class="hero-grid-pattern"></div>
            
            <div class="hero-container">
                <div class="hero-content-master">
                    <div class="hero-badge-premium" data-aos="fade-right" data-aos-delay="100">
                        <span class="pulse-icon"></span>
                        <span class="badge-text">AGRO 5.0 · CARBONO NEGATIVO · ESG · ODS</span>
                        <span class="badge-icon"><i class="fas fa-certificate"></i></span>
                    </div>
                    
                    <h1 class="hero-title-master">
                        <span class="title-line">
                            <span class="title-line-inner" data-aos="fade-up" data-aos-delay="200">Equilíbrio</span>
                        </span>
                        <span class="title-line">
                            <span class="title-line-inner" data-aos="fade-up" data-aos-delay="350">entre produção</span>
                        </span>
                        <span class="title-line">
                            <span class="title-line-inner title-gradient" data-aos="fade-up" data-aos-delay="500">e meio ambiente</span>
                        </span>
                    </h1>
                    
                    <p class="hero-description-master" data-aos="fade-up" data-aos-delay="650">
                        O futuro da agricultura é regenerativo, inteligente e conectado. 
                        Unimos <span class="highlight">inteligência artificial</span>, 
                        <span class="highlight">biotecnologia de ponta</span> e 
                        <span class="highlight">práticas ancestrais</span> para alimentar 
                        o mundo sem esgotar o planeta.
                    </p>
                    
                    <div class="hero-cta-group-master" data-aos="fade-up" data-aos-delay="800">
                        <a href="#jogo" class="btn-primary-master">
                            <span>Jogar Memória Verde</span>
                            <i class="fas fa-arrow-right"></i>
                            <span class="btn-shine"></span>
                        </a>
                        <a href="#impacto" class="btn-outline-master">
                            <span>Descobrir Impacto</span>
                            <i class="fas fa-chart-simple"></i>
                        </a>
                        <a href="#cases" class="btn-ghost-master">
                            <span>Ver Cases</span>
                            <i class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                    
                    <div class="hero-stats-master" data-aos="fade-up" data-aos-delay="1000">
                        <div class="stat-item-master">
                            <div class="stat-icon"><i class="fas fa-cloud-rain"></i></div>
                            <div class="stat-content">
                                <div class="stat-value-master">
                                    <span class="counter-premium" data-target="42">0</span>
                                    <span class="stat-unit">%</span>
                                </div>
                                <div class="stat-label-master">Redução CO₂</div>
                                <div class="stat-trend up"><i class="fas fa-arrow-up"></i> 12% vs 2024</div>
                            </div>
                        </div>
                        <div class="stat-item-master">
                            <div class="stat-icon"><i class="fas fa-leaf"></i></div>
                            <div class="stat-content">
                                <div class="stat-value-master">
                                    <span class="counter-premium" data-target="65">0</span>
                                    <span class="stat-unit">%</span>
                                </div>
                                <div class="stat-label-master">Biodiversidade</div>
                                <div class="stat-trend up"><i class="fas fa-arrow-up"></i> 18% ao ano</div>
                            </div>
                        </div>
                        <div class="stat-item-master">
                            <div class="stat-icon"><i class="fas fa-water"></i></div>
                            <div class="stat-content">
                                <div class="stat-value-master">
                                    <span class="counter-premium" data-target="98">0</span>
                                    <span class="stat-unit">%</span>
                                </div>
                                <div class="stat-label-master">Água reutilizada</div>
                                <div class="stat-trend up"><i class="fas fa-arrow-up"></i> 5% vs 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="hero-visual-master" data-aos="fade-left" data-aos-delay="300">
                    <div class="globe-3d-premium">
                        <div class="globe-core"></div>
                        <div class="globe-core-inner"></div>
                        <div class="globe-rings"></div>
                        <div class="globe-rings-2"></div>
                        <div class="globe-atmosphere"></div>
                        <div class="floating-orbit">
                            <div class="orbit-item" data-speed="1"><i class="fas fa-leaf"></i></div>
                            <div class="orbit-item" data-speed="1.5"><i class="fas fa-seedling"></i></div>
                            <div class="orbit-item" data-speed="0.8"><i class="fas fa-tint"></i></div>
                            <div class="orbit-item" data-speed="1.2"><i class="fas fa-sun"></i></div>
                            <div class="orbit-item" data-speed="0.9"><i class="fas fa-tree"></i></div>
                            <div class="orbit-item" data-speed="1.3"><i class="fas fa-cloud-rain"></i></div>
                        </div>
                        <div class="globe-particles">
                            <span></span><span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="scroll-indicator-premium">
                <span class="scroll-text">Role para explorar</span>
                <div class="scroll-icon-wrapper">
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="scroll-line"></div>
            </div>
        </section>

        <!-- ===== SEÇÃO TECNOLOGIAS COM TABS AVANÇADAS ===== -->
        <section id="tecnologias" class="technologies-premium">
            <div class="section-header-premium" data-aos="fade-up">
                <span class="section-subtitle-premium">
                    <i class="fas fa-flask"></i>
                    Inovação no Campo
                    <i class="fas fa-microchip"></i>
                </span>
                <h2 class="section-title-premium">
                    Tecnologias que 
                    <span class="title-gradient">Transformam</span>
                    <span class="title-decoration">o Agro</span>
                </h2>
                <p class="section-description-premium">
                    Soluções integradas que maximizam a produtividade enquanto 
                    regeneram ecossistemas inteiros. Da semente à colheita, 
                    tecnologia e natureza em perfeita harmonia.
                </p>
            </div>
            
            <div class="tabs-premium-container">
                <div class="tabs-nav-premium" data-aos="fade-up" data-aos-delay="100">
                    <button class="tab-btn-premium active" data-tab="tab1">
                        <i class="fas fa-satellite"></i>
                        <span>Monitoramento</span>
                        <span class="tab-badge">IA</span>
                    </button>
                    <button class="tab-btn-premium" data-tab="tab2">
                        <i class="fas fa-robot"></i>
                        <span>Automação</span>
                        <span class="tab-badge">Robótica</span>
                    </button>
                    <button class="tab-btn-premium" data-tab="tab3">
                        <i class="fas fa-dna"></i>
                        <span>Biotecnologia</span>
                        <span class="tab-badge">Bio</span>
                    </button>
                    <button class="tab-btn-premium" data-tab="tab4">
                        <i class="fas fa-water"></i>
                        <span>Irrigação 4.0</span>
                        <span class="tab-badge">IoT</span>
                    </button>
                </div>
                
                <!-- Tab 1 -->
                <div class="tab-content-premium active" id="tab1">
                    <div class="tab-grid-premium">
                        <div class="tab-info-premium" data-aos="fade-right">
                            <div class="tab-icon"><i class="fas fa-satellite"></i></div>
                            <h3>Satélites e Drones de Precisão</h3>
                            <div class="tab-tags">
                                <span>NDVI</span>
                                <span>Multiespectral</span>
                                <span>Machine Learning</span>
                            </div>
                            <p>Monitoramento em tempo real da saúde da lavoura, índice de vegetação (NDVI) e estresse hídrico. Nossa IA processa imagens de satélite e drones para detectar problemas antes que afetem a produtividade.</p>
                            <ul class="feature-list-premium">
                                <li><i class="fas fa-check-circle"></i> Mapeamento multiespectral de alta resolução (5cm/pixel)</li>
                                <li><i class="fas fa-check-circle"></i> Alertas preditivos de pragas e doenças com 95% de precisão</li>
                                <li><i class="fas fa-check-circle"></i> Aplicação localizada de defensivos biológicos (redução de 40%)</li>
                                <li><i class="fas fa-check-circle"></i> Análise preditiva de safra com IA (precisão de 92%)</li>
                            </ul>
                            <div class="tab-stats-mini">
                                <div class="mini-stat">
                                    <span class="mini-value">30%</span>
                                    <span class="mini-label">Redução de insumos</span>
                                </div>
                                <div class="mini-stat">
                                    <span class="mini-value">24/7</span>
                                    <span class="mini-label">Monitoramento</span>
                                </div>
                            </div>
                        </div>
                        <div class="tab-visual-premium" data-aos="fade-left">
                            <div class="visual-wrapper">
                                <img src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Drone agrícola">
                                <div class="visual-overlay"></div>
                                <div class="visual-badge">
                                    <i class="fas fa-eye"></i>
                                    <span>Visão Computacional</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Tab 2 -->
                <div class="tab-content-premium" id="tab2">
                    <div class="tab-grid-premium">
                        <div class="tab-info-premium" data-aos="fade-right">
                            <div class="tab-icon"><i class="fas fa-robot"></i></div>
                            <h3>Robôs Colaborativos Autônomos</h3>
                            <div class="tab-tags">
                                <span>SLAM</span>
                                <span>ROS2</span>
                                <span>Computer Vision</span>
                            </div>
                            <p>Máquinas inteligentes que plantam, capinam e colhem com precisão milimétrica 24 horas por dia. Eliminam a necessidade de herbicidas e reduzem drasticamente a compactação do solo.</p>
                            <ul class="feature-list-premium">
                                <li><i class="fas fa-check-circle"></i> Plantio direto sem revolvimento do solo (preserva microbiota)</li>
                                <li><i class="fas fa-check-circle"></i> Capina mecânica com visão computacional (99% de precisão)</li>
                                <li><i class="fas fa-check-circle"></i> Colheita seletiva no ponto ideal de maturação</li>
                                <li><i class="fas fa-check-circle"></i> Redução de 90% no uso de herbicidas</li>
                            </ul>
                            <div class="tab-stats-mini">
                                <div class="mini-stat">
                                    <span class="mini-value">90%</span>
                                    <span class="mini-label">Menos herbicidas</span>
                                </div>
                                <div class="mini-stat">
                                    <span class="mini-value">24h</span>
                                    <span class="mini-label">Operação contínua</span>
                                </div>
                            </div>
                        </div>
                        <div class="tab-visual-premium" data-aos="fade-left">
                            <div class="visual-wrapper">
                                <img src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Robô agrícola">
                                <div class="visual-overlay"></div>
                                <div class="visual-badge">
                                    <i class="fas fa-microchip"></i>
                                    <span>IA Embarcada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Tab 3 -->
                <div class="tab-content-premium" id="tab3">
                    <div class="tab-grid-premium">
                        <div class="tab-info-premium" data-aos="fade-right">
                            <div class="tab-icon"><i class="fas fa-dna"></i></div>
                            <h3>Bioinsumos e Microbioma do Solo</h3>
                            <div class="tab-tags">
                                <span>Bactérias</span>
                                <span>Fungos</span>
                                <span>Biocontrole</span>
                            </div>
                            <p>Utilização de microrganismos benéficos para substituir fertilizantes químicos e regenerar o microbioma do solo. Uma abordagem que aumenta a produtividade enquanto restaura a saúde do ecossistema.</p>
                            <ul class="feature-list-premium">
                                <li><i class="fas fa-check-circle"></i> Bactérias fixadoras de nitrogênio atmosférico (Azospirillum, Rhizobium)</li>
                                <li><i class="fas fa-check-circle"></i> Fungos micorrízicos que ampliam absorção de nutrientes em 700%</li>
                                <li><i class="fas fa-check-circle"></i> Controle biológico de pragas e nematoides (Trichoderma, Bacillus)</li>
                                <li><i class="fas fa-check-circle"></i> Aumento de 40% na matéria orgânica do solo em 3 anos</li>
                            </ul>
                            <div class="tab-stats-mini">
                                <div class="mini-stat">
                                    <span class="mini-value">100%</span>
                                    <span class="mini-label">Orgânico</span>
                                </div>
                                <div class="mini-stat">
                                    <span class="mini-value">+40%</span>
                                    <span class="mini-label">Matéria orgânica</span>
                                </div>
                            </div>
                        </div>
                        <div class="tab-visual-premium" data-aos="fade-left">
                            <div class="visual-wrapper">
                                <img src="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Laboratório biotecnologia">
                                <div class="visual-overlay"></div>
                                <div class="visual-badge">
                                    <i class="fas fa-flask"></i>
                                    <span>Biotecnologia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Tab 4 -->
                <div class="tab-content-premium" id="tab4">
                    <div class="tab-grid-premium">
                        <div class="tab-info-premium" data-aos="fade-right">
                            <div class="tab-icon"><i class="fas fa-water"></i></div>
                            <h3>Irrigação Inteligente com IoT</h3>
                            <div class="tab-tags">
                                <span>IoT</span>
                                <span>Sensores</span>
                                <span>Big Data</span>
                            </div>
                            <p>Sensores de umidade do solo conectados à internet que acionam a irrigação apenas quando e onde necessário, com água de reuso tratada por energia solar.</p>
                            <ul class="feature-list-premium">
                                <li><i class="fas fa-check-circle"></i> Economia de até 60% de água com irrigação por gotejamento de precisão</li>
                                <li><i class="fas fa-check-circle"></i> Fertirrigação inteligente com biofertilizantes líquidos</li>
                                <li><i class="fas fa-check-circle"></i> Previsão meteorológica integrada por IA (precisão de 94%)</li>
                                <li><i class="fas fa-check-circle"></i> Monitoramento em tempo real via aplicativo mobile</li>
                            </ul>
                            <div class="tab-stats-mini">
                                <div class="mini-stat">
                                    <span class="mini-value">60%</span>
                                    <span class="mini-label">Economia de água</span>
                                </div>
                                <div class="mini-stat">
                                    <span class="mini-value">+30%</span>
                                    <span class="mini-label">Produtividade</span>
                                </div>
                            </div>
                        </div>
                        <div class="tab-visual-premium" data-aos="fade-left">
                            <div class="visual-wrapper">
                                <img src="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Irrigação inteligente">
                                <div class="visual-overlay"></div>
                                <div class="visual-badge">
                                    <i class="fas fa-wifi"></i>
                                    <span>IoT Conectado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== SEÇÃO IMPACTO COM MÉTRICAS AVANÇADAS ===== -->
        <section id="impacto" class="impact-premium">
            <div class="impact-bg-pattern"></div>
            
            <div class="section-header-premium" data-aos="fade-up">
                <span class="section-subtitle-premium">
                    <i class="fas fa-chart-bar"></i>
                    Resultados Mensuráveis
                    <i class="fas fa-trophy"></i>
                </span>
                <h2 class="section-title-premium">
                    O Impacto do 
                    <span class="title-gradient">Agro Sustentável</span>
                </h2>
                <p class="section-description-premium">
                    Dados reais de mais de 500 propriedades que adotaram práticas 
                    regenerativas nos últimos 5 anos. Resultados comprovados 
                    por auditoria independente.
                </p>
            </div>
            
            <div class="metrics-grid-premium">
                <div class="metric-card-premium" data-aos="flip-left" data-aos-delay="0">
                    <div class="metric-glow"></div>
                    <div class="metric-icon-premium">
                        <i class="fas fa-cloud-rain"></i>
                    </div>
                    <div class="metric-number-premium">
                        <span class="counter-premium" data-target="1280">0</span>
                        <span class="metric-unit">mi m³</span>
                    </div>
                    <div class="metric-label-premium">Água economizada (anual)</div>
                    <div class="metric-trend-premium trend-up">
                        <i class="fas fa-arrow-up"></i> +22% vs 2024
                    </div>
                    <div class="metric-description">
                        Equivalente ao consumo de 8 milhões de pessoas
                    </div>
                </div>
                
                <div class="metric-card-premium" data-aos="flip-left" data-aos-delay="100">
                    <div class="metric-glow"></div>
                    <div class="metric-icon-premium">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div class="metric-number-premium">
                        <span class="counter-premium" data-target="350">0</span>
                        <span class="metric-unit">mil ha</span>
                    </div>
                    <div class="metric-label-premium">Áreas restauradas</div>
                    <div class="metric-trend-premium trend-up">
                        <i class="fas fa-arrow-up"></i> +18% ao ano
                    </div>
                    <div class="metric-description">
                        Equivalente a 490 mil campos de futebol
                    </div>
                </div>
                
                <div class="metric-card-premium" data-aos="flip-left" data-aos-delay="200">
                    <div class="metric-glow"></div>
                    <div class="metric-icon-premium">
                        <i class="fas fa-wheat-awn"></i>
                    </div>
                    <div class="metric-number-premium">
                        <span class="counter-premium" data-target="42">0</span>
                        <span class="metric-unit">%</span>
                    </div>
                    <div class="metric-label-premium">Aumento de produtividade</div>
                    <div class="metric-trend-premium trend-up">
                        <i class="fas fa-arrow-up"></i> Média nacional
                    </div>
                    <div class="metric-description">
                        Em algumas culturas, aumento de até 85%
                    </div>
                </div>
                
                <div class="metric-card-premium" data-aos="flip-left" data-aos-delay="300">
                    <div class="metric-glow"></div>
                    <div class="metric-icon-premium">
                        <i class="fas fa-bug"></i>
                    </div>
                    <div class="metric-number-premium">
                        <span class="counter-premium" data-target="67">0</span>
                        <span class="metric-unit">%</span>
                    </div>
                    <div class="metric-label-premium">Menos defensivos</div>
                    <div class="metric-trend-premium trend-down">
                        <i class="fas fa-arrow-down"></i> Redução drástica
                    </div>
                    <div class="metric-description">
                        Controle biológico substitui químicos
                    </div>
                </div>
                
                <div class="metric-card-premium" data-aos="flip-left" data-aos-delay="400">
                    <div class="metric-glow"></div>
                    <div class="metric-icon-premium">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <div class="metric-number-premium">
                        <span class="counter-premium" data-target="1250">0</span>
                        <span class="metric-unit">mil t</span>
                    </div>
                    <div class="metric-label-premium">CO₂ sequestrado</div>
                    <div class="metric-trend-premium trend-up">
                        <i class="fas fa-arrow-up"></i> +31% ao ano
                    </div>
                    <div class="metric-description">
                        Carbono capturado no solo
                    </div>
                </div>
                
                <div class="metric-card-premium" data-aos="flip-left" data-aos-delay="500">
                    <div class="metric-glow"></div>
                    <div class="metric-icon-premium">
                        <i class="fas fa-tractor"></i>
                    </div>
                    <div class="metric-number-premium">
                        <span class="counter-premium" data-target="580">0</span>
                        <span class="metric-unit"></span>
                    </div>
                    <div class="metric-label-premium">Fazendas certificadas</div>
                    <div class="metric-trend-premium trend-up">
                        <i class="fas fa-arrow-up"></i> +45% em 2025
                    </div>
                    <div class="metric-description">
                        Selo AgroForte de Sustentabilidade
                    </div>
                </div>
            </div>
            
            <!-- Gráfico de impacto visual -->
            <div class="impact-chart" data-aos="fade-up">
                <div class="chart-container">
                    <h3>Evolução dos Indicadores (2020-2025)</h3>
                    <div class="chart-bars">
                        <div class="chart-bar-item">
                            <div class="bar-label">Produtividade</div>
                            <div class="bar-wrapper">
                                <div class="bar-fill" style="--target: 142"></div>
                            </div>
                            <div class="bar-value">+42%</div>
                        </div>
                        <div class="chart-bar-item">
                            <div class="bar-label">Uso de Água</div>
                            <div class="bar-wrapper">
                                <div class="bar-fill negative" style="--target: 60"></div>
                            </div>
                            <div class="bar-value">-60%</div>
                        </div>
                        <div class="chart-bar-item">
                            <div class="bar-label">Biodiversidade</div>
                            <div class="bar-wrapper">
                                <div class="bar-fill" style="--target: 165"></div>
                            </div>
                            <div class="bar-value">+65%</div>
                        </div>
                        <div class="chart-bar-item">
                            <div class="bar-label">Emissões CO₂</div>
                            <div class="bar-wrapper">
                                <div class="bar-fill negative" style="--target: 42"></div>
                            </div>
                            <div class="bar-value">-42%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== SEÇÃO JOGO DA MEMÓRIA 3D ===== -->
        <section id="jogo" class="game-premium">
            <div class="game-bg-particles"></div>
            
            <div class="section-header-premium" data-aos="fade-up">
                <span class="section-subtitle-premium">
                    <i class="fas fa-gamepad"></i>
                    Desafio Verde
                    <i class="fas fa-puzzle-piece"></i>
                </span>
                <h2 class="section-title-premium">
                    Jogo da 
                    <span class="title-gradient">Memória Sustentável</span>
                </h2>
                <p class="section-description-premium">
                    Encontre os pares e descubra os ícones do agro regenerativo. 
                    Treine sua memória enquanto aprende sobre sustentabilidade.
                </p>
            </div>
            
            <div class="game-container-premium" data-aos="zoom-in" data-aos-duration="800">
                <div class="game-header-premium">
                    <div class="game-logo">
                        <i class="fas fa-leaf"></i>
                        <span>Agro<span>Memory</span></span>
                    </div>
                    <div class="game-stats-premium">
                        <div class="stat-block-premium">
                            <i class="fas fa-check-double"></i>
                            <span>Pares: <span id="pairs-matched-display">0</span>/4</span>
                        </div>
                        <div class="stat-block-premium">
                            <i class="fas fa-brain"></i>
                            <span>Tentativas: <span id="attempts-display">0</span></span>
                        </div>
                        <div class="stat-block-premium">
                            <i class="fas fa-trophy"></i>
                            <span>Recorde: <span id="best-score-display">—</span></span>
                        </div>
                        <div class="stat-block-premium">
                            <i class="fas fa-star"></i>
                            <span>Nível: <span id="level-display">1</span></span>
                        </div>
                    </div>
                </div>
                
                <div id="memory-board" class="memory-board-premium">
                    <!-- Gerado via JavaScript -->
                </div>
                
                <div class="game-controls-premium">
                    <button id="reset-game-btn" class="btn-game-premium">
                        <i class="fas fa-rotate-right"></i>
                        <span>Reiniciar Jogo</span>
                        <span class="btn-shine"></span>
                    </button>
                    
                    <div class="game-hint-premium">
                        <i class="fas fa-lightbulb"></i>
                        <span>Pares: 🌱 🌽 💧 ☀️</span>
                    </div>
                    
                    <button id="shuffle-game-btn" class="btn-game-secondary">
                        <i class="fas fa-shuffle"></i>
                        <span>Embaralhar</span>
                    </button>
                </div>
                
                <div class="game-progress">
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" id="game-progress-bar"></div>
                    </div>
                    <div class="progress-text">
                        <span>Progresso</span>
                        <span id="progress-percentage">0%</span>
                    </div>
                </div>
            </div>
            
            <!-- Dicas do jogo -->
            <div class="game-tips" data-aos="fade-up">
                <div class="tip-card">
                    <i class="fas fa-seedling"></i>
                    <span>🌱 = Semente da sustentabilidade</span>
                </div>
                <div class="tip-card">
                    <i class="fas fa-wheat-awn"></i>
                    <span>🌽 = Milho regenerativo</span>
                </div>
                <div class="tip-card">
                    <i class="fas fa-droplet"></i>
                    <span>💧 = Água preservada</span>
                </div>
                <div class="tip-card">
                    <i class="fas fa-sun"></i>
                    <span>☀️ = Energia solar</span>
                </div>
            </div>
        </section>

        <!-- ===== SEÇÃO CASES DE SUCESSO ===== -->
        <section id="cases" class="cases-premium">
            <div class="section-header-premium" data-aos="fade-up">
                <span class="section-subtitle-premium">
                    <i class="fas fa-star"></i>
                    Histórias Reais
                    <i class="fas fa-medal"></i>
                </span>
                <h2 class="section-title-premium">
                    Cases de <span class="title-gradient">Sucesso</span>
                </h2>
                <p class="section-description-premium">
                    Conheça produtores que transformaram suas propriedades com 
                    práticas sustentáveis e hoje colhem resultados extraordinários.
                </p>
            </div>
            
            <div class="cases-grid">
                <div class="case-card-premium" data-aos="fade-up" data-aos-delay="0">
                    <div class="case-image">
                        <img src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fazenda sustentável">
                        <div class="case-category">Agricultura Regenerativa</div>
                    </div>
                    <div class="case-content">
                        <h3>Fazenda Esperança</h3>
                        <p class="case-location"><i class="fas fa-map-pin"></i> Mato Grosso, Brasil</p>
                        <p class="case-description">
                            "Implementamos plantio direto e rotação de culturas. Em 3 anos, 
                            nossa produtividade aumentou 45% e reduzimos custos com insumos em 60%."
                        </p>
                        <div class="case-stats">
                            <div class="case-stat">
                                <span class="stat-value">+45%</span>
                                <span class="stat-label">Produtividade</span>
                            </div>
                            <div class="case-stat">
                                <span class="stat-value">-60%</span>
                                <span class="stat-label">Custos</span>
                            </div>
                        </div>
                        <div class="case-author">
                            <i class="fas fa-user-circle"></i>
                            <span>João Carlos Mendes · Produtor Rural</span>
                        </div>
                    </div>
                </div>
                
                <div class="case-card-premium" data-aos="fade-up" data-aos-delay="150">
                    <div class="case-image">
                        <img src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Agricultura familiar">
                        <div class="case-category">Agricultura Familiar</div>
                    </div>
                    <div class="case-content">
                        <h3>Sítio Bela Vista</h3>
                        <p class="case-location"><i class="fas fa-map-pin"></i> Minas Gerais, Brasil</p>
                        <p class="case-description">
                            "Com a irrigação inteligente e bioinsumos, economizamos 70% de água 
                            e produzimos alimentos 100% orgânicos para a comunidade local."
                        </p>
                        <div class="case-stats">
                            <div class="case-stat">
                                <span class="stat-value">-70%</span>
                                <span class="stat-label">Água</span>
                            </div>
                            <div class="case-stat">
                                <span class="stat-value">100%</span>
                                <span class="stat-label">Orgânico</span>
                            </div>
                        </div>
                        <div class="case-author">
                            <i class="fas fa-user-circle"></i>
                            <span>Maria Silva · Agricultora Familiar</span>
                        </div>
                    </div>
                </div>
                
                <div class="case-card-premium" data-aos="fade-up" data-aos-delay="300">
                    <div class="case-image">
                        <img src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tecnologia no campo">
                        <div class="case-category">AgTech</div>
                    </div>
                    <div class="case-content">
                        <h3>AgroTech Inovação</h3>
                        <p class="case-location"><i class="fas fa-map-pin"></i> São Paulo, Brasil</p>
                        <p class="case-description">
                            "Nossos robôs autônomos reduziram o uso de herbicidas em 95% e 
                            aumentaram a precisão do plantio, gerando economia de R$ 500 mil/ano."
                        </p>
                        <div class="case-stats">
                            <div class="case-stat">
                                <span class="stat-value">-95%</span>
                                <span class="stat-label">Herbicidas</span>
                            </div>
                            <div class="case-stat">
                                <span class="stat-value">R$500k</span>
                                <span class="stat-label">Economia/ano</span>
                            </div>
                        </div>
                        <div class="case-author">
                            <i class="fas fa-user-circle"></i>
                            <span>Ricardo Oliveira · Diretor de Inovação</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== SEÇÃO CONTATO E NEWSLETTER ===== -->
        <section id="contato" class="contact-premium">
            <div class="contact-container-premium" data-aos="fade-up">
                <div class="contact-info-premium">
                    <h2>
                        Vamos cultivar o 
                        <span class="title-gradient">futuro juntos</span>?
                    </h2>
                    <p class="contact-description">
                        Receba estudos de caso, novidades e práticas sustentáveis 
                        diretamente no seu e-mail. Junte-se à revolução verde que 
                        está transformando a agricultura mundial.
                    </p>
                    
                    <form class="newsletter-form-premium" id="newsletterForm">
                        <div class="input-wrapper">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Seu melhor e-mail" required>
                        </div>
                        <button type="submit" class="submit-btn">
                            <span>Inscrever</span>
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                    
                    <div class="contact-features">
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>Conteúdo exclusivo semanal</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>Acesso a webinars e eventos</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>E-books e materiais gratuitos</span>
                        </div>
                    </div>
                    
                    <div class="social-links-premium">
                        <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                            <span class="social-tooltip">LinkedIn</span>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-instagram"></i>
                            <span class="social-tooltip">Instagram</span>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-youtube"></i>
                            <span class="social-tooltip">YouTube</span>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-x-twitter"></i>
                            <span class="social-tooltip">X (Twitter)</span>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-whatsapp"></i>
                            <span class="social-tooltip">WhatsApp</span>
                        </a>
                    </div>
                </div>
                
                <div class="contact-illustration-premium">
                    <div class="illustration-wrapper">
                        <i class="fas fa-hand-holding-heart"></i>
                        <div class="illustration-particles">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <div class="illustration-text">
                            <span>+10.000</span>
                            <span>produtores conectados</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- ============================================ -->
    <!-- FOOTER PREMIUM                               -->
    <!-- ============================================ -->
    <footer class="footer-premium">
        <div class="footer-grid-premium">
            <div class="footer-brand-premium">
                <div class="footer-logo">
                    <i class="fas fa-seedling"></i>
                    <span>Agro<span>Forte</span></span>
                </div>
                <p class="footer-description">
                    Revolucionando a agricultura com tecnologia, sustentabilidade 
                    e respeito à natureza. O futuro é verde, o futuro é agora.
                </p>
                <div class="footer-certifications">
                    <span><i class="fas fa-certificate"></i> Carbon Trust</span>
                    <span><i class="fas fa-leaf"></i> Rainforest Alliance</span>
                    <span><i class="fas fa-recycle"></i> B Corp</span>
                </div>
            </div>
            
            <div class="footer-links-premium">
                <h4>Navegação</h4>
                <ul>
                    <li><a href="#home"><i class="fas fa-chevron-right"></i> Visão Geral</a></li>
                    <li><a href="#tecnologias"><i class="fas fa-chevron-right"></i> Tecnologias</a></li>
                    <li><a href="#impacto"><i class="fas fa-chevron-right"></i> Impacto</a></li>
                    <li><a href="#jogo"><i class="fas fa-chevron-right"></i> Jogo Verde</a></li>
                    <li><a href="#cases"><i class="fas fa-chevron-right"></i> Cases</a></li>
                </ul>
            </div>
            
            <div class="footer-links-premium">
                <h4>Recursos</h4>
                <ul>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Relatório ESG 2025</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Calculadora de Carbono</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Blog Sustentável</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Webinars</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> E-books Gratuitos</a></li>
                </ul>
            </div>
            
            <div class="footer-links-premium">
                <h4>Institucional</h4>
                <ul>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Sobre Nós</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Carreiras</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Imprensa</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Política de Privacidade</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Termos de Uso</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom-premium">
            <p class="copyright">
                © 2025 AgroForte · Todos os ciclos regenerados. 
                Projetado para um futuro onde produção e natureza coexistem em harmonia.
            </p>
            <div class="footer-badges">
                <span><i class="fas fa-globe-americas"></i> Carbono Negativo</span>
                <span><i class="fas fa-solar-panel"></i> 100% Energia Renovável</span>
                <span><i class="fas fa-recycle"></i> Economia Circular</span>
            </div>
        </div>
    </footer>

    <!-- ============================================ -->
    <!-- SCRIPTS                                      -->
    <!-- ============================================ -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
