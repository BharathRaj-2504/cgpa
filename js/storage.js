const SUBJECT_KEY = "rec_subjects";
const THEME_KEY = "rec_theme";

export function saveSubjects(subjects) {
    localStorage.setItem(SUBJECT_KEY, JSON.stringify(subjects));
}

export function getSubjects() {
    return JSON.parse(localStorage.getItem(SUBJECT_KEY)) || [];
}

export function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
}

export function getTheme() {
    return localStorage.getItem(THEME_KEY) || "light";
}