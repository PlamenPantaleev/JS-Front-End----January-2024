function formatGrade(gradeInput) {
  if (gradeInput < 3.0) {
    return "Fail (2)";
  }

  if (gradeInput < 3.5) {
    return `Poor (${gradeInput.toFixed(2)})`;
  }

  if (gradeInput < 4.5) {
    return `Good (${gradeInput.toFixed(2)})`;
  }

  if (gradeInput < 5.5) {
    return `Very good (${gradeInput.toFixed(2)})`;
  }

  return `Excellent (${gradeInput.toFixed(2)})`;
}

console.log(formatGrade(2.99));
