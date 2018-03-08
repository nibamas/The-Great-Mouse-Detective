// require fer ofan í node_modules möppuna og sækir chai þar
var expect = require('chai').expect;


var titleCase = (name) => {
  return name[0].toUpperCase() + name.substring(1);
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.be.equal('A');
expect(titleCase('matrix')).to.be.equal('Matrix');

expect(titleCase('the great mouse detective')).to.be.equal('The Great Mouse Detective');
