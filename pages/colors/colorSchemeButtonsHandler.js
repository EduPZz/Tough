const [RGB_button, HEX_button, HSL_button] = document.getElementsByClassName(
  "color-scheme-buttons"
)[0].children;

const sliders = document.getElementsByClassName("slidecontainer");

const allButtons = [RGB_button, HEX_button, HSL_button];

const buildTitle = (color) => {
  switch (color) {
    case "R":
      if (activeColorScheme === "RGB") return "Vermelho"
      if (activeColorScheme === "HEX") return "Vermelho"
      if (activeColorScheme === "HSL") return "Tom"
      break;
    case "G":
      if (activeColorScheme === "RGB") return "Verde"
      if (activeColorScheme === "HEX") return "Verde"
      if (activeColorScheme === "HSL") return "Saturação"
      break;
    case "B":
      if (activeColorScheme === "RGB") return "Azul"
      if (activeColorScheme === "HEX") return "Azul"
      if (activeColorScheme === "HSL") return "luminosidade"
      break;
    default:
      break;
  }
};

const fillSliders = () => {
  for (const sliderContainer of sliders) {
    for (const sliderInput of sliderContainer.children) {
      const color = sliderInput.children[1].id;
      switch (color) {
        case "R":
          sliderInput.children[0].innerHTML = buildTitle(color);
          break;
        case "G":
          sliderInput.children[0].innerHTML = buildTitle(color);
          break;
        case "B":
          sliderInput.children[0].innerHTML = buildTitle(color);
          break;
        default:
          break;
      }
    }
  }
};

const disableOtherButtons = (exeption) => {
  for (const button of allButtons) {
    if (exeption.id !== button.id) button.classList.remove("active");
  }
};

const activateButton = (button) => {
  if (!("active" in button.classList)) button.classList.add("active");

  disableOtherButtons(button);
};

const buttonOnClick = (button) => {
  activateButton(button);
  activeColorScheme = button.id;
  fillSliders();
};

const addButtonsEventListeners = () => {
  for (const button of allButtons) {
    button.addEventListener("click", () => buttonOnClick(button));
  }
};

const setUp = () => {
  addButtonsEventListeners();
  fillSliders();
};

setUp();
