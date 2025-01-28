const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add a new task
addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        newTaskInput.value = "";
    }
});

// Function to add a task to the list
function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="edit-btn" onclick="editTask(event)">Edit</button>
            <button onclick="deleteTask(event)">Delete</button>
            <button onclick="toggleCompletion(event)">Mark Completed</button>
        </div>
    `;
    taskList.appendChild(li);
}

// Delete task
function deleteTask(event) {
    const taskItem = event.target.closest('li');
    taskItem.remove();
}

// Toggle task completion
function toggleCompletion(event) {
    const taskItem = event.target.closest('li');
    taskItem.classList.toggle('completed');
}

// Edit task
function editTask(event) {
    const taskItem = event.target.closest('li');
    const taskText = taskItem.querySelector('.task-text');
    const newText = prompt("Edit your task:", taskText.textContent);

    if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText.trim();
    }
}
