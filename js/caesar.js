var caesarShift = function(str, amount) {

	// Make an output variable
	var output = '';
	var m, n;

	// Go through each character
	for (var i = 0; i < str.length; i++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90)){
				n = (code - 65 + amount) % 26;
				if (n < 0)
					c = String.fromCharCode(((code - 65 + amount) % 26) + 91);
				else {
					c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
				}
			}


			// Lowercase letters
			else if ((code >= 97) && (code <= 122)) {
				m = (code - 97 + amount) % 26
				if (m < 0)
					c = String.fromCharCode((m % 26) + 123);
				else {
					c = String.fromCharCode((m % 26) + 97);
				}
			}


		}

		// Append
		output += c;

	}

	// All done!
	document.getElementById('outputBox').innerHTML = output;
}
