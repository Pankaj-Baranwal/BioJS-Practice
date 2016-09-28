// Chai is subset of Node.js core library
var assert = require("chai").assert;
// ("../") means go up a path
var tutorial = require("../");

describe('Graduates', function(){
  describe('parse', function(){
    it('should return match with default object', function(){
      var dummyObj = {DE: 1, HK: 1, NL: 1, UK: 1, TW: 1};
      // deepEqual means LHS and RHS will pass even if they are not the same objects. 
      // Their actual data is compared.
      assert.deepEqual(tutorial.read_static(), dummyObj);
    });
  });
});