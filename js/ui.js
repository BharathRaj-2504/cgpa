/**
 * UI Utilities for REC CGPA Predictor
 */

/**
 * Creates a subject row element
 * @param {Object} subject - { name, credits, grade }
 * @returns {HTMLElement}
 */
export function createSubjectRow(subject = {}) {
    const row = document.createElement('div');
    row.className = 'subject-row';
    
    // Better Placeholders
    const subjectNames = ["Computer Networks", "Operating Systems", "Data Structures", "Engineering Mathematics", "Digital Logic"];
    const randomPlaceholder = subjectNames[Math.floor(Math.random() * subjectNames.length)];

    row.innerHTML = `
        <div class="row-inputs">
            <input type="text" class="subject-name" placeholder="e.g. ${randomPlaceholder}" value="${subject.name || ''}">
            <input type="number" class="subject-credit" placeholder="Credits" value="${subject.credits || ''}" min="1" max="10">
            <select class="subject-grade">
                <option value="" disabled ${!subject.grade ? 'selected' : ''}>Select Grade</option>
                <option value="O" ${subject.grade === 'O' ? 'selected' : ''}>O (10)</option>
                <option value="A+" ${subject.grade === 'A+' ? 'selected' : ''}>A+ (9)</option>
                <option value="A" ${subject.grade === 'A' ? 'selected' : ''}>A (8)</option>
                <option value="B+" ${subject.grade === 'B+' ? 'selected' : ''}>B+ (7)</option>
                <option value="B" ${subject.grade === 'B' ? 'selected' : ''}>B (6)</option>
                <option value="C" ${subject.grade === 'C' ? 'selected' : ''}>C (5)</option>
                <option value="U" ${subject.grade === 'U' ? 'selected' : ''}>U (0)</option>
            </select>
        </div>
        <button class="remove-btn" title="Remove Subject">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
    `;

    return row;
}

/**
 * Collapses the subject entry section
 * @param {Array} subjects 
 */
export function collapseSubjectSection(subjects) {
    const section = document.getElementById('subjectSection');
    const editBtn = document.getElementById('editSubjectsBtn');
    const summary = document.getElementById('subjectSummaryHeader');
    const intro = document.getElementById('analyzerIntro');
    const calculateBtn = document.getElementById('calculateBtn');

    if (!section) return;

    section.classList.add('collapsed');
    editBtn.style.display = 'block';
    summary.style.display = 'flex';
    if (intro) intro.style.display = 'none';
    if (calculateBtn) calculateBtn.style.display = 'none';

    updateCompactSummary(subjects);
}

/**
 * Expands the subject entry section
 */
export function expandSubjectSection() {
    const section = document.getElementById('subjectSection');
    const editBtn = document.getElementById('editSubjectsBtn');
    const summary = document.getElementById('subjectSummaryHeader');
    const calculateBtn = document.getElementById('calculateBtn');

    if (!section) return;

    section.classList.remove('collapsed');
    editBtn.style.display = 'none';
    summary.style.display = 'none';
    if (calculateBtn) calculateBtn.style.display = 'block';
}

/**
 * Updates the compact summary text
 * @param {Array} subjects 
 */
function updateCompactSummary(subjects) {
    const summaryText = document.getElementById('summaryText');
    if (!summaryText) return;

    const totalCredits = subjects.reduce((sum, s) => sum + (parseFloat(s.credits) || 0), 0);
    summaryText.textContent = `${subjects.length} Subjects • ${totalCredits} Total Credits`;
}


/**
 * Displays the semester calculation results
 * @param {Object} result - { totalCredits, totalPoints, cgpa }
 * @param {number} gain - Optional improvement gain
 */
export function displayResult(result, gain = 0) {
    const cgpaEl = document.getElementById('cgpaValue');
    const creditsEl = document.getElementById('totalCredits');
    const pointsEl = document.getElementById('totalPoints');
    
    // Gain elements
    const gainContainer = document.getElementById('totalGainContainer');
    const gainValueEl = document.getElementById('totalGainValue');

    if (!cgpaEl) return;

    cgpaEl.textContent = result.cgpa;
    creditsEl.textContent = result.totalCredits;
    pointsEl.textContent = result.totalPoints;

    // Show/Hide Gain
    if (gain > 0) {
        gainContainer.style.display = 'inline-flex';
        gainValueEl.textContent = gain.toFixed(2);
    } else {
        gainContainer.style.display = 'none';
    }

    // Add a small animation effect
    cgpaEl.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cgpaEl.style.transform = 'scale(1)';
    }, 200);
}

/**
 * Shows a toast message to the user
 * @param {string} message 
 * @param {string} type - 'error' | 'success' (default error)
 */
export function showToast(message, type = 'error') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.background = type === 'success' ? '#10b981' : '#ef4444';
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Clears the subject container
 */
export function clearUI() {
    const container = document.getElementById('subjectContainer');
    container.innerHTML = '';
}

/**
 * Renders improvement suggestions as interactive cards
 * @param {Array} suggestions 
 */
export function renderImprovementSuggestions(suggestions) {
    const container = document.getElementById('improvementContainer');
    const section = document.getElementById('improvementSection');
    const intro = document.getElementById('analyzerIntro');

    if (!container || !section) return;

    if (suggestions.length === 0) {
        section.style.display = 'none';
        if (intro) intro.style.display = 'block';
        return;
    }

    section.style.display = 'block';
    if (intro) intro.style.display = 'none';
    container.innerHTML = '';

    suggestions.forEach((s, index) => {
        const card = document.createElement('div');
        card.className = 'improvement-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="improvement-info">
                <span class="improvement-subject">${s.subjectName}</span>
                <span class="improvement-path">${s.fromGrade} → ${s.toGrade}</span>
                <span class="improvement-gain">Potential Gain: ${s.gain}</span>
            </div>
            <label class="switch">
                <input type="checkbox" class="improvement-toggle" data-index="${s.subjectIndex}" data-grade="${s.toGrade}">
                <span class="slider"></span>
            </label>
        `;

        container.appendChild(card);
    });
}

