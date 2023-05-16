const capitalize = require  ('./capitalize');


test ('return the fist letter of str capitalized', ()=>{
    expect (capitalize('hello')).toBe('Hello')
    expect (capitalize('')).toBe('')
})