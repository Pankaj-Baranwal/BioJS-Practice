// /*
//  * slush-project
//  * https://github.com/Pankaj-Baranwal/slush-project
//  *
//  * Copyright (c) 2016 pankaj
//  * Licensed under the Apache-2.0 license.
//  */

// /**
// @class slushproject
//  */


// var  slushproject;
// module.exports = slushproject = function(opts){
//   this.el = opts.el;
//   this.el.textContent = slushproject.hello(opts.text);
// };

// /**
//  * Private Methods
//  */

// /*
//  * Public Methods
//  */

// /**
//  * Method responsible to say Hello
//  *
//  * @example
//  *
//  *     slushproject.hello('biojs');
//  *
//  * @method hello
//  * @param {String} name Name of a person
//  * @return {String} Returns hello name
//  */


// slushproject.hello = function (name) {

//   return 'hello ' + name;
// };


var graduates = require('biojs-io-graduates');

graduates.read_static = function() {
  var data = "greenify:DE\ndaviddao:HK\nmhelvens:NL\ntimruffles:UK\niriscshih:TW\n\n";
  return graduates.parse(data);
};

graduates.parse = function(data) {
  // you need to fill this
  return {};
};

module.exports = graduates;
