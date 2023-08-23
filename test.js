const {
    capitalize,
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
  } = require('strinify')

test('capitalize returns the first character of a given string in uppercase', () => {
    expect(capitalize("hello world!")).toBe("Hello world!")
    expect(capitalize("hello World test!")).toBe("Hello World test!")
})

test('allCaps makes all characters in the string uppercase', () => {
    expect(allCaps('hello world')).toBe('HELLO WORLD')
    expect(allCaps('test')).toBe('TEST')
})

test('capitalizeWords should capitalize the first character of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World')
    expect(capitalizeWords('this is a test')).toBe('This Is A Test')
})

test('capitalizeHeadline should capitalize except certain words', () => {
    expect(capitalizeHeadline('for welcome to the world but')).toBe('For Welcome To the World but')
    expect(capitalizeHeadline('in this but')).toBe('In This but')
})

test('removeExtraSpaces should remove extra spaces', () => {
    expect(removeExtraSpaces('hello     world')).toBe('hello world')
    expect(removeExtraSpaces('  remove  extra    spaces  ')).toBe('remove extra spaces')
})

test('kebobCase should convert to kebob case', () => {
    expect(kebobCase('Hello World')).toBe('hello-world')
    expect(kebobCase('Some String, Here')).toBe('some-string-here')
})

test('snakeCase should convert to snake case', () => {
    expect(snakeCase('Hello World')).toBe('hello_world')
    expect(snakeCase('Some String, Here')).toBe('some_string_here')
})

test('camelCase should convert to camel case', () => {
    expect(camelCase('Hello World')).toBe('helloWorld')
    expect(camelCase('Some String, Here')).toBe('someString,Here')
})

test('shift should shift the first character to the end', () => {
    expect(shift('Hello World')).toBe('ello WorldH')
    expect(shift('Test')).toBe('estT')
})

test('makeHashTag should convert to hash tags', () => {
    expect(makeHashTag('Amazing bongo drums for sale')).toEqual(['#amazing', '#bongo', '#drums'])
    expect(makeHashTag('This is another test')).toEqual(['#another','#this', '#test' ])
})

test('isEmpty should check if a string is empty or contains only whitespace', () => {
    expect(isEmpty('Hello World')).toBe(false)
    expect(isEmpty(' ')).toBe(true)
})