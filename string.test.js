const stringLength= require('./string');
const reverseString = require ('./string');


it ('works', ()=>{
    expect(1).toBe(1)
})


test ("Return the length of string", ()=>{
    expect(stringLength('hello')).toBe(5)
   
})


test('return the string in reverse mode', ()=>{
    expect(reverseString('hello world')).toBe('dlrow olleh')
})
