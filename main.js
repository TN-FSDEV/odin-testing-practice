function capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
};

function reverseString(string) {
    return string.split("").reverse().join("");
};

const calculator = {
    add(a, b) { return a + b },
    subtract(a, b) { return a - b },
    divide(a, b) { return a / b },
    multiply(a, b) { return a * b },
};

function caesarCipher(string, factor) {
    const alphabet = generateAlphabets();
    const simplifiedFactor = factor % 26;

    const stringArr = string.split("");
    const shiftedStr = stringArr.map(char => {
        char = char.toLowerCase();
        if (isAlpha(char)) {
            let originalIndex = alphabet.indexOf(char);
            let shiftedIndex = originalIndex + simplifiedFactor;
            if (shiftedIndex > 25) shiftedIndex = shiftedIndex - 26;
            if (shiftedIndex < 0) shiftedIndex = shiftedIndex + 26;
            return alphabet[shiftedIndex];
        } else {
            return char;
        }
    });
    for (let i = 0; i < stringArr.length; i++) {
        if (isUpperAlpha(stringArr[i])) {
            shiftedStr[i] = shiftedStr[i].toUpperCase();
        }
    }
    return shiftedStr.join("");
};

function analyzeArray() { };


//helper functions
function isAlpha(char) {
    return /^[A-Za-z]$/.test(char);
}

function isUpperAlpha(char) {
    return /^[A-Z]$/.test(char);
}

function generateAlphabets() {
    const alphabet = [];
    for (let i = 97; i < 123; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };