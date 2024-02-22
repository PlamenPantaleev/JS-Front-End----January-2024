function calculateVacationCost(groupCount, groupType, dayOfWeek) {
  let price = 0;
  let totalCost = 0;

  switch (groupType) {
    case "Students": {
      if (dayOfWeek === "Friday") {
        price = 8.45;
      } else if (dayOfWeek === "Saturday") {
        price = 9.8;
      } else if (dayOfWeek === "Sunday") {
        price = 10.46;
      }

      totalCost = groupCount * price;

      if (groupCount >= 30) {
        totalCost = totalCost - (totalCost * 0.15);
      }
      break;
    }
    case "Business": {
      if (dayOfWeek === "Friday") {
        price = 10.90;
      } else if (dayOfWeek === "Saturday") {
        price = 15.6;
      } else if (dayOfWeek === "Sunday") {
        price = 16;
      }

      if (groupCount >= 100) {
        totalCost = (groupCount - 10) * price;
      } else {
        totalCost = groupCount * price;
      }
      break;
    }
    case "Regular": {
      if (dayOfWeek === "Friday") {
        price = 15;
      } else if (dayOfWeek === "Saturday") {
        price = 20;
      } else if (dayOfWeek === "Sunday") {
        price = 22.50;
      }

      totalCost = groupCount * price;

      if (groupCount >= 10 && groupCount <= 20) {
        totalCost = totalCost - (totalCost * 0.05);
      }
    }
    break;
  }
  console.log(`Total price: ${totalCost.toFixed(2)}`);
}

calculateVacationCost(30, "Students", "Sunday");
calculateVacationCost(40, "Regular", "Saturday");
calculateVacationCost(100, "Business", "Friday");
