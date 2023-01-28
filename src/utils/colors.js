export const darkenColor = (hex) => {
    // convert hex to RGB
    let r = parseInt(hex.substring(1,3), 16);
    let g = parseInt(hex.substring(3,5), 16);
    let b = parseInt(hex.substring(5,7), 16);

    // darken each color by 10%
    r = Math.floor(r * 0.8);
    g = Math.floor(g * 0.8);
    b = Math.floor(b * 0.8);

    // convert RGB back to hex
    let newHex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    return newHex;
}