const submitButton = document.getElementById('submit-button')
const userInput = document.getElementById('list-name')
const listTodo = document.getElementById('todo-list')



submitButton.addEventListener('click', addToList) 

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






