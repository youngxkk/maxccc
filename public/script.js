document.addEventListener('DOMContentLoaded', () => {
    const i18n = window.DoCoolI18n || {};
    // Elegant Staggered Entry Animation
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -10px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve to keep it visible once loaded
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with the fade-up class
    const animatedElements = document.querySelectorAll('.fade-up-entry');

    animatedElements.forEach((el, index) => {
        // Reset delay if the element is too far down to avoid massive cumulative delay
        const delay = (index % 6) * 60;
        el.style.transitionDelay = `${delay}ms`;
        observer.observe(el);
    });


    // --- Internationalization (i18n) ---
    const translations = i18n.shared || {};

    function applyLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }

    // Language Selector Interaction
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOptions = langDropdown.querySelectorAll('button');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-lang');
            applyLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });

    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });

    // Initialize Language
    const savedLang = (i18n.normalizeLang || ((lang) => lang || 'en'))(localStorage.getItem('lang') || document.documentElement.lang || navigator.language);
    applyLanguage(savedLang);

    // Theme Logic (Persisted)
    const themeBtn = document.querySelector('.theme-toggle');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');

    const savedTheme = localStorage.getItem('theme');
    let currentTheme = savedTheme || 'dark';

    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        } else {
            document.documentElement.removeAttribute('data-theme');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        }
    }

    applyTheme(currentTheme);

    themeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });

    // --- Mouse Follow & Card Spotlight Effect (Desktop Only) ---
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
        const mouseGlow = document.querySelector('.mouse-glow');
        const cards = document.querySelectorAll('.card, .card-horizontal');

        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;

        // Throttle / Smoothing for the background glow
        const updateGlow = () => {
            // Linear interpolation for smooth trailing effect
            glowX += (mouseX - glowX) * 0.1;
            glowY += (mouseY - glowY) * 0.1;

            if (mouseGlow) {
                mouseGlow.style.left = `${glowX}px`;
                mouseGlow.style.top = `${glowY}px`;
            }
            requestAnimationFrame(updateGlow);
        };
        updateGlow();

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // For Card Spotlights: Update relative mouse position for each card
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    } else {
        // Hide mouse-glow on touch devices
        const mouseGlow = document.querySelector('.mouse-glow');
        if (mouseGlow) mouseGlow.style.display = 'none';
    }
});
