function carWish(commands) {
  const soapIncrement = (cleaned) => (cleaned += 10);
  const waterIncrement = (cleaned) => (cleaned += cleaned * 0.2);
  const vacuumCleanerIncrement = (cleaned) => (cleaned += cleaned * 0.25);
  const mudDecrement = (cleaned) => (cleaned -= cleaned * 0.1);

  let cleaned = 0;

  for (let i = 0; i < commands.length; i++) {
    let currentCommand = commands[i];

    switch (currentCommand) {
      case "soap":
        cleaned = soapIncrement(cleaned);
        break;
      case "water":
        cleaned = waterIncrement(cleaned);
        break;
      case "vacuum cleaner":
        cleaned = vacuumCleanerIncrement(cleaned);
        break;
      case "mud":
        cleaned = mudDecrement(cleaned);
        break;
    }
  }

  console.log(`The car is ${cleaned.toFixed(2)}% clean.`);
}

carWish(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWish(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
