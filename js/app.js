import { calculateCGPA } from './cgpa.js';
import { createSubjectRow, displayResult, showToast, clearUI } from './ui.js';
import { saveSubjects, getSubjects, clearAllData } from './storage.js';
import { initializeTheme, toggleTheme } from './theme.js';

// DOM Elements
const subjectContainer = document.getElementById('subjectContainer');
const addSubjectBtn = document.getElementById('addSubjectBtn');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');

/**
 * Initialize the application
 */
function init() {
    // 1. Setup Theme
    initializeTheme();

    // 2. Load Saved Data
    const savedSubjects = getSubjects();
    if (savedSubjects.length > 0) {
        savedSubjects.forEach(sub => addSubject(sub));
    } else {
        // Add 3 empty rows by default for new users
        for (let i = 0; i < 3; i++) addSubject();
    }

    // 3. Initial calculation if data exists
    if (savedSubjects.length > 0) {
        performCalculation();
    }
}

/**
 * Adds a subject row to the UI
 * @param {Object} subject 
 */
function addSubject(subject = {}) {
    const row = createSubjectRow(subject);
    subjectContainer.appendChild(row);
}

/**
 * Extracts subject data from the DOM
 * @returns {Array|null}
 */
function getFormData() {
    const rows = document.querySelectorAll('.subject-row');
    const subjects = [];

    for (const row of rows) {
        const name = row.querySelector('.subject-name').value.trim();
        const credits = row.querySelector('.subject-credit').value;
        const grade = row.querySelector('.subject-grade').value;

        // Validation
        if (!name) {
            showToast('Please enter all subject names');
            row.querySelector('.subject-name').focus();
            return null;
        }

        if (!credits || credits <= 0) {
            showToast('Credits must be a positive number');
            row.querySelector('.subject-credit').focus();
            return null;
        }

        subjects.push({ name, credits, grade });
    }

    return subjects;
}

/**
 * Main calculation logic
 */
function performCalculation() {
    const subjects = getFormData();
    
    if (!subjects) return; // Validation failed

    if (subjects.length === 0) {
        showToast('Add at least one subject');
        return;
    }

    const result = calculateCGPA(subjects);
    displayResult(result);
    saveSubjects(subjects);
}

// Event Listeners

addSubjectBtn.addEventListener('click', () => {
    addSubject();
    // Scroll to bottom of container on mobile
    if (window.innerWidth < 640) {
        addSubjectBtn.scrollIntoView({ behavior: 'smooth' });
    }
});

calculateBtn.addEventListener('click', () => {
    performCalculation();
});

resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all data?')) {
        clearUI();
        clearAllData();
        displayResult({ totalCredits: 0, totalPoints: 0, cgpa: '0.00' });
        // Add one empty row back
        addSubject();
        showToast('Data reset successfully', 'success');
    }
});

themeToggle.addEventListener('click', () => {
    toggleTheme();
});

// Event Delegation for Subject Removal
subjectContainer.addEventListener('click', (e) => {
    if (e.target.closest('.remove-btn')) {
        const row = e.target.closest('.subject-row');
        row.style.opacity = '0';
        row.style.transform = 'translateX(20px)';
        setTimeout(() => {
            row.remove();
            // Automatically recalculate after removal if there's data
            const subjects = getFormData();
            if (subjects) {
                const result = calculateCGPA(subjects);
                displayResult(result);
                saveSubjects(subjects);
            }
        }, 300);
    }
});

// Start the app
init();