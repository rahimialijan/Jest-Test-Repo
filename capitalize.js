function capitalize(string){
  const firstChar=string.charAt(0).toUpperCase();
    const secondChars=string.slice(1);

    return firstChar+secondChars;
}

module.exports = capitalize;