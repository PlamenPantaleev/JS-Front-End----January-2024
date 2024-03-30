function attachGradientEvents() {
   let gradient = document.getElementById("gradient");
   gradient.addEventListener('mousemove', mouseMove);
   let result = document.getElementById("result");

   function mouseMove(event) {
    console.log(event);
    let offsetX = event.offsetX;
    console.log(offsetX);
    console.log(event.target.clientWidth - 1);

    let percent = offsetX / (event.target.clientWidth - 1);
    result.textContent = `${Math.trunc(percent * 100)}%`
   }
}