var moment = require('./moment.min.js')

// Null & Undefined
function isNull(value) {
    return value === null
}
var emptyGlass = null
console.log(isNull(emptyGlass))
console.assert(isNull(emptyGlass) === true)

function isUndefined(value) {
    return value === undefined
}
var blockOfClay
console.log(isUndefined(blockOfClay))
console.assert(isUndefined(blockOfClay) === true)

// Booleans
function isTrue(value) {
    return value
}
console.log(isTrue(1 + 1 === 2))
console.assert(isTrue(1 + 1 === 2) === true)

// Strings
function convertCaseLower(value) {
    return value
}
console.log(convertCaseLower('I AM WISPERING.'))
console.assert(convertCaseLower('I AM WISPERING.') === 'I AM WISPERING.')

function convertCaseUpper(value) {
    return value
}
console.log(convertCaseUpper('i am shouting!'))
console.assert(convertCaseUpper('I AM SHOUTING!') === 'I AM SHOUTING!')

function repeatWord(value) {
    return value.repeat(2)
}
console.log(repeatWord('Knock.', 2))
console.assert(repeatWord('Knock.', 2) === 'Knock.Knock.')

function sliceWord(value) {
    return value.slice(7, 12)
}
console.log(sliceWord('I love pizza!', 7, 12))
console.assert(sliceWord('I love pizza!', 7, 12) === 'pizza')

function splitWord(value, separator) {
    // value = value.split(',')
    return value.split(separator)

}
console.log(splitWord('US,CA,MX,JP,UK', ''))
console.assert(splitWord('US,CA,MX,JP,UK', ',').length === 5)


function whereIsCarmen(value, person) {
    return value.indexOf(person)

}
console.log(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen'))
console.assert(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27)

function doesItContain(value) {
    return value.includes('Museum')
}
console.log(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum'))
console.assert(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true)

// Regular Expressions
function extractZipCode(value) {
    return value.match(/\d\d\d\d\d/)[0]
}
console.log(extractZipCode('My zip code was 46240.'))
console.assert(extractZipCode('My zip code was 46240.') === '46240')

function isPhoneNumber(value) {
    return /\(\d\d\d\)\s\d\d\d-\d\d\d\d/.test(value)
}
console.log(isPhoneNumber('(888) 123-1234'))
console.assert(isPhoneNumber('(888) 123-1234') === true)

// Numbers
function stringToNumber(value) {
    value = Number(value)
    return value
}
console.log(stringToNumber('1999'))
console.assert(stringToNumber('1999') === 1999)

function incrementByOne(value) {
    value++
    return value
}
console.log(incrementByOne(0))
console.assert(incrementByOne(0) === 1)

function isDivisibleByThree(value) {
    return value === 0
}
console.log(isDivisibleByThree(9%3))
console.assert(isDivisibleByThree(9%3) === true)

function makeRandomNumber(value) {
    value = Math.round (Math.random() * 10)
    return value
}
console.log(makeRandomNumber(10))
console.assert(makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10)

function roundNumber(value) {
    value = Math.ceil(value)
    return value
}
console.log(roundNumber(5.51))
console.assert(roundNumber(5.51) === 6)

// Dates
function justAMoment() {
    // Look at moment.js docs to find how to return the day name, like Wednesday
    return moment().format('dddd')
}
console.log(justAMoment())
console.assert(justAMoment().includes('day') === true)

// Objects
function myNameIs(value) {
    return value.name= 'Sam'
}
console.log(myNameIs({name:'Your Name Here'}))
console.assert(myNameIs({name:'Your Name Here'}) === 'Sam')

// Arrays
function getFirstItem(value) {
    // value.match('Dog','Cat','Pig','Bird','Fish')[0]
    return value[0]
}
console.log(getFirstItem(['Dog','Cat','Pig','Bird','Fish']))
console.assert(getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
