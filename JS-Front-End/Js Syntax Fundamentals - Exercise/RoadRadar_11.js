function roadRadar(km, location) {
    let speedLimit = 0;
  switch (location) {
    case "motorway":
        speedLimit = 130;
      break;
    case "interstate":
        speedLimit = 90;
      break;
    case "city":
        speedLimit = 50;
      break;
    case "residential":
        speedLimit = 20;
      break;
  }

  if (km <= speedLimit) {
    console.log(`Driving ${km} km/h in a ${speedLimit} zone`);
    return;
  }

  let status = "";

  if (km - speedLimit <= 20) {
    status = "speeding";
  } else if (km - speedLimit <= 40) {
    status = "excessive speeding"
  } else {
    status = "reckless driving"
  }
  console.log(`The speed is ${km - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

