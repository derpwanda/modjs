//Variable Shadowing
//Global 
  //Local 
    //Local
  //Local

//let name = 'Wanda'  
//Leaked Global

if (true) {
//  let name = 'Ericka'

  if (true) {
    let name = 'Karine'
    console.log(name)
  }
}

if (true) {
  console.log(name)
  
}