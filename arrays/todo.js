/* todos.splice(2, 1)
todos.push('Clean bathroom')
todos.shift()
// todos.splice(todos.length - 1, 1)

console.log(`There are now ${todos.length} todo items in your list.`)

todos.forEach(function (item, index) {
  const todoNum = index + 1
  console.log(`${todoNum}: ${item}`)
})

//for (let i = 0; i < todos.length; i++) //both for loop inits work!
for (let i = 0; i <= todos.length - 1; i++) {
  const listNum = i + 1
  const listItem = todos[i]
  console.log(`${listNum}. ${listItem}`)
} */
//CHALLENGE 

//1. Convert array to array of objects -> text, completed
//2. Create function to remove a todo by text value
const todos = [{
  text: 'Shop for groceries',
  completed: true,
  }, {
  text: 'Fill up on gas',
  completed: true,
  }, {
  text: 'Finish Javascript homework',
  completed: false,
  }, {
  text: 'Get a workout in',
  completed: false,
  }, {
  text: 'Buy a new dress',
  completed: true,
  }]

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })

  if (index > -1) {
    todos.splice(index, 1)
  }
}

deleteTodo(todos, '')
console.log(todos)
