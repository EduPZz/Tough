const HEX_toDecimal = (HEX_code) => {
    return parseInt(HEX_code, 16);
}

const decmialTo_HEX = (decimalCode) => {
    const hex = decimalCode.toString(16).toUpperCase();
    return hex.length == 1 ? "0" + hex : hex;
}