(function (exports) {
	function fuzzyMatchWord (word, input) {
		let i = 0;
		let result = '';
	
		for (const char of word) {
			if (i < input.length && char.toLowerCase() === input[i].toLowerCase()) {
				result += `<span style="background-color: #ff0; color: #000;">${char}</span>`;
				i++;
			} else {
				result += char;
			}
		}
	
		return i == input.length ? `<span style="background-color: rgba(0, 200, 0, 0.4);">${result}</span>` : word;
	}
	
	function highlight (text, input) {
		input = input.trim();
	
		return !input || input.includes(' ') ?
			text :
			text.split(/\b/).map((part) => (/^\w+$/.test(part)) ? fuzzyMatchWord(part, input) : part).join('');
	}

	exports.highlight = highlight;
})(FuzzyHighlight = {});
