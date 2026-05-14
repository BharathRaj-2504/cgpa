import { saveTheme, getTheme } from './storage.js';

export function initializeTheme() {

    const theme = getTheme();

    if (theme === "dark") {
        document.body.classList.add("dark");
    }
}

export function toggleTheme() {

    document.body.classList.toggle("dark");

    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    saveTheme(currentTheme);
}