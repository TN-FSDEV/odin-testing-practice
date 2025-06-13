import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./main.js"

describe("capitalize function", () => {
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
})

describe("reverseString function", () => {
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
})

describe("calculator's functions", () => {
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

describe("caesar cipher function", () => {
    test("it should return a string shifted according to a positive shift factor", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc");
    })

    test("it should also preserve text case", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    })

    test("it should not change non-alphabetic characters", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    })

    test("it should still return a shifted string even if the shift factor is negative", () => {
        expect(caesarCipher("abc", -3)).toBe("xyz");
    })

    test("it should still return a shifted string even if shift factor > 26 (shift left more than alphabet range", () => {
        expect(caesarCipher("abc", 100)).toBe("wxy");
    })

    test("it should still return a shifted string even if shift factor < -26 (shift right more than alphabet range", () => {
        expect(caesarCipher("abc", -30)).toBe("wxy");
    })
})

describe("analyze array function", () => {
    test("it should return an object with properties such as average, min, max, and length", () => {
        const analyzeTestCases = [
            { input: [1, 8, 3, 4, 2, 6], expected: { average: 4, min: 1, max: 8, length: 6 } },
            { input: [1, 8, 3, 4, 9, 15, -4, -12], expected: { average: 3, min: -12, max: 15, length: 8 } },
            { input: [1, 8, 3, 4], expected: { average: 4, min: 1, max: 8, length: 4 } }
        ];
        analyzeTestCases.forEach((testCase) => {
            const object = analyzeArray(testCase.input);
            expect(object).toEqual(testCase.expected);
        })
    })
})
