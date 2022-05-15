"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorDivisionByZero = exports.Calculator = void 0;
class Calculator {
    sumTwoNumbers(a, b) {
        return a + b;
    }
    subtractionTwoNumbers(a, b) {
        return a - b;
    }
    multiplyTwoNumbers(a, b) {
        return a * b;
    }
    divisionTwoNumbers(a, b) {
        if (b === 0) {
            throw new Error('Error division by zero');
        }
        return a / b;
    }
}
exports.Calculator = Calculator;
class ErrorDivisionByZero extends Error {
    constructor() {
        super();
        this.name = "Error division by zero";
    }
}
exports.ErrorDivisionByZero = ErrorDivisionByZero;
