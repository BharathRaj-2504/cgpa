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
    
    // Using a template for cleaner structure
    row.innerHTML = `
        <input 
            type="text" 
            placeholder="Subject Name" 
            class="subject-name" 
            value="${subject.name || ''}"
            aria-label="Subject Name"
        >
        <input 
            type="number" 
            placeholder="Credits" 
            class="subject-credit" 
            min="1" 
            value="${subject.credits || ''}"
            aria-label="Credits"
        >
        <select class="subject-grade" aria-label="Expected Grade">
            <option value="O" ${subject.grade === 'O' ? 'selected' : ''}>O (10)</option>
            <option value="A+" ${subject.grade === 'A+' ? 'selected' : ''}>A+ (9)</option>
            <option value="A" ${subject.grade === 'A' ? 'selected' : ''}>A (8)</option>
            <option value="B+" ${subject.grade === 'B+' ? 'selected' : ''}>B+ (7)</option>
            <option value="B" ${subject.grade === 'B' ? 'selected' : ''}>B (6)</option>
            <option value="C" ${subject.grade === 'C' ? 'selected' : ''}>C (5)</option>
            <option value="U" ${subject.grade === 'U' ? 'selected' : ''}>U (0)</option>
        </select>
        <button class="btn btn-danger remove-btn" title="Remove Subject" aria-label="Remove Subject">
            🗑️
        </button>
    `;

    return row;
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

