// test one
function stringLength(string){
    const length=string.length;
    if (length===0){
        throw new Error('string must be at least 1 char')
    }
    if (length>10){
        throw new Error ('string can not be longer then 10')
    } 

    return length
}
module.exports= stringLength;


//test two
function reverseString(string){
    const reversedStr=string.split('').reverse().join('');
     return reversedStr;
};
 module.exports= reverseString;
