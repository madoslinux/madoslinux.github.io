const translations = {
    en: {
        nav: {
            features: "Features",
            desktop: "Desktop",
            hardware: "Hardware",
            download: "Download",
            credits: "Credits",
            roadmap: "Roadmap",
            github: "GitHub"
        },
        hero: {
            badge: "Powered by Ollama and OpenCode",
            tagline: "AI-Orchestrated Arch Linux",
            subtitle: "A Nordic cyberpunk Arch Linux distribution optimized for low-RAM systems, with integrated AI for smart system management. Nord palette, neon glow, synthwave soul.",
            download: "Download madOS",
            viewOnGitHub: "View on GitHub",
            ramUsage: "RAM Usage",
            minRam: "Minimum RAM",
            openSource: "Open Source"
        },
        features: {
            label: "Capabilities",
            title: "Key Features",
            subtitle: "Everything you need in a lightweight, powerful, and retro-futuristic operating system",
            aiIntegration: "Ollama & OpenCode Integration",
            aiIntegrationDesc: "Local AI with Ollama + OpenCode assistant for intelligent system orchestration, code generation, debugging and advanced assistance — pre-installed globally.",
            adaptiveDesktop: "Adaptive Desktop",
            adaptiveDesktopDesc: "Automatic GPU detection at boot — Hyprland with 3D acceleration, Sway with software rendering. Both using Nord theme at 300MB RAM.",
            lowRam: "Low RAM Optimized",
            lowRamDesc: "Designed for 1.9GB systems with ZRAM, EarlyOOM and aggressive kernel tuning.",
            multiGpu: "Multi-GPU",
            multiGpuDesc: "Intel, AMD, and NVIDIA display drivers pre-installed for broad hardware support.",
            persistentUsb: "Persistent USB",
            persistentUsbDesc: "Create a labeled partition and your changes survive reboots. Works with Ventoy too.",
            gtkInstaller: "GTK Installer",
            gtkInstallerDesc: "Beautiful graphical installer with Nord theme, real-time progress and boot splash.",
            devReady: "Dev Ready",
            devReadyDesc: "Node.js, npm, Git, VS Code and Oh My Zsh pre-installed out of the box.",
            languages: "9 Languages",
            languagesDesc: "English, Spanish, French, Portuguese, Italian, German, Chinese, Japanese and Korean with auto keyboard layout.",
            wifi: "WiFi Built-in",
            wifiDesc: "Network scanning and WPA2/WPA3 connection directly from the installer.",
            secure: "Secure by Default",
            secureDesc: "Locked root, dual UEFI bootloader, secure passwords and per-user isolation.",
            steamDeck: "Steam Deck Ready",
            steamDeckDesc: "Full gamepad-to-WM bindings for Steam Deck. Manage windows, workspaces and media with buttons and back paddles — with automatic game inhibition.",
            xbox: "Xbox Controller",
            xboxDesc: "Xbox Series gamepad support with LT/RT media combos, Share button screenshot and auto-profile detection — zero configuration needed."
        },
        showcase: {
            label: "Environment",
            title: "Neon Nordic Desktop",
            subtitle: "Auto-detected compositor with Nordic cyberpunk aesthetics — keyboard-driven, lightweight, beautiful"
        },
        hardware: {
            label: "Performance",
            title: "Target Hardware",
            subtitle: "madOS breathes neon life into modest hardware — cyberpunk performance on any machine",
            cpu: "CPU",
            cpuDesc: "Intel Atom / AMD or equivalent (x86_64)",
            ram: "RAM",
            ramDesc: "1.9GB minimum (optimized for limited memory)",
            gpu: "GPU",
            gpuDesc: "Intel, NVIDIA or AMD — auto-detected with compute support",
            storage: "Storage",
            storageDesc: "10GB minimum (~5GB ISO, expands when installed)",
            boot: "Boot",
            bootDesc: "UEFI and BIOS support",
            monitor: "System Monitor",
            ramInUse: "RAM in use",
            cpuAvg: "CPU (average)",
            zram: "ZRAM Compression",
            disk: "Disk"
        },
        download: {
            label: "Get It",
            title: "Download madOS",
            subtitle: "Jack in and start your madOS experience today",
            development: "Development",
            gettingStarted: "Getting Started",
            step1: "Download",
            step1Desc: "Get the latest ISO from Internet Archive or GitHub Releases",
            step2: "Flash USB",
            step2Code: "dd if=madOS-*.iso of=/dev/sdX bs=4M",
            step2Hint: "or use Ventoy / balenaEtcher",
            step3: "Boot & Go",
            step3Desc: "Desktop loads automatically — use live or run the installer",
            step4: "Ready!",
            step4Desc: "AI assistant, dev tools & optional persistent USB storage"
        },
        credits: {
            label: "Acknowledgments",
            title: "Credits",
            subtitle: "Open source projects and content that power this cyberpunk dream"
        },
        roadmap: {
            label: "Development",
            title: "Roadmap",
            subtitle: "Track our progress and upcoming features",
            viewProject: "View Project Roadmap"
        },
        footer: {
            brand: "AI-Orchestrated Arch Linux // Nordic Cyberpunk & Synthwave",
            project: "Project",
            resources: "Resources",
            community: "Community",
            license: "© 2026 madOS. Licensed under GPL-3.0."
        }
    },
    es: {
        nav: {
            features: "Características",
            desktop: "Escritorio",
            hardware: "Hardware",
            download: "Descargar",
            credits: "Créditos",
            roadmap: "Hoja de ruta",
            github: "GitHub"
        },
        hero: {
            badge: "Impulsado por Ollama y OpenCode",
            tagline: "Arch Linux orquestado por IA",
            subtitle: "Una distribución Arch Linux cyberpunk nórdica optimizada para sistemas de baja RAM, con IA integrada para gestión inteligente del sistema. Paleta Nord, resplandor neón, alma synthwave.",
            download: "Descargar madOS",
            viewOnGitHub: "Ver en GitHub",
            ramUsage: "Uso de RAM",
            minRam: "RAM mínima",
            openSource: "Código abierto"
        },
        features: {
            label: "Capacidades",
            title: "Características principales",
            subtitle: "Todo lo que necesitas en un sistema operativo ligero, potente y retro-futurista",
            aiIntegration: "Integración Ollama & OpenCode",
            aiIntegrationDesc: "IA local con asistente Ollama + OpenCode para orquestación inteligente del sistema, generación de código, depuración y asistencia avanzada — preinstalado globalmente.",
            adaptiveDesktop: "Escritorio adaptativo",
            adaptiveDesktopDesc: "Detección automática de GPU al inicio — Hyprland con aceleración 3D, Sway con renderizado por software. Ambos con tema Nord a 300MB de RAM.",
            lowRam: "Optimizado para baja RAM",
            lowRamDesc: "Diseñado para sistemas de 1.9GB con ZRAM, EarlyOOM y ajuste agresivo del kernel.",
            multiGpu: "Multi-GPU",
            multiGpuDesc: "Controladores de pantalla Intel, AMD y NVIDIA preinstalados para amplio soporte de hardware.",
            persistentUsb: "USB persistente",
            persistentUsbDesc: "Crea una partición etiquetada y tus cambios surviven a los reinicios. Funciona con Ventoy también.",
            gtkInstaller: "Instalador GTK",
            gtkInstallerDesc: "Hermoso instalador gráfico con tema Nord, progreso en tiempo real y pantalla de inicio.",
            devReady: "Listo para desarrollo",
            devReadyDesc: "Node.js, npm, Git, VS Code y Oh My Zsh preinstalados de fábrica.",
            languages: "9 Idiomas",
            languagesDesc: "Inglés, español, francés, portugués, italiano, alemán, chino, japonés y coreano con diseño de teclado automático.",
            wifi: "WiFi incorporado",
            wifiDesc: "Escaneo de red y conexión WPA2/WPA3 directamente desde el instalador.",
            secure: "Seguro por defecto",
            secureDesc: "Root bloqueado, gestor de arranque UEFI dual, contraseñas seguras y aislamiento por usuario.",
            steamDeck: "Compatible con Steam Deck",
            steamDeckDesc: "Enlaces completos de gamepad a WM para Steam Deck. Gestiona ventanas, espacios de trabajo y medios con botones y palancas traseras — con inhibición automática de juegos.",
            xbox: "Controlador Xbox",
            xboxDesc: "Soporte para mando Xbox Series con combos LT/RT de medios, botón Share para captura automática y detección de perfil — cero configuración necesaria."
        },
        showcase: {
            label: "Entorno",
            title: "Escritorio nórdico neón",
            subtitle: "Compositor auto-detectado con estética cyberpunk nórdica — controlado por teclado, ligero, hermoso"
        },
        hardware: {
            label: "Rendimiento",
            title: "Hardware objetivo",
            subtitle: "madOS da vida neón a hardware modesto — rendimiento cyberpunk en cualquier máquina",
            cpu: "CPU",
            cpuDesc: "Intel Atom / AMD o equivalente (x86_64)",
            ram: "RAM",
            ramDesc: "1.9GB mínimo (optimizado para memoria limitada)",
            gpu: "GPU",
            gpuDesc: "Intel, NVIDIA o AMD — auto-detectado con soporte de cómputo",
            storage: "Almacenamiento",
            storageDesc: "10GB mínimo (~5GB ISO, se expande al instalar)",
            boot: "Arranque",
            bootDesc: "Soporte UEFI y BIOS",
            monitor: "Monitor del sistema",
            ramInUse: "RAM en uso",
            cpuAvg: "CPU (promedio)",
            zram: "Compresión ZRAM",
            disk: "Disco"
        },
        download: {
            label: "Obtenerlo",
            title: "Descargar madOS",
            subtitle: "Conecta y comienza tu experiencia madOS hoy",
            development: "Desarrollo",
            gettingStarted: "Comenzando",
            step1: "Descargar",
            step1Desc: "Obtén el ISO más reciente desde Internet Archive o GitHub Releases",
            step2: "Flashing USB",
            step2Code: "dd if=madOS-*.iso of=/dev/sdX bs=4M",
            step2Hint: "o usa Ventoy / balenaEtcher",
            step3: "Arrancar y listo",
            step3Desc: "El escritorio se carga automáticamente — úsalo en vivo o ejecuta el instalador",
            step4: "¡Listo!",
            step4Desc: "Asistente IA, herramientas de desarrollo y almacenamiento USB persistente opcional"
        },
        credits: {
            label: "Agradecimientos",
            title: "Créditos",
            subtitle: "Proyectos de código abierto y contenido que alimentan este sueño cyberpunk"
        },
        roadmap: {
            label: "Desarrollo",
            title: "Hoja de ruta",
            subtitle: "Sigue nuestro progreso y funciones próximas",
            viewProject: "Ver hoja de ruta del proyecto"
        },
        footer: {
            brand: "Arch Linux orquestado por IA // Cyberpunk nórdico y Synthwave",
            project: "Proyecto",
            resources: "Recursos",
            community: "Comunidad",
            license: "© 2026 madOS. Licenciado bajo GPL-3.0."
        }
    },
    fr: {
        nav: {
            features: "Fonctionnalités",
            desktop: "Bureau",
            hardware: "Matériel",
            download: "Télécharger",
            credits: "Crédits",
            roadmap: "Feuille de route",
            github: "GitHub"
        },
        hero: {
            badge: "Propulsé par Ollama et OpenCode",
            tagline: "Arch Linux orchestré par IA",
            subtitle: "Une distribution Arch Linux cyberpunk nordique optimisée pour les systèmes à faible RAM, avec IA intégrée pour une gestion intelligente du système. Palette Nord, lueur néon, âme synthwave.",
            download: "Télécharger madOS",
            viewOnGitHub: "Voir sur GitHub",
            ramUsage: "Utilisation RAM",
            minRam: "RAM minimale",
            openSource: "Open Source"
        },
        features: {
            label: "Capacités",
            title: "Fonctionnalités principales",
            subtitle: "Tout ce dont vous avez besoin dans un système d'exploitation léger, puissant et rétro-futuriste",
            aiIntegration: "Intégration Ollama & OpenCode",
            aiIntegrationDesc: "IA locale avec assistant Ollama + OpenCode pour l'orchestration intelligente du système, génération de code, débogage et assistance avancée — préinstallé globalement.",
            adaptiveDesktop: "Bureau adaptatif",
            adaptiveDesktopDesc: "Détection automatique GPU au démarrage — Hyprland avec accélération 3D, Sway avec rendu logiciel. Les deux avec thème Nord à 300MB de RAM.",
            lowRam: "Optimisé faible RAM",
            lowRamDesc: "Conçu pour les systèmes 1.9GB avec ZRAM, EarlyOOM et ajustement agressif du kernel.",
            multiGpu: "Multi-GPU",
            multiGpuDesc: "Pilotes d'affichage Intel, AMD et NVIDIA préinstallés pour un large support matériel.",
            persistentUsb: "USB persistant",
            persistentUsbDesc: "Créez une partition étiquetée et vos modifications survives aux redémarrages. Fonctionne aussi avec Ventoy.",
            gtkInstaller: "Installateur GTK",
            gtkInstallerDesc: "Bel installateur graphique avec thème Nord, progression en temps réel et écran de démarrage.",
            devReady: "Prêt pour le dev",
            devReadyDesc: "Node.js, npm, Git, VS Code et Oh My Zsh préinstallés.",
            languages: "9 Langues",
            languagesDesc: "Anglais, espagnol, français, portugais, italien, allemand, chinois, japonais et coréen avec disposition clavier automatique.",
            wifi: "WiFi intégré",
            wifiDesc: "Analyse réseau et connexion WPA2/WPA3 directement depuis l'installateur.",
            secure: "Sécurisé par défaut",
            secureDesc: "Root verrouillé, bootloader UEFI double, mots de passe sécurisés et isolation par utilisateur.",
            steamDeck: "Compatible Steam Deck",
            steamDeckDesc: "Liaisons complètes gamepad-vers-WM pour Steam Deck. Gérez fenêtres, espaces de travail et médias avec boutons et palettes arrière — avec inhibition automatique de jeu.",
            xbox: "Manette Xbox",
            xboxDesc: "Support manette Xbox Series avec combos LT/RT médias, bouton Share pour capture et détection automatique de profil — zero configuration."
        },
        showcase: {
            label: "Environnement",
            title: "Bureau nordique néon",
            subtitle: "Compositeur auto-détecté avec esthétique cyberpunk nordique — piloté par clavier, léger, beau"
        },
        hardware: {
            label: "Performance",
            title: "Matériel cible",
            subtitle: "madOS anime de néon le matériel modeste — performance cyberpunk sur n'importe quelle machine",
            cpu: "CPU",
            cpuDesc: "Intel Atom / AMD ou équivalent (x86_64)",
            ram: "RAM",
            ramDesc: "1.9GB minimum (optimisé pour mémoire limitée)",
            gpu: "GPU",
            gpuDesc: "Intel, NVIDIA ou AMD — auto-détecté avec support compute",
            storage: "Stockage",
            storageDesc: "10GB minimum (~5GB ISO, s'étend à l'installation)",
            boot: "Démarrage",
            bootDesc: "Support UEFI et BIOS",
            monitor: "Moniteur système",
            ramInUse: "RAM utilisée",
            cpuAvg: "CPU (moyenne)",
            zram: "Compression ZRAM",
            disk: "Disque"
        },
        download: {
            label: "Obtenir",
            title: "Télécharger madOS",
            subtitle: "Connectez-vous et commencez votre expérience madOS aujourd'hui",
            development: "Développement",
            gettingStarted: "Commencer",
            step1: "Télécharger",
            step1Desc: "Obtenez le dernier ISO depuis Internet Archive ou GitHub Releases",
            step2: "Flashing USB",
            step2Code: "dd if=madOS-*.iso of=/dev/sdX bs=4M",
            step2Hint: "ou utilisez Ventoy / balenaEtcher",
            step3: "Démarrer et go",
            step3Desc: "Le bureau se charge automatiquement — utilisez en live ou lancez l'installateur",
            step4: "Prêt!",
            step4Desc: "Assistant IA, outils de dev et stockage USB persistant optionnel"
        },
        credits: {
            label: "Remerciements",
            title: "Crédits",
            subtitle: "Projets open source et contenu qui alimentent ce rêve cyberpunk"
        },
        roadmap: {
            label: "Développement",
            title: "Feuille de route",
            subtitle: "Suivez notre progression et fonctionnalités à venir",
            viewProject: "Voir la feuille de route du projet"
        },
        footer: {
            brand: "Arch Linux orchestré par IA // Cyberpunk nordique et Synthwave",
            project: "Projet",
            resources: "Ressources",
            community: "Communauté",
            license: "© 2026 madOS. Sous licence GPL-3.0."
        }
    },
    pt: {
        nav: {
            features: "Recursos",
            desktop: "Desktop",
            hardware: "Hardware",
            download: "Baixar",
            credits: "Créditos",
            roadmap: "Roadmap",
            github: "GitHub"
        },
        hero: {
            badge: "Powered by Ollama and OpenCode",
            tagline: "Arch Linux orquestrado por IA",
            subtitle: "Uma distribuição Arch Linux cyberpunk nórdica otimizada para sistemas de baixa RAM, com IA integrada para gerenciamento inteligente do sistema. Paleta Nord, brilho néon, alma synthwave.",
            download: "Baixar madOS",
            viewOnGitHub: "Ver no GitHub",
            ramUsage: "Uso de RAM",
            minRam: "RAM mínima",
            openSource: "Código aberto"
        },
        features: {
            label: "Capacidades",
            title: "Recursos principais",
            subtitle: "Tudo o que você precisa em um sistema operacional leve, poderoso e retro-futurista",
            aiIntegration: "Integração Ollama & OpenCode",
            aiIntegrationDesc: "IA local com assistente Ollama + OpenCode para orquestração inteligente do sistema, geração de código, depuração e assistência avançada — pré-instalado globalmente.",
            adaptiveDesktop: "Desktop adaptativo",
            adaptiveDesktopDesc: "Detecção automática de GPU na inicialização — Hyprland com aceleração 3D, Sway com renderização por software. Ambos com tema Nord a 300MB de RAM.",
            lowRam: "Otimizado para baixa RAM",
            lowRamDesc: "Projetado para sistemas de 1.9GB com ZRAM, EarlyOOM e ajuste agressivo do kernel.",
            multiGpu: "Multi-GPU",
            multiGpuDesc: "Drivers de exibição Intel, AMD e NVIDIA pré-instalados para amplo suporte de hardware.",
            persistentUsb: "USB persistente",
            persistentUsbDesc: "Crie uma partição etiquetada e suas alterações sobrevivem a reinicializações. Funciona com Ventoy também.",
            gtkInstaller: "Instalador GTK",
            gtkInstallerDesc: "Bel instalador gráfico com tema Nord, progresso em tempo real e tela de inicialização.",
            devReady: "Pronto para desenvolvimento",
            devReadyDesc: "Node.js, npm, Git, VS Code e Oh My Zsh pré-instalados.",
            languages: "9 Idiomas",
            languagesDesc: "Inglês, espanhol, francês, português, italiano, alemão, chinês, japonês e coreano com layout de teclado automático.",
            wifi: "WiFi integrado",
            wifiDesc: "Varredura de rede e conexão WPA2/WPA3 diretamente do instalador.",
            secure: "Seguro por padrão",
            secureDesc: "Root bloqueado, bootloader UEFI duplo, senhas seguras e isolamento por usuário.",
            steamDeck: "Compatível com Steam Deck",
            steamDeckDesc: "Enlaces completos gamepad-para-WM para Steam Deck. Gerencie janelas, workspaces e mídia com botões e paddles traseiros — com inibição automática de jogos.",
            xbox: "Controle Xbox",
            xboxDesc: "Suporte para controle Xbox Series com combos LT/RT de mídia, botão Share para captura e detecção automática de perfil — zero configuração."
        },
        showcase: {
            label: "Ambiente",
            title: "Desktop nórdico néon",
            subtitle: "Compositor auto-detectado com estética cyberpunk nórdica — controlado por teclado, leve, bonito"
        },
        hardware: {
            label: "Desempenho",
            title: "Hardware-alvo",
            subtitle: "madOS dá vida néon a hardware modesto — desempenho cyberpunk em qualquer máquina",
            cpu: "CPU",
            cpuDesc: "Intel Atom / AMD ou equivalente (x86_64)",
            ram: "RAM",
            ramDesc: "1.9GB mínimo (otimizado para memória limitada)",
            gpu: "GPU",
            gpuDesc: "Intel, NVIDIA ou AMD — auto-detectado com suporte compute",
            storage: "Armazenamento",
            storageDesc: "10GB mínimo (~5GB ISO, expande na instalação)",
            boot: "Inicialização",
            bootDesc: "Suporte UEFI e BIOS",
            monitor: "Monitor do sistema",
            ramInUse: "RAM em uso",
            cpuAvg: "CPU (média)",
            zram: "Compressão ZRAM",
            disk: "Disco"
        },
        download: {
            label: "Obter",
            title: "Baixar madOS",
            subtitle: "Conecte-se e comece sua experiência madOS hoje",
            development: "Desenvolvimento",
            gettingStarted: "Começando",
            step1: "Baixar",
            step1Desc: "Obtenha o ISO mais recente do Internet Archive ou GitHub Releases",
            step2: "Flash USB",
            step2Code: "dd if=madOS-*.iso of=/dev/sdX bs=4M",
            step2Hint: "ou use Ventoy / balenaEtcher",
            step3: "Iniciar e pronto",
            step3Desc: "O desktop carrega automaticamente — use live ou execute o instalador",
            step4: "Pronto!",
            step4Desc: "Assistente IA, ferramentas de dev e armazenamento USB persistente opcional"
        },
        credits: {
            label: "Agradecimentos",
            title: "Créditos",
            subtitle: "Projetos open source e conteúdo que alimentam este sonho cyberpunk"
        },
        roadmap: {
            label: "Desenvolvimento",
            title: "Roadmap",
            subtitle: "Siga nosso progresso e próximos recursos",
            viewProject: "Ver roadmap do projeto"
        },
        footer: {
            brand: "Arch Linux orquestrado por IA // Cyberpunk nórdico e Synthwave",
            project: "Projeto",
            resources: "Recursos",
            community: "Comunidade",
            license: "© 2026 madOS. Licenciado sob GPL-3.0."
        }
    },
    it: {
        nav: {
            features: "Caratteristiche",
            desktop: "Desktop",
            hardware: "Hardware",
            download: "Scarica",
            credits: "Crediti",
            roadmap: "Roadmap",
            github: "GitHub"
        },
        hero: {
            badge: "Powered by Ollama and OpenCode",
            tagline: "Arch Linux orchestrato da IA",
            subtitle: "Una distribuzione Arch Linux cyberpunk nordica ottimizzata per sistemi a bassa RAM, con IA integrata per la gestione intelligente del sistema. Paletta Nord, bagliore neon, anima synthwave.",
            download: "Scarica madOS",
            viewOnGitHub: "Vedi su GitHub",
            ramUsage: "Utilizzo RAM",
            minRam: "RAM minima",
            openSource: "Open Source"
        },
        features: {
            label: "Capacità",
            title: "Caratteristiche principali",
            subtitle: "Tutto ciò di cui hai bisogno in un sistema operativo leggero, potente e retro-futurista",
            aiIntegration: "Integrazione Ollama & OpenCode",
            aiIntegrationDesc: "IA locale con assistente Ollama + OpenCode per orchestrazione intelligente del sistema, generazione di codice, debug e assistenza avanzata — preinstallato globalmente.",
            adaptiveDesktop: "Desktop adattivo",
            adaptiveDesktopDesc: "Rilevamento automatico GPU all'avvio — Hyprland con accelerazione 3D, Sway con rendering software. Entrambi con tema Nord a 300MB di RAM.",
            lowRam: "Ottimizzato per bassa RAM",
            lowRamDesc: "Progettato per sistemi 1.9GB con ZRAM, EarlyOOM e ottimizzazione aggressiva del kernel.",
            multiGpu: "Multi-GPU",
            multiGpuDesc: "Driver display Intel, AMD e NVIDIA preinstallati per ampio supporto hardware.",
            persistentUsb: "USB persistente",
            persistentUsbDesc: "Crea una partizione etichettata e le tue modifiche sopravvivono ai riavvii. Funziona anche con Ventoy.",
            gtkInstaller: "Installatore GTK",
            gtkInstallerDesc: "Bell'installatore grafico con tema Nord, progresso in tempo reale e schermata di avvio.",
            devReady: "Pronto per lo sviluppo",
            devReadyDesc: "Node.js, npm, Git, VS Code e Oh My Zsh preinstallati.",
            languages: "9 Lingue",
            languagesDesc: "Inglese, spagnolo, francese, portoghese, italiano, tedesco, cinese, giapponese e coreano con layout tastiera automatico.",
            wifi: "WiFi integrato",
            wifiDesc: "Scansione rete e connessione WPA2/WPA3 direttamente dall'installatore.",
            secure: "Sicuro di default",
            secureDesc: "Root bloccato, bootloader UEFI doppio, password sicure e isolamento per utente.",
            steamDeck: "Compatibile con Steam Deck",
            steamDeckDesc: "Associazioni complete gamepad-a-WM per Steam Deck. Gestisci finestre, workspace e media con pulsanti e paddle posteriori — con inibizione automatica dei giochi.",
            xbox: "Controller Xbox",
            xboxDesc: "Supporto controller Xbox Series con combo LT/RT media, pulsante Share per screenshot e rilevamento automatico del profilo — zero configurazione."
        },
        showcase: {
            label: "Ambiente",
            title: "Desktop nordico neon",
            subtitle: "Compositore auto-rilevato con estetica cyberpunk nordica — controllato da tastiera, leggero, bello"
        },
        hardware: {
            label: "Prestazioni",
            title: "Hardware di riferimento",
            subtitle: "madOS dà vita neon all'hardware modesto — prestazioni cyberpunk su qualsiasi macchina",
            cpu: "CPU",
            cpuDesc: "Intel Atom / AMD o equivalente (x86_64)",
            ram: "RAM",
            ramDesc: "1.9GB minimo (ottimizzato per memoria limitata)",
            gpu: "GPU",
            gpuDesc: "Intel, NVIDIA o AMD — auto-rilevato con supporto compute",
            storage: "Archiviazione",
            storageDesc: "10GB minimo (~5GB ISO, si espande all'installazione)",
            boot: "Avvio",
            bootDesc: "Supporto UEFI e BIOS",
            monitor: "Monitor di sistema",
            ramInUse: "RAM in uso",
            cpuAvg: "CPU (media)",
            zram: "Compressione ZRAM",
            disk: "Disco"
        },
        download: {
            label: "Ottenere",
            title: "Scarica madOS",
            subtitle: "Collegati e inizia la tua esperienza madOS oggi",
            development: "Sviluppo",
            gettingStarted: "Iniziare",
            step1: "Scarica",
            step1Desc: "Ottieni l'ultimo ISO da Internet Archive o GitHub Releases",
            step2: "Flash USB",
            step2Code: "dd if=madOS-*.iso of=/dev/sdX bs=4M",
            step2Hint: "oppure usa Ventoy / balenaEtcher",
            step3: "Avvia e vai",
            step3Desc: "Il desktop si carica automaticamente — usa live o esegui l'installatore",
            step4: "Pronto!",
            step4Desc: "Assistente IA, strumenti di sviluppo e archiviazione USB persistente opzionale"
        },
        credits: {
            label: "Riconoscimenti",
            title: "Crediti",
            subtitle: "Progetti open source e contenuti che alimentano questo sogno cyberpunk"
        },
        roadmap: {
            label: "Sviluppo",
            title: "Roadmap",
            subtitle: "Segui il nostro progresso e le prossime funzionalità",
            viewProject: "Vedi roadmap del progetto"
        },
        footer: {
            brand: "Arch Linux orchestrato da IA // Cyberpunk nordico e Synthwave",
            project: "Progetto",
            resources: "Risorse",
            community: "Comunità",
            license: "© 2026 madOS. Con licenza GPL-3.0."
        }
    },
    de: {
        nav: {
            features: "Funktionen",
            desktop: "Desktop",
            hardware: "Hardware",
            download: "Herunterladen",
            credits: "Credits",
            roadmap: "Roadmap",
            github: "GitHub"
        },
        hero: {
            badge: "Angetrieben von Ollama und OpenCode",
            tagline: "KI-gesteuertes Arch Linux",
            subtitle: "Eine nordische Cyberpunk-Arch-Linux-Distribution, optimiert für Systeme mit wenig RAM, mit integrierter KI für intelligentes Systemmanagement. Nord-Palette, Neon-Glühen, Synthwave-Seele.",
            download: "madOS herunterladen",
            viewOnGitHub: "Auf GitHub ansehen",
            ramUsage: "RAM-Nutzung",
            minRam: "Mindest-RAM",
            openSource: "Open Source"
        },
        features: {
            label: "Fähigkeiten",
            title: "Hauptmerkmale",
            subtitle: "Alles, was du in einem leistungsstarken, leichtgewichtigen und retro-futuristischen Betriebssystem brauchst",
            aiIntegration: "Ollama & OpenCode-Integration",
            aiIntegrationDesc: "Lokale KI mit Ollama + OpenCode-Assistent für intelligentes System-Orchestrierung, Code-Generierung, Debugging und erweiterte Unterstützung — global vorinstalliert.",
            adaptiveDesktop: "Adaptiver Desktop",
            adaptiveDesktopDesc: "Automatische GPU-Erkennung beim Start — Hyprland mit 3D-Beschleunigung, Sway mit Software-Rendering. Beide mit Nord-Theme bei 300MB RAM.",
            lowRam: "Für wenig RAM optimiert",
            lowRamDesc: "Entwickelt für 1.9GB-Systeme mit ZRAM, EarlyOOM und aggressiver Kernel-Optimierung.",
            multiGpu: "Multi-GPU",
            multiGpuDesc: "Intel-, AMD- und NVIDIA-Displaytreiber vorinstalliert für breite Hardware-Unterstützung.",
            persistentUsb: "Persistenter USB",
            persistentUsbDesc: "Erstelle eine beschriftete Partition und deine Änderungen überleben Neustarts. Funktioniert auch mit Ventoy.",
            gtkInstaller: "GTK-Installer",
            gtkInstallerDesc: "Schöner grafischer Installer mit Nord-Theme, Echtzeit-Fortschritt und Boot-Splash.",
            devReady: "Entwickler-bereit",
            devReadyDesc: "Node.js, npm, Git, VS Code und Oh My Zsh vorinstalliert.",
            languages: "9 Sprachen",
            languagesDesc: "Englisch, Spanisch, Französisch, Portugiesisch, Italienisch, Deutsch, Chinesisch, Japanisch und Koreanisch mit automatischer Tastaturlayout.",
            wifi: "WLAN eingebaut",
            wifiDesc: "Netzwerk-Scanning und WPA2/WPA3-Verbindung direkt vom Installer.",
            secure: "Sicher von Anfang an",
            secureDesc: "Gesperrter Root, Dual-UEFI-Bootloader, sichere Passwörter und Benutzerisolierung.",
            steamDeck: "Steam Deck Ready",
            steamDeckDesc: "Vollständige Gamepad-zu-WM-Bindings für Steam Deck. Verwalte Fenster, Workspaces und Medien mit Tasten und hinteren Paddles — mit automatischer Spielhemmung.",
            xbox: "Xbox-Controller",
            xboxDesc: "Xbox-Series-Gamepad-Unterstützung mit LT/RT-Media-Kombos, Share-Button-Screenshot und automatischer Profilerkennung — null Konfiguration."
        },
        showcase: {
            label: "Umgebung",
            title: "Neon-Nordischer Desktop",
            subtitle: "Automatisch erkannter Compositor mit nordischer Cyberpunk-Ästhetik — Tastatur-gesteuert, leicht, schön"
        },
        hardware: {
            label: "Leistung",
            title: "Zielhardware",
            subtitle: "madOS haucht bescheidenem Hardware neues Leben ein — Cyberpunk-Leistung auf jeder Maschine",
            cpu: "CPU",
            cpuDesc: "Intel Atom / AMD oder Äquivalent (x86_64)",
            ram: "RAM",
            ramDesc: "1.9GB Minimum (optimiert für begrenzten Speicher)",
            gpu: "GPU",
            gpuDesc: "Intel, NVIDIA oder AMD — automatisch erkannt mit Compute-Support",
            storage: "Speicher",
            storageDesc: "10GB Minimum (~5GB ISO, erweitert sich bei Installation)",
            boot: "Boot",
            bootDesc: "UEFI- und BIOS-Unterstützung",
            monitor: "Systemmonitor",
            ramInUse: "RAM in Nutzung",
            cpuAvg: "CPU (Durchschnitt)",
            zram: "ZRAM-Komprimierung",
            disk: "Festplatte"
        },
        download: {
            label: "Hol es dir",
            title: "madOS herunterladen",
            subtitle: "Logge dich ein und starte heute dein madOS-Erlebnis",
            development: "Entwicklung",
            gettingStarted: "Loslegen",
            step1: "Herunterladen",
            step1Desc: "Hole das neueste ISO vom Internet Archive oder GitHub Releases",
            step2: "USB flashen",
            step2Code: "dd if=madOS-*.iso of=/dev/sdX bs=4M",
            step2Hint: "oder nutze Ventoy / balenaEtcher",
            step3: "Booten und los",
            step3Desc: "Desktop lädt automatisch — nutze live oder starte den Installer",
            step4: "Fertig!",
            step4Desc: "KI-Assistent, Dev-Tools und optionaler persistenter USB-Speicher"
        },
        credits: {
            label: "Anerkennungen",
            title: "Credits",
            subtitle: "Open-Source-Projekte und Inhalte, die diesen Cyberpunk-Traum antreiben"
        },
        roadmap: {
            label: "Entwicklung",
            title: "Roadmap",
            subtitle: "Verfolge unseren Fortschritt und kommende Funktionen",
            viewProject: "Projekt-Roadmap ansehen"
        },
        footer: {
            brand: "KI-gesteuertes Arch Linux // Nordischer Cyberpunk und Synthwave",
            project: "Projekt",
            resources: "Ressourcen",
            community: "Community",
            license: "© 2026 madOS. Lizenziert unter GPL-3.0."
        }
    },
    zh: {
        nav: {
            features: "功能",
            desktop: "桌面",
            hardware: "硬件",
            download: "下载",
            credits: "致谢",
            roadmap: "路线图",
            github: "GitHub"
        },
        hero: {
            badge: "由 Ollama 和 OpenCode 提供支持",
            tagline: "AI 编排的 Arch Linux",
            subtitle: "针对低内存系统优化的北欧赛博朋克 Arch Linux 发行版，集成 AI 进行智能系统管理。 Nord 调色板、霓虹光芒、合成波灵魂。",
            download: "下载 madOS",
            viewOnGitHub: "在 GitHub 上查看",
            ramUsage: "内存使用",
            minRam: "最低内存",
            openSource: "开源"
        },
        features: {
            label: "能力",
            title: "主要功能",
            subtitle: "轻量级、强大且复古未来的操作系统所需的一切",
            aiIntegration: "Ollama & OpenCode 集成",
            aiIntegrationDesc: "本地 AI 配备 Ollama + OpenCode 助手，用于智能系统编排、代码生成、调试和高级辅助 — 全球预装。",
            adaptiveDesktop: "自适应桌面",
            adaptiveDesktopDesc: "启动时自动检测 GPU — Hyprland 支持 3D 加速，Sway 支持软件渲染。两者都使用 Nord 主题，内存占用 300MB。",
            lowRam: "低内存优化",
            lowRamDesc: "专为 1.9GB 系统设计，配备 ZRAM、EarlyOOM 和激进的内核调优。",
            multiGpu: "多 GPU",
            multiGpuDesc: "预装 Intel、AMD 和 NVIDIA 显示器驱动程序，支持广泛的硬件。",
            persistentUsb: "持久 USB",
            persistentUsbDesc: "创建带标签的分区，您的更改在重启后保留。也可与 Ventoy 配合使用。",
            gtkInstaller: "GTK 安装程序",
            gtkInstallerDesc: "美观的图形安装程序，采用 Nord 主题，实时进度和启动画面。",
            devReady: "开发就绪",
            devReadyDesc: "预装 Node.js、npm、Git、VS Code 和 Oh My Zsh。",
            languages: "9 种语言",
            languagesDesc: "英语、西班牙语、法语、葡萄牙语、意大利语、德语、中文、日语和韩语，配备自动键盘布局。",
            wifi: "内置 WiFi",
            wifiDesc: "直接从安装程序进行网络扫描和 WPA2/WPA3 连接。",
            secure: "默认安全",
            secureDesc: "锁定 root、双 UEFI 引导加载程序、安全密码和用户隔离。",
            steamDeck: "Steam Deck 兼容",
            steamDeckDesc: "Steam Deck 完整的游戏手柄到 WM 绑定。使用按钮和背鳍管理窗口、工作区 和媒体 — 配备自动游戏抑制。",
            xbox: "Xbox 手柄",
            xboxDesc: "Xbox Series 手柄支持 LT/RT 媒体组合、Share 按钮截图和自动配置文件检测 — 无需配置。"
        },
        showcase: {
            label: "环境",
            title: "霓虹北欧桌面",
            subtitle: "具有北欧赛博朋克美学的自动检测合成器 — 键盘驱动、轻量、美丽"
        },
        hardware: {
            label: "性能",
            title: "目标硬件",
            subtitle: "madOS 为简陋硬件注入霓虹生命 — 任何机器上的赛博朋克性能",
            cpu: "CPU",
            cpuDesc: "Intel Atom / AMD 或等效产品 (x86_64)",
            ram: "内存",
            ramDesc: "最低 1.9GB（针对有限内存优化）",
            gpu: "GPU",
            gpuDesc: "Intel、NVIDIA 或 AMD — 自动检测，支持计算",
            storage: "存储",
            storageDesc: "最低 10GB（~5GB ISO，安装时扩展）",
            boot: "启动",
            bootDesc: "支持 UEFI 和 BIOS",
            monitor: "系统监视器",
            ramInUse: "已用内存",
            cpuAvg: "CPU（平均）",
            zram: "ZRAM 压缩",
            disk: "磁盘"
        },
        download: {
            label: "获取",
            title: "下载 madOS",
            subtitle: "接入并立即开始您的 madOS 体验",
            development: "开发",
            gettingStarted: "开始使用",
            step1: "下载",
            step1Desc: "从 Internet Archive 或 GitHub Releases 获取最新的 ISO",
            step2: "刷入 USB",
            step2Code: "dd if=madOS-*.iso of=/dev/sdX bs=4M",
            step2Hint: "或使用 Ventoy / balenaEtcher",
            step3: "启动并运行",
            step3Desc: "桌面自动加载 — 使用 live 模式或运行安装程序",
            step4: "准备就绪！",
            step4Desc: "AI 助手、开发工具和可选的持久 USB 存储"
        },
        credits: {
            label: "鸣谢",
            title: "致谢",
            subtitle: "为这个赛博朋克梦想提供动力的开源项目和内容"
        },
        roadmap: {
            label: "开发",
            title: "路线图",
            subtitle: "跟踪我们的进度和即将推出的功能",
            viewProject: "查看项目路线图"
        },
        footer: {
            brand: "AI 编排的 Arch Linux // 北欧赛博朋克与合成波",
            project: "项目",
            resources: "资源",
            community: "社区",
            license: "© 2026 madOS。根据 GPL-3.0 许可发布。"
        }
    },
    ja: {
        nav: {
            features: "機能",
            desktop: "デスクトップ",
            hardware: "ハードウェア",
            download: "ダウンロード",
            credits: "クレジット",
            roadmap: "ロードマップ",
            github: "GitHub"
        },
        hero: {
            badge: "Ollama と OpenCode で駆動",
            tagline: "AI オーケストレーション Arch Linux",
            subtitle: "低RAMシステムに最適化された北欧サイバーパンクArch Linuxディストリビューション。Intelligentシステム管理のための統合AI。Nordパレット、ネオン輝き、シンセウェーブの魂。",
            download: "madOSをダウンロード",
            viewOnGitHub: "GitHubで見る",
            ramUsage: "RAM使用量",
            minRam: "最小RAM",
            openSource: "オープンソース"
        },
        features: {
            label: "機能",
            title: "主な機能",
            subtitle: "軽量で 강력하고レトロフューチャリスティックなOSに必要なすべて",
            aiIntegration: "Ollama & OpenCode統合",
            aiIntegrationDesc: "インテリジェントなシステムオーケストレーション、コード生成、デバッグ、高度アシスタントのためのOllama + OpenCodeアシスタントを備えたローカルAI — グローバルにプリインストール。",
            adaptiveDesktop: "適応デスクトップ",
            adaptiveDesktopDesc: "ブート時の自動GPU検出 — Hyprlandは3Dアクセラレーション、Swayはソフトウェアレンダリング。どちらもNordテーマで300MB RAM。",
            lowRam: "低RAM最適化",
            lowRamDesc: "ZRAM、EarlyOOM、积极的なカーネルチューニング備えた1.9GBシステム向けに設計。",
            multiGpu: "マルチGPU",
            multiGpuDesc: "幅広いハードウェアサポートのためにIntel、AMD、NVIDIAディスプレイドライバーがプリインストール。",
            persistentUsb: "パーシステントUSB",
            persistentUsbDesc: "ラベル付きパーティションを作成すると、変更が再起動後も保持されます。Ventoyでも動作します。",
            gtkInstaller: "GTKインストーラー",
            gtkInstallerDesc: "Nordテーマ、美しくグラフィカルなインストーラー、リアルタイム進行状況とブートスプラッシュ。",
            devReady: "開発準備完了",
            devReadyDesc: "Node.js、npm、Git、VS Code、Oh My Zshがプリインストール。",
            languages: "9言語",
            languagesDesc: "英語、スペイン語、フランス語、ポルトガル語、イタリア語、ドイツ語、中国語、日本語、韓国語、キーボードレイアウト自動検出。",
            wifi: "WiFi搭載",
            wifiDesc: "インストーラーから直接ネットワークスキャンとWPA2/WPA3接続。",
            secure: "デフォルトで安全",
            secureDesc: "ルートロック、Dual UEFIブートローダー、安全なパスワード、ユーザーベースの分離。",
            steamDeck: "Steam Deck対応",
            steamDeckDesc: "Steam Deck用の完全なゲームパッドからWMへのバインディング。ボタンとバックパドルでウィンドウ、ワークスペース、メディアを管理 — 自動ゲーム抑制付き。",
            xbox: "Xboxコントローラー",
            xboxDesc: "Xbox Seriesゲームパッドサポート、LT/RTメディアコンボ、Shareボタンスクリーンショット、自动プロファイル検出 — 設定不要。"
        },
        showcase: {
            label: "環境",
            title: "ネオンnordicデスクトップ",
            subtitle: "北欧サイバーパンク美学を備えた自動検出コンポジター — キーボード駆動、軽量、美しい"
        },
        hardware: {
            label: "パフォーマンス",
            title: "対象ハードウェア",
            subtitle: "madOSは質素なハードウェアにネオンライフを吹き込む — どんなマシーンでもサイバーパンクパフォーマンス",
            cpu: "CPU",
            cpuDesc: "Intel Atom / AMD または同等のもの (x86_64)",
            ram: "RAM",
            ramDesc: "最小1.9GB（限られたメモリ用に最適化）",
            gpu: "GPU",
            gpuDesc: "Intel、NVIDIA、またはAMD — 自動検出、コンピュートサポート",
            storage: "ストレージ",
            storageDesc: "最小10GB（~5GB ISO、インストール時に拡張）",
            boot: "ブート",
            bootDesc: "UEFIとBIOSサポート",
            monitor: "システムモニター",
            ramInUse: "使用中のRAM",
            cpuAvg: "CPU（平均）",
            zram: "ZRAM圧縮",
            disk: "ディスク"
        },
        download: {
            label: "入手",
            title: "madOSをダウンロード",
            subtitle: "ジャックインして今日からmadOSエクスペリエンスを開始",
            development: "開発",
            gettingStarted: "はじめに",
            step1: "ダウンロード",
            step1Desc: "Internet ArchiveまたはGitHub Releasesから最新のISOを取得",
            step2: "USBにフラッシュ",
            step2Code: "dd if=madOS-*.iso of=/dev/sdX bs=4M",
            step2Hint: "またはVentoy / balenaEtcherを使用",
            step3: "ブートしてGO",
            step3Desc: "デスクトップが自動的に読み込まれます — liveで使用するかインストーラーを実行",
            step4: "準備完了！",
            step4Desc: "AIアシスタント、開発ツール、オプションのパーシステントUSBストレージ"
        },
        credits: {
            label: "謝辞",
            title: "クレジット",
            subtitle: "このサイバーパンクの夢に힘을주는オープンソースプロジェクトとコンテンツ"
        },
        roadmap: {
            label: "開発",
            title: "ロードマップ",
            subtitle: "進行状況と今後の機能を追跡",
            viewProject: "プロジェクトロードマップを表示"
        },
        footer: {
            brand: "AIオーケストレーションArch Linux // 北欧サイバーパンク＆シンセウェーブ",
            project: "プロジェクト",
            resources: "リソース",
            community: "コミュニティ",
            license: "© 2026 madOS. GPL-3.0ライセンスでリリース。"
        }
    },
    ko: {
        nav: {
            features: "기능",
            desktop: "데스크탑",
            hardware: "하드웨어",
            download: "다운로드",
            credits: "크레딧",
            roadmap: "로드맵",
            github: "GitHub"
        },
        hero: {
            badge: "Ollama 및 OpenCode 제공",
            tagline: "AI 오케스트레이션 Arch Linux",
            subtitle: "저RAM 시스템에 최적화된 노르딕 사이버펑크 Arch Linux 배포판, 통합 AI로 스마트 시스템 관리. Nord 팔레트, 네온 글로우, 신스웨이브 소울.",
            download: "madOS 다운로드",
            viewOnGitHub: "GitHub에서 보기",
            ramUsage: "RAM 사용량",
            minRam: "최소 RAM",
            openSource: "오픈소스"
        },
        features: {
            label: "기능",
            title: "주요 기능",
            subtitle: "경량하고 강력한 레트로퓨처리스틱 운영체제에 필요한 모든 것",
            aiIntegration: "Ollama & OpenCode 통합",
            aiIntegrationDesc: "지능형 시스템 오케스트레이션, 코드 생성, 디버깅 및 고급 지원을 위한 Ollama + OpenCode 어시스턴트를 통한 로컬 AI — 전역적으로 사전 설치됨.",
            adaptiveDesktop: "적응형 데스크탑",
            adaptiveDesktopDesc: "부팅 시 자동 GPU 감지 — Hyprland는 3D 가속, Sway는 소프트웨어 렌더링. 모두 Nord 테마, 300MB RAM.",
            lowRam: "저RAM 최적화",
            lowRamDesc: "ZRAM, EarlyOOM 및 공격적인 커널 튜닝이 포함된 1.9GB 시스템용으로 설계됨.",
            multiGpu: "멀티 GPU",
            multiGpuDesc: "광범위한 하드웨어 지원을 위해 Intel, AMD 및 NVIDIA 디스플레이 드라이버 사전 설치.",
            persistentUsb: "지속성 USB",
            persistentUsbDesc: "레이블이 지정된 파티션을 생성하면 재부팅 후 변경 사항이 유지됩니다. Ventoy에서도 작동합니다.",
            gtkInstaller: "GTK 설치 프로그램",
            gtkInstallerDesc: "Nord 테마가 적용된 아름다운 그래픽 설치 프로그램, 실시간 진행률 및 부팅 스플래시.",
            devReady: "개발 준비 완료",
            devReadyDesc: "Node.js, npm, Git, VS Code 및 Oh My Zsh 사전 설치.",
            languages: "9개 언어",
            languagesDesc: "영어, 스페인어, 프랑스어, 포르투갈어, 이탈리아어, 독일어, 중국어, 일본어, 한국어 및 자동 키보드 레이아웃.",
            wifi: "기본 제공 WiFi",
            wifiDesc: "설치 프로그램에서 직접 네트워크 스캐닝 및 WPA2/WPA3 연결.",
            secure: "기본적으로 안전",
            secureDesc: "잠긴 루트, 이중 UEFI 부트 로더, 안전한 암호 및 사용자별 격리.",
            steamDeck: "Steam Deck 지원",
            steamDeckDesc: "Steam Deck용 전체 게임패드-WM 바인딩. 버튼과 백 패들로 창, 작업 공간 및 미디어 관리 — 자동 게임 억제 기능.",
            xbox: "Xbox 컨트롤러",
            xboxDesc: "LT/RT 미디어 콤보, 공유 버튼 스크린샷 및 자동 프로필 감지가 있는 Xbox Series 게임패드 지원 — 구성 불필요."
        },
        showcase: {
            label: "환경",
            title: "네온 노르딕 데스크탑",
            subtitle: "노르딕 사이버펑크 미학을 가진 자동 감지 컴포지터 — 키보드 구동, 경량, 아름다운"
        },
        hardware: {
            label: "성능",
            title: "대상 하드웨어",
            subtitle: "madOS는 소박한 하드웨어에 네온的生命을 불어넣습니다 — 모든 시스템에서 사이버펑크 성능",
            cpu: "CPU",
            cpuDesc: "Intel Atom / AMD 또는 동급 (x86_64)",
            ram: "RAM",
            ramDesc: "최소 1.9GB (제한된 메모리에 최적화)",
            gpu: "GPU",
            gpuDesc: "Intel, NVIDIA 또는 AMD — 자동 감지 및 컴퓨트 지원",
            storage: "스토리지",
            storageDesc: "최소 10GB (~5GB ISO, 설치 시 확장)",
            boot: "부팅",
            bootDesc: "UEFI 및 BIOS 지원",
            monitor: "시스템 모니터",
            ramInUse: "사용 중 RAM",
            cpuAvg: "CPU (평균)",
            zram: "ZRAM 압축",
            disk: "디스크"
        },
        download: {
            label: "入手",
            title: "madOS 다운로드",
            subtitle: "참여하고 오늘 madOS 경험을 시작하세요",
            development: "개발",
            gettingStarted: "시작하기",
            step1: "다운로드",
            step1Desc: "Internet Archive 또는 GitHub Releases에서 최신 ISO를 가져오세요",
            step2: "USB 플래시",
            step2Code: "dd if=madOS-*.iso of=/dev/sdX bs=4M",
            step2Hint: "또는 Ventoy / balenaEtcher 사용",
            step3: "부팅 및 실행",
            step3Desc: "데스크탑이 자동으로 로드됩니다 — live로 사용하거나 설치 프로그램 실행",
            step4: "준비 완료!",
            step4Desc: "AI 어시스턴트, 개발 도구 및 선택적 지속성 USB 스토리지"
        },
        credits: {
            label: "감사",
            title: "크레딧",
            subtitle: "이 사이버펑크dream에동력을 제공하는 오픈소스 프로젝트 및 콘텐츠"
        },
        roadmap: {
            label: "개발",
            title: "로드맵",
            subtitle: "진행 상황 및 향후 기능 추적",
            viewProject: "프로젝트 로드맵 보기"
        },
        footer: {
            brand: "AI 오케스트레이션 Arch Linux // 노르딕 사이버펑크 및 신스웨이브",
            project: "프로젝트",
            resources: "리소스",
            community: "커뮤니티",
            license: "© 2026 madOS. GPL-3.0 라이선스 하에 출시."
        }
    }
};

const languageNames = {
    en: "English",
    es: "Español",
    fr: "Français",
    pt: "Português",
    it: "Italiano",
    de: "Deutsch",
    zh: "中文",
    ja: "日本語",
    ko: "한국어"
};

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const lang = browserLang.split('-')[0];
    
    const countryToLang = {
        'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en',
        'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es', 'PE': 'es',
        'FR': 'fr', 'BE': 'fr', 'CA': 'fr', 'CH': 'fr',
        'PT': 'pt', 'BR': 'pt',
        'IT': 'it',
        'DE': 'at', 'CH': 'de', 'AT': 'de',
        'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'SG': 'zh',
        'JP': 'ja',
        'KR': 'ko'
    };
    
    const country = browserLang.split('-')[1]?.toUpperCase();
    if (country && countryToLang[country]) {
        return countryToLang[country];
    }
    
    return translations[lang] ? lang : 'en';
}

let currentLang = detectLanguage();

function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('madOS-lang', lang);
    document.documentElement.lang = lang;
    updatePageContent();
    updateLanguageSelector();
}

function getTranslation(path) {
    const keys = path.split('.');
    let value = translations[currentLang];
    for (const key of keys) {
        if (value && value[key] !== undefined) {
            value = value[key];
        } else {
            value = translations['en'];
            for (const k of keys) {
                value = value?.[k];
            }
            break;
        }
    }
    return value || path;
}

function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = getTranslation(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = getTranslation(key);
    });
    
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = getTranslation(key);
    });
}

function updateLanguageSelector() {
    const selector = document.getElementById('lang-selector');
    if (selector) {
        selector.value = currentLang;
    }
}

function initI18n() {
    const savedLang = localStorage.getItem('madOS-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    
    document.documentElement.lang = currentLang;
    updatePageContent();
    updateLanguageSelector();
}