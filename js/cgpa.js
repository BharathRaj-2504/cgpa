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

/**
 * Returns the next possible grade in the REC system
 * @param {string} currentGrade 
 * @returns {string|null}
 */
export function getNextGrade(currentGrade) {
    const order = ["U", "C", "B", "B+", "A", "A+", "O"];
    const index = order.indexOf(currentGrade);
    
    if (index === -1 || index === order.length - 1) return null;
    return order[index + 1];
}

/**
 * Generates improvement suggestions based on Semester GPA
 * @param {Array} subjects 
 * @returns {Array} List of suggestions
 */
export function generateImprovementSuggestions(subjects) {
    const baselineResult = calculateCGPA(subjects);
    const baselineGpa = parseFloat(baselineResult.cgpa);
    
    const suggestions = [];

    subjects.forEach((subject, index) => {
        const nextGrade = getNextGrade(subject.grade);
        
        if (nextGrade) {
            // Calculate "What If"
            const improvedSubjects = subjects.map((s, i) => 
                i === index ? { ...s, grade: nextGrade } : s
            );
            
            const improvedResult = calculateCGPA(improvedSubjects);
            const improvedGpa = parseFloat(improvedResult.cgpa);
            
            const gain = (improvedGpa - baselineGpa).toFixed(2);
            
            suggestions.push({
                subjectIndex: index,
                subjectName: subject.name,
                fromGrade: subject.grade,
                toGrade: nextGrade,
                gain: gain > 0 ? `+${gain}` : gain
            });
        }
    });

    return suggestions;
}

