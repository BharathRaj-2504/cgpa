import { calculateCGPA, generateImprovementSuggestions } from './cgpa.js';
import { createSubjectRow, displayResult, showToast, clearUI, renderImprovementSuggestions } from './ui.js';
import { saveSubjects, getSubjects, clearAllData } from './storage.js';
import { initializeTheme, toggleTheme } from './theme.js';

// DOM Elements
const subjectContainer = document.getElementById('subjectContainer');
const addSubjectBtn = document.getElementById('addSubjectBtn');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');

// State Management
let activeImprovements = {}; // { subjectIndex: improvedGrade }

/**
 * Initialize the application
 */
function init() {
    initializeTheme();

    const savedSubjects = getSubjects();
    if (savedSubjects.length > 0) {
        savedSubjects.forEach(sub => addSubject(sub));
    } else {
        for (let i = 0; i < 3; i++) addSubject();
    }

    if (savedSubjects.length > 0) {
        performCalculation();
    }
}

/**
 * Adds a subject row to the UI
 */
function addSubject(subject = {}) {
    const row = createSubjectRow(subject);
    subjectContainer.appendChild(row);
}

/**
 * Extracts subject data from the DOM, applying active improvements if any
 */
function getFormData(applyImprovements = false) {
    const rows = document.querySelectorAll('.subject-row');
    const subjects = [];

    rows.forEach((row, index) => {
        const name = row.querySelector('.subject-name').value.trim();
        const credits = row.querySelector('.subject-credit').value;
        const originalGrade = row.querySelector('.subject-grade').value;
        
        const grade = (applyImprovements && activeImprovements[index]) 
            ? activeImprovements[index] 
            : originalGrade;

        if (name && credits) {
            subjects.push({ name, credits, grade });
        }
    });

    return subjects;
}

/**
 * Main calculation and analysis flow
 */
function performCalculation() {
    const subjects = getFormData(true); // Apply toggled improvements
    const rawSubjects = getFormData(false); // Original grades for analyzer logic

    if (subjects.length === 0) {
        const section = document.getElementById('improvementSection');
        if (section) section.style.display = 'none';
        return;
    }

    // 1. Semester Result (Improved)
    const improvedResult = calculateCGPA(subjects);
    
    // 2. Baseline Result (Original)
    const baselineResult = calculateCGPA(rawSubjects);
    
    // 3. Calculate Gain
    const gain = parseFloat(improvedResult.cgpa) - parseFloat(baselineResult.cgpa);
    
    displayResult(improvedResult, gain);
    saveSubjects(rawSubjects);

    // 2. Improvement Suggestions
    const suggestions = generateImprovementSuggestions(rawSubjects);
    renderImprovementSuggestions(suggestions);
    
    // Restore toggle states if suggestions re-rendered
    restoreToggles();
}

/**
 * Syncs the UI toggles with activeImprovements state
 */
function restoreToggles() {
    const toggles = document.querySelectorAll('.improvement-toggle');
    toggles.forEach(t => {
        const idx = t.dataset.index;
        if (activeImprovements[idx]) {
            t.checked = true;
            t.closest('.improvement-card').classList.add('active');
        }
    });
}

// Event Listeners

addSubjectBtn.addEventListener('click', () => {
    addSubject();
});

calculateBtn.addEventListener('click', () => {
    activeImprovements = {}; // Reset analyzer on manual calculate
    performCalculation();
});

resetBtn.addEventListener('click', () => {
    if (confirm('Clear all data?')) {
        clearUI();
        clearAllData();
        activeImprovements = {};
        displayResult({ totalCredits: 0, totalPoints: 0, cgpa: '0.00' });
        const section = document.getElementById('improvementSection');
        if (section) section.style.display = 'none';
        addSubject();
        showToast('Data reset', 'success');
    }
});

themeToggle.addEventListener('click', () => {
    toggleTheme();
});

// Event Delegation for Subject Removal
subjectContainer.addEventListener('click', (e) => {
    if (e.target.closest('.remove-btn')) {
        const row = e.target.closest('.subject-row');
        row.remove();
        performCalculation();
    }
});

// Event Delegation for Improvement Toggles
document.addEventListener('change', (e) => {
    if (e.target.classList.contains('improvement-toggle')) {
        const index = e.target.dataset.index;
        const grade = e.target.dataset.grade;
        
        if (e.target.checked) {
            activeImprovements[index] = grade;
            e.target.closest('.improvement-card').classList.add('active');
        } else {
            delete activeImprovements[index];
            e.target.closest('.improvement-card').classList.remove('active');
        }
        
        performCalculation();
    }
});

// Start
init();

