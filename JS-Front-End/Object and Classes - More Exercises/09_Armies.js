function armies(armiesArray) {
  let armies = {};

  for (const currentdata of armiesArray) {
    if (currentdata.includes("arrives")) {
      const leaderName = currentdata.split(" arrives");

      armies[leaderName[0]] = {};
      armies[leaderName[0]]["totalCount"] = 0;
      continue;
    }

    if (currentdata.includes("defeated")) {
      const leaderName = currentdata.split(" defeated");

      delete armies[leaderName[0]];
      continue;
    }

    if (currentdata.includes(" + ")) {
      const [army, amount] = currentdata.split(" + ");
      let found = false;

      for (const currentLeader in armies) {
        if (armies[currentLeader].hasOwnProperty(army)) {
          armies[currentLeader][army] += Number(amount);
          armies[currentLeader]["totalCount"] += Number(amount);
          console.log();
        }
      }

      continue;
    }

    const properties = currentdata.split(": ");

    const leaderName = properties[0];

    if (armies.hasOwnProperty(leaderName)) {
      const [armyName, count] = properties[1].split(", ");
      armies[leaderName][armyName] = Number(count);
      armies[leaderName]["totalCount"] += Number(count);
    }
  }

  let sortedLeader = sortArmiesByTotalCount(armies);

  print(sortedLeader);

  function sortArmiesByTotalCount(armies) {
    let keys = Object.keys(armies).sort(
      (a, b) => armies[b].totalCount - armies[a].totalCount
    );

    let sortedLeader = {};
    keys.forEach((key) => {
      sortedLeader[key] = armies[key];
    });

    return sortedLeader;
  }

  function print(sortedLeader) {
    Object.keys(sortedLeader).forEach((a) => {
      console.log(`${a}: ${sortedLeader[a].totalCount}`);

      delete sortedLeader[a].totalCount;

      let sortedArmies = Object.keys(sortedLeader[a]).sort(
        (v1, v2) => sortedLeader[a][v2] - sortedLeader[a][v1]
      );
      let sortedArmyObjects = {};
      sortedArmies.forEach((army) => {
        sortedArmyObjects[army] = sortedLeader[a][army];
      });

      Object.keys(sortedArmyObjects).forEach((currentA) =>
        console.log(`>>> ${currentA} - ${sortedArmyObjects[currentA]}`)
      );
    });
  }
}

// armies([
//   "Rick Burr arrives",
//   "Fergus: Wexamp, 30245",
//   "Rick Burr: Juard, 50000",
//   "Findlay arrives",
//   "Findlay: Britox, 34540",
//   "Wexamp + 6000",
//   "Juard + 1350",
//   "Britox + 4500",
//   "Porter arrives",
//   "Porter: Legion, 55000",
//   "Legion + 302",
//   "Rick Burr defeated",
//   "Porter: Retix, 3205",
// ]);

armies([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
