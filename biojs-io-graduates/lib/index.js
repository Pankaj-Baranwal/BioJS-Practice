var graduates = {};

graduates.read_static = function() {
  var data = "greenify:DE\ndaviddao:HK\nmhelvens:NL\ntimruffles:UK\niriscshih:TW\n\n";
  return graduates.parse(data);
};

graduates.parse = function(data) {
  // you need to fill this
  var parsed = {};
  for (var i = 0; i < data.length; i++) {
  	if (data[i].trim().length === 0) {
  		continue;
  	}
  	var row = data[i].split(":");
  }
};

module.exports = graduates;