function meetings(array) {
    let schedularForMeetings = {};

    for (const currentElement of array) {
        const properties = currentElement.split(' ');
        const dayOFweek = properties[0];
        const name = properties[1];

        if (schedularForMeetings.hasOwnProperty(dayOFweek)) {
            console.log(`Conflict on ${dayOFweek}!`);
            continue;
        }

        schedularForMeetings[dayOFweek] = name;

        console.log(`Scheduled for ${dayOFweek}`);
    }
    
   for (const key in schedularForMeetings) {
    console.log(`${key} -> ${schedularForMeetings[key]}`);
   }
}

meetings(
['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'
]
);