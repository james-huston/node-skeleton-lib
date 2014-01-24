
var myLib = require('../');

describe('myLib', function () {
  it('should have a main property as a function', function () {
    myLib.main.should.be.an.instanceOf(Function);
  });

  describe('the main lib', function () {
    it('should say hello to the world', function () {
      myLib.main('world').should.equal('Hello world');
    });
  });
});
