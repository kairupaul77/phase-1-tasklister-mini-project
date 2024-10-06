document.addEventListener("DOMContentLoaded",() => {
const taskForm = document.getElementById("new-task-form");
const taskList = document.getElementById("task");

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDescription = document.getElementById("new-task-description").value;


        
        const listItem = document.createElement('li');
        listItem.textContent = newTask;  
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.className ="delete-button";
         
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem)
        });
    
        listItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskForm.reset();
        
    });
    
} );
