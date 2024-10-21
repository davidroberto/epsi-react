const button = document.querySelector("button");

button.addEventListener("click", () => {
  const message = document.createElement("p");
  message.textContent = "Bien joué, t'as cliqué !";

  const body = document.querySelector("body");

  body.appendChild(message);
});
