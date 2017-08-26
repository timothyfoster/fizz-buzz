/*
This function encodes or decodes a string by shifting characters 13 places forward or backward
Whitespace characters are ignored.
-- run with node app.js
*/

function rot13(str, mode) {
  mode = mode || "decode"
  if (mode == "decode")
    shift = -13
  else
    shift = 13

  var ret = ""
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i)
    if (c >= 97 && c <= 122) {
      ret += String.fromCharCode((c - 97 + shift + 26) % 26 + 97)
    } else if (c >= 65 && c <= 90) {
      ret += String.fromCharCode((c - 65 + shift + 26) % 26 + 65)
    } else {
      ret += String.fromCharCode(c)
    }
  }
  return ret;
}

function main() {
	var tests = ['The quick brown fox jumps over the lazy dog.', 'Hello world!', 'Today is the 26th of August.', 'I love nodejs :D']

	for (var i=0; i<tests.length; i++) {
      console.log("Test   : " + tests[i])
      encode = rot13(tests[i], "encode")
			console.log("Encoded: " + encode)
      console.log("Decoded: " + rot13(encode))
      console.log("--")
  }
}

main()
