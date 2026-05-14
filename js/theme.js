import { saveTheme, getTheme } from './storage.js';

/**
 * Initializes the theme based on saved preference
 */
export function initializeTheme() {
    const theme = getTheme();
    applyTheme(theme);
}

/**
 * Toggles between light and dark themes
 */
export function toggleTheme() {
    const isDark = document.body.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    saveTheme(newTheme);
}

/**
 * Internal helper to apply theme to DOM
 * @param {string} theme 
 */
function applyTheme(theme) {
    const iconEl = document.getElementById('themeIcon');
    
    if (theme === "dark") {
        document.body.classList.add("dark");
        if (iconEl) iconEl.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        if (iconEl) iconEl.textContent = "🌙";
    }
}