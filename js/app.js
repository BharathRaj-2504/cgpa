import { calculateCGPA } from './cgpa.js';
import { createSubjectRow, displayResult, showError } from './ui.js';
import { saveSubjects, getSubjects } from './storage.js';
import { initializeTheme, toggleTheme } from './theme.js';

const subjectContainer = document.getElementById('subjectContainer');
const addSubjectBtn = document.getElementById('addSubjectBtn');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');

initializeTheme();

function addSubject(subject = {}) {

    const row = createSubjectRow(subject);

    subjectContainer.appendChild(row);
}

function getAllSubjects() {

    const rows = document.querySelectorAll('.subject-row');

    const subjects = [];

    for (const row of rows) {

        const name = row.querySelector('.subject-name').value.trim();
        const credits = row.querySelector('.subject-credit').value;
        const grade = row.querySelector('.subject-grade').value;

        if (!name) {
            showError('Subject name cannot be empty');
            return null;
        }

        if (credits <= 0) {
            showError('Credits must be positive');
            return null;
        }

        subjects.push({
            name,
            credits,
            grade
        });
    }

    return subjects;
}

addSubjectBtn.addEventListener('click', () => {
    addSubject();
});

calculateBtn.addEventListener('click', () => {

    const subjects = getAllSubjects();

    if (!subjects || subjects.length === 0) {
        showError('Add at least one subject');
        return;
    }

    const result = calculateCGPA(subjects);

    displayResult(result);

    saveSubjects(subjects);
});

resetBtn.addEventListener('click', () => {

    subjectContainer.innerHTML = '';

    localStorage.clear();

    addSubject();

    displayResult({
        totalCredits: 0,
        totalPoints: 0,
        cgpa: '0.00'
    });
});

subjectContainer.addEventListener('click', (event) => {

});