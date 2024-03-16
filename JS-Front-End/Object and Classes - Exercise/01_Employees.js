function employees(employeesData) {
    let employees = [];


    for (const currentEmployee of employeesData) {
        const name = currentEmployee;
        const personalNumber = name.length;

        let employee = {name: name, personalNumber: personalNumber};

        employees.push(employee);
    }

    employees.forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`));
}

function anotherSolve(employeesData) {

    let employees = {};

    for (const currentEmployee of employeesData) {
        const name = currentEmployee;
        const personalNumber = name.length;

        employees[name] = personalNumber;
    }

    for (const employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`)
    }

}

employees(
[
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);

anotherSolve
(
[
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)