console.log(removeSpaces('   textWithSpaces   '));
console.log(removeSpaces('   more text with spaces     '));

function removeSpaces(text) {
    const regex = /^\s+|\s+$/g;
    return text.replace(regex, '');
}
