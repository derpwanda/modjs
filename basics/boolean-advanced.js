//
let isAccountActive = true
let userRole = 'user'

//this condition will pass if isAccountActive is false
if (!isAccountActive) {
  console.log('Account is locked.')
} else if (userRole === 'admin') {
  console.log('Welcome Admin')
} else {
  console.log('Welcome')
}

//challenge area

let temp = 30

if (temp <= 32) {
  console.log('It\'s freezing outside!')
} else if (temp >= 100) {
  console.log('It\'s hot outside!')
} else {
  console.log('Go for it. It\'s pretty nice!')
}

//it is freezing outside!
//it is hot outside!
//go for it. it's pretty nice!

