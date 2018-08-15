// === - equality operator
// !== - not equal operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator

let temp = 80
let isFreezing = temp <= 32

if (temp <= 32) {
  console.log('It is freezing outside!')
}

if (temp >= 110) {
  console.log('It is way too hot outside!')
}

//challenge area

//create age variable set to my age
//calc is child - if they are 7 or under
//calc is senior - if 65 or older
//print is child value
//print is senior value

let age = 68
let isChild = age <= 7
let isSenior = age >= 65

if (isChild) {
  console.log('You qualify for a Child ticket')
} else if (isSenior) {
  console.log('You qualify for a Senior ticket')
} else {
  console.log('No discount for you!')
}