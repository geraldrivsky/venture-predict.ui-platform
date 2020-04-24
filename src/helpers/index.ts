export function getRgbaFromHex(hex: string, alpha: number) {
  let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

export function abbreviateNumber(string: string): string {
  const number: number = +string;
  const SI_SYMBOL = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
  const tier = (Math.log10(number) / 3) | 0;

  if (tier === 0) return string;

  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);
  let scaled: any = number / scale;
  
  if (scaled.toFixed(1) !== `${scaled}.0`)
    scaled = scaled.toFixed(1);

  return scaled + suffix;
};

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}