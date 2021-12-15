// In Common JS, every file is module by default
// Modules - Encapsulated Code (Only share what is required)
const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

console.log(data)
console.log(names)
console.log(sayHi)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// When we import a module, we also invoke it
// Node wraps the module in a function and thus when we import it using require, it is invoked just like a function
// Invokation of the module is automatic and thus the function call in 7-mind-grenade is executed
require('./7-mind-grenade')
