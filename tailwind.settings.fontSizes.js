const settings = require("./tailwind.settings");

const fsMin = settings.typography.fontSizeMin;
const fsMax = settings.typography.fontSizeMax;
const { msFactorMin } = settings.typography;
const { msFactorMax } = settings.typography;
const screenMin = settings.screensRem.min;
const screenMax = settings.screensRem["2xl"];

// Calc Min and Max Fontsize
const calcMulti = (multiMin = 0, multiMax = null) => {
  return {
    fsMin: fsMin * msFactorMin ** multiMin,
    fsMax: fsMax * msFactorMax ** (multiMax || multiMin),
  };
};

// build the clamp property
const clamp = (multiMin = 0, multiMax = null) => {
  const res = calcMulti(multiMin, multiMax || multiMin);
  const { fsMin, fsMax } = res;
  return `clamp(${fsMin}rem, calc(${fsMin}rem + (${fsMax} - ${fsMin}) * ((100vw - ${screenMin}rem) / (${screenMax} - ${screenMin}))), ${fsMax}rem)`;
};

module.exports = {
  xs: clamp(-2),
  sm: clamp(-1),
  base: clamp(0),
  lg: clamp(1),
  xl: clamp(2),
  "2xl": clamp(3),
  "3xl": clamp(4),
  "4xl": clamp(5),
  "5xl": clamp(6),
  "6xl": clamp(7),
  "7xl": clamp(8),
  "8xl": clamp(9),
  "9xl": clamp(10),
};
