const [RGB_button, HEX_button, HSL_button] = document.querySelectorAll(".color-scheme-buttons > button");

const sliders = document.getElementsByClassName("slidecontainer");

const allButtons = [RGB_button, HEX_button, HSL_button];

const buildRange = (color, rangeIndex) => {
  const ranges = {
    RGB: { R: [0,255], G: [0,255], B: [0,255] },
    HEX: { R: [0,255], G: [0,255], B: [0,255] },
    HSL: { R: [0,360], G: [0,100], B: [0,100] }
  };
  return ranges[activeColorScheme][color][rangeIndex];
};

const buildTitle = (color) => {
  const titles = {
    RGB: { R: "Vermelho", G: "Verde", B: "Azul" },
    HEX: { R: "Vermelho", G: "Verde", B: "Azul" },
    HSL: { R: "Tom", G: "Saturação", B: "Luminosidade" }
  };
  return titles[activeColorScheme][color];
};

const fillSliders = () => {
  for (const sliderContainer of sliders) {
    for (const sliderInput of sliderContainer.children) {
      const color = sliderInput.children[1].id;
      sliderInput.children[1].min = buildRange(color, 0)
      sliderInput.children[1].max = buildRange(color, 1)
      if (["R", "G", "B"].includes(color)) {
        sliderInput.children[0].innerHTML = buildTitle(color);
      }
    }
  }
};

const disableOtherButtons = (exception) => {
  for (const button of allButtons) {
    if (exception.id !== button.id) button.classList.remove("active");
  }
};

const activateButton = (button) => {
  if (!button.classList.contains("active")) button.classList.add("active");
  disableOtherButtons(button);
};

const buttonOnClick = (button) => {
  activateButton(button);
  activeColorScheme = button.id;
  fillSliders();
  onCustomClick();
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
