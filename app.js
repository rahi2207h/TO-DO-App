// Add a task to the list
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskDescription = taskInput.value;
    if (taskDescription.trim() === '') return;

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        ${taskDescription}
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

// Delete a task from the list
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
