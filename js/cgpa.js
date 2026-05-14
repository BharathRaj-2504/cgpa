/**
 * REC Grade Point Mapping
 * O: 10, A+: 9, A: 8, B+: 7, B: 6, C: 5, U: 0
 */
export const GRADE_POINTS = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "U": 0
};

/**
 * Calculates CGPA based on REC formula
 * Formula: CGPA = Σ(GP * Credits) / Σ(Total Credits)
 * 
 * @param {Array} subjects - List of { name, credits, grade }
 * @returns {Object} { totalCredits, totalPoints, cgpa }
 */
export function calculateCGPA(subjects) {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach(subject => {
        const credits = parseFloat(subject.credits) || 0;
        const gradePoint = GRADE_POINTS[subject.grade] || 0;

        totalCredits += credits;
        totalPoints += credits * gradePoint;
    });

    // Handle division by zero and format to 2 decimal places
    const cgpa = totalCredits > 0 
        ? (totalPoints / totalCredits).toFixed(2) 
        : "0.00";

    return {
        totalCredits,
        totalPoints,
        cgpa
    };
}