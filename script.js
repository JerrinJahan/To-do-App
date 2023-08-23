let headerElement= document.getElementById('header');
headerElement.style.color= 'red';

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todolist = document.querySelector('#items');
let completelist = document.querySelector('.complete-list box ul');

//function
//1
let createTask = function(task) {

let listItem = document.createElement('li');
let checkBox = document.createElement('input');
let label = document.createElement('label');
label.innerText = task;
checkBox.type = 'checkBox';

listItem.appendChild(checkBox);
listItem.appendChild(label);

return listItem;
}



//2
let addTask = function(event){
event.preventDefault();

let listItem = createTask(newTask.value);
todolist.appendChild(listItem);
newTask.value = '';

bindIncompleteItem(listItem, completeTask);

}


//3
let completeTask = function(){

let listItem = this.parentNode;
let deleteButton = document.createElement('button');
deleteButton.innertext ='Delete';
deleteButton.className = 'delete';
listItem.appendChild(deleteButton);

let checkBox = document.querySelector('input [type = "checkBox"]');
checkBox.remove();
completelist.appendChild(listItem);
bindCompleteItem(listItem, deleteTask);

}


//4
let deleteTask = function(){
let listItem = this.parentNode;
let ul = listitem.parentNode;
ul.removeChild(listItem);



}


//5
let bindIncompleteItem = function(taskItem, checkBoxClick){

let checkBox = taskItem.querySelector('input[type = "checkBox"]');
checkBox.onChange = checkBoxClick;

}


//6
let bindCompleteItem = function(taskItem, deleteClick){
let deleteButton = taskitem.querySelector('.delete');
deleteButton.onclick = deleteClick;
}


form.addEventListener('submit', addTask);


//loop to delete initial values

for(let i=0; i< todolist.children.length; i++ ) {
bindIncompleteItem(todolist.children[i], completeTask);
}

for(let i=0; i< completelist.children.length; i++ ) {
    bindCompleteItem(completelist.children[i], deleteTask);
}
