var graduates = {};

graduates.read_static = function() {
  var data = "greenify:DE\ndaviddao:HK\nmhelvens:NL\ntimruffles:UK\niriscshih:TW\n\n";
  return graduates.parse(data);
};

// custom parse function.
graduates.parse = function(data) {
  // parsed stores dictionary type data for aliases per country.
  var parsed = {};

  // replace new lines and spaces with comma.
  data = data.split("\n").join(",");
  data = data.split(" ").join(",");

  for (var i=0; i<data.length; i++){
  	if (data[i]===":") {
  		// fetch country code.
  		var country = data[i+1] + data[i+2];
  		// check if newly found key exists in dictionary or not.
	  	if (typeof parsed[country]==="undefined") {
	  		// if no such key exists, then create one with value one.
	  		parsed[country] = 1;
	  	}else{
	  		// add 1 to given key.
	  		parsed[country]++;
	  	}
	  }
	}
	// return the processed dictionary array.
  return parsed;
};

// Only expose a single function instead of the entire package.
module.exports = graduates;