let myBook = {
  title: '1984',
  author: 'George Orwell',
  pagecount: 326
}

let otherBook = {
  title: 'A People\'s History',
  author: 'Howard Zinn',
  pagecount: 723
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pagecount} pages long`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//challenge
//temp converte, returning both celcius and kelvin as object

let tempConvert = function (fahrenheit) {
  return {
  fahrenheit: fahrenheit,
  celsius: (fahrenheit - 32) / 1.8,
  kelvin: (fahrenheit + 459.67) * (5 / 9)
  }
}

console.log(tempConvert(32))