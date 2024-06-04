const claro = document.getElementById('claro');
const escuro = document.getElementById('escuro');
const pastel = document.getElementById('pastel');
const vermelhoEAzul = document.getElementById('vermelhoEAzul');

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
    primary: "lightGrey",
    secondary: "grey",
    text: "white",
    textSecondary: "lightGrey",
};

const vermelhoEAzulColors = {
    primary: "red",
    secondary: "blue",
    text: "yellow",
    textSecondary: "white",
};


const changeBodyTheme = (themeColors) => {
    document.body.style.setProperty('--primary', themeColors.primary);
    document.body.style.setProperty('--secondary', themeColors.secondary);
    document.body.style.setProperty('--text', themeColors.text);
    document.body.style.setProperty('--text-secondary', themeColors.textSecondary);
}

claro.addEventListener('click', () => changeBodyTheme(claroColors));
escuro.addEventListener('click', () => changeBodyTheme(escuroColors));
pastel.addEventListener('click', () => changeBodyTheme(pastelColors));
vermelhoEAzul.addEventListener('click', () => changeBodyTheme(vermelhoEAzulColors));