var reuse = require("./index");
var parser = require("biojs-io-newick").parse_newick;

console.log(reuse(3, 6));

var newick = "(homo_sapiens:1,(mus_musculus:2,danio_rerio:17):4);"
var parsed_data = parser(newick);
console.log(parsed_data);