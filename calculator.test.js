const Calculator = require ('./calculator');


const calculator = new Calculator();

//tests for add numbers
test ('return the sum of two nums', ()=>{
    expect(calculator.add(2,5)).toBe(7)
    expect(calculator.add(3,5)).toBe(10)

})

//tests for subtract numbers
test ('return the sabutract of two nums', ()=>{
    expect(calculator.subtract(5,2)).toBe(3)
})

//tests for divide numbers
test ('return the division of two nums', ()=>{
    expect(calculator.divide(10, 2)).toBe(5)
})

//tests for multply numbers
test ('return the multpy of two nums', ()=>{
    expect(calculator.multiply(2,5)).toBe(10);
})
