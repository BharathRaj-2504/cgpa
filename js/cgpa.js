export const gradeMap = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "U": 0
};

export function calculateCGPA(subjects) {

    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach(subject => {

        const credits = Number(subject.credits);
        const gradePoint = gradeMap[subject.grade];

        totalCredits += credits;
        totalPoints += credits * gradePoint;
    });

    const cgpa = totalCredits
        ? (totalPoints / totalCredits).toFixed(2)
        : 0;

    return {
        totalCredits,
        totalPoints,
        cgpa
    };
}