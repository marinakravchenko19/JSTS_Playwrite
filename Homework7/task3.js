console.log(getLetterCount("banana"));
// { b: 1, a: 3, n: 2 }
console.log(getLetterCount("The short text, and some more text"));
// { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1 }

function getLetterCount(text) {
    const result = {};
    const letters = text.toLowerCase().replace(/[^a-z]/g, '');
    const lettersArray = [...letters];

    lettersArray.forEach(symbol => {
        let regex = new RegExp(`${symbol}`, 'g');
        let match = letters.match(regex);
        result[symbol] = match.length;
    });
    return result;
}