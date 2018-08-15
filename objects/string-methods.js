let name = ' Wanda Evans '

//length property
console.log(name.length)

//convert to UpperCase
console.log(name.toUpperCase())

//convert to LowerCase
console.log(`${name}`.toLowerCase())

//includes method
let password = 'abc123fhgh098'
console.log(password.includes('password'))

//trim
console.log(name)
console.log(name.trim())

//Challenge Area

//isValidPassword
//true if length > 8 - and doesnt contain the word password
/* let isValidPassword = function (password) {
  if (password.length > 8 && !password.includes('password')) {
    return true
  } else {
    return false
  }
} */

//refactored
let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('abc123'))
console.log(isValidPassword('abcpassword123'))
console.log(isValidPassword('abc123faoijewa'))