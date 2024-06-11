const [
  { children: slidersPrimary },
  { children: slidersText },
  { children: slidersSecondary },
  { children: slidersTextSecondary },
] = sliders;

const colorPreviewPrimary = document.getElementById("rgbcolorPreviewPrimary");
const colorPreviewText = document.getElementById("rgbcolorPreviewText");
const colorPreviewSecondary = document.getElementById(
  "rgbcolorPreviewSecondary"
);
const colorPreviewTextSecondary = document.getElementById(
  "rgbcolorPreviewTextSecondary"
);

let colorScheme = {
  RGB: {
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
  },
  HEX: {
    primary: {
      R: "11",
      G: "11",
      B: "11",
    },
    text: {
      R: "FF",
      G: "FF",
      B: "FF",
    },
    secondary: {
      R: "4D",
      G: "4D",
      B: "4D",
    },
    textSecondary: {
      R: "B2",
      G: "B2",
      B: "B2",
    },
  },
  HSL: {
    primary: {
      R: 0,
      G: 0,
      B: 7,
    },
    text: {
      R: 0,
      G: 0,
      B: 100,
    },
    secondary: {
      R: 0,
      G: 0,
      B: 30,
    },
    textSecondary: {
      R: 0,
      G: 0,
      B: 70,
    },
  },
};

const getColorString = {
  RGB: (R, G, B) => {
    return `rgb(${R}, ${G}, ${B})`;
  },
  HEX: (R, G, B) => {
    return `#${R}${G}${B}`;
  },
  HSL: (HUE, SAT, LIGHT) => {
    return `hsl(${HUE}, ${SAT}%, ${LIGHT}%)`;
  },
};

const getRGBColorString = (R, G, B) => {
  return `rgb(${R}, ${G}, ${B})`;
};

const getHEXColorString = (R, G, B) => {
  return `#${R}${G}${B}`;
};

const getHSLColorString = (HUE, SAT, LIGHT) => {
  return `hsl(${HUE}, ${SAT}%, ${LIGHT}%)`;
};

const setRBG_preview = (previewElement, RGB_colorSchemeVariant) => {
  const { R, G, B } = RGB_colorSchemeVariant;

  previewElement.style.setProperty(
    "background-color",
    getRGBColorString(R, G, B)
  );
};

const setPreview = (previewElement, colorSchemeVariant) => {
  const { R, G, B } = colorSchemeVariant;
  previewElement.style.backgroundColor = getColorString[activeColorScheme](R, G, B);
};

const updateThemeColors = getColorStringFunction => {
    const { R: PR, G: PG, B: PB } = colorScheme[activeColorScheme].primary;
    const { R: TR, G: TG, B: TB } = colorScheme[activeColorScheme].text;
    const { R: SR, G: SG, B: SB } = colorScheme[activeColorScheme].secondary;
    const {
      R: TSR,
      G: TSG,
      B: TSB,
    } = colorScheme[activeColorScheme].textSecondary;

    const themeColors = {
      primary: getColorStringFunction(PR, PG, PB),
      text: getColorStringFunction(TR, TG, TB),
      secondary: getColorStringFunction(SR, SG, SB),
      textSecondary: getColorStringFunction(TSR, TSG, TSB),
    };
    changeBodyTheme(themeColors);
};

const sendTheme = {
  RGB: () => updateThemeColors(getColorString.RGB),
  HEX: () => updateThemeColors(getColorString.HEX),
  HSL: () => updateThemeColors(getColorString.HSL)
};

const showDefaultLabels = {
  RGB: () => {
    for (const RGB_sliderContainer of sliders) {
      const variant = RGB_sliderContainer.id;
  
      for (const child of RGB_sliderContainer.children) {
        const color = child.children[1].id;
        child.children[1].value = (colorScheme[activeColorScheme][variant][color]);
        child.children[2].innerHTML = colorScheme[activeColorScheme][variant][color];
      }
    }
  },
  HSL: () => {
    for (const RGB_sliderContainer of sliders) {
      const variant = RGB_sliderContainer.id;
  
      for (const child of RGB_sliderContainer.children) {
        const color = child.children[1].id;
        child.children[1].value = (colorScheme[activeColorScheme][variant][color]);
        child.children[2].innerHTML = colorScheme[activeColorScheme][variant][color];
      }
    }
  },
  HEX: () => {
    for (const RGB_sliderContainer of sliders) {
      const variant = RGB_sliderContainer.id;
  
      for (const child of RGB_sliderContainer.children) {
        const color = child.children[1].id;
        child.children[1].value = HEX_toDecimal(colorScheme[activeColorScheme][variant][color]);
        child.children[2].innerHTML = colorScheme[activeColorScheme][variant][color];
      }
    }
  }
};

const addSliderListeners = (sliders, colorSchemeCategory, previewElement) => {
  for (const RGB_slider of sliders) {
    RGB_slider.oninput = function () {
      const input = this.children[1];
      const colorToChange = input.id;
      const value = activeColorScheme === "HEX" ? decmialTo_HEX(+input.value) :+input.value;

      colorScheme[activeColorScheme][colorSchemeCategory][colorToChange] = value;

      for (const child of this.children) {
        if (child.id === "label") child.innerHTML = value;
      }

      setPreview(
        previewElement,
        colorScheme[activeColorScheme][colorSchemeCategory]
      );
      sendTheme[activeColorScheme]();
    };
  }
};

const onCustomClick = () => {
  showCustomSelectors();
  sendTheme[activeColorScheme]();
  showDefaultLabels[activeColorScheme]();
};

const addEvents = () => {
  addSliderListeners(slidersPrimary, "primary", colorPreviewPrimary);
  addSliderListeners(slidersText, "text", colorPreviewText);
  addSliderListeners(slidersSecondary, "secondary", colorPreviewSecondary);
  addSliderListeners(
    slidersTextSecondary,
    "textSecondary",
    colorPreviewTextSecondary
  );
};

const setup = () => {
  setPreview(colorPreviewPrimary, colorScheme[activeColorScheme].primary);
  setPreview(colorPreviewText, colorScheme[activeColorScheme].text);
  setPreview(colorPreviewSecondary, colorScheme[activeColorScheme].secondary);
  setPreview(
    colorPreviewTextSecondary,
    colorScheme[activeColorScheme].textSecondary
  );

  custom.addEventListener("click", () => onCustomClick());
  addEvents();
};

setup();
