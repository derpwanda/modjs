let num = 106.1982

console.log(num.toFixed(3))

console.log(Math.round(num)) //round
console.log(Math.floor(num)) // always round down
console.log(Math.ceil(num)) // always round up


let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//console.log(randomNum)

//Challenge Area

//1 - 5 - true if correct - false if not correct
let makeGuess = function (guess) {
  let min = 1
  let max = 5
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(randomNum)

  return guess === randomNum
}

console.log(makeGuess(3))