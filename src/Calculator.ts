export class Calculator{

    sumTwoNumbers(a: number, b: number){
        return a + b;
    }

    subtractionTwoNumbers(a: number, b: number){
        return a - b;
    }

    multiplyTwoNumbers(a: number, b: number){
        return a * b;
    }

    divisionTwoNumbers(a: number, b: number){
        if(b == 0){
            throw new ErrorDivisionByZero()
        }
        return a / b;
    }

}

export class ErrorDivisionByZero extends Error{
    constructor() {
        super();
        this.name = "Error division between zero";
    }
}