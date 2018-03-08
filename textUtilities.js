// require fer ofan í node_modules möppuna og sækir chai þar
var expect = require('chai').expect;


var titleCase = (name) => {
  return name.toUpperCase();
}


expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.be.equal('A');

expect(titleCase('the great mouse detective')).to.be.equal('The Great Mouse Detective');
