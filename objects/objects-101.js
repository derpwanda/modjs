let myBook = {
  title: '1984',
  author: 'George Orwell',
  pagecount: 326
}
console.log(myBook)
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(myBook)
console.log(`${myBook.title} by ${myBook.author}`)

//challenge

//name, age, location

let person = {
  name: 'Wanda',
  age: 35,
  location: 'St. Louis, Missouri'
}

console.log(`${person.name} is ${person.age}, from ${person.location}`);
person.age += 1
console.log(`${person.name} is ${person.age}, from ${person.location}`);