function isValidHex(color) {
  if (!color || typeof color !== 'string') return false;
  let param = color;
  // Validate hex values
  if (color.substring(0, 1) === '#') param = color.substring(1);

  switch (param.length) {
    case 3:
      return /^[0-9A-F]{3}$/i.test(param);
    case 6:
      return /^[0-9A-F]{6}$/i.test(param);
    case 8:
      return /^[0-9A-F]{8}$/i.test(param);
    default:
      return false;
  }
}

export default function getColor(color) {
  let safeColor = color;
  if (!isValidHex(color)) {
    safeColor = '#6E84F5';
  }

  return safeColor;
}
