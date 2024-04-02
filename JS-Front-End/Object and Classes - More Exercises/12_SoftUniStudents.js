function softuniStudents(input) {
    let courses = {};

    for (const currentData of input) {
        if (!currentData.includes('email')) {
            const [courseName, capacity] = currentData.split(": ");

            if (courses.hasOwnProperty(courseName)) {
                courses[courseName].capacity+= Number(capacity);
                continue;
            }
           
            courses[courseName] = {capacity: Number(capacity), students: []};
            continue;
        }

        const studentInfo = currentData.split(" ");
        const [username, credits] = studentInfo[0].replace('[', " ").replace(']', " ").split(" ");
        const emailAddress = studentInfo[3];
        const course = studentInfo[studentInfo.length - 1];

        const newStudent = {username: username, email: emailAddress, credits: Number(credits)};

        if (courses.hasOwnProperty(course)) {
            let courseCapacity = courses[course].capacity;

            if (courseCapacity > 0) {
                courses[course].students.push(newStudent);
                courses[course].capacity-= 1;
            }
        }
    }

    let sortedCourses = Object.keys(courses).sort((k1, k2) => courses[k2].students.length - courses[k1].students.length);
    
    sortedCourses.forEach(course => {
        console.log(`${course}: ${courses[course].capacity} places left`);
        let v = courses[course].students.sort((s1, s2) => s2.credits - s1.credits)
            .forEach(s => console.log(`--- ${s.credits}: ${s.username}, ${s.email}`));
    })
}

softuniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);

softuniStudents(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore']
);
