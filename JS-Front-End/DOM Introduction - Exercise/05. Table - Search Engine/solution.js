function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const names = document.querySelectorAll('.container tbody td');
      const input = document.getElementById("searchField").value;
      const currentInput = input;

      let index = 0;

      document.getElementById('searchField').value = '';
      for (let i = 0; i < names.length; i+=3) {
         const personData = names[i].textContent + names[i + 1].textContent + names[i + 2].textContent;
         const person = document.getElementsByTagName('tbody')[0].children[index];

         if (personData.includes(currentInput)) {
            person.className = 'select';
         } else {
            person.className = '';
         }

         index++;
      }
   }
}