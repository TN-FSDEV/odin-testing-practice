import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./main.js"

test("The first character should be capitalized", () => {
    const stringTestCases = [
        { input: "cat", expected: "Cat" },
        { input: "foreigner", expected: "Foreigner" },
        { input: "developer", expected: "Developer" }
    ];
    stringTestCases.forEach((testCase) => {
        expect(capitalize(testCase.input)).toBe(testCase.expected);
    })
})

test("The string should be reversed", () => {
    const stringTestCases = [
        { input: "cat", expected: "tac" },
        { input: "foreigner", expected: "rengierof" },
        { input: "ambiguous", expected: "suougibma" }
    ];
    stringTestCases.forEach((testCase) => {
        expect(reverseString(testCase.input)).toBe(testCase.expected);
    })
})

describe("calculator's functions should perform mathematically", () => {
    test("the result of add(a, b) should equal a + b", () => {
        let a, b;
        const addNumberTestCases = [
            { input: [30, 23], expected: 53 },
            { input: [25, 7], expected: 32 },
            { input: [12, 12], expected: 24 }
        ];
        addNumberTestCases.forEach((testCase) => {
            a = testCase.input[0];
            b = testCase.input[1];
            expect(calculator.add(a, b)).toEqual(testCase.expected);
        })
    })

    test("the result of subtract(a, b) should equal a - b", () => {
        let a, b;
        const subtractNumberTestCases = [
            { input: [30, 23], expected: 7 },
            { input: [25, 7], expected: 18 },
            { input: [12, 12], expected: 0 }
        ];
        subtractNumberTestCases.forEach((testCase) => {
            a = testCase.input[0];
            b = testCase.input[1];
            expect(calculator.subtract(a, b)).toEqual(testCase.expected);
        })
    })

    test("the result of divide(a, b) should equal a / b", () => {
        let a, b;
        const divideNumberTestCases = [
            { input: [6, 2], expected: 3 },
            { input: [25, 5], expected: 5 },
            { input: [12, 12], expected: 1 }
        ];
        divideNumberTestCases.forEach((testCase) => {
            a = testCase.input[0];
            b = testCase.input[1];
            expect(calculator.divide(a, b)).toEqual(testCase.expected);
        })
    })

    test("the result of multiply(a, b) should equal a * b", () => {
        let a, b;
        const multiplyNumberTestCases = [
            { input: [6, 2], expected: 12 },
            { input: [25, 5], expected: 125 },
            { input: [12, 12], expected: 144 }
        ];
        multiplyNumberTestCases.forEach((testCase) => {
            a = testCase.input[0];
            b = testCase.input[1];
            expect(calculator.multiply(a, b)).toEqual(testCase.expected);
        })
    })
})