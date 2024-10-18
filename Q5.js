let btn = document.getElementById("btn");
let container = document.getElementById("container");
setTimeout(displayBlock, 5000);

function displayBlock() {
  container.style.display = "block";
}
function hideBlock() {
  container.style.display = "none";
}
setTimeout(hideBlock, 25000);

btn.addEventListener("click" , hideBlock)
