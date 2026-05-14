export function createSubjectRow(subject = {}) {

    const row = document.createElement('div');
    row.className = 'subject-row';

    row.innerHTML = `
        <input
            type="text"
            placeholder="Subject Name"
            class="subject-name"
            value="${subject.name || ''}"
        >

        <input
            type="number"
            placeholder="Credits"
            class="subject-credit"
            min="1"
            value="${subject.credits || ''}"
        >

        <select class="subject-grade">
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="U">U</option>
        </select>

        <button class="remove-btn">❌</button>
    `;

    row.querySelector('.subject-grade').value = subject.grade || 'O';

    return row;
}

export function displayResult(result) {

    document.getElementById('totalCredits').textContent = result.totalCredits;

    document.getElementById('totalPoints').textContent = result.totalPoints;

    document.getElementById('cgpa').textContent = result.cgpa;
}

export function showError(message) {

    let error = document.querySelector('.error');

    if (!error) {
        error = document.createElement('p');
        error.className = 'error';
        document.querySelector('.container').prepend(error);
    }

    error.textContent = message;

    setTimeout(() => {
        error.textContent = '';
    }, 3000);
}