const data1 = [
  {
    name: "Afghanistan",
    topLevelDomain: [".af"],
    alpha2Code: "AF",
    alpha3Code: "AFG",
    callingCodes: ["93"],
    capital: "Kabul",
    altSpellings: ["AF", "Afġānistān"],
    subregion: "Southern Asia",
    region: "Asia",
    population: 40218234,
    latlng: [33, 65],
    demonym: "Afghan",
    area: 652230,
    timezones: ["UTC+04:30"],
    borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
    nativeName: "افغانستان",
    numericCode: "004",
    flags: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    },
    currencies: [
      {
        code: "AFN",
        name: "Afghan afghani",
        symbol: "؋",
      },
    ],
    languages: [
      {
        iso639_1: "ps",
        iso639_2: "pus",
        name: "Pashto",
        nativeName: "پښتو",
      },
      {
        iso639_1: "uz",
        iso639_2: "uzb",
        name: "Uzbek",
        nativeName: "Oʻzbek",
      },
      {
        iso639_1: "tk",
        iso639_2: "tuk",
        name: "Turkmen",
        nativeName: "Türkmen",
      },
    ],
    translations: {
      br: "Afghanistan",
      pt: "Afeganistão",
      nl: "Afghanistan",
      hr: "Afganistan",
      fa: "افغانستان",
      de: "Afghanistan",
      es: "Afganistán",
      fr: "Afghanistan",
      ja: "アフガニスタン",
      it: "Afghanistan",
      hu: "Afganisztán",
    },
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    regionalBlocs: [
      {
        acronym: "SAARC",
        name: "South Asian Association for Regional Cooperation",
      },
    ],
    cioc: "AFG",
    independent: true,
  },
];
const div = document.getElementsByClassName("country-div")[0];
const mode = document.getElementsByClassName("mode")[0];
const modebtn = document.getElementsByClassName("fa-moon")[0];
const link = document.getElementById("link");
let input = document.getElementsByTagName("input")[0];
let select = document.getElementsByTagName("select")[0];
let countrydata = "";

function Func() {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      countrydata = data;

      for (let i = 0; i < data.length; i++) {
        div.innerHTML += `<div class="country" id="${i}">
            <div>
            <img src="${data[i].flags.png}" alt="" />
            <div class="info">
            <p>${data[i].name}</p>
            <br>
       <span>Population: </span>
       <p>${data[i].population}</p>
       <br />
       <span>Region: </span>
       <p>${data[i].region}</p>
       <br />
       <span>Capital: </span>
       <p>${data[i].capital}</p>
     </div>
     </div>
     </div>`;
      }
    });
}
Func();
input.onchange = function search() {
  for (let i in countrydata) {
    if (!countrydata[i].name.includes(input.value)) {
      document.getElementById(i).style.display = "none";
    }
    if (input.value === "") {
      document.getElementById(i).style.display = "block";
    } else {
      // console.log("okk");
    }
  }
};
function all() {
  for (let i in countrydata) {
    document.getElementById(i).style.display = "block";
  }
}
select.onchange = function () {
  for (let i in countrydata) {
    if (countrydata[i].region !== select.value) {
      all();
      setTimeout(() => {
        if (select.value === "All") {
          all();
        }
        document.getElementById(i).style.display = "none";
      }, 100);
    } else {
      // console.log("okk");
    }
  }
};


const onClick1 = function () {
  sessionStorage.setItem("name", countrydata[this.id].name);
  sessionStorage.setItem("nativeName", countrydata[this.id].nativeName);
  sessionStorage.setItem("topLevelDomain", countrydata[this.id].topLevelDomain);
  sessionStorage.setItem("population", countrydata[this.id].population);

  sessionStorage.setItem("currencies", countrydata[this.id].currencies[0].name);
  sessionStorage.setItem("region", countrydata[this.id].region);
  let lang = countrydata[this.id].languages;
  let border = countrydata[this.id].languages;
  let langs = "";
  let borders = "";
  for (let i = 0; i < lang.length; i++) {
    langs += lang[i].name + ", ";
    borders += border[i].nativeName + ", ";
  }
  sessionStorage.setItem("languages", langs);
  sessionStorage.setItem("borders", borders);
  sessionStorage.setItem("subregion", countrydata[this.id].subregion);
  sessionStorage.setItem("capital", countrydata[this.id].capital);
  sessionStorage.setItem("img", countrydata[this.id].flags.png);
  window.location.href = "./info.html";
};

setTimeout(() => {
  for (let i in countrydata) {
    if (document.getElementById(i) === null || undefined || "") {
      console.log("removed");
    } else {
      let div = document.getElementById(i);
      div.addEventListener("click", onClick1);
    }
  }
}, 1000);

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
