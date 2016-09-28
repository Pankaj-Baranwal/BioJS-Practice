var graduates = {};

graduates.read_static = function() {
  var data = "greenify:DE\ndaviddao:HK\nmhelvens:NL\ntimruffles:UK\niriscshih:TW\n\n";
  return graduates.parse(data);
};

graduates.parse = function(data) {
  // you need to fill this
  var parsed = {};
  for (var i = 0; i < data.length; i++) {
    // skip empty rows
    if (data[i].trim().length === 0) {
      continue;
    }
    console.log(i);
    var row = data[i].split(":");
    console.log(typeof parsed[row[1]]);
    // init if new
    if (typeof parsed[row[1]] === "undefined") {
      parsed[row[1]] = 0;
    }
    parsed[row[1]] ++;
  }
  return parsed;
};

module.exports = graduates;