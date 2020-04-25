let BODY = document.querySelector("body");
let SELECT = BODY.querySelector("select");
const USER_STORAGE_NAME = "country";
const NONE_IMG =
  "https://cdn.pixabay.com/photo/2020/04/22/20/05/wadi-rum-5079834_1280.jpg";
const KOR =
  "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg";
const GREECE =
  "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg";
const TURKEY =
  "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg";
const FINLAND =
  "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg";
function fetchImage(country) {
  const IMG = new Image();
  if (country === "none") {
    IMG.src = NONE_IMG;
  } else if (country === "KR") {
    IMG.src = KOR;
  } else if (country === "GR") {
    IMG.src = GREECE;
  } else if (country === "TK") {
    IMG.src = TURKEY;
  } else if (country === "FL") {
    IMG.src = FINLAND;
  }

  IMG.classList.add("backgroundImage");
  BODY.prepend(IMG);
}

function loadData() {
  const COUNTRY_STROGE = localStorage.getItem(USER_STORAGE_NAME);
  console.log(COUNTRY_STROGE);
  fetchImage(COUNTRY_STROGE);
}

function init() {
  loadData();
  SELECT.addEventListener("change", fetchImage);
}

init();
