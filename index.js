function capitalize(string) {
    // return string[0].toUpperCase() + string.slice(1)
    return string.charAt(0).toUpperCase() + string.slice(1);

    // const wordsArray = string.split('')
    // wordsArray[0] = wordsArray[0].toUpperCase()
    // return wordsArray.join('')
}

function allCaps(string) {
    const convertedString = string.toUpperCase()
    return convertedString
}

function capitalizeWords(string) {
    const wordsArray = string.split(' ')
    const upperWords = wordsArray.map(word  => { 
        return capitalize(word)
    }) 
    // console.log(upperWords)
    // for (let i = 0; i < wordsArray.length; i++) {
    //     const word = wordsArray[i]
    //     wordsArray[i] = word.charAt(0).toUpperCase() + word.slice(1)
    // }

    return upperWords.join(' ')
}

function capitalizeHeadline(string) {
    const wordsToNotInclude = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'];
    const wordsArray = string.split(' ');

    for (let i = 0; i < wordsArray.length; i++) {
        const word = wordsArray[i];

        if (i === 0 || !wordsToNotInclude.includes(word.toLowerCase())) {
            wordsArray[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
    }

    return wordsArray.join(' ');
}

function removeExtraSpaces(string) {
    const str = string.trim()
    const wordsArray = str.split(' ')
    const filteredWords = wordsArray.filter(word => word !== '')
    return filteredWords.join(' ')
}

function kebobCase(string) {
    const cleanedString = removeExtraSpaces(string);
    const validCharacters = /^[a-zA-Z0-9\s_-]+$/;
    const lowerString = cleanedString.toLowerCase()
    const charArray = lowerString.split('')
    // using regular expression in validCharacters to filter out unwanted characters.
    const kebobString = charArray
        .filter(char => validCharacters.test(char))
        .join('')
        .split(/\s+/)
        .join('-')
    
    return kebobString;
}

function snakeCase(string) {
    const kebobString = kebobCase(string);
    const snakeString = kebobString
        .split('-')
        .join('_')
    
    return snakeString;
}

function camelCase(string) {
    const wordsArray = string.split(' ')
    const camelWords = wordsArray.map((word, i) => {
        if (i === 0) {
            return word.toLowerCase()
        } else {
            return capitalize(word)
        }
    })
    return camelWords.join('')
}

function shift(string) {
    if (string.length <= 1) {
        return string
    }

    const firstChar = string.charAt(0)
    const slicedString = string.slice(1)

    const shiftedString = slicedString + firstChar

    return shiftedString
}

function makeHashTag(string) {
    const wordsArray = string.split(' ')
    // https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element
    wordsArray.sort((a, b) => b.length - a.length)
    const hashTags = wordsArray.slice(0, 3).map(word => `#${word.toLowerCase()}`);

    return hashTags;
}

// White space includes: spaces, line returns, and tabs. These characters can be represented with: \n (new line) \r (carrige return), \t (tab)
function isEmpty(string) {
    const trimmedStr = string.trim();

    for (const char of trimmedStr) {
        // Check if the character is a whitespace character
        if (char !== '\n' && char !== '\r' && char !== '\t') {
            return false
        }
    }

    return true
}
