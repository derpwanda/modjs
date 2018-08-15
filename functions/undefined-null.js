//undefined
let name
//name = 'Jen'
console.log(name) //will print undefined


let double = function (x) {
  if (x === undefined) {
    console.log('Please provide x') //this will print
  } else {
    console.log(x)
  }
}

double()


//undefined for function arguments
//undefined as the function return default value
let square = function (num) {
  console.log(num)
}

square()

//null as assigned value
let age = 27

age = null

console.log(age)