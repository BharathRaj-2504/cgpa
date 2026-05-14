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
 * Updates the display with calculation results
 * @param {Object} result - { totalCredits, totalPoints, cgpa }
 */
export function displayResult(result) {
    const cgpaEl = document.getElementById('cgpaValue');
    const creditsEl = document.getElementById('totalCredits');
    const pointsEl = document.getElementById('totalPoints');

    // Add a small animation effect on change
    cgpaEl.style.transform = 'scale(1.1)';
    setTimeout(() => cgpaEl.style.transform = 'scale(1)', 200);

    cgpaEl.textContent = result.cgpa;
    creditsEl.textContent = result.totalCredits;
    pointsEl.textContent = result.totalPoints;
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