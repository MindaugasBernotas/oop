const divDOM = document.querySelector("div");
console.log(divDOM);
const btnPlusDOM = document.querySelector("button:nth-of-type(1)");
console.log(btnPlusDOM);
const btnMinusDOM = document.querySelector("button:nth-child(4)");
console.log(btnMinusDOM);
let number = 0;

let veikimuKiekis = 0;
// function labas() {
//   if (veikimuKiekis++ >= 2) {
//     console.log("labas tilte");
//   }
// }
// const btn = document.getElementById("btn");
const veiktiNuoPaspaudimo = 3;
function labas() {
  if (++veikimuKiekis < veiktiNuoPaspaudimo) {
    return;
  }
  const btn = document.getElementById("btn");
  btn.style.backgroundColor = "red";
  btn.style.color = "white";
  console.log("labas tilte");
}
btnPlusDOM.addEventListener("click", labas, padidinti);

btnMinusDOM.addEventListener("click", () => console.log("chiau brashke"));

function padidinti() {
  divDOM.textContent = ++number;
}
function sumazinti() {
  divDOM.textContent = --number;
}
btnPlusDOM.addEventListener("click", padidinti);
btnMinusDOM.addEventListener("click", sumazinti);
