/**
 * Persistence layer for REC CGPA Predictor
 * Uses localStorage to save and retrieve data.
 */

const STORAGE_KEYS = {
    SUBJECTS: "rec_cgpa_subjects",
    THEME: "rec_cgpa_theme"
};

/**
 * Save subjects array to localStorage
 * @param {Array} subjects 
 */
export function saveSubjects(subjects) {
    try {
        localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
    } catch (e) {
        console.error("Error saving subjects:", e);
    }
}

/**
 * Get subjects array from localStorage
 * @returns {Array}
 */
export function getSubjects() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.SUBJECTS);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error("Error loading subjects:", e);
        return [];
    }
}

/**
 * Save theme preference
 * @param {string} theme ('light' or 'dark')
 */
export function saveTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
}

/**
 * Get saved theme preference
 * @returns {string}
 */
export function getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || "light";
}

/**
 * Clear all stored application data
 */
export function clearAllData() {
    localStorage.removeItem(STORAGE_KEYS.SUBJECTS);
    // Note: We keep the theme preference even on reset
}