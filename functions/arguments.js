//multiple arguments
let add = function (x, y, z) {
  return x + y + z
}

let result = add(10, 1, 5)
console.log(result)

//default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  //return 'Name: ' + name + ' - Score: ' + score`
  return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText('A-aron', 99);
console.log(scoreText);

//Challenge Area

let getTip = function (bill, percentage = .20) {
  let finalTip = bill * percentage 
  let wholeTip = percentage * 100
  //return 'If your bill is: $' + bill + ', the tip is $' + 
   return `A ${wholeTip}% tip on a $${bill} bill is $${finalTip}.`
}

let tip = getTip(60, .20)
console.log(tip)

//template string
let name = 'Claude'
let age = 61
console.log(`Hey, my name is ${name}! I am ${age} years old.`)
