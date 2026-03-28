(function () {
  const i18n = window.DoCoolI18n || {};
  const translations = i18n.shared || {};

  function normalizeLang(lang) {
    return (i18n.normalizeLang || ((value) => value || "en"))(lang);
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
