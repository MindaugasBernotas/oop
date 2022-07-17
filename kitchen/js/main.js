import { Kaitlente } from "./Kaitlente.js";

const kaitlentciuKiekis = 5;

const titleDOM = document.querySelector(".title");
titleDOM.innerText = `Dirbtuve (${kaitlentciuKiekis})`;
// console.log(titleDOM.textContent);
// console.log(titleDOM.innerText);

// title tampa BOLD kai: lyginis skyliu kiekis
if (kaitlentciuKiekis % 2 === 0) {
  titleDOM.classList.add("bold");
}
// title tampa RED kai: bent viena skyle karsta
if (document.querySelector(".karsta")) {
  titleDOM.classList.add("red");
  titleDOM.classList.remove("title");

  titleDOM.style["font-size"] = "40px";
  // titleDOM.style['background-color'] = 'yellow';
  titleDOM.style.backgroundColor = "pink";
  // titleDOM.style['border-top-style'] = 'dotted';
  titleDOM.style.borderTopStyle = "dotted";
}

for (let i = 1; i <= kaitlentciuKiekis; i++) {
  const irenginys = new Kaitlente(i);
  irenginys.render();
  irenginys.enableClicks();
}

console.log([document.querySelector("main")]);
document.querySelector("main").childNodes[0].remove();
