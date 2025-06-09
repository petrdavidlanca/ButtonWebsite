// script.js
const button = document.getElementById("satisfyingButton");
let count = 0;
button.textContent = count;

button.addEventListener("click", () => {
    count++;
    button.textContent = count;
});
