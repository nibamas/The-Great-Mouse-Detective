// require fer ofan í node_modules möppuna og sækir chai þar
var expect = require('chai').expect;


var titleCase = (name) => {
  let words = name.split(" ");
  let upperwords = words.map( (word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  let finalname = upperwords.join(' ');
  return finalname;
}


expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.be.equal('A');
expect(titleCase('matrix')).to.be.equal('Matrix');

expect(titleCase('the great mouse detective')).to.be.equal('The Great Mouse Detective');
