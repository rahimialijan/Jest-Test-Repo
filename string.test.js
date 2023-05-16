const stringLength= require('./string');
const reverseString = require ('./string');


it ('works', ()=>{
    expect(1).toBe(1)
})


test ("Return the length of string", ()=>{
    expect(stringLength('Hello')).toBe(5)
    expect(stringLength('')).toBe('string must be at least 1 char');
    expect(stringLength('5466565888')).toBe('string can not be longer then 10')
})


test('return the string in reverse mode', ()=>{
    expect(reverseString('hello world')).toBe('dlrow olleh')
})
