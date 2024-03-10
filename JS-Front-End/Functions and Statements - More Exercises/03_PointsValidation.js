function pointsValidation(array) {
  const formulaDistanceBetweenXandY = (x, y) => Math.sqrt(Math.pow(0 - x, 2) + Math.pow(0 - y, 2));
  const formulaForOverallDistance = array => Math.sqrt(Math.pow(array[2] - array[0], 2) + Math.pow(array[3] - array[1], 2));

  const distanceBetweenXOneAndYOne = formulaDistanceBetweenXandY(array[0], array[1]);
  const distanceBetweenXTwoAndYTwo = formulaDistanceBetweenXandY(array[2], array[3]);
  const overallDistance = formulaForOverallDistance(array);

  if (Number.isInteger(distanceBetweenXOneAndYOne)) {
    console.log(`{${array[0]}, ${array[1]}} to {0, 0} is valid`);
  } else {
    console.log(`{${array[0]}, ${array[1]}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(distanceBetweenXTwoAndYTwo)) {
    console.log(`{${array[2]}, ${array[3]}} to {0, 0} is valid`);
  } else {
    console.log(`{${array[2]}, ${array[3]}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(overallDistance)) {
    console.log(`{${array[0]}, ${array[1]}} to {${array[2]}, ${array[3]}} is valid`);
  } else {
    console.log(`{${array[0]}, ${array[1]}} to {${array[2]}, ${array[3]}} is invalid`);
  }
}

pointsValidation([3, 0, 0, 4]);
// pointsValidation([2, 1, 1, 1]);
