function classStorage() {
  class Storage {
    constructor(capacity) {
      (this.capacity = capacity), (this.storage = []);
      this.totalCost = 0;
    }

    addProduct(product) {
      this.storage.push(product);
      this.totalCost += product.price * product.quantity;
      this.capacity -= product.quantity;
    }

    getProducts() {
        let text = this.storage.map(p => JSON.stringify(p));
        return text.join("\n");
    }
  }

  let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
  let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
  let productThree = { name: "Bread", price: 1.1, quantity: 8 };
  let storage = new Storage(50);
  storage.addProduct(productOne);
  storage.addProduct(productTwo);
  storage.addProduct(productThree);
  console.log(storage.getProducts());
  console.log(storage.capacity);
  console.log(storage.totalCost);
}

classStorage();
