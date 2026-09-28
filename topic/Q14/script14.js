let tasks=[];

const taskInput = document.getElementById("task-input");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const clearTasks = document.getElementById("clear-task");

const savedTasks = localStorage.getItem("tasks");
console.log(savedTasks);

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    console.log(tasks);
}

addTask.addEventListener("click", function() {
const text = taskInput.value.trim();
 if(text === ""){
    return;
    
 }
  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
};
tasks.push(newTask);
localStorage.setItem("tasks",JSON.stringify(tasks))
  rendertasks();
});

function rendertasks(){
    taskList.innerHTML="";

    for(const task of tasks){

        const li=document.createElement("li");
         li.dataset.id = task.id;

        li.textContent=task.text;
        if (task.completed) {
    li.style.textDecoration = "line-through";
}

const deleteButton = document.createElement("button");

 deleteButton.textContent = "Delete";

li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
    taskCount.textContent = `Tasks: ${tasks.length}`;
}
   taskList.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        const li = event.target.parentElement;
        const id = Number(li.dataset.id);

        tasks = tasks.filter(function(task) {
        return task.id !== id;

});
localStorage.setItem("tasks", JSON.stringify(tasks));

rendertasks();

return;
    }

    

    for (const task of tasks) {

        if (task.id === id) {

            task.completed = !task.completed;

            break;
        }
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    rendertasks();

});
clearTasks.addEventListener("click", function() {

    tasks = [];

    localStorage.removeItem("tasks");

    rendertasks();
});

