const notes = [{
  title: 'My next trip',
  body: 'Go to Australia',
}, {
  title: 'Current Udemy Class',
  body: 'The Web Developer Bootcamp',
}, {
  title: 'Favorite Drink',
  body: 'Coffee, 1 cream, 1 Splenda',
}]

const findNote = function (notes, noteTitle) {
  const note = notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
  return note
}

/* refactored
const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })

} */


const note = findNote(notes, 'my next TRIP')
console.log(note)


// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//   console.log(note)
//   return note.title === 'Current Udemy Class'
// })

// console.log(index)

// console.log(notes.pop())// removes last item and returns it
// notes.push('My pushed note') // adds item to end of array
// console.log(notes.shift()) // removes item from the beginning of array and returns it
// notes.unshift('My unshifted note') // add item to beginning of array

//notes.splice(1, 1, 'New 2nd Item') 
/* args for splice: starting index, 
how many items to remove after given index(can be zero if adding),
what to add (if you choose to use it) */

//notes[2] = 'This is now the new note 4' // adding and swapping with brackets

// notes.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })