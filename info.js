function country() {
  // window.location.href = './info.html'
  let border = sessionStorage.getItem("borders");
  border = border.split(",");
  let info = `
    <div class="country info-country"><p> ${sessionStorage.getItem(
      "name"
    )}</p><br>
    <div class="grid">
        <div><span>Native name:</span><p> ${sessionStorage.getItem(
          "nativeName"
        )}</p></div>
        <div><span>Top Level Domain:</span><p> ${sessionStorage.getItem(
          "topLevelDomain"
        )}</p></div>
        <div><span>Population:</span><p> ${sessionStorage.getItem(
          "population"
        )}</p></div>
        <div><span>Currencies:</span><p> ${sessionStorage.getItem(
          "currencies"
        )}</p></div>
        <div><span>Region:</span><p> ${sessionStorage.getItem(
          "region"
        )}</p></div>
        <div><span>Languages:</span><p> ${sessionStorage.getItem(
          "languages"
        )}</p></div>
        <div><span>Sub Region:</span><p> ${sessionStorage.getItem(
          "subregion"
        )}</p></div>
        <div><span>Capital:</span><p> ${sessionStorage.getItem(
          "capital"
        )}</p></div>
    </div>
    <div><span>Border Countries:</span> <div><p>${border[0]}</p>${
    border[1] == null || undefined || " " ? "" : `<p>${border[1]}</p>`
  }
    ${
      border[2] == null || undefined || " " ? "" : `<p>${border[2]}</p>`
    }</div></div>
  </div>
    `;
  document.getElementById("info-div").innerHTML = `
    <img src="${sessionStorage.getItem("img")}" alt="" id="img">
    ${info}
    `;
  document.title = sessionStorage.getItem("name") + "-Country";
}
country();

const mode = document.getElementsByClassName("mode")[0];
const modebtn = document.getElementsByClassName("fa-moon")[0];
const link = document.getElementById("link");

const mode1 = function () {
  modebtn.classList.toggle("fa-solid");
  if (link.href.includes("dark.css")) {
    link.href = "";
    sessionStorage.setItem("mode", false);
  } else {
    link.href = "dark.css";
    sessionStorage.setItem("mode", true);
  }
};
function darkMode() {
  mode.addEventListener("click", mode1);
}

darkMode();
if (sessionStorage.getItem("mode") === "true") {
  mode1();
}
