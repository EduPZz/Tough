const sliders = document.getElementsByClassName("slidecontainer");
const RGB_slidersPrimary = sliders[0].children;
const RGB_slidersText = sliders[1].children;
const RGB_slidersSecondary = sliders[2].children;
const RGB_slidersTextSecondary = sliders[3].children;

const RGB_colorPreviewPrimary = document.getElementById("rgbcolorPreviewPrimary");
const RGB_colorPreviewText = document.getElementById("rgbcolorPreviewText");
const RGB_colorPreviewSecondary = document.getElementById("rgbcolorPreviewSecondary");
const RGB_colorPreviewTextSecondary = document.getElementById("rgbcolorPreviewTextSecondary");

const currentTheme = document.body.style.getPropertyValue("--primary");

let RGB_colorScheme = {
  primary: {
    R: 17,
    G: 17,
    B: 17,
  },
  text: {
    R: 255,
    G: 255,
    B: 255,
  },
  secondary: {
    R: 77,
    G: 77,
    B: 77,
  },
  textSecondary: {
    R: 178,
    G: 178,
    B: 178,
  },
};

const getRGBColorString = (R, G, B) => {
  return `rgb(${R}, ${G}, ${B})`;
};

const setRBG_preview = (previewElement, RGB_colorSchemeVariant) => {
  const { R, G, B } = RGB_colorSchemeVariant;

  previewElement.style.setProperty(
    "background-color",
    getRGBColorString(R, G, B)
  );
};


const sendTheme = () => {
  const {R: PR, G: PG, B: PB} = RGB_colorScheme.primary;
  const {R: TR, G: TG, B: TB} = RGB_colorScheme.text;
  const {R: SR, G: SG, B: SB} = RGB_colorScheme.secondary;
  const {R: TSR, G: TSG, B: TSB} = RGB_colorScheme.textSecondary;

  const themeColors = {
    primary: getRGBColorString(PR, PG, PB),
    text: getRGBColorString(TR, TG, TB),
    secondary: getRGBColorString(SR, SG, SB),
    textSecondary: getRGBColorString(TSR, TSG, TSB),
  };
  changeBodyTheme(themeColors);
}

const addSliderListeners = (sliders, colorSchemeCategory, previewElement) => {
  for (const RGB_slider of sliders) {
    RGB_slider.oninput = function () {
      const colorToChange = this.id;
      const value = this.value;

      RGB_colorScheme[colorSchemeCategory][colorToChange] = value;

      setRBG_preview(previewElement, RGB_colorScheme[colorSchemeCategory]);
      sendTheme();
    };
  }
};

const onCustomClick = () => {
  showCustomSelectors();
  sendTheme();
}

addSliderListeners(RGB_slidersPrimary, 'primary', RGB_colorPreviewPrimary);
addSliderListeners(RGB_slidersText, 'text', RGB_colorPreviewText);
addSliderListeners(RGB_slidersSecondary, 'secondary', RGB_colorPreviewSecondary);
addSliderListeners(RGB_slidersTextSecondary, 'textSecondary', RGB_colorPreviewTextSecondary);

const setup = () => {
  setRBG_preview(RGB_colorPreviewPrimary, RGB_colorScheme.primary);
  setRBG_preview(RGB_colorPreviewText, RGB_colorScheme.text);
  setRBG_preview(RGB_colorPreviewSecondary, RGB_colorScheme.secondary);
  setRBG_preview(RGB_colorPreviewTextSecondary, RGB_colorScheme.textSecondary);

  

  custom.addEventListener("click", () => onCustomClick());
};

setup();
