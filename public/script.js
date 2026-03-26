document.addEventListener('DOMContentLoaded', () => {
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
    const translations = {
        'zh-CN': {
            'nav_apps': 'APP',
            'nav_tools': '实用工具',
            'hero_title': 'Do Cool Things',
            'hero_desc': '独立开发者<br>我们致力于打造大众喜爱的APP<br>全都没有广告，用爱发电。',
            'app1_desc': '保护每个人手机中的隐私',
            'app2_desc': '独居青年的『反席』利器',
            'app3_title': '菠萝英语',
            'app3_desc': '点亮孩子英语启蒙的灯',
            'app4_title': '精灵壁纸',
            'app4_desc': '无限量供应高质量壁纸',
            'app5_title': '经典扫雷',
            'app5_desc': '儿时记忆 复古重现',
            'app6_title': '草莓日记',
            'app6_desc': '经期记录，关爱女性。',
            'app_store': 'App Store',
            'tool1_title': '万能工具箱',
            'tool1_desc': '集合多种常用小工具，多合一。',
            'tool_pwd_title': '密码生成',
            'tool_pwd_desc': '生成高强度随机密码',
            'tool_units_title': '单位换算',
            'tool_units_desc': '常用单位快速换算',
            'tool_lorem_title': '随机文本',
            'tool_lorem_desc': '生成测试占位文本',
            'tool_words_title': '字数统计',
            'tool_words_desc': '实时统计文本数据',
            'tool_text_title': '文本转换',
            'tool_text_desc': '大小写及特殊处理',
            'tool_bmi_title': '健康计算',
            'tool_bmi_desc': '快速测量 BMI 指数',
            'tool_removebg_title': '图片去背景',
            'tool_removebg_desc': '纯本地 AI 智能抠图',
            'tool_gradient_title': 'CSS 渐变',
            'tool_gradient_desc': '可视化生成 CSS 渐变',
            'tool_json_title': 'JSON 格式化',
            'tool_json_desc': 'JSON 格式化、校验',
            'tool2_title': 'PDF 转文字',
            'tool2_desc': '快速将 PDF 文档转换为可编辑文本。',
            'user_agreement': '用户协议',
            'privacy_policy': '隐私政策',
            'terms_of_use': '使用条款',
            'footer_xhs': '小红书',
            'footer_contact': '联系我们',
            'tool_tag_password': '密码生成',
            'tool_tag_units': '单位换算',
            'tool_tag_lorem': '随机文本',
            'tool_tag_wordcount': '字数统计',
            'tool_tag_text': '文本转换',
            'tool_tag_bmi': '健康计算',
            'tool_tag_removebg': '移除背景'
        },

        'zh-TW': {
            'nav_apps': 'APP',
            'nav_tools': '實用工具',
            'hero_title': 'Do Cool Things',
            'hero_desc': '獨立開發者<br>我們致力于打造大衆喜愛的APP<br>全都沒有廣告，用愛發電。',
            'app1_desc': '保護每個人手機中的隱私',
            'app2_desc': '獨居青年的『反席』利器',
            'app3_title': '菠蘿英語',
            'app3_desc': '點亮孩子英語啓蒙的燈',
            'app4_title': '精靈壁紙',
            'app4_desc': '無限量供應高品質桌布',
            'app5_title': '經典掃雷',
            'app5_desc': '兒時記憶 復古重現',
            'app6_title': '草莓日記',
            'app6_desc': '經期記錄，關愛女性。',
            'app_store': 'App Store',
            'tool1_title': '萬能工具箱',
            'tool1_desc': '集合多種常用小工具，多合一。',
            'tool_pwd_title': '密碼生成',
            'tool_pwd_desc': '生成高强度隨機密碼',
            'tool_units_title': '單位換算',
            'tool_units_desc': '常用單位快速換算',
            'tool_lorem_title': '隨機文本',
            'tool_lorem_desc': '生成測試占位文本',
            'tool_words_title': '字數統計',
            'tool_words_desc': '實時統計文本數據',
            'tool_text_title': '文本轉換',
            'tool_text_desc': '大小寫及特殊處理',
            'tool_bmi_title': '健康計算',
            'tool_bmi_desc': '快速測量 BMI 指數',
            'tool_removebg_title': '圖片去背景',
            'tool_removebg_desc': '純本地 AI 智能摳圖',
            'tool_gradient_title': 'CSS 漸變',
            'tool_gradient_desc': '可視化生成 CSS 漸變',
            'tool_json_title': 'JSON 格式化',
            'tool_json_desc': 'JSON 格式化、校驗',
            'tool2_title': 'PDF 轉文字',
            'tool2_desc': '快速將 PDF 文檔轉換為可編輯文本。',
            'user_agreement': '用戶協議',
            'privacy_policy': '隱私政策',
            'terms_of_use': '使用條款',
            'footer_xhs': '小紅書',
            'footer_contact': '聯絡我們',
            'tool_tag_password': '密碼生成',
            'tool_tag_units': '單位換算',
            'tool_tag_lorem': '隨機文本',
            'tool_tag_wordcount': '字數統計',
            'tool_tag_text': '文本轉換',
            'tool_tag_bmi': '健康計算',
            'tool_tag_removebg': '移除背景'
        },

        'en': {
            'nav_apps': 'APP',
            'nav_tools': 'Tools',
            'hero_title': 'Do Cool Things',
            'hero_desc': 'Independent Developer<br>We are committed to building apps that people love.<br>No ads, powered by passion.',
            'app1_desc': 'Protecting privacy on everyone\'s phone',
            'app2_desc': 'Anti-loneliness tool for living alone',
            'app3_title': 'Pineapple English',
            'app3_desc': 'Lighting the lamp of children\'s English enlightenment',
            'app4_title': 'Pixie Wallpaper',
            'app4_desc': 'Unlimited supply of high-quality wallpapers',
            'app5_title': 'Classic Minesweeper',
            'app5_desc': 'Childhood memories, retro revival',
            'app6_title': 'Strawberry Diary',
            'app6_desc': 'Period tracking, caring for women.',
            'app_store': 'App Store',
            'tool1_title': 'Multi-Toolkit',
            'tool1_desc': 'Common mini-tools collection, all-in-one.',
            'tool_pwd_title': 'Password',
            'tool_pwd_desc': 'Secure random password generator',
            'tool_units_title': 'Units',
            'tool_units_desc': 'Quick unit conversion tool',
            'tool_lorem_title': 'Lorem Ipsum',
            'tool_lorem_desc': 'Placeholder text generator',
            'tool_words_title': 'Word Count',
            'tool_words_desc': 'Real-time text statistics',
            'tool_text_title': 'Text Convert',
            'tool_text_desc': 'Case and special transform',
            'tool_bmi_title': 'BMI Calc',
            'tool_bmi_desc': 'Quick health index measurement',
            'tool_removebg_title': 'Remove BG',
            'tool_removebg_desc': 'Local AI Background Removal',
            'tool_gradient_title': 'CSS Gradient',
            'tool_gradient_desc': 'Visual CSS gradient generator',
            'tool_json_title': 'JSON Formatter',
            'tool_json_desc': 'Format & validate JSON',
            'tool2_title': 'PDF to Text',
            'tool2_desc': 'Quickly convert PDF documents into editable text.',
            'user_agreement': 'User Agreement',
            'privacy_policy': 'Privacy Policy',
            'terms_of_use': 'Terms of Use',
            'footer_xhs': 'Xiaohongshu',
            'footer_contact': 'Contact Us',
            'tool_tag_password': 'Password',
            'tool_tag_units': 'Units',
            'tool_tag_lorem': 'Lorem',
            'tool_tag_wordcount': 'Words',
            'tool_tag_text': 'Text',
            'tool_tag_bmi': 'BMI',
            'tool_tag_removebg': 'Remove BG'
        }

    };

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
    const savedLang = localStorage.getItem('lang') || (navigator.language.startsWith('zh') ? (navigator.language === 'zh-TW' || navigator.language === 'zh-HK' ? 'zh-TW' : 'zh-CN') : 'en');
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

