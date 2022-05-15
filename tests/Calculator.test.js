"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("../src/Calculator");
describe('Calculator should', () => {
    it('calculate sum between two numbers a y b', () => {
        const calculator = new Calculator_1.Calculator();
        const expectedResult = 3;
        expect(calculator.sumTwoNumbers(1, 2)).toBe(expectedResult);
    });
    test('fail to calculate the sum between two numbers a y b', () => {
        const calculator = new Calculator_1.Calculator();
        const expectedResult = 1;
        expect(calculator.sumTwoNumbers(1, 2)).not.toBe(expectedResult);
    });
    it('calculate substraction between two numbers a y b', () => {
        const calculator = new Calculator_1.Calculator();
        const expectedResult = -1;
        expect(calculator.subtractionTwoNumbers(1, 2)).toBe(expectedResult);
    });
    it('calculate multiply between two numbers a y b', () => {
        const calculator = new Calculator_1.Calculator();
        const expectedResult = 18;
        expect(calculator.multiplyTwoNumbers(6, 3)).toBe(expectedResult);
    });
    it('calculate division between two numbers a y b', () => {
        const calculator = new Calculator_1.Calculator();
        const expectedResult = 2;
        expect(calculator.divisionTwoNumbers(6, 3)).toBe(expectedResult);
    });
    it('launch expection when calculate division of one number inside zero', () => {
        const calculator = new Calculator_1.Calculator();
        expect(calculator.divisionTwoNumbers(6, 0)).toThrow('Error division by zero');
    });
});
