const img = document.querySelector("#imgBorde");

img.addEventListener("click", function () {
  if (img.style.border === "2px solid red") {
    img.style.border = "";
  } else {
    img.style.border = "2px solid red";
  }
});


const s1 = document.querySelector("#s1");
const s2 = document.querySelector("#s2");
const s3 = document.querySelector("#s3");
const btnStickers = document.querySelector("#btnStickers");
const resultado = document.querySelector("#resultadoStickers");

btnStickers.addEventListener("click", function () {
  const total = Number(s1.value) + Number(s2.value) + Number(s3.value);

  if (total <= 10) {
    resultado.textContent = "Llevas " + total + " stickers";
  } else {
    resultado.textContent = "Llevas demasiados stickers";
  }
});



const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const btnPass = document.querySelector("#btnPass");
const resultadoPass = document.querySelector("#resultadoPass");

btnPass.addEventListener("click", function () {
  const password = p1.value + p2.value + p3.value;

  if (password === "911") {
    resultadoPass.textContent = "password 1 correcto";
  } else if (password === "714") {
    resultadoPass.textContent = "password 2 correcto";
  } else {
    resultadoPass.textContent = "password incorrecto";
  }
});
