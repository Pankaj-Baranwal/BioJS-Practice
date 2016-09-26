// var graduates = require('biojs-io-graduates');
// graduates.read("https://cdn.rawgit.com/biojs-edu/tutorial-graduates/master/list",function(countries){
//    console.log(countries);
//  });


// var graduates = require('./index');
// var result = graduates.parse("greenify:DE\ndaviddao:HK");
// console.log(result);

// var graduates = require('biojs-io-graduates');
// graduates.parse("greenify:DE\ndaviddao:HK");

var graduates = require('slush_project');
graduates.parse("greenify:DE\ndaviddao:HK");
// should return {"DE": 1, "HK": 1}