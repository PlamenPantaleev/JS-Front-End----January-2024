function storeProvision(provisionArrayOne, provisionArrayTwo) {
  let stock = {};

  let arrays = [provisionArrayOne, provisionArrayTwo];

  for (const currentArray of arrays) {
    for (let i = 0; i < currentArray.length; i+=2) {
        const currentStock = currentArray[i];
        const quantity = Number(currentArray[i + 1]);

        if (stock.hasOwnProperty(currentStock)) {
            stock[currentStock] = Number(stock[currentStock] + quantity);
            continue;
        }

        stock[currentStock] = Number(quantity);
    }
  }

  for (const currentStock in stock) {

    console.log(`${currentStock} -> ${stock[currentStock]}`);
  }
}

// storeProvision(
//   ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

//   ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
// );

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    ) 
