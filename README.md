# strinify npm package

The strinify npm package provides string manipulation functions designed to enhance JavaScript's built-in string capabilities. It provides a set of intuitive functions that allow you to easily transform and manipulate strings in various ways.

## Installation

To start using strinify in your JavaScript projects, you can install it via npm:

```shell
npm install strinify
```

## Usage
Once you have installed strinify, you can import the desired functions into your JavaScript code:

```javascript
const stringJS = require('strinify');
```

OR

```javascript
const {
    capitalizeString,
    allCaps,
    capitalizeWords,
    capitalizeHeadline,
    removeExtraSpaces,
    kebobCase,
    snakeCase,
    camelCase,
    shift,
    makeHashTag,
    isEmpty
} = require('strinify');
```

## Features
strinify offers a wide range of features that empower you to work with strings more effectively:

- capitalize(string)
Makes the first character of a given string uppercase.

- allCaps(string)
Makes all characters in the string uppercase.

- capitalizeWords(string)
Makes the first character of each word in the string uppercase.

- capitalizeHeadline(string)
Capitalizes all words in the string except certain words unless they are the first word.

- removeExtraSpaces(string)
Removes extra spaces from the beginning, end, and middle of the string.

- kebobCase(string)
Converts the string to kebob case by removing spaces and replacing them with hyphens.

- snakeCase(string)
Converts the string to snake case by removing spaces and replacing them with underscores.

- camelCase(string)
Converts the string to camel case.

- shift(string)
Shifts the first character of the string to the end.

- makeHashTag(string)
Converts the given string to a list of hash tags.

- isEmpty(string)
Returns true if the string is empty or contains only whitespace.

## Functions and Examples
strinify provides the following functions for string manipulation:

### capitalize(string)
Converts the first character of a string to uppercase.

Example:

```javascript
const { capitalize } = require('strinify');

console.log(capitalize('hello world')); // Output: Hello world
console.log(capitalize('world')); // Output: World
```

### allCaps(string)

Makes all characters in the string uppercase.

Example:

```javascript
const { allCaps } = require('strinify');

console.log(allCaps('hello world')); // Output: HELLO WORLD
```

### capitalizeWords(string)

Makes the first character of each word in the string uppercase.

Example:

```javascript
const { capitalizeWords } = require('strinify');

console.log(capitalizeWords('hello world')); // Output: Hello World
```

### - capitalizeHeadline(string)

Capitalizes all of the words except the words: the, in, a, an, and, but, for, at, by, from unless one of these words is the first word of the string!

Example:

```javascript
const { capitalizeHeadline } = require('strinify');

console.log(capitalizeHeadline('for welcome to the world but')); // Output: For Welcome To the World but
```

### removeExtraSpaces(string)

Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.

Example:

```javascript
const { removeExtraSpaces } = require('strinify');

console.log(removeExtraSpaces('hello     world')); // Output: hello world
```

### kebobCase(string)

Converts the string to kebob case by removing spaces and replacing them with hyphens and makes all characters lowercase.

Example:

```javascript
const { kebobCase } = require('strinify');

console.log(kebobCase('Hello World')); // Output: hello-world
console.log(kebobCase('Some String, Here')); // Output: some-string-here
```

### snakeCase(string)

Converts the string to snake case by removing spaces and replacing them with underscores and makes all characters lowercase.

Example:

```javascript
const { snakeCase } = require('strinify');

console.log(snakeCase('Hello World')); // Output: hello_world
```

### camelCase(string)

Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.

Example:

```javascript
const { camelCase } = require('strinify');

console.log(camelCase('Hello World')); // Output: helloWorld
```

### shift(string)

Shifts the first character of the string to the end.

Example:

```javascript
const { shift } = require('strinify');

console.log(shift('Hello World')); // Output: ello WorldH
```

### makeHashTag(string)

This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.
If the given string has more than three words, it picks the three longest and make the hash tag from those.

Example:

```javascript
const { makeHashTag } = require('strinify');

console.log(makeHashTag('Amazing bongo drums for sale')); // Output: ['#amazing', '#bongo', '#drums']
```

### isEmpty(string)

Returns true if the string is empty or contains only whitespace.

Example:

```javascript
const { isEmpty } = require('strinify');

console.log(isEmpty('Hello World')); // Output: false
console.log(isEmpty(' ')); // Output: true
```


## Contributing
I welcome contributions from the community to improve and expand the functionality of strinify. If you have any suggestions, bug reports, or feature requests, please don't hesitate to open an issue or submit a pull request on the GitHub repository.

### 
- The package is intended to be used for educational purposes only.