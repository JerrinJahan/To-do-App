//to check
let headerElement= document.getElementById('header');
headerElement.style.color= 'red';

//variables declaration
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoList = document.querySelector('#items');
let completeList = document.querySelector('.complete-list ul');


// functions
let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoList.appendChild(listItem);
    newTask.value = "";
    
    bindIncompleteItems(listItem, completeTask);
}

let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeList.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindIncompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

//loop to delete initial values
for(let i=0; i< todoList.children.length; i++ ) {
 bindIncompleteItems(todoList.children[i], completeTask);
}

for(let i=0; i< completeList.children.length; i++ ) {
bindCompleteItems(completeList.children[i], deleteTask);
}

form.addEventListener('submit', addTask);