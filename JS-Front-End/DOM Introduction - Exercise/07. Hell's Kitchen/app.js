function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const workersInfo = document.getElementById("inputs").children[1];
    let workersData = workersInfo.value
      .replaceAll("[", "")
      .replaceAll("]", "")
      .replaceAll('"', "")
      .replaceAll("\n", "");

    workersData = workersData.split(/(?:\s-\s|,\s|,)/g);

    // 1. addind the restourants with their workers and salaries

    let restourantsData = {};
    let currentRestourant = "";

    for (const currentData of workersData) {
      if (currentData.includes(" ")) {
        const workerName = currentData.split(" ")[0];
        const workerSalary = Number(currentData.split(" ")[1]);
        const worker = { name: workerName, salary: workerSalary };

        restourantsData[currentRestourant].push(worker);
      } else {
        let restourantName = currentData;
        restourantsData[restourantName] = [];
        currentRestourant = restourantName;
      }
    }

    // 2. find the restourant with the highest average salary

    for (const currentRestourant in restourantsData) {
      let salaries = Array.of(restourantsData[currentRestourant])[0].map(worker => worker.salary);
      let totalRestourantSalary = sumSalaries(salaries);
      let avgSalary = totalRestourantSalary / salaries.length;

      const averageSalary = {avgSalary: avgSalary};

      restourantsData[currentRestourant].push(averageSalary);
    }

    function sumSalaries(salaries) {
      let totalSalary = 0;
      for (const salary of salaries) {
        totalSalary+= salary;
      }

      return totalSalary;
    }

    // 3. sort restourants by the best average wage in descending order

    const sortedRestourants = Object.keys(restourantsData).sort((r2, r1) => {
      let firstRestourantAvgSalary = restourantsData[r1][restourantsData[r1].length - 1].avgSalary;
      let secondRestourantAvgSalary = restourantsData[r2][restourantsData[r2].length - 1].avgSalary;

      return firstRestourantAvgSalary - secondRestourantAvgSalary;
    });

    // 4. display the best restournat with his average salary and highest worker salary

    const theBestRestourant = sortedRestourants[0];
    const bestRestourantAvgSalary = restourantsData[theBestRestourant][restourantsData[theBestRestourant].length - 1].avgSalary;
    restourantsData[theBestRestourant].pop(restourantsData[theBestRestourant].length - 1);

    // sorting the best restourant's wages in descending order
    Object.values(restourantsData[theBestRestourant]).sort((w1, w2) => w1.salary - w2.salary);

    const bestSalary = restourantsData[theBestRestourant][0].salary;

    const ouputForBestRestourant = document.getElementById("bestRestaurant").children[2];
    let outputText = `Name: ${theBestRestourant} Average Salary: ${bestRestourantAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
    ouputForBestRestourant.textContent = outputText;

    // 5. Display all workers in the best restaurant with their salaries sorted by their salaries in descending order.

    const outputForWorkersInBestRestourant = document.getElementById("workers").children[2];
    let outputWorkersText = "";

    Array.of(restourantsData[theBestRestourant])[0].forEach(w => outputWorkersText+= `Name: ${w.name} With Salary: ${w.salary.toFixed(0)} \n`);
    outputForWorkersInBestRestourant.textContent = outputWorkersText.trim();
  }
}
