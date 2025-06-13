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

function caesarCipher() { };

function analyzeArray() { };

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };