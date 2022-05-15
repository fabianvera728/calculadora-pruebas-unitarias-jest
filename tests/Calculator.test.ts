import {Calculator, ErrorDivisionByZero} from "../src/Calculator";

describe('Calculator should', () => {

    it('calculate sum between two numbers a y b', () => {
        const calculator = new Calculator();
        const expectedResult = 3;
        expect(calculator.sumTwoNumbers(1, 2)).toBe(expectedResult);
    });

    test('fail to calculate the sum between two numbers a y b', () => {
        const calculator = new Calculator();
        const expectedResult = 1;
        expect(calculator.sumTwoNumbers(1, 2)).not.toBe(expectedResult);
    });

    it('calculate substraction between two numbers a y b', () => {
        const calculator = new Calculator();
        const expectedResult = -1;
        expect(calculator.subtractionTwoNumbers(1, 2)).toBe(expectedResult);
    });

    it('calculate multiply between two numbers a y b', () => {
        const calculator = new Calculator();
        const expectedResult = 18;
        expect(calculator.multiplyTwoNumbers(6, 3)).toBe(expectedResult);
    });

    it('calculate division between two numbers a y b', () => {
        const calculator = new Calculator();
        const expectedResult = 2;
        expect(calculator.divisionTwoNumbers(6, 3)).toBe(expectedResult);
    });

    it('calculate division between two numbers a y b, must be greater than 1', () => {
        const calculator = new Calculator();
        expect(calculator.divisionTwoNumbers(6, 3)).toBeGreaterThan(1);
    });

    it('calculate division between two numbers a y b, be diferent by NAN', () => {
        const calculator = new Calculator();
        expect(calculator.divisionTwoNumbers(6, 3)).not.toBeNaN();
    });

    test('launch expection when calculate division of one number inside zero', () => {
        const calculator = new Calculator();
        expect(calculator.divisionTwoNumbers(6, 0)).toThrowError(ErrorDivisionByZero);
    });

})