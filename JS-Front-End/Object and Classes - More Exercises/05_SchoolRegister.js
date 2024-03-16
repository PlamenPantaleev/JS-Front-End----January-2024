function schoolRegister(studentsList) {

    let students = {};

    for (const currentStudent of studentsList) {
        const studentData = currentStudent.split(", ");
        const studentName = studentData[0].split(":")[1].trimStart();
        const studentGrade = studentData[1].split(":")[1].trimStart();
        const averageScore = studentData[2].split(":")[1].trimStart();

        let student = {name: studentName, averageScore: Number(averageScore)};

        if (averageScore < 3) {
            continue;
        }
        if (!students.hasOwnProperty(studentGrade)) {
            students[studentGrade] = [];
        }
        students[studentGrade].push(student);
    }

    for (const currentGrade of Object.entries(students)) {
        const newGrade = Number(currentGrade[0]) + 1;
        console.log(`${newGrade} Grade`);

        console.log(`List of students: ${currentGrade[1].map(s => s.name).join(", ")}`);

        let allGrades = currentGrade[1].map(s => s.averageScore);
        let avgGrade = avgGrades(allGrades);
        console.log(`Average annual score from last year: ${avgGrade} \n`);
    }

    function avgGrades(allGrades) {
        let sum = 0;
        for (const grade of allGrades) {
            sum+= grade;
        }

        return (sum / allGrades.length).toFixed(2);
    }
} 

// schoolRegister(
// [
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ]
// );

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
    );