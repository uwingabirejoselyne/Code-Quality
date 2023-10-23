const romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
}

function convertToRoman(roman) {
    return romanNumerals[1000][Math.floor(roman / 1000)] +
           romanNumerals[900][(Math.floor(roman % 1000 / 100) * 100)] +
           romanNumerals[100][Math.floor((roman % 100) / 10) * 10] +
           romanNumerals[10][roman % 10];
}


console.log(convertToRoman(14));

