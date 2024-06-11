const claro = document.getElementById("claro");
const escuro = document.getElementById("escuro");
const pastel = document.getElementById("pastel");
const vermelhoEAzul = document.getElementById("vermelhoEAzul");
const floresta = document.getElementById("floresta");
const oceano = document.getElementById("oceano");
const custom = document.getElementById("custom");

let activeColorScheme = 'RGB';

const customSelectors = document.getElementsByClassName("custom-selector");


const hideCustomSelectors = () => {
  for (const customSelector of customSelectors) {
    customSelector.classList.add("hide");
  }
};

const showCustomSelectors = () => {
  for (const customSelector of customSelectors) {
    customSelector.classList.remove("hide");
  }
};

const escuroColors = {
  primary: "#111",
  secondary: "#4d4d4d",
  text: "#fff",
  textSecondary: "#b2b2b2",
};

const claroColors = {
  primary: "#fff",
  secondary: "#b2b2b2",
  text: "#000",
  textSecondary: "#fff",
};

const pastelColors = {
  primary: "#f3f3f3",
  secondary: "#ACABAB",
  text: "#949494",
  textSecondary: "#f3f3f3",
};

const vermelhoEAzulColors = {
  primary: "red",
  secondary: "blue",
  text: "yellow",
  textSecondary: "white",
};

const florestaColors = {
  primary: "#2e8b57",
  secondary: "#8fbc8f",
  text: "#2f4f4f",
  textSecondary: "#f5fffa",
};

const oceanoColors = {
  primary: "#4682b4",
  secondary: "#87ceeb",
  text: "#2f4f4f",
  textSecondary: "#e0ffff",
};

const themesOnClick = (theme) => {
  changeBodyTheme(theme);
  hideCustomSelectors();
};

const changeBodyTheme = (themeColors) => {
  console.log(themeColors);
  document.body.style.setProperty("--primary", themeColors.primary);
  document.body.style.setProperty("--secondary", themeColors.secondary);
  document.body.style.setProperty("--text", themeColors.text);
  document.body.style.setProperty(
    "--text-secondary",
    themeColors.textSecondary
  );
};

changeBodyTheme(escuroColors);
hideCustomSelectors();

claro.addEventListener("click", () => themesOnClick(claroColors));
escuro.addEventListener("click", () => themesOnClick(escuroColors));
pastel.addEventListener("click", () => themesOnClick(pastelColors));
vermelhoEAzul.addEventListener("click", () =>
  themesOnClick(vermelhoEAzulColors)
);
floresta.addEventListener("click", () => themesOnClick(florestaColors));
oceano.addEventListener("click", () => themesOnClick(oceanoColors));
