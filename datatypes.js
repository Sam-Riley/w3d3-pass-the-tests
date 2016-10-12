var moment = require('moment')


// ***STRING***
var word = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

// console.log(word.length)
// console.log(word.toUpperCase())
// console.log(word.toLowerCase())
//console.log(word.toUpperCase())

//word = word.toUpperCase().trim().toLowerCase()

var word = 'City of Seattle'

// word = word.repeat(2)
//word = 'Pizza is Amazing'.substr(9, 7) //second number is the spaces past the first
//word = 'Pizza is Amazing'.slice(9, 16)  //second number actually tells js where to stop
// word = word.split(',')
var indianaIndexStart = word.indexOf('Indiana')
var whatIsTheLetter = word.charAt(8)
var isItIndianapolis = word.includes('Seattle')
word = word.replace('Seattle', 'Indianapolis')
// console.log(word)

var phoneNumber = 'Phone Number 123-123-1234 555-555-8855'
var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/)
var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/gi, '[Redacted]')

// console.log(hasPhoneNumber)

// ***NUMBERS***
var number = Number('1')
number = number + (number * 50)
number++


// console.log(number)

// ***MATH***
var price = 12.01
var priceRounded = Math.round(price)
var priceRounded = Math.ceil(price) //always takes it up to the next value
var priceRounded = Math.floor(price) //always takes it down to the last value
// console.log(priceRounded)

//console.log(Math.PI)

var randomNumber = Math.round (Math.random() * 10) //random number generator
// console.log(randomNumber)

var price = 12.045
var cents = String(price).split('.')[1].substr(0, 2)
var dollars = String(price).split('.')[0]
price = dollars + '.' + cents
// console.log(price)

// console.log(Number('12.045') === 12.045)


// ***DATE***
var today = new Date()
// console.log(today)

var yesterday = moment().subtract(2400, 'seconds')
// console.log(yesterday.toString()) //converts to a string
console.log(yesterday.format('MM/DD/YYYY HH:mm:ss')) //converts to a string

// ***OBJECT***
var pizza = Object()
var pie = {
    ingredients: 'stuff',
    meat: 'pepperoni',
    cheese: 'mozzarella',
    price: 14.99,
    priceRounded: Math.round(14.99),
}
console.log(pie.priceRounded)

// ***ARRAY***
var ingredients = [
        'meat',
        'cheese',
        'sauce',
        'spices',
        'crust',
        12,
        true,
        moment().format('MM/DD/YYYY'),
        {
            sausage: 'mystery'
        }
    ]
console.log(ingredients)





//***EXTRA***
var name = String('Tom')
var name2 = 'Tom'

// console.log(name === name2)

var number = Number(1)

var boolean = Boolean(true)
