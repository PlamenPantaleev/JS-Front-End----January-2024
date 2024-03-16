function flightSchedule(array) {
    let planes = array[0];
    let statues = array[1];

    let flights = {};

    for (const currentPlane of planes) {
        const [number, city] = currentPlane.split(" ");
        let flight = {Destination: city, Status: "Ready to fly"};

        flights[number] = flight;
    }

    for (const status of statues) {
        const [number, currentStatus] = status.split(" ");

        if (flights.hasOwnProperty(number)) {
            let flight = flights[number];
            flight.Status = currentStatus;
        }
    }

    const flightStatus = array[2];

    if (flightStatus[0] === "Ready to fly") {
        return Object.entries(flights).filter(f => f[1].Status === "Ready to fly")
            .forEach(f => console.log(f[1]));
    }

    Object.entries(flights).filter(f => f[1].Status === "Cancelled")
        .forEach(f => console.log(f[1]));
}

// flightSchedule(
// [
// ['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'
// ],
// ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK430 Cancelled'
// ],
// ['Cancelled']
// ]
// )

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
)