function solve() {
   let addButtons = document.querySelectorAll("button.add-product");
   let textArea = document.getElementsByTagName('textarea')[0];
   let checkOutButton = document.querySelector('.checkout');
   let totalProductsCost = 0;
   let boughtProducts = [];

   for (const currentButton of addButtons) {
      currentButton.addEventListener('click', () => {
         let productName = currentButton.parentElement.parentElement.querySelector('.product-title').textContent;
         let productPrice = Number(currentButton.parentElement.parentElement.querySelector('.product-line-price').textContent);

         let appendingText = `Added ${productName} for ${productPrice.toFixed(2)} to the cart.`;

         totalProductsCost+= productPrice;
         if (!boughtProducts.includes(productName)) {
            boughtProducts.push(productName);
         }

         textArea.textContent+= appendingText + '\n';
      })
   }

   checkOutButton.addEventListener('click', (event) => {
      Array.from(addButtons).forEach(button => button.setAttribute('disabled', 'disabled'));
      event.target.setAttribute('disabled', 'disabled');

      let finalText = `You bought ${boughtProducts.join(", ")} for ${totalProductsCost.toFixed(2)}`
      textArea.textContent+= finalText;
   })
}