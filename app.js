const hamLines = document.querySelector("#ham-lines");
const body = document.querySelector("body");

hamLines.addEventListener("click", () => {
  hamLines.classList.toggle("animate");
  body.classList.toggle("move");
});
