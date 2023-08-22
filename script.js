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
label.innertext = task;
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

bindIncompleteIteam(listItem, completeTask);

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
bindCompleteIteam(listItem, deleteTask);

}


//4
let deleteTask = function(){
let listItem = this.parentNode;
let ul = listitem.parentNode;
ul.removeChild(listItem);



}


//5
let bindIncompleteIteam = function(taskItem, checkBoxClick){

let checkBox = taskItem.querySelector('input[type = "checkBox"]');
checkBox.onChange = checkBoxClick;

}


//6
let bindCompleteIteam = function(taskItem, deleteClick){
let deleteButton = taskitem.querySelector('.delete');
deleteButton.onclick = bindCompleteIteam;
}


form.addEventListener('submit', addTask);
