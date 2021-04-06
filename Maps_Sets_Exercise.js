// Quick Question #1
/* {1, 2, 3, 4} */

// Quick Question #2
/* 'ref' */

// Quick Question #3
/* 0: {Array(3) => true}
1: {Array(3) => false} */

// hasDuplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// vowelCount
function vowelCount(str) {
	const vowelMap = new Map();
	for (let letter of str) {
		let lowerCased = letter.toLowerCase();
		if (isVowel(lowerCased)) {
			if (vowelMap.has(lowerCased)) {
				vowelMap.set(lowerCased, vowelMap.get(lowerCased) + 1);
			} else {
				vowelMap.set(lowerCased, 1);
			}
		}
	}
	return vowelMap;
}
