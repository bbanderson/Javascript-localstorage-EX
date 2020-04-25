import "./styles.css";

let COUNTRY = document.querySelector("select");
const STORAGE_NAME = "country";
const GREETING = document.querySelector("h1");

COUNTRY.addEventListener("change", event => {
  localStorage.setItem(STORAGE_NAME, COUNTRY.value);
  location.reload();
});

function fetchCountry(savedItem) {
  switch (savedItem) {
    case "none":
      GREETING.innerText = "Where are you from?";
      COUNTRY.selectedIndex = 0;
      break;
    case "KR":
      GREETING.classList.add("koreanFont");
      GREETING.innerText = "안녕하세요!!";
      COUNTRY.selectedIndex = 1;
      break;
    case "GR":
      GREETING.innerText = "Γεια σας!!";
      COUNTRY.selectedIndex = 2;
      break;
    case "TK":
      GREETING.innerText = "Merhaba!!";
      COUNTRY.selectedIndex = 3;
      break;
    case "FL":
      GREETING.innerText = "Hei!!";
      COUNTRY.selectedIndex = 4;
      break;
    default:
      break;
  }
}

function loadData() {
  const savedItem = localStorage.getItem(STORAGE_NAME);
  if (savedItem !== null) {
    fetchCountry(savedItem);
  }
}

function init() {
  loadData();
}

init();
