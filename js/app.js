const submitButton = document.getElementById('submit-button')
const resetButton = document.getElementById('reset-button')
const userInput = document.getElementById('list-name')
const listTodo = document.getElementById('todo-list')




submitButton.addEventListener('click', addToList) 
resetButton.addEventListener('click', reset)
listTodo.addEventListener('click', removeItem)



function addToList() {
    const li = document.createElement('li')
    const inp = userInput
    
    if (inp.value === '') {
        return
    } else {
        li.textContent = inp.value
        document.querySelector('ul').appendChild(li)
        inp.value = ''
    }
}

function reset() {
    listTodo.innerHTML = ''
    userInput.value = ''
}

function removeItem(evt) {
    evt.target.remove()
}






