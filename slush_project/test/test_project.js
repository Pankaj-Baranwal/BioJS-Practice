/*
 * slush-project
 * https://github.com/Pankaj-Baranwal/slush-project
 *
 * Copyright (c) 2015 pankaj
 * Licensed under the Apache-2.0 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var project = require('../');

describe('slush-project module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(project.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      project.hello('biojs').should.equal("hello biojs");
    });
  });
});
