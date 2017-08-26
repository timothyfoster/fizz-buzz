/*
Checks if a string is a palindrome
-- run with node app.js
*/

function isPalindrome(str) {

  str = str.replace(/[^0-9a-z]/gi, '');
  str = str.toLowerCase();
  var length = str.length;

  for( var i=0; i<length && str[i] === str[length-i-1]; i++);
  if( length === i)
    return true;

  return false;
}

function main() {
	var words = ['eye', 'pop', 'qwerty', 'wow', 'fizzle'];

	for (var i=0; i<words.length; i++) {
		if (isPalindrome(words[i]))
			console.log(words[i] + " is a palindrome!");
		else
			console.log(words[i] + " is not a palindrome.");
	}
}

main();
