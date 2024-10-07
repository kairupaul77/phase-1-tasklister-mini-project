document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// Initialize empty task list
let tasks = [];
let editingTaskIndex = -1;

// Function to add or update a task
function addOrUpdateTask() {
    const description = document.getElementById('taskDescription').value;
    const priority = document.getElementById('taskPriority').value;
    const dueDate = document.getElementById('dueDate').value;
    const user = document.getElementById('taskUser').value;
    const duration = document.getElementById('taskDuration').value;

    if (description && priority && dueDate && user && duration) {
        const task = { description, priority, dueDate, user, duration, status: 'Incomplete' };
        
        if (editingTaskIndex === -1) {
            tasks.push(task);
        } else {
            tasks[editingTaskIndex] = task;
            editingTaskIndex = -1;
            document.getElementById('editCancelBtn').style.display = 'none';
        }

        renderTasks();
        clearForm();
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to clear the form after adding or editing a task
function clearForm() {
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskPriority').value = 'High';
    document.getElementById('dueDate').value = '';
    document.getElementById('taskUser').value = '';
    document.getElementById('taskDuration').value = '';
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    const sortOrder = document.getElementById('sortOrder').value;

    // Sort tasks based on priority (ascending or descending)
    tasks.sort((a, b) => {
        const priorities = { High: 1, Medium: 2, Low: 3 };
        return sortOrder === 'asc' ? priorities[a.priority] - priorities[b.priority] : priorities[b.priority] - priorities[a.priority];
    });

    // Clear the current list
    taskList.innerHTML = '';

    // Render tasks
    tasks.forEach((task, index) => {
        const taskItem = `
            <li>
                <div>
                    <strong>${task.description}</strong> (Priority: ${task.priority}, Due: ${task.dueDate}, User: ${task.user}, Duration: ${task.duration}h)
                </div>
                <div>
                    <button onclick="editTask(${index})">Edit</button>
                    <button onclick="removeTask(${index})">Remove</button>
                </div>
            </li>
        `;
        taskList.innerHTML += taskItem;
    });
}

// Function to remove a task by index
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to edit a task by index
function editTask(index) {
    const task = tasks[index];
    
    document.getElementById('taskDescription').value = task.description;
    document.getElementById('taskPriority').value = task.priority;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('taskUser').value = task.user;
    document.getElementById('taskDuration').value = task.duration;

    editingTaskIndex = index;
    document.getElementById('editCancelBtn').style.display = 'inline-block';
}

// Function to cancel editing
function cancelEdit() {
    editingTaskIndex = -1;
    clearForm();
    document.getElementById('editCancelBtn').style.display = 'none';
}