//function - argument (input), code, return value (output)

//define a function
let greetUser = function () {
  console.log('Welcome user!');
}

//call/execute the function
greetUser()
greetUser()
greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let value2 = square(10)
let value3 = square(5)
console.log(value);
console.log(value2);
console.log(value3);

//challenge area

//converFahrenheitToCelsius

//call a couple times
//print converted values

let convertFahrenheitToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8
  return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)