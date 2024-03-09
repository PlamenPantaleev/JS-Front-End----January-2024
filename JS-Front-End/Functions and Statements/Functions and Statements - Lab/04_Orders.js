function orders(product, quantity) {
  let price = 0;
  let totalSum = 0;

  switch (product) {
    case "coffee":
      price = 1.5;
      break;
    case "water":
      price = 1;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2;
      break;
  }

  totalSum = quantity * price;

  console.log(totalSum.toFixed(2));
}

orders("coffee", 2);


function anotherSolve(product, quantity) {
  const totalSum = sum(product);
  console.log(totalSum(quantity));

  function sum(product) {
    switch (product) {
      case "coffee":
        return (a) => (a * 1.5).toFixed(2);

      case "water":
        return (a) => (a * 1).toFixed(2);

      case "coke":
        return (a) => (a * 1.4).toFixed(2);

      case "snacks":
        return (a) => (a * 2).toFixed(2);
    }
  }
}

anotherSolve("coffee", 2);
