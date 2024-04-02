function lockedProfile() {
  const buttouns = document.querySelectorAll("button");

  for (const currentButton of buttouns) {
    currentButton.addEventListener("click", (e) => {
      const user = currentButton.parentElement;
      const fields = user.querySelectorAll("input[type=radio]");
      const showingData = user.querySelector("div");

      if (fields[0].checked) {
        return;
      }

      if (currentButton.textContent === "Show more") {
        showingData.style.display = "block";
        currentButton.textContent = "Hide it";
      } else {
        showingData.style.display = "none";
        currentButton.textContent = "Show more";
      }
    });
  }
}
