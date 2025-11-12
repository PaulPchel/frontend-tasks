function calculateGrade(students) {
    const result = [];

    for (const student of students) {
        let sum = 0;

        for (let i = 0; i < student.scores.length; i++) {
            sum += student.scores[i];
        }

        const average = +(sum / student.scores.length).toFixed(2);
        let grade;

        if (average >= 90) {
            grade = "A";
        } else if (average >= 80) {
            grade = "B";
        } else if (average >= 70) {
            grade = "C";
        } else {
            grade = "F";
        }

        result.push({ ...student, average, grade });
    }

    return result;
}

const students = [
    { name: "Алексей", scores: [85, 92, 78] },
    { name: "Мария", scores: [95, 87, 92] }
];

console.log(calculateGrade(students));
