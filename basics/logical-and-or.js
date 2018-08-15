let temp = 65

//Logical And Operator - True if both sides are true. False otherwise.

if (temp >= 60 && temp <= 90) {
  console.log('It\'s pretty nice out!')
} else if (temp >= 0 || temp <= 120) {
  console.log('Do not go outside!')
} else {
  console.log('Eh, Do what you want...')
}

//challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Please create a vegan menu.') 
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Please remember vegan and non-vegan options.')
} else {
  console.log('There are no menu restrictions.')
}