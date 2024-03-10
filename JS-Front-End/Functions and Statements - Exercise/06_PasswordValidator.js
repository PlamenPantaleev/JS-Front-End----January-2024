function passwordValidator(passwordInput) {
  const isValidLength = passwordInput => passwordInput.length >= 6 && passwordInput.length <= 10;
  const containsOnlyLettersAndDigits = passwordInput => /^[a-zA-z0-9]+$/.test(passwordInput);
  const atLeatsTwoDigits = passwordInput => passwordInput.split('').filter(c => (Number.isInteger(Number(c)))).length >= 2;

  let isValid = true;

  if (!isValidLength(passwordInput)) {
    isValid = false;
    console.log("Password must be between 6 and 10 characters");
  }

  if (!containsOnlyLettersAndDigits(passwordInput)) {
    isValid = false;
    console.log("Password must consist only of letters and digits");
  }

  if (!atLeatsTwoDigits(passwordInput)) {
    isValid = false;
    console.log("Password must have at least 2 digits");
  }

  if (isValid) {
    console.log("Password is valid");
  }
}

// passwordValidator("login");
passwordValidator("MyPass123");
// passwordValidator("Pa$s$s");
