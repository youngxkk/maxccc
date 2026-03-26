(function () {
  const translations = {
    "zh-CN": {
      more_tools: "更多工具",
      tool_pwd_title: "密码生成",
      tool_units_title: "单位换算",
      tool_lorem_title: "随机文本",
      tool_words_title: "字数统计",
      tool_text_title: "文本转换",
      tool_bmi_title: "健康计算",
      tool_removebg_title: "图片去背景",
      tool_gradient_title: "CSS 渐变",
      tool_json_title: "JSON 格式化",
      tool2_title: "PDF 转文字",
      user_agreement: "用户协议",
      privacy_policy: "隐私政策",
      terms_of_use: "使用条款",
      footer_xhs: "小红书",
      footer_contact: "联系我们"
    },
    "zh-TW": {
      more_tools: "更多工具",
      tool_pwd_title: "密碼生成",
      tool_units_title: "單位換算",
      tool_lorem_title: "隨機文本",
      tool_words_title: "字數統計",
      tool_text_title: "文本轉換",
      tool_bmi_title: "健康計算",
      tool_removebg_title: "圖片去背景",
      tool_gradient_title: "CSS 漸變",
      tool_json_title: "JSON 格式化",
      tool2_title: "PDF 轉文字",
      user_agreement: "用戶協議",
      privacy_policy: "隱私政策",
      terms_of_use: "使用條款",
      footer_xhs: "小紅書",
      footer_contact: "聯絡我們"
    },
    en: {
      more_tools: "More Tools",
      tool_pwd_title: "Password",
      tool_units_title: "Units",
      tool_lorem_title: "Lorem Ipsum",
      tool_words_title: "Word Count",
      tool_text_title: "Text Convert",
      tool_bmi_title: "BMI Calc",
      tool_removebg_title: "Remove BG",
      tool_gradient_title: "CSS Gradient",
      tool_json_title: "JSON Formatter",
      tool2_title: "PDF to Text",
      user_agreement: "User Agreement",
      privacy_policy: "Privacy Policy",
      terms_of_use: "Terms of Use",
      footer_xhs: "Xiaohongshu",
      footer_contact: "Contact Us"
    }
  };

  function normalizeLang(lang) {
    if (!lang) return "en";
    if (lang === "zh" || lang === "zh-CN") return "zh-CN";
    if (lang === "zh-TW" || lang === "zh-HK" || lang === "tw") return "zh-TW";
    return "en";
  }

  function getInitialLang() {
    return normalizeLang(localStorage.getItem("lang") || document.documentElement.lang || navigator.language);
  }

  function getInitialTheme() {
    return localStorage.getItem("theme") || "light";
  }

  let currentLang = getInitialLang();
  let currentTheme = getInitialTheme();

  function applyLanguage(lang) {
    currentLang = normalizeLang(lang);
    document.documentElement.lang = currentLang;
    localStorage.setItem("lang", currentLang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const message = translations[currentLang]?.[key];
      if (message) el.textContent = message;
    });

    window.dispatchEvent(new CustomEvent("tool:langchange", { detail: currentLang }));
  }

  function applyTheme(theme) {
    currentTheme = theme === "dark" ? "dark" : "light";
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", currentTheme);

    const sunIcon = document.getElementById("theme-icon-sun");
    const moonIcon = document.getElementById("theme-icon-moon");
    if (sunIcon && moonIcon) {
      if (currentTheme === "light") {
        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
      } else {
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
      }
    }

    window.dispatchEvent(new CustomEvent("tool:themechange", { detail: currentTheme }));
  }

  function initNav() {
    const langBtn = document.querySelector(".lang-btn");
    const langDropdown = document.querySelector(".lang-dropdown");
    const themeBtn = document.querySelector(".theme-toggle");

    if (langBtn && langDropdown) {
      langBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        langDropdown.classList.toggle("show");
      });

      langDropdown.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          applyLanguage(button.getAttribute("data-lang"));
          langDropdown.classList.remove("show");
        });
      });

      document.addEventListener("click", () => {
        langDropdown.classList.remove("show");
      });
    }

    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        applyTheme(currentTheme === "light" ? "dark" : "light");
      });
    }
  }

  window.ToolShell = {
    getLang() {
      return currentLang;
    },
    getTheme() {
      return currentTheme;
    },
    setLang(lang) {
      applyLanguage(lang);
    },
    setTheme(theme) {
      applyTheme(theme);
    },
    subscribeLang(callback) {
      const handler = (event) => callback(event.detail);
      window.addEventListener("tool:langchange", handler);
      return () => window.removeEventListener("tool:langchange", handler);
    },
    subscribeTheme(callback) {
      const handler = (event) => callback(event.detail);
      window.addEventListener("tool:themechange", handler);
      return () => window.removeEventListener("tool:themechange", handler);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initNav();
      applyLanguage(currentLang);
      applyTheme(currentTheme);
    });
  } else {
    initNav();
    applyLanguage(currentLang);
    applyTheme(currentTheme);
  }
})();
