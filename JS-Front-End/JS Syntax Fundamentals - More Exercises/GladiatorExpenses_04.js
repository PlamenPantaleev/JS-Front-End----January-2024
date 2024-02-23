function gladiatorExpenses(
  numberGamesLost,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  const numberOfHelmesBroken = Math.floor(numberGamesLost / 2);
  const numberOfSwordsBroken = Math.floor(numberGamesLost / 3);
  const numberOfShieldsBroken = Math.floor(numberGamesLost / 6);
  const numberOfArmorsBroken = Math.floor(numberGamesLost / 12);

  const helmetRepairCost = numberOfHelmesBroken * helmetPrice;
  const swordsRepairCost = numberOfSwordsBroken * swordPrice;
  const shieldRepairCost = numberOfShieldsBroken * shieldPrice;
  const armorRepairCost = numberOfArmorsBroken * armorPrice;

  const totalCost =
    helmetRepairCost + swordsRepairCost + shieldRepairCost + armorRepairCost;

  console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);

gladiatorExpenses(23, 12.5, 21.5, 40, 200);
